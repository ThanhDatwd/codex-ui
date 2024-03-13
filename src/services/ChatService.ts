import restConnector from "@/connectors/axiosRestConnector";

class ChatService {
  async getChat() {
    const { data } = await restConnector.get(`/chats`);
    return data;
  }

  async getListMessage(chatRoomId: string, position?: string) {
    const { data } = await restConnector.get(`/chats/${chatRoomId}/messages`, {
      params: {
        position,
      },
    });
    return data;
  }

  async readMessages(chatRoomId: string) {
    const { data } = await restConnector.post(
      `/chats/${chatRoomId}/messages/read`
    );
    return data;
  }

  async sendMessage(chatRoomId?: string, payload?: any) {
    const { data } = await restConnector.post(
      `/chats/${chatRoomId}/messages`,
      payload
    );
    return data;
  }
}

export const chatService = new ChatService();
