/* eslint-disable @typescript-eslint/no-unused-vars */
// import { useAppSelector } from "../hook";
// import { CreateUser } from "../assets/icons/TableIcon";
import React, { useState } from "react";
import GoodsItem from "../components/Users/Items";
import { allDataUsers } from "../components/Users/mock";
import "../components/Users/Users.css";

// import { FilterIcon } from "../assets/icons/filter";
import UsersFilter from "../components/Users/FilterUsers/Filter";
import { AllData, UserProps } from "../components/Users/users";
import CreateUsers from "../components/Users/CreateUsers/createUsers";
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

const UsersPage = () => {
  const [searchText, setSearchText] = useState<string>("");
  const [openFilter, setOpenFilter] = useState<boolean>(false);
  const [openCreateUsers, setOpenCreateUsers] = useState<boolean>(false);
  const [searchArrItemCategory, setSearchArrItemCategory] =
    useState<string[]>();

  const users = allDataUsers as unknown as AllData[];

  // const allData = useAppSelector((state) => state.users.users[0]);
  // const users = allData as unknown as AllData[];

  const filterData: UserProps = {
    statusFilter: [...new Set(users?.map((n) => n.status))],
    roleFilter: [...new Set(users?.map((n) => n.role))],
    activeFilter: [...new Set(users?.map((n) => n.active))],
  };

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
        <p className="text-primary text-[32px] font-semibold">
          Foydalanuvchilar
        </p>
        <div
          onClick={handleCreateUsers}
          className="bg-primary flex cursor-pointer items-center pl-[32px] pr-[14px] py-[12px] rounded-lg"
        >
          <p>Foydalanuvchi qo’shish</p>
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
      <div>
        <UsersFilter
          filterData={filterData}
          setSearchArrItemCategory={setSearchArrItemCategory}
          setSearchText={setSearchText}
        />
        <div className="modalScrollBar">
          {openCreateUsers && (
            <CreateUsers setOpenCreateGoodsProps={setOpenCreateUsers} />
          )}
        </div>
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

export default UsersPage;
