/* eslint-disable react-refresh/only-export-components */
import { useState, useCallback, memo } from "react";
import { FilterProps } from "./filterType";

const UsersFilter: React.FC<FilterProps> = memo(
  ({ filterData, setSearchArrItemCategory, setSearchText }): JSX.Element => {
    const [filterInput, setFilterInput] = useState({
      status: "",
      role: "",
      active: "",
    });

    console.log("filterData", filterData);

    const handleInputChange = useCallback(
      (e: React.ChangeEvent<HTMLInputElement>) => {
        setFilterInput({ ...filterInput, [e.target.name]: e.target.value });
        setSearchArrItemCategory([e.target.name]);
        setSearchText(e.target.value);
      },
      [filterInput, setSearchArrItemCategory, setSearchText]
    );

    return (
      <>
        <div className="flex gap-5">
          <input
            type="text"
            role="status"
            className="outline-none border-[1px] border-primary rounded-lg p-2 visible focus:border-secondary"
            placeholder="Xodimlar maqomi bo'yicha"
            value={filterInput.status}
            autoComplete="on"
            list="categoryId"
            onChange={handleInputChange}
          />
          <datalist id="categoryId">
            {filterData?.categoryFilter?.map((item, index) => (
              <option key={index}>{item}</option>
            ))}
          </datalist>
          <input
            type="text"
            role="role"
            className="outline-none border-[1px] border-primary rounded-lg p-2 w-[350px] visible focus:border-secondary"
            placeholder="Superfoydalanuvchi holati bo'yicha"
            value={filterInput.role}
            autoComplete="on"
            list="nameId"
            onChange={handleInputChange}
          />
          <datalist id="nameId">
            {filterData?.nameFilter?.map((item, index) => (
              <option key={index}>{item}</option>
            ))}
          </datalist>
          <input
            type="text"
            role="active"
            className="outline-none border-[1px] border-primary rounded-lg p-2 w-[200px] visible focus:border-secondary"
            placeholder="Faol tomonidan"
            value={filterInput.active}
            autoComplete="on"
            list="activeId"
            onChange={handleInputChange}
          />
          <datalist id="activeId">
            {filterData?.activeFilter?.map((item, index) => (
              <option key={index}>{item}</option>
            ))}
          </datalist>
        </div>
      </>
    );
  }
);

export default UsersFilter;
