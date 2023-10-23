import { useNavigate } from "react-router-dom";
import SettingsPage from "../components/SettingsPage/Settings";
import { IoExitOutline } from "react-icons/io5";

const Settings = () => {
  const navigate = useNavigate();

  return (
    <div className="px-4 py-8 flex flex-col gap-5 ">
      <div className="flex items-center justify-between text-white">
        <p className="text-primary text-[32px] font-semibold">Sozlamalar</p>
        <a
          href="/login"
          className="bg-primary flex cursor-pointer items-center px-4 pl-[20px] pr-[14px] py-[12px] rounded-lg"
        >
          <p>Chiqish</p>
          <div className="text-[22px] pl-2">
            <IoExitOutline />
          </div>
        </a>
      </div>
      <SettingsPage />
    </div>
  );
};

export default Settings;
