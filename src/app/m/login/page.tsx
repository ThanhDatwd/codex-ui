/* eslint-disable @next/next/no-img-element */
"use client";
import { BackIcon } from "@/assets/icons/BackIcon";
import LoginWithEmail from "@/components/Login/LoginWithEmail";
import LoginWithPhoneNumber from "@/components/Login/LoginWithPhoneNumber";
import LoginWithUserName from "@/components/Login/LoginWithUserName";
import { Logo } from "@/components/Logo";
import Tabs from "@/components/Tabs";
import { DefaultLayout } from "@/components/layouts/DefaultLayout";
import { OptionsLanguage, getStaticURL } from "@/utils/constants";
import i18next from "i18next";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useEffect, useRef, useState } from "react";

const LoginPage = () => {
  const router = useRouter();
  const [currentLang, setCurrentLang] = useState(
    OptionsLanguage.find((lang) => lang.value === i18next.language)
  );
  const [activeTab, setActiveTab] = useState(1);
  const [tabPosition, setTabPosition] = useState({ left: 0, width: 0 });
  const tabRefs = useRef<(HTMLButtonElement | null)[]>([]);

  useEffect(() => {
    const tab = tabRefs.current[activeTab - 1];
    if (tab) {
      const { offsetLeft, offsetWidth } = tab;
      setTabPosition({ left: offsetLeft, width: offsetWidth });
    }
  }, [activeTab]);
  const tabs = [
    {
      name: `${i18next.t("authenticationPage.email")}`,
      content: (
        <>
          <LoginWithEmail />
        </>
      ),
    },
    {
      name: `${i18next.t("authenticationPage.phoneNumber")}`,
      content: (
        <>
          <LoginWithPhoneNumber />
        </>
      ),
    },
    {
      name: `${i18next.t("authenticationPage.username")}`,
      content: (
        <>
          <LoginWithUserName />
        </>
      ),
    },
  ];
  const [value, setValue] = useState("1");

  const handleChange = (event: React.SyntheticEvent, newValue: string) => {
    setValue(newValue);
  };

  return (
    <DefaultLayout containerStyle={""} isShowMenubar={false}>
      <div className="min-h-screen overflow-auto bg-[#000000]">
        <div className="sticky top-0 left-0 w-full px-6 py-6  flex items-center justify-between gap-2 bg-[#000000]">
          <div className="cursor-pointer" onClick={() => router.back()}>
            <BackIcon />
          </div>
          <Link href={"/m/signup"}>
            <span className="text-[#3D5AFE]">{i18next.t("authenticationPage.register")}</span>
          </Link>
        </div>
        <div className="p-4">
          <h4 className="text-[32px] text-[#fff]">{i18next.t("authenticationPage.loginTitle")}</h4>
          <Tabs tabs={tabs} />
          <div className="flex  flex-col items-center justify-center mt-2">
            <Logo />
            <Link
              href={"/m/setting/locale"}
              className="flex items-center gap-2 cursor-pointer p-1 mt-3 rounded hover:bg-[#19181d]"
            >
              <img
                className="w-[20px]"
                src={`${getStaticURL()}${currentLang?.flag}`}
                alt=""
              />
              <span className="text-[14px] text-white">
                {currentLang?.label}
              </span>
            </Link>
          </div>
        </div>
      </div>
    </DefaultLayout>
  );
};

export default LoginPage;
