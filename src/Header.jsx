import React from "react";

export default function Header() {
  return (
    <div className="w-full h-[55px] flex justify-center items-center bg-[#F55A5A] text-white gap-[7px] rounded-t-lg">
      <i className="fa-solid fa-earth-americas text-2xl"></i>
      <h3 className="text-sm font-medium leading-[18px]">my travel journal</h3>
    </div>
  );
}
