/* eslint-disable @next/next/no-img-element */
"use client";
import { BackIcon } from "@/assets/icons/BackIcon";
import { CheckIcon } from "@/assets/icons/CheckIcon";
import { OptionsLanguage, getStaticURL } from "@/utils/constants";
import {
  Button,
  FormControl,
  InputAdornment,
  InputLabel,
  MenuItem,
  Select,
  TextField,
  styled,
} from "@mui/material";
import i18next, { changeLanguage } from "i18next";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
import "../../../../../../i18n";
import { InputCustom } from "@/components/InputCustom";
import { ArrowRightIcon } from "@/assets/icons/ArrowRightIcon";
import SelectCountries from "@/components/SelectCountries";
import { FormControlCustom } from "@/components/FormControlCustom";

const CreatePaymentPage = () => {
  const [currentLang, setLangCurrentLang] = useState(i18next.language);
  const [isOpen, setIsOpen] = useState(false);
  const [currentCountry, setCurrentCountry] = useState<any>();
  const router = useRouter();
  const validationSchema = Yup.object({
    userName: Yup.string().required(
      i18next.t("authenticationPage.userNameIsInvalid")
    ),
    type: Yup.string().required(
      i18next.t("authenticationPage.userNameIsInvalid")
    ),
    country: Yup.string().required(
      i18next.t("authenticationPage.userNameIsInvalid")
    ),
    bank: Yup.string().required(
      i18next.t("authenticationPage.userNameIsInvalid")
    ),
    accountBank: Yup.string().required(
      i18next.t("authenticationPage.userNameIsInvalid")
    ),
    realName: Yup.string().required(
      i18next.t("authenticationPage.userNameIsInvalid")
    ),
    comment: Yup.string().required(
      i18next.t("authenticationPage.userNameIsInvalid")
    ),
    address: Yup.string().required(
      i18next.t("authenticationPage.userNameIsInvalid")
    ),
    cardId: Yup.string().required(
      i18next.t("authenticationPage.userNameIsInvalid")
    ),
    phoneNumber: Yup.string().required(
      i18next.t("authenticationPage.userNameIsInvalid")
    ),
  });
  const formik = useFormik({
    initialValues: {
      type: "",
      country: "",
      bank: "",
      accountBank: "",
      realName: "",
      comment: "",
      address: "",
      cardId: "",
      phoneNumber: "",
    },
    validationSchema: validationSchema,
    onSubmit: async (values) => {
      console.log(values);
    },
  });
  return (
    <>
      <div className="min-h-screen overflow-auto bg-[#000000]">
        <div className="sticky z-20 top-0 left-0 w-full px-4 py-4  bg-[#100F14] flex items-center gap-2">
          <div className="cursor-pointer" onClick={() => router.back()}>
            <BackIcon />
          </div>
          <span className="text-[#fff]">{i18next.t("withdrawAccount.withdrawAccountBtn")}</span>
        </div>
        <div className="flex flex-col p-4">
          <div className="p-4 my-2 flex items-center justify-center">
            <img
              className="w-[200px] h-[200px]"
              src={`/assets/images/create-account-withdraw.svg`}
              alt=""
            />
          </div>
          <form
            onSubmit={formik.handleSubmit}
            className="flex flex-col gap-4"
            autoComplete="off"
          >
            <div className="bg-[#1D1C22]">
              {/* KIỂU */}
              <FormControlCustom fullWidth>
                <InputLabel id="select-method">{i18next.t("withdrawAccount.type")}</InputLabel>
                <Select
                  labelId="select-method"
                  id="demo-simple-select"
                  value={formik.values.type}
                  label="Kiểu"
                  onChange={(e) => formik.setFieldValue("type", e.target.value)}
                  MenuProps={{
                    PaperProps: {
                      style: {
                        backgroundColor: "#1B1B1D",
                        color: "#fff",
                      },
                    },
                  }}
                >
                  <MenuItem value={10}>{i18next.t("withdrawAccount.fiatCurrency")}</MenuItem>
                  <MenuItem value={20}>{i18next.t("withdrawAccount.cryptocurrency")}</MenuItem>
                </Select>
              </FormControlCustom>
            </div>
            {/* QUỐC GIA */}
            <div className="bg-[#1D1C22]">
              <InputCustom
                label={i18next.t("withdrawAccount.country")}
                placeholder={i18next.t("withdrawAccount.clickToSelectCountry")}
                className="w-full"
                name="country"
                value={formik.values.country}
                InputProps={{
                  endAdornment: (
                    <InputAdornment position="end">
                      <ArrowRightIcon />
                    </InputAdornment>
                  ),
                }}
                aria-describedby="outlined-weight-helper-text"
                onClick={() => setIsOpen(true)}
              />
            </div>
            {/* NGÂN HÀNG */}
            <div className="bg-[#1D1C22]">
              <InputCustom
                error={formik.touched.bank && formik.errors.bank ? true : false}
                className=" bg-transparent w-full text-[16px]"
                label={i18next.t("withdrawAccount.bank")}
                name="bank"
                autoComplete="new-email"
                value={formik.values.bank}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                placeholder={i18next.t("withdrawAccount.placeholderBank")}
              />
              {formik.touched.bank && formik.errors.bank ? (
                <div className="text-[#FF4444] text-[14px] px-4 py-1">
                  {formik.errors.bank}
                </div>
              ) : null}
            </div>
            {/* TÀI KHOẢN NGÂN HÀNG */}
            <div className="bg-[#1D1C22]">
              <InputCustom
                error={
                  formik.touched.accountBank && formik.errors.accountBank
                    ? true
                    : false
                }
                className=" bg-transparent w-full text-[16px]"
                label={i18next.t("withdrawAccount.bankAccount")}
                name="accountBank"
                autoComplete="new-email"
                value={formik.values.accountBank}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
              />
              {formik.touched.accountBank && formik.errors.accountBank ? (
                <div className="text-[#FF4444] text-[14px] px-4 py-1">
                  {formik.errors.accountBank}
                </div>
              ) : null}
            </div>
            {/* TÊN THỰC TẾ */}
            <div className="bg-[#1D1C22]">
              <InputCustom
                error={
                  formik.touched.realName && formik.errors.realName
                    ? true
                    : false
                }
                className=" bg-transparent w-full text-[16px]"
                label={i18next.t("withdrawAccount.realName")}
                name="realName"
                autoComplete="new-real-name"
                value={formik.values.realName}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                placeholder={i18next.t("withdrawAccount.placeholderRealName")}
              />
              {formik.touched.realName && formik.errors.realName ? (
                <div className="text-[#FF4444] text-[14px] px-4 py-1">
                  {formik.errors.realName}
                </div>
              ) : null}
            </div>
            {/* ĐỊA CHỈ LIÊN HỆ */}
            <div className="bg-[#1D1C22]">
              <InputCustom
                error={
                  formik.touched.address && formik.errors.address ? true : false
                }
                className="text-[#fff] bg-transparent w-full text-[16px]"
                label={i18next.t("withdrawAccount.contactAddress")}
                name="address"
                type="text"
                value={formik.values.address}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                placeholder={i18next.t("withdrawAccount.placeholderContactAddress")}
              />
              {formik.touched.address && formik.errors.address ? (
                <div className="text-[#FF4444]  text-[14px] px-4 py-1">
                  {formik.errors.address}
                </div>
              ) : null}
            </div>
            {/* SỐ LIÊN LẠC */}
            <div className="bg-[#1D1C22]">
              <InputCustom
                error={
                  formik.touched.phoneNumber && formik.errors.phoneNumber
                    ? true
                    : false
                }
                className="text-[#fff] bg-transparent w-full text-[16px]"
                label={i18next.t("withdrawAccount.contactPhone")}
                name="phoneNumber"
                type="text"
                value={formik.values.phoneNumber}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
              />
              {formik.touched.phoneNumber && formik.errors.phoneNumber ? (
                <div className="text-[#FF4444]  text-[14px] px-4 py-1">
                  {formik.errors.phoneNumber}
                </div>
              ) : null}
            </div>
            {/* THẺ ID */}
            <div className="bg-[#1D1C22]">
              <InputCustom
                error={
                  formik.touched.cardId && formik.errors.cardId ? true : false
                }
                className="text-[#fff] bg-transparent w-full text-[16px]"
                label={i18next.t("withdrawAccount.idNumber")}
                name="cardId"
                type="text"
                value={formik.values.cardId}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
              />
              {formik.touched.cardId && formik.errors.cardId ? (
                <div className="text-[#FF4444]  text-[14px] px-4 py-1">
                  {formik.errors.cardId}
                </div>
              ) : null}
            </div>
            {/* COMMNENT */}
            <div className="bg-[#1D1C22]">
              <InputCustom
                className=" bg-transparent w-full text-[16px]"
                label={i18next.t("withdrawAccount.remark")}
                name="comment"
                autoComplete="new-email"
                value={formik.values.comment}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                placeholder={i18next.t("withdrawAccount.placeholderRemark")}
              />
            </div>
            <Button
              type="submit"
              style={{ background: "#3D5AFE" }}
              className="mt-6 flex items-center justify-center text-[16px] text-[#fff] font-bold rounded bg-[#3D5AFE] hover:bg-[#2a3eb1]"
            >
              {i18next.t("withdrawAccount.confirm")}
            </Button>
          </form>
        </div>
      </div>
      {isOpen && (
        <div className="fixed z-20 top-0 left-0 w-full h-full overflow-auto">
          <SelectCountries
            onBack={() => setIsOpen(false)}
            onChange={(value) => {
              setCurrentCountry(value);
              formik.setFieldValue("country",value.label)
              setIsOpen(false);
            }}
          />
        </div>
      )}
    </>
  );
};
export default CreatePaymentPage;
