import { Dispatch, SetStateAction } from "react";

export interface GoodsCategoryAndWhereIdType {
  [key: string]: string;
  id: string;
  name: string;
}

export type CreateUserTypeData = {
  userName: string;
  userPassword: string;
  userPasswordConfirm: string;
};

export type CreateUserType = {
  setOpenCreateGoodsProps: Dispatch<SetStateAction<boolean>>;
};
