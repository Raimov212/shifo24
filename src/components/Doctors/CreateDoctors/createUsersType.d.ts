import { Dispatch, SetStateAction } from "react";

export interface GoodsCategoryAndWhereIdType {
  [key: string]: string;
  id: string;
  name: string;
}

export type CreateUserTypeData = {
  firstName: string;
  lastName: string;
  specialty: string;
  file?: File | null;
  experience: string;
  workplace: string;
  meetingPrice: string;
  startedWork: string;
  finishWork: string;
};

export type CreateUserType = {
  setOpenCreateGoodsProps: Dispatch<SetStateAction<boolean>>;
};
