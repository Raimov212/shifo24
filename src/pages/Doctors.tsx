/* eslint-disable @typescript-eslint/no-unused-vars */
// import { useAppSelector } from "../hook";
// import { CreateUser } from "../assets/icons/TableIcon";
import React, { useState } from "react";
import GoodsItem from "../components/Doctors/Items";
import { allDataUsers } from "../components/Doctors/mock";
import "../components/Doctors/Doctors.css";

// import { FilterIcon } from "../assets/icons/filter";
import { AllData, UserProps } from "../components/Doctors/users";
import CreateUsers from "../components/Doctors/CreateDoctors/createDoctors";
import { FaPlus } from "react-icons/fa6";
// import { toast } from "react-toastify";
// import { t } from "i18next";

// export const ToastSuccess = () => {
//   return (
//     <>
//       {toast.success(t("goods.createGoodsSuccess"), {
//         position: toast.POSITION.TOP_RIGHT,
//         className: "foo-bar",
//       })}
//     </>
//   );
// };

const DoctorsPage = () => {
  const [searchText, setSearchText] = useState<string>("");
  const [openFilter, setOpenFilter] = useState<boolean>(false);
  const [openCreateUsers, setOpenCreateUsers] = useState<boolean>(false);
  const [searchArrItemCategory, setSearchArrItemCategory] =
    useState<string[]>();

  const users = allDataUsers as unknown as AllData[];

  // const allData = useAppSelector((state) => state.users.users[0]);
  // const users = allData as unknown as AllData[];

  function search(rows: AllData[]) {
    return rows.filter((row: AllData) =>
      searchArrItemCategory?.some((item) => {
        if (row[item] !== null) {
          return (
            row[item]
              ?.toString()
              .toLowerCase()
              .indexOf(searchText.toLowerCase()) > -1
          );
        }
      })
    );
  }

  // const handleFilter = (_: React.MouseEvent<HTMLDivElement>) => {
  //   if (openCreateUsers) {
  //     setOpenCreateUsers(!openCreateUsers);
  //   }
  //   setOpenFilter(!openFilter);
  // };

  const handleCreateUsers = (_: React.MouseEvent<HTMLDivElement>) => {
    if (openFilter) {
      setOpenFilter(!openFilter);
    }
    setOpenCreateUsers(!openCreateUsers);
  };

  return (
    <div className="px-4 py-8 flex flex-col gap-5">
      <div className="flex items-center justify-between text-white">
        <p className="text-primary text-[32px] font-semibold">Shifokorlar</p>
        <div
          onClick={handleCreateUsers}
          className="bg-primary flex cursor-pointer items-center pl-[32px] pr-[14px] py-[12px] rounded-lg"
        >
          <p>Shifokorlarni qo’shish</p>
          <div className="text-xl pl-2">
            <FaPlus />
          </div>
        </div>
      </div>
      {openCreateUsers && (
        <div
          className="fixed top-0 left-0 w-full h-full bg-black opacity-60"
          onClick={() => setOpenCreateUsers(false)}
        ></div>
      )}
      <div className="modalScrollBar">
        {openCreateUsers && (
          <CreateUsers setOpenCreateGoodsProps={setOpenCreateUsers} />
        )}
      </div>
      <div>
        <GoodsItem
          data={searchText !== "" ? search(users) : users}
          itemsPerPage={0}
        />
      </div>
    </div>
  );
};

export default DoctorsPage;
