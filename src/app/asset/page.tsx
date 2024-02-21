"use client";

import { HideIcon } from "@/assets/icons/HideIcon";
import { ShowIcon } from "@/assets/icons/ShowIcon";
import { AccountItem } from "@/components/AccountItem";
import { AssetItem } from "@/components/AssetItem";
import { DefaultLayout } from "@/components/layouts/DefaultLayout";
import {
  ACCOUNT_LIST,
  ASSET_LIST,
  getStaticURL
} from "@/utils/constants";
import i18next from "i18next";
import Image from "next/image";
import Link from "next/link";
import { useRef, useState } from "react";

export type OptionProps = {
  label: string;
  value: string;
};

const AssetPage = () => {
  const [isShow, setIsShow] = useState(true);
  const ref = useRef(null);

  return (
    <DefaultLayout
      pageTitle="Dashboard"
      containerStyle="bg-[#000000] dark:bg-[#000000]"
    >
      <div className="flex flex-col gap-4 text-white p-4">
        <div>
          <h2 className="text-xl text-white">{i18next.t("assetPage.myAssets")}</h2>
          <div className="flex flex-col gap-2">
            <div className="p-4 bg-[#1c1c1e] rounded">
              <span className="text-sm text-[#888]">{i18next.t("assetPage.totalAssets")}</span>
              <div className="flex items-center gap-3 mt-2 mb-1">
                <span className="text-white text-[32px]">
                  {isShow ? "0.00" : "*****"}
                </span>
                <span className="self-end text-white text-base">USDT</span>
                <button onClick={() => setIsShow(!isShow)}>
                  {isShow ? <ShowIcon /> : <HideIcon />}
                </button>
              </div>
              <div className="relative inline-block text-right">
                <Link href={"setting/currency"} className="text-[#888] text-base">
                  ≈ 0.00 USD
                  <svg
                    className="-mr-1 h-5 w-5"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                    aria-hidden="true"
                  >
                    <path
                      fillRule="evenodd"
                      d="M5.23 7.21a.75.75 0 011.06.02L10 11.168l3.71-3.938a.75.75 0 111.08 1.04l-4.25 4.5a.75.75 0 01-1.08 0l-4.25-4.5a.75.75 0 01.02-1.06z"
                      clipRule="evenodd"
                    />
                  </svg>
                </Link>
              </div>
              <div className="text-base text-white pt-2">
              {i18next.t("assetPage.TodayProfitability")}: &nbsp;
                <span className="text-[#55af72]">0.00 (0%)</span>&nbsp; USDT
              </div>
              <Image
                src={`${getStaticURL()}/assets/images/line_image.svg`}
                alt="Line"
                height={100}
                width={100}
                className="w-full h-full"
              />
            </div>
            <div className="flex gap-2">
              {ASSET_LIST.map((item, index) => (
                <AssetItem
                  key={index}
                  label={i18next.t(`assetPage.${item.label}`)}
                  url={item.link}
                  pathIcon={item.path}
                  widthIcon={item.width}
                  heightIcon={item.height}
                  viewBox={item.viewBox}
                />
              ))}
            </div>
          </div>
        </div>
        <div>
          <h3 className="text-base text-white">{i18next.t("assetPage.myAccount")}</h3>
          <div>
            {ACCOUNT_LIST.map((item, index) => (
              <AccountItem
                key={index}
                label={i18next.t(`assetPage.${item.label}`)}
                amount={item.amount}
              />
            ))}
          </div>
        </div>
      </div>
    </DefaultLayout>
  );
};

export default AssetPage;
