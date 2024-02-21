import { ArrowRightIcon } from "@/assets/icons/ArrowRightIcon";
import { DisplayCurrencyIcon } from "@/assets/icons/DisplayCurrencyIcon";
import { LanguageSymbolIcon } from "@/assets/icons/LanguageSymbolIcon";
import { MultiArrowIcon } from "@/assets/icons/MultiArrowIcon";
import { TooltipIcon } from "@/assets/icons/TooltipIcon";
import { ProfileItem } from "./ProfileItem";
import i18next from "i18next";

export const PublicProfile = () => {
  return (
    <div className="bg-[#1C1C1E] mt-2 rounded-sm">
      <ProfileItem
        icon={<LanguageSymbolIcon />}
        filedName={i18next.t("profilePage.language")}
        value={"English"}
        rightIcon={<ArrowRightIcon />}
      />
      <ProfileItem
        icon={<MultiArrowIcon />}
        filedName={i18next.t("profilePage.colorsOfUpsAndDowns")}
        value={"Green rise and red"}
        rightIcon={<ArrowRightIcon />}
      />
      <ProfileItem
        icon={<DisplayCurrencyIcon />}
        filedName={i18next.t("profilePage.displayCurrency")}
        value={"USD"}
        rightIcon={<ArrowRightIcon />}
      />
      <ProfileItem
        icon={<TooltipIcon />}
        filedName={i18next.t("profilePage.aboutUs")}
        rightIcon={<ArrowRightIcon />}
      />
    </div>
  );
};
