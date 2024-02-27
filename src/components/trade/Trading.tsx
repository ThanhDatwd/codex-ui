/* eslint-disable @next/next/no-img-element */
"use client";
import { BackIcon } from "@/assets/icons/BackIcon";
import {
  Button,
  InputAdornment,
  OutlinedInput,
  Slider,
  styled,
} from "@mui/material";
import i18next from "i18next";
import { useRouter } from "next/navigation";
import React from "react";
import { InputCustom } from "../InputCustom";
import { TradingChartBar } from "./TradingChartBar";

const CssSlider = styled(Slider)({
  "& .MuiSlider-mark": {
    width: "14px",
    height: "14px",
    border: "3px solid #888888",
    borderRadius: "40px",
    background: "#000000",
    transform: "translate(-50%, -50%)",
  },
  "& .MuiSlider-mark.MuiSlider-markActive": {
    borderColor: "#3D5AFE",
  },
  "& .MuiSlider-rail": {
    backgroundColor: "#888888",
  },
  "& .MuiSlider-track": {
    border: "1px solid #3D5AFE",
    background: "#3D5AFE",
  },
});
const marks = [
  { value: 0 },
  { value: 20 },
  { value: 40 },
  { value: 60 },
  { value: 80 },
  { value: 100 },
];
function valueLabelFormat(value: number) {
  return `${value}%`;
}

const Trading = () => {
  const router = useRouter();
  return (
    <div>
      <div className="py-3 px-4">
        <div>
          <img className="w-10 h-10" src="" alt="" />
          <span className="text-[#fff] ml-1">SILVER/USDT</span>
          <span className="text-[#fff] bg-[#55AF7233] px-2 py-1 rounded ml-1">
            +0.44%
          </span>
        </div>
      </div>
      <div className="grid grid-cols-12 p-4">
        <div className="col-span-7">
          <div className="flex gap-1 pb-3 overflow-auto">
            {/*  */}
            <div className="flex flex-col items-center rounded-lg bg-[#1c1c1e] border border-[#3D5AFE] ">
              <span className="text-[12px] text-[#fff]">
                {" "}
                {i18next.t("tradePage.trade.profit")}
              </span>
              <h6 className="text-[20px] font-bold mx-2 my-0 text-[#fff]">
                10%
              </h6>
              <div className="text-[14px] w-full text-center bg-[#3D5AFE] rounded-b-lg text-[#fff]">
                1 {i18next.t("tradePage.trade.minute")}
              </div>
            </div>
            {/*  */}
            {/*  */}
            <div className="flex flex-col items-center rounded-lg bg-[#1c1c1e] border border-[#3D5AFE] ">
              <span className="text-[12px] text-[#fff]">
                {i18next.t("tradePage.trade.profit")}
              </span>
              <h6 className="text-[20px] font-bold mx-2 my-0 text-[#fff]">
                20%
              </h6>
              <div className="text-[14px] w-full text-center bg-[#3D5AFE] rounded-b-lg text-[#fff]">
                1 {i18next.t("tradePage.trade.minute")}
              </div>
            </div>
            {/*  */}
            {/*  */}
            <div className="flex flex-col items-center rounded-lg bg-[#1c1c1e] border border-[#3D5AFE] ">
              <span className="text-[12px] text-[#fff]">
                {i18next.t("tradePage.trade.profit")}
              </span>
              <h6 className="text-[20px] font-bold mx-2 my-0 text-[#fff]">
                30%
              </h6>
              <div className="text-[14px] w-full text-center bg-[#3D5AFE] rounded-b-lg text-[#fff]">
                1 {i18next.t("tradePage.trade.minute")}
              </div>
            </div>
            {/*  */}
            {/*  */}
            <div className="flex flex-col items-center rounded-lg bg-[#1c1c1e] border border-[#3D5AFE] ">
              <span className="text-[12px] text-[#fff]">
                {i18next.t("tradePage.trade.profit")}
              </span>
              <h6 className="text-[20px] font-bold mx-2 my-0 text-[#fff]">
                50%
              </h6>
              <div className="text-[14px] w-full text-center bg-[#3D5AFE] rounded-b-lg text-[#fff]">
                1 {i18next.t("tradePage.trade.minute")}
              </div>
            </div>
            {/*  */}
            {/*  */}
            <div className="flex flex-col items-center rounded-lg bg-[#1c1c1e] border border-[#3D5AFE] ">
              <span className="text-[12px] text-[#fff]">
                {i18next.t("tradePage.trade.profit")}
              </span>
              <h6 className="text-[20px] font-bold mx-2 my-0 text-[#fff]">
                80%
              </h6>
              <div className="text-[14px] w-full text-center bg-[#3D5AFE] rounded-b-lg text-[#fff]">
                1 {i18next.t("tradePage.trade.minute")}
              </div>
            </div>
            {/*  */}
            {/*  */}
            <div className="flex flex-col items-center rounded-lg bg-[#1c1c1e] border border-[#3D5AFE] ">
              <span className="text-[12px] text-[#fff]">
                {i18next.t("tradePage.trade.profit")}
              </span>
              <h6 className="text-[20px] font-bold mx-2 my-0 text-[#fff]">
                100%
              </h6>
              <div className="text-[14px] w-full text-center bg-[#3D5AFE] rounded-b-lg text-[#fff]">
                1 {i18next.t("tradePage.trade.minute")}
              </div>
            </div>
            {/*  */}
          </div>
          <div className="flex items-center justify-between mt-2">
            <span className="text-[12px] text-[#888888]">
              {i18next.t("tradePage.trade.balance")}
            </span>
            <span className="text-[12px] text-[#fff]">0.00 USDT</span>
          </div>
          <div className="px-3 mt-2 ">
            <CssSlider
              defaultValue={0}
              valueLabelDisplay="auto"
              step={5}
              marks={marks}
              min={0}
              max={100}
              valueLabelFormat={valueLabelFormat}
            />
          </div>

          <div className=" mt-2 flex flex-col">
            <div className="bg-[#1D1C22]">
              {" "}
              <InputCustom
                size="small"
                className="w-full"
                InputProps={{
                  endAdornment: (
                    <InputAdornment position="end">USDT</InputAdornment>
                  ),
                }}
                aria-describedby="outlined-weight-helper-text"
              />
            </div>
            <span className="text-[#fff] mt-2">≈0.00 AED</span>
          </div>
          <Button
            sx={{ padding: 0, marginTop: "8px", textTransform: "none" }}
            className="p-0 w-full overflow-hidden mt-2 normal-case"
            variant="contained"
          >
            <div className="w-full bg-[#55af72] py-[6px] px-4 ">
              {i18next.t("tradePage.long")}
            </div>
          </Button>
          <Button
            sx={{ padding: 0, marginTop: "8px", textTransform: "none" }}
            className="p-0 w-full overflow-hidden mt-2 normal-case"
            variant="contained"
          >
            <div className="w-full bg-[#dd5350] py-[6px] px-4 ">
              {i18next.t("tradePage.short")}
            </div>
          </Button>
        </div>
        <div className="col-span-5 ml-4">
          <TradingChartBar />
        </div>
      </div>
    </div>
  );
};
export default Trading;
