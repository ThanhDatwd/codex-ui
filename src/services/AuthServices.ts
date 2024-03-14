import { AxiosInstance } from "axios";
import Cookies from "js-cookie";
import { onToast } from "@/hooks/useToast";
import restConnector from "@/connectors/axiosRestConnector";
import { Account } from "@/models/User";
import { LOGIN_MODE } from "@/utils/constants";

const AUTHORIZATION_HEADER = "Authorization";
export const ACCESS_TOKEN = "jwt";

export class AuthService {
  private jwt: string | null;
  private restConnector: AxiosInstance;

  constructor(options: { restConnector: AxiosInstance }) {
    this.jwt = null;
    this.restConnector = options.restConnector;
    this.loadAccessToken();
  }

  public async signupEmail(values: {
    email: string;
    username: string;
    password: string;
  }): Promise<any> {
    const { data } = await restConnector.post("/auth/register", {
      email: values.email,
      username: values.username,
      password: values.password,
    });

    if (data.success) {
      this.setAccessToken(data.data.access_token);
    }
    return data;
  }
  public async signupWithPhoneNumber(values: {
    phoneNumber: string;
    username: string;
    password: string;
  }): Promise<any> {
    const { data } = await restConnector.post("/auth/register", {
      phoneNumber: values.phoneNumber,
      username: values.username,
      password: values.password,
    });

    if (data.success) {
      this.setAccessToken(data.data.access_token);
    }
    return data;
  }
  
  public async login(values: {
    email?:string;
    phoneNumber?:string;
    username?: string;
    password: string;
    mode:LOGIN_MODE
  }): Promise<any> {
    const { data } = await restConnector.post("/auth/login", {
      email:values.email,
      phoneNumber:values.phoneNumber,
      username: values.username,
      password: values.password,
      mode: values.mode,
    });

    if (data.success) {
      this.setAccessToken(data.data.access_token);
      return data.data;
    }
    onToast(data.data.message, "error");
    return null;
  }
  public async fetchCurrentUser() {
    // if (!this.jwt) {
    //   return null;
    // }
    try {
      const { data } = await restConnector.get("/auth/whoami");
      if (data.success) {
        return data.data;
      }
      this.setAccessToken(null);
      return null;
    } catch (error) {}
  }

  logout() {
    localStorage.removeItem(ACCESS_TOKEN);
  }
  public async changePassword(values: {
    oldPassword: string;
    newPassword: string;
  }) {
    const { data } = await this.restConnector.put("/auth-auth/password", {
      oldPassword: values.oldPassword,
      newPassword: values.newPassword,
    });
    return data;
  }

  public async forgotPassword(email: string, token: string) {
    console.log("🚀 ~ file: api.ts:24 ~ getSessionToken ~ token", token);
    const { data } = await restConnector.post(`/auth/forgot-password`, {
      email,
    });
    return data;
  }
  public async getOneTimeToken(integrationId: number) {
    const { data } = await restConnector.post("/auth-auth/one-time-code", {
      integrationId,
    });
    return data;
  }

  public async resetPassword(password: string, token: string) {
    const { data } = await restConnector.post(`/auth-auth/reset-password`, {
      password,
      token,
    });
    return data;
  }

  setAccessToken(token: any) {
    if (typeof window !== "undefined") {
      localStorage.setItem(ACCESS_TOKEN, token);
    }
  }

  loadAccessToken() {
    // On browser, load access token from local storage.
    if (typeof window !== "undefined") {
      const accessToken = localStorage.getItem(ACCESS_TOKEN);

      if (accessToken) {
        restConnector.defaults.headers[AUTHORIZATION_HEADER] =
          `Bearer ${accessToken}`;
      }
      return accessToken;
    }
  }
}

export const authService = new AuthService({ restConnector });
