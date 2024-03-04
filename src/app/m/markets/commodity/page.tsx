"use client";

import { Loading } from "@/components/Loading";
import { DefaultLayout } from "@/components/layouts/DefaultLayout";
import { Tab } from "@/components/layouts/Tab";
import { Button } from "@/components/table/Button";
import { PriceCell } from "@/components/table/PriceCell";
import { Table } from "@/components/table/Table";
import { TrandingCell } from "@/components/table/TradingCell";
import { priceFeedService } from "@/services/PriceFeedService";
import { PRICE_TYPE } from "@/utils/constants";
import i18next from "i18next";
import Cookies from "js-cookie";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";

const MarketPage = () => {
  const [data, setData] = useState([]);
  const router = useRouter();

  const handleCrawlDataFeed = async () => {
    try {
      const response = await priceFeedService.getPriceFeed(
        PRICE_TYPE.COMMODITY
      );
      if (response.success) {
        const mappedData = response.data.map((item: any, index: number) => {
          return [
            <div
              key={index}
              className="cursor-pointer"
              onClick={() =>
                onSelect(item.metadata.name.split("_")[0].toUpperCase())
              }
            >
              <TrandingCell
                token={item.metadata.name.split("_")[0].toUpperCase()}
                totalValue="99.14M"
              />
            </div>,
            <div
              key={index}
              className="cursor-pointer"
              onClick={() =>
                onSelect(item.metadata.name.split("_")[0].toUpperCase())
              }
            >
              <PriceCell usdtPrice={item.value} usdPrice={item.value} />
            </div>,
            <div
              key={index}
              className="cursor-pointer"
              onClick={() =>
                onSelect(item.metadata.name.split("_")[0].toUpperCase())
              }
            >
              <Button text="+3.06%" className="bg-[#54AF71] text-white" />
            </div>,
          ];
        });
        setData(mappedData);
      }
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    handleCrawlDataFeed();
    const inteval = setInterval(handleCrawlDataFeed, 10000);

    return () => clearInterval(inteval);
  }, []);

  const onSelect = (token: string) => {
    Cookies.set(
      "crypto",
      JSON.stringify({ token, values: "USDT", type: PRICE_TYPE.COMMODITY })
    );
    router.push(`/m/trade/${token}/USDT`);
  };

  const marketTabOption = [
    {
      label: `${i18next.t("marketPage.commodity")}`,
      link: "/m/markets/commodity",
    },
    {
      label: i18next.t("marketPage.cryptoCurrency"),
      link: "/m/markets/crypto",
    },
    {
      label: i18next.t("marketPage.foreignExchange"),
      link: "/m/markets/forex",
    },
  ];
  return (
    <DefaultLayout
      pageTitle="Dashboard"
      containerStyle="bg-[#000000] dark:bg-[#000000]"
    >
      <Tab options={marketTabOption} />
      {data.length ? (
        <div className="w-full p-3">
          <Table
            columns={[
              `${i18next.t("marketPage.transaction")} / ${i18next.t("marketPage.tradingVolume")}`,
              `${i18next.t("marketPage.price")}`,
              `${i18next.t("marketPage.24HRisingDecline")}`,
            ]}
            data={data}
          />
        </div>
      ) : (
        <div className="h-screen">
          <Loading />
        </div>
      )}
    </DefaultLayout>
  );
};

export default MarketPage;
