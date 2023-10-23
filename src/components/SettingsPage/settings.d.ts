import { Dispatch, SetStateAction } from "react";

export type SettingsTypeData = {
  oldPassword: string;
  newPassword: string;
  confirmNewPasswordConfirm: string;
};

export type SettingsType = {
  setOpenCreateGoodsProps: Dispatch<SetStateAction<boolean>>;
};
