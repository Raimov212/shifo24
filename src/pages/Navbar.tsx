import { SearchSvg } from "../assets/icons/SearchSvg";
import User from "../assets/images/userimg.png";

const Navbar = () => {
  return (
    <div className="bg-white py-[16px] px-[30px] flex justify-between">
      <div className="text-secondary border-[1px] border-primary relative p-2 py-3 w-[450px] rounded-[10px] flex">
        <SearchSvg />
        <input
          type="text"
          placeholder="Qidirish"
          className="text-primary text-[18px] pl-2 w-full outline-none"
        />
      </div>
      <div className="  flex">
        <div className="w-[48px] h-[48px] bg-violet-400  rounded-full">
          <img src={User} alt="user" />
        </div>
        <div className="ml-2">
          <p className="text-[18px] font-semibold">Jasco Developer</p>
          <p className="text-secondary text-[14px]">Admin</p>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
