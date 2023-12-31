import { FC, ImgHTMLAttributes } from "react";

export const SearchSvg: FC<ImgHTMLAttributes<HTMLImageElement>> = () => {
  return (
    <svg
      width="24"
      height="25"
      viewBox="0 0 24 25"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M18.031 17.1168L22.3137 21.3995L20.8995 22.8137L16.6168 18.531C15.0769 19.763 13.124 20.5 11 20.5C6.032 20.5 2 16.468 2 11.5C2 6.532 6.032 2.5 11 2.5C15.968 2.5 20 6.532 20 11.5C20 13.624 19.263 15.5769 18.031 17.1168ZM16.0247 16.3748C17.2475 15.1146 18 13.3956 18 11.5C18 7.6325 14.8675 4.5 11 4.5C7.1325 4.5 4 7.6325 4 11.5C4 15.3675 7.1325 18.5 11 18.5C12.8956 18.5 14.6146 17.7475 15.8748 16.5247L16.0247 16.3748Z"
        fill="#9E9E9E"
      />
    </svg>
  );
};
