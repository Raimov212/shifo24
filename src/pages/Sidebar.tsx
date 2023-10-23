import { Logo } from "../assets/icons/Logo";
// import { DoctorsIcon } from "../assets/icons/sidebaricons/DoctorsIcon";
import { MdOutlineGroups } from "react-icons/md";
import { IoSettingsOutline } from "react-icons/io5";
import { MdOutlineGroupAdd } from "react-icons/md";
import { FaUserDoctor } from "react-icons/fa6";
import { PiUsersThreeFill } from "react-icons/pi";
import { FaNetworkWired } from "react-icons/fa";
import { NavLink } from "react-router-dom";

const Sidebar = () => {
  return (
    <div className="py-[40px] px-[20px] h-[100vh]">
      <div className="flex gap-1 mb-[80px]">
        <Logo />
        <p className="text-other text-2xl font-semibold">Shifo24</p>
      </div>
      <div className="flex flex-col justify-between">
        <div>
          <div>
            <p className="text-secondary text-[12px] pl-2 pb-[12px] font-semibold">
              AVTORIZATSIYA
            </p>
            <NavLink
              className={({ isActive }) =>
                isActive
                  ? "bg-primary  flex items-center cursor-pointer gap-2  p-3 rounded-lg mb-1 text-white"
                  : "bg-none flex items-center cursor-pointer gap-2  p-3 rounded-lg mb-1"
              }
              to={"/"}
            >
              <NavLink
                className={({ isActive }) =>
                  isActive ? "text-white text-2xl" : "text-secondary text-2xl"
                }
                to={"/"}
              >
                <MdOutlineGroups />
              </NavLink>
              <NavLink
                className={({ isActive }) =>
                  isActive
                    ? "text-[18px] text-white font-medium"
                    : "text-[18px] text-secondary font-medium"
                }
                to={"/"}
              >
                Guruhlar
              </NavLink>
            </NavLink>
            <NavLink
              className={({ isActive }) =>
                isActive
                  ? "bg-primary  flex items-center cursor-pointer gap-2  p-3 rounded-lg mb-1 text-white"
                  : "bg-none flex items-center cursor-pointer gap-2  p-3 rounded-lg mb-1"
              }
              to={"/users"}
            >
              <NavLink
                className={({ isActive }) =>
                  isActive ? "text-white text-2xl" : "text-secondary text-2xl"
                }
                to={"/users"}
              >
                <MdOutlineGroupAdd />
              </NavLink>
              <NavLink
                className={({ isActive }) =>
                  isActive
                    ? "text-[18px] text-white font-medium"
                    : "text-[18px] text-secondary font-medium"
                }
                to={"/users"}
              >
                Foydalanuvchilar
              </NavLink>
            </NavLink>
          </div>
          <div>
            <p className="text-secondary text-[12px] pl-2 pb-[12px] font-semibold">
              MENING ILOVAM
            </p>
            <NavLink
              className={({ isActive }) =>
                isActive
                  ? "bg-primary  flex items-center cursor-pointer gap-2  p-3 rounded-lg mb-1 text-white"
                  : "bg-none flex items-center cursor-pointer gap-2  p-3 rounded-lg mb-1"
              }
              to={"/doctors"}
            >
              <NavLink
                className={({ isActive }) =>
                  isActive ? "text-white text-2xl" : "text-secondary text-2xl"
                }
                to={"/doctors"}
              >
                <FaUserDoctor />
              </NavLink>
              <NavLink
                className={({ isActive }) =>
                  isActive
                    ? "text-[18px] text-white font-medium"
                    : "text-[18px] text-secondary font-medium"
                }
                to={"/doctors"}
              >
                Shifokorlar
              </NavLink>
            </NavLink>
            <NavLink
              className={({ isActive }) =>
                isActive
                  ? "bg-primary  flex items-center cursor-pointer gap-2  p-3 rounded-lg mb-1 text-white"
                  : "bg-none flex items-center cursor-pointer gap-2  p-3 rounded-lg mb-1"
              }
              to={"/specialist"}
            >
              <NavLink
                className={({ isActive }) =>
                  isActive ? "text-white text-2xl" : "text-secondary text-2xl"
                }
                to={"/specialist"}
              >
                <PiUsersThreeFill />
              </NavLink>
              <NavLink
                className={({ isActive }) =>
                  isActive
                    ? "text-[18px] text-white font-medium"
                    : "text-[18px] text-secondary font-medium"
                }
                to={"/specialist"}
              >
                Mutaxassisliklar
              </NavLink>
            </NavLink>
            <NavLink
              className={({ isActive }) =>
                isActive
                  ? "bg-primary  flex items-center cursor-pointer gap-2  p-3 rounded-lg mb-1 text-white"
                  : "bg-none flex items-center cursor-pointer gap-2  p-3 rounded-lg mb-1"
              }
              to={"/workplace"}
            >
              <NavLink
                className={({ isActive }) =>
                  isActive ? "text-white text-2xl" : "text-secondary text-2xl"
                }
                to={"/workplace"}
              >
                <FaNetworkWired />
              </NavLink>
              <NavLink
                className={({ isActive }) =>
                  isActive
                    ? "text-[18px] text-white font-medium"
                    : "text-[18px] text-secondary font-medium"
                }
                to={"/workplace"}
              >
                Ish joylari
              </NavLink>
            </NavLink>
          </div>
        </div>

        <NavLink
          className={({ isActive }) =>
            isActive
              ? "bg-primary flex items-center cursor-pointer gap-2 mt-32  p-3 rounded-lg mb-1"
              : "flex items-center cursor-pointer gap-2 mt-32 border-[1px] border-primary p-3 rounded-lg mb-1"
          }
          to={"/settings"}
        >
          <NavLink
            className={({ isActive }) =>
              isActive ? "text-white text-2xl" : "text-secondary text-2xl"
            }
            to={"/settings"}
          >
            <IoSettingsOutline />
          </NavLink>
          <NavLink
            className={({ isActive }) =>
              isActive
                ? "text-[18px] text-white font-medium"
                : "text-[18px] text-secondary font-medium"
            }
            to={"/settings"}
          >
            Sozlamalar
          </NavLink>
        </NavLink>
      </div>
    </div>
  );
};

export default Sidebar;
