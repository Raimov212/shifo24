import { useContext, useEffect, useState } from "react";
import { KeyIcon } from "../assets/icons/loginicons/KeyIcon";
import { UserIcon } from "../assets/icons/loginicons/UserIcon";
import { ShifoImg } from "../assets/images/ShifoImg";
import { useNavigate } from "react-router-dom";
import { LoginContext } from "../context/Context";

const Login = () => {
  const navigate = useNavigate();
  const { setIsVisibleRoute, isVisibleRoute } = useContext(LoginContext);

  const [isVisiblePassword, setIsVisiblePassword] = useState(false);

  useEffect(() => {
    if (isVisibleRoute) {
      navigate("/");
    }
  }, [isVisibleRoute]);

  return (
    <div className="flex w-full ">
      <div className="flex-1 bg-primary h-screen grid place-items-center">
        <ShifoImg />
      </div>
      <div className="flex-1 grid place-items-center mt-[200px] h-full gap-10">
        <p className="text-2xl text-primary font-semibold">Tizimga kirish</p>
        <div className="flex flex-col gap-5 ">
          <div className="border-b-[1.5px] border-b-primary relative w-[450px] ">
            <input
              type="text"
              placeholder="Login"
              className="p-2 outline-none placeholder:text-primary
               bg-[#faf9fa] w-full pr-8 placeholder:opacity-50"
            />
            <div className="absolute top-1 right-0 w-icon h-icon">
              <UserIcon />
            </div>
          </div>
          {isVisiblePassword ? (
            <div className="border-b-[1.5px] border-b-primary relative w-[450px]">
              <input
                type="text"
                placeholder="Parol"
                className="p-2 outline-none placeholder:text-primary bg-[#faf9fa]
                 w-full pr-8 placeholder:opacity-50"
              />
              <div
                className="absolute top-1 right-0 w-icon h-icon cursor-pointer"
                onClick={() => setIsVisiblePassword((prev) => !prev)}
              >
                <KeyIcon />
              </div>
            </div>
          ) : (
            <div className="border-b-[1.5px] border-b-primary relative w-[450px]">
              <input
                type="password"
                placeholder="Parol"
                className="p-2 outline-none placeholder:text-primary bg-[#faf9fa]
                 w-full pr-8 placeholder:opacity-50"
              />
              <div
                className="absolute top-1 right-0 w-icon h-icon cursor-pointer"
                onClick={() => setIsVisiblePassword((prev) => !prev)}
              >
                <KeyIcon />
              </div>
            </div>
          )}
        </div>
        <button
          onClick={() => setIsVisibleRoute((prev: boolean) => !prev)}
          // onClick={() => navigate("/")}
          className="w-[450px] bg-primary text-white py-3 rounded-lg"
        >
          Kirish
        </button>
      </div>
    </div>
  );
};

export default Login;
