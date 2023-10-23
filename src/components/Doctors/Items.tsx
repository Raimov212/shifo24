import usePagination from "./Pagination";
import {
  OneLeftAngle,
  OneRightAngle,
  TwoLeftAngle,
  TwoRightAngle,
} from "../../assets/icons1/paginationIcon";
import { AllData, Data } from "./users";
// import { useTranslation } from "react-i18next";
import { ChangeEvent } from "react";

const DoctorsItem: React.FC<Data> = ({ data }): JSX.Element => {
  const itemsPerPage: number = 5;
  const jumpArr: number[] = [];

  // const { t } = useTranslation();

  // const count: number = Math.ceil(data.length / itemsPerPage);
  const _DATA = usePagination({ data, itemsPerPage });

  const newData: AllData[] = _DATA?.currentData();
  const currentPaged = _DATA.currentPage;

  if (data.length < 100) {
    for (let i = currentPaged; i < currentPaged + 1; i++) {
      jumpArr.push(i);
    }
  } else {
    for (let i = currentPaged; i < currentPaged + 10; i++) {
      jumpArr.push(i);
    }
  }

  const handleChange = (p: number) => {
    return jumpArr[0] !== 1 && jumpArr[0] === p
      ? _DATA.jump(currentPaged - 10)
      : _DATA.jump(p);
  };

  const handleAllCheckbox = (e: ChangeEvent<HTMLInputElement>) => {
    if (e.target.checked) {
      return;
    }
  };

  const handlePrev = (e: React.MouseEvent<HTMLDivElement, MouseEvent>) =>
    _DATA.prev(e);

  const handleNext = (e: React.MouseEvent<HTMLDivElement, MouseEvent>) =>
    _DATA.next(e);

  const handleFirstPage = (e: React.MouseEvent<HTMLDivElement>) =>
    _DATA.firstPage(e);

  const handleLastPage = (e: React.MouseEvent<HTMLDivElement>) =>
    _DATA.lastPage(e);

  return (
    <div className="h-full w-full">
      <table>
        <thead>
          <tr className="text-secondary font-light ">
            <th className="flex mt-5 justify-center">
              <input type="checkbox" />
            </th>
            <th>Foydalanuvchi nomi</th>
            <th>Elektron pochta manzili</th>
            <th>Ism</th>
            <th>Familiya</th>
            <th>Xodimlarning holati</th>
          </tr>
        </thead>
        <tbody>
          {newData?.map((item) => (
            <tr key={item.id}>
              <td className="flex mt-5 justify-center">
                <input
                  type="checkbox"
                  value={item.active}
                  onChange={(e) => handleAllCheckbox(e)}
                />
              </td>
              {/* <td>
                {(currentPaged === 1 ? currentPaged : currentPaged * 10) +
                  index}
              </td> */}
              <td>{item.role}</td>
              <td>{item.email}</td>
              <td>{item.firstName}</td>
              <td>{item.lastName}</td>
              <td className="">
                <p
                  className={`${
                    item.active
                      ? "text-[#00D655] bg-green-200 w-[133px] h-[37px] flex items-center justify-center  rounded-[10px] "
                      : "text-[#FF3737] bg-red-200 w-[133px] h-[37px] flex items-center justify-center rounded-[10px]"
                  }`}
                >
                  {item.active ? "Ish jarayonida" : "Ishda emas"}
                </p>
              </td>
              <td>
                <div className="flex items-center justify-center">
                  <p className="cursor-pointer">...</p>
                </div>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      <div className="flex justify-between p-2">
        <div>
          <div className="text-primary flex items-center gap-1">
            <div className="font-normal">Barcha foydalanuvchilar:</div>
            <div className="font-medium">{data.length}</div>
          </div>
        </div>
        <div className="flex gap-2 h-full max-w-96 items-center">
          <div onClick={(e) => handleFirstPage(e)} className="cursor-pointer">
            <TwoLeftAngle />
          </div>
          <div onClick={(e) => handlePrev(e)} className="cursor-pointer">
            <OneLeftAngle />
          </div>
          <ul className="flex flex-wrap  gap-2">
            {jumpArr?.map((page) => (
              <li
                key={page}
                className="cursor-pointer"
                onClick={() => handleChange(page)}
              >
                {page}
              </li>
            ))}
          </ul>
          <div onClick={(e) => handleNext(e)} className="cursor-pointer">
            <OneRightAngle />
          </div>
          <div onClick={(e) => handleLastPage(e)} className="cursor-pointer">
            <TwoRightAngle />
          </div>
        </div>
      </div>
    </div>
  );
};

export default DoctorsItem;
