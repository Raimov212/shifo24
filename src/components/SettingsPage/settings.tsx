/* eslint-disable no-dupe-else-if */
import { useState, useCallback } from "react";
// import { getGoodsApi } from "../../../api/goodsApi";
// import { useAppSelector } from "../../../hook";
// import { t } from "i18next";
import { SettingsTypeData } from "./settings";
import { ToastContainer, toast } from "react-toastify";
// import { AxiosResponse } from "axios";
import "../../components/Users/Users.css";
import { useNavigate } from "react-router-dom";

const Settings = (): JSX.Element => {
  const [createUserInput, setCreateUserInput] = useState<SettingsTypeData>({
    oldPassword: "",
    newPassword: "",
    confirmNewPasswordConfirm: "",
  });

  const handleInputChange = useCallback(
    (e: React.ChangeEvent<HTMLInputElement>) => {
      setCreateUserInput({
        ...createUserInput,
        [e.target.name]: e.target.value,
      });
    },
    [createUserInput]
  );

  const createUserForm = (e: { preventDefault: () => void }) => {
    e.preventDefault();
    const resolveWithSomeData = new Promise((resolve, reject) => {
      setTimeout(() => {
        if (createUserInput.oldPassword === "") {
          reject("Foydalanuvchi nomi kiritilmagan");
        } else if (createUserInput.newPassword === "") {
          reject("Foydalanuvchi paroli kiritilmagan");
        } else if (createUserInput.confirmNewPasswordConfirm === "") {
          reject("Tekshiruv paroli kiritilmagan");
        } else if (
          createUserInput.confirmNewPasswordConfirm !==
          createUserInput.newPassword
        ) {
          reject("Tekshiruv paroli xato");
        } else {
          resolve("Foydalanuvchi Paroli o'zgartirildi");
        }
      }, 3000);
    });
    toast.promise(resolveWithSomeData, {
      pending: {
        render() {
          return "Malumot Yuklanyapti";
        },
        icon: false,
      },
      success: {
        render({ data }) {
          return `${data}`;
        },
      },
      error: {
        render({ data }) {
          // When the promise reject, data will contains the error
          return `${data}`;
        },
      },
    });

    return console.log(createUserInput);
  };

  const navigate = useNavigate();

  return (
    <div
      className=" bg-white w-[100vh] h-[80vh] 
     overflow-hidden z-10 rounded-xl py-[12px] px-[40px] flex flex-col gap-4 "
    >
      <div className="text-2xl font-semibold text-primary ">
        Parolni o'zgartirish
      </div>
      <form onSubmit={createUserForm} className="flex flex-col gap-4 ">
        <div className="flex flex-col gap-2 ">
          <div className="text-primary text-lg font-semibold">Eski parol:</div>
          <input
            type="text"
            name="oldPassword"
            className="outline-none border-[1px] border-primary rounded-lg p-2 visible focus:border-secondary w-full"
            placeholder="Eski parol"
            value={createUserInput.oldPassword}
            autoComplete="on"
            onChange={handleInputChange}
          />
          <div className="text-secondary text-[14px]">
            Iltimos, xavfsizlik uchun eski parolingizni kiriting, so'ngra uni
            to'g'ri kiritganingizni tekshirishimiz uchun yangi parolingizni ikki
            marta kiriting.
          </div>
        </div>
        <div className="flex flex-col gap-2">
          <div className="text-primary text-lg font-semibold">Yangi parol:</div>
          <input
            type="text"
            name="newPassword"
            className="outline-none border-[1px] border-primary rounded-lg p-2 visible focus:border-secondary w-full"
            placeholder="Yangi parol"
            value={createUserInput.newPassword}
            autoComplete="on"
            onChange={handleInputChange}
          />
          <ul className="text-secondary text-[14px]">
            <li>
              * Sizning parolingiz boshqa shaxsiy ma'lumotlaringizga juda
              o'xshash bo'lishi mumkin emas.
            </li>
            <li>* Parolingiz kamida 8 ta belgidan iborat boʻlishi kerak.</li>
            <li>
              * Sizning parolingiz tez-tez ishlatiladigan parol bo'lishi mumkin
              emas.
            </li>
            <li>* Parolingiz butunlay raqamli bo'lishi mumkin emas.</li>
          </ul>
        </div>
        <div className="flex flex-col gap-2">
          <div className="text-primary text-lg font-semibold">
            Yangi parolni tasdiqlash:
          </div>
          <input
            type="text"
            name="confirmNewPasswordConfirm"
            className="outline-none border-[1px] border-primary rounded-lg p-2 visible focus:border-secondary w-full"
            placeholder="Yangi parolni tasdiqlash"
            value={createUserInput.confirmNewPasswordConfirm}
            autoComplete="on"
            onChange={handleInputChange}
          />
        </div>
        <button
          type="submit"
          className="rounded-lg py-2 px-11 bg-primary text-white w-[300px] h-auto ml-auto"
        >
          Parolni o’zgartirish
        </button>
      </form>
      <ToastContainer />
    </div>
  );
};

export default Settings;
