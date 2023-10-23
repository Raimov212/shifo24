import { UserProps } from "../users";
import { Dispatch, SetStateAction } from "react";

export type FilterProps = {
  filterData: UserProps;
  setSearchArrItemCategory: Dispatch<SetStateAction<string[] | undefined>>;
  setSearchText: Dispatch<SetStateAction<string>>;
};
