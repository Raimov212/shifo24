/* eslint-disable no-dupe-else-if */
import { useState, useCallback, useEffect, ChangeEvent } from "react";
import { CreateUserType, CreateUserTypeData } from "./createUsersType";
// import { getGoodsApi } from "../../../api/goodsApi";
// import { useAppSelector } from "../../../hook";
// import { t } from "i18next";
import { ToastContainer, toast } from "react-toastify";
import { HiPlusSm } from "react-icons/hi";
// import { AxiosResponse } from "axios";
import "../Doctors.css";

const CreateDoctors: React.FC<CreateUserType> = ({
  setOpenCreateGoodsProps,
}): JSX.Element => {
  const [fileSelected, setFileSelected] = useState<File | null>(null);
  const [createUserInput, setCreateUserInput] = useState<CreateUserTypeData>({
    firstName: "",
    lastName: "",
    specialty: "",
    experience: "",
    workplace: "",
    file: null,
    meetingPrice: "",
    startedWork: "",
    finishWork: "",
  });

  const handleInputChange = useCallback(
    (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
      setCreateUserInput({
        ...createUserInput,
        [e.target.name]: e.target.value,
      });
    },
    [createUserInput]
  );

  const handleFileChange = (e: ChangeEvent<HTMLInputElement>) => {
    if (e.target.files) {
      setFileSelected(e.target.files[0]);
    }
  };

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

    console.log("fileSelected", fileSelected);
    const resolveWithSomeData = new Promise((resolve, reject) => {
      setTimeout(() => {
        if (createUserInput.firstName === "") {
          reject("Foydalanuvchi nomi kiritilmagan");
        } else if (createUserInput.lastName === "") {
          reject("Foydalanuvchi paroli kiritilmagan");
        } else if (createUserInput.specialty === "") {
          reject("Tekshiruv paroli kiritilmagan");
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
          return `${data}`;
        },
      },
    });

    const formData = new FormData();
    if (fileSelected) {
      formData.append("file", fileSelected);
    }

    return console.log(createUserInput);
  };

  return (
    <div
      className="fixed left-[25%] top-[10%] bg-white w-[100vh] h-[80vh] overflow-y-scroll
     overflow-hidden z-10 rounded-xl py-[32px] px-[40px] flex flex-col gap-4 "
    >
      <div className="text-2xl font-semibold text-primary ">
        Doktor qo'shing
      </div>
      <form onSubmit={createUserForm} className="flex flex-col gap-4 ">
        <div className="flex flex-col gap-2 ">
          <div className="text-primary text-base font-semibold">Ism:</div>
          <input
            type="text"
            name="firstName"
            className="outline-none border-[1px] border-primary rounded-lg p-2 visible focus:border-secondary w-full"
            placeholder="Ism"
            value={createUserInput.firstName}
            autoComplete="on"
            onChange={handleInputChange}
          />
        </div>
        <div className="flex flex-col gap-2">
          <div className="text-primary text-base font-semibold">Familiya:</div>
          <input
            type="text"
            name="lastName"
            className="outline-none border-[1px] border-primary rounded-lg p-2 visible focus:border-secondary w-full"
            placeholder="Familiya"
            value={createUserInput.lastName}
            autoComplete="on"
            onChange={handleInputChange}
          />
        </div>
        <div className="flex flex-col gap-2">
          <div className="text-primary text-base font-semibold">
            Mutaxassisliklar:
          </div>
          <input
            type="text"
            name="specialty"
            className="outline-none border-[1px] border-primary rounded-lg p-2 visible focus:border-secondary w-full"
            placeholder="Parolni tasdiqlash"
            value={createUserInput.specialty}
            autoComplete="on"
            onChange={handleInputChange}
          />
        </div>
        <div className="inputFileBox bg-[#D0EDF9]">
          <label htmlFor="inputFile" className="cursor-pointer">
            <div className="text-[#7A7A7A]  font-semibold h-full flex items-center">
              <div className="text-4xl ">
                {fileSelected?.name ? "" : <HiPlusSm />}
              </div>
              <div className="font-normal">
                {fileSelected?.name ?? "Rasm yuklash"}
              </div>
            </div>
            <input
              id="inputFile"
              type="file"
              name="userPasswordConfirm"
              className="outline-none border-[1px] border-primary rounded-lg p-2 visible focus:border-secondary w-full"
              placeholder="Parolni tasdiqlash"
              autoComplete="on"
              onChange={handleFileChange}
            />
          </label>
        </div>
        <div className="flex flex-col gap-2">
          <div className="text-primary text-base font-semibold">
            Ish tajribasi:
          </div>
          <textarea
            name="experience"
            className="outline-none border-[1px] border-primary h-[7rem] rounded-lg p-2 visible focus:border-secondary w-full"
            placeholder="Ish tajribasi"
            value={createUserInput.experience}
            autoComplete="on"
            onChange={handleInputChange}
          />
        </div>
        <div className="flex flex-col gap-2">
          <div className="text-primary text-base font-semibold">Ish joyi:</div>
          <input
            type="text"
            name="workplace"
            className="outline-none border-[1px] border-primary rounded-lg p-2 visible focus:border-secondary w-full"
            placeholder="Ish joyi"
            value={createUserInput.workplace}
            autoComplete="on"
            onChange={handleInputChange}
          />
        </div>
        <div className="flex flex-col gap-2">
          <div className="text-primary text-base font-semibold">
            Uchrashuv narxi:
          </div>
          <input
            type="text"
            name="meetingPrice"
            className="outline-none border-[1px] border-primary rounded-lg p-2 visible focus:border-secondary w-full"
            placeholder="Uchrashuv narxi"
            value={createUserInput.meetingPrice}
            autoComplete="on"
            onChange={handleInputChange}
          />
        </div>
        <div className="flex flex-col gap-2">
          <div className="text-primary text-base font-semibold">
            Ishlashni boshlang:
          </div>
          <input
            type="text"
            name="startedWork"
            className="outline-none border-[1px] border-primary rounded-lg p-2 visible focus:border-secondary w-full"
            placeholder="Ishni boshlash"
            value={createUserInput.startedWork}
            autoComplete="on"
            onChange={handleInputChange}
          />
        </div>
        <div className="flex flex-col gap-2">
          <div className="text-primary text-base font-semibold">
            Ishni tugatish:
          </div>
          <input
            type="text"
            name="finishWork"
            className="outline-none border-[1px] border-primary rounded-lg p-2 visible focus:border-secondary w-full"
            placeholder="Ishni tugatish"
            value={createUserInput.finishWork}
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
};

export default CreateDoctors;
