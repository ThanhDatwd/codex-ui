/* eslint-disable @next/next/no-img-element */
import { getStaticURL } from "@/utils/constants";
import i18next from "i18next";
import img from "next/image";

interface ILearnArticle {
  bannerUrl: string;
  title: string;
  content: string;
}

export const LearnArticle = ({ bannerUrl, title, content }: ILearnArticle) => {
  return (
    <div className="bg-[#1c1c1e] rounded">
      <img
        src={`${getStaticURL()}${bannerUrl}`}
        alt={title}
        className="w-full"
      />
      <div className="flex flex-col gap-2 p-4">
        <h2 className="text-xl text-white">{title}</h2>
        <span className="text-sm text-[#888] whitespace-nowrap text-ellipsis overflow-hidden">
          {content}
        </span>
      </div>
    </div>
  );
};
