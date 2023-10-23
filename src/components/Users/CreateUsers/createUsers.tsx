// /* eslint-disable no-dupe-else-if */
import { useState, useCallback, useEffect, memo } from "react";
import { CreateUserType, CreateUserTypeData } from "./createUsersType";
// import { getGoodsApi } from "../../../api/goodsApi";
// import { useAppSelector } from "../../../hook";
// import { t } from "i18next";
import { ToastContainer, toast } from "react-toastify";
// import { AxiosResponse } from "axios";
import "../Users.css";

const CreateUsers: React.FC<CreateUserType> = memo(
  ({ setOpenCreateGoodsProps }): JSX.Element => {
    const [createUserInput, setCreateUserInput] = useState<CreateUserTypeData>({
      userName: "",
      userPassword: "",
      userPasswordConfirm: "",
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

    useEffect(() => {
      const handleKeydown = (event: { key: string | undefined }) => {
        if (event.key == undefined) {
          return;
        } else if (event.key === "Escape") {
          setOpenCreateGoodsProps((prev) => !prev);
        } else {
          return;
        }
      };

      window.addEventListener("keydown", handleKeydown);
      return () => {
        window.removeEventListener("keydown", handleKeydown);
      };
    }, [setOpenCreateGoodsProps]);

    const createUserForm = (e: { preventDefault: () => void }) => {
      e.preventDefault();
      const resolveWithSomeData = new Promise((resolve, reject) => {
        setTimeout(() => {
          if (createUserInput.userName === "") {
            reject("Foydalanuvchi nomi kiritilmagan");
          } else if (createUserInput.userPassword === "") {
            reject("Foydalanuvchi paroli kiritilmagan");
          } else if (createUserInput.userPasswordConfirm === "") {
            reject("Tekshiruv paroli kiritilmagan");
          } else if (
            createUserInput.userPasswordConfirm !== createUserInput.userPassword
          ) {
            reject("Tekshiruv paroli xato");
          } else {
            resolve("Foydalanuvchi Ro'yhatdan o'tkazildi");
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

    return (
      <div
        className="fixed left-[25%] top-[10%] bg-white w-[100vh] h-[80vh] overflow-y-scroll
     overflow-hidden z-10 rounded-xl py-[32px] px-[40px] flex flex-col gap-4 "
      >
        <div className="text-2xl font-semibold text-primary ">
          Foydalanuvchi nomi
        </div>
        <div className="text-base font-medium text-primary ">
          Birinchidan, foydalanuvchi nomi va parolni kiriting. Keyin, siz boshqa
          foydalanuvchi parametrlarini tahrirlashingiz mumkin bo'ladi
        </div>
        <form onSubmit={createUserForm} className="flex flex-col gap-4 ">
          <div className="flex flex-col gap-2 ">
            <div className="text-primary text-lg font-semibold">
              Foydalanuvchi nomi:
            </div>
            <input
              type="text"
              name="userName"
              className="outline-none border-[1px] border-primary rounded-lg p-2 visible focus:border-secondary w-full"
              placeholder="Foydalanuvchi nomi"
              value={createUserInput.userName}
              autoComplete="on"
              onChange={handleInputChange}
            />
            <div className="text-secondary text-[14px]">
              Majburiy. 150 yoki undan kam belgi. Faqat harflar, raqamlar va
              @/./+/-/_.
            </div>
          </div>
          <div className="flex flex-col gap-2">
            <div className="text-primary text-lg font-semibold">Parol:</div>
            <input
              type="text"
              name="userPassword"
              className="outline-none border-[1px] border-primary rounded-lg p-2 visible focus:border-secondary w-full"
              placeholder="Parol"
              value={createUserInput.userPassword}
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
                * Sizning parolingiz tez-tez ishlatiladigan parol bo'lishi
                mumkin emas.
              </li>
              <li>* Parolingiz butunlay raqamli bo'lishi mumkin emas.</li>
            </ul>
          </div>
          <div className="flex flex-col gap-2">
            <div className="text-primary text-lg font-semibold">
              Parolni tasdiqlash:
            </div>
            <input
              type="text"
              name="userPasswordConfirm"
              className="outline-none border-[1px] border-primary rounded-lg p-2 visible focus:border-secondary w-full"
              placeholder="Parolni tasdiqlash"
              value={createUserInput.userPasswordConfirm}
              autoComplete="on"
              onChange={handleInputChange}
            />
          </div>
          <button
            type="submit"
            className="rounded-lg py-2 px-11 ml-52 bg-primary text-white w-[200px] h-auto"
          >
            Saqlash
          </button>
        </form>
        <ToastContainer />
      </div>
    );
  }
);

export default CreateUsers;
