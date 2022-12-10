import React from "react";

export default function Card(props) {
  return (
    <div className="flex gap-[19px] px-[40px]">
      <img
        src={props.item.imageUrl}
        alt="mount fuji"
        className="w-[125px] h-[168px] object-cover rounded-[5px]"
      ></img>
      <div className="flex flex-col justify-center">
        <div className="flex items-center">
          <i className="fa-solid fa-location-dot text-[#F55A5A] text-sm mr-1"></i>
          <h3 className="text-[#2B283A] text-xs uppercase mr-3">
            {props.item.location}
          </h3>
          <a
            className="text-xs font-normal leading-3 text-[#918E9B] underline"
            target="_blank"
            href={props.item.googleMapsUrl}
          >
            View on Google Maps
          </a>
        </div>
        <h1 className="text-[#2B283A] text-[25px] font-bold leading-[30px]">
          {props.item.title}
        </h1>
        <h4 className="text-[#2B283A] text-xs font-bold leading-3 mt-4 mb-[9px]">
          {props.item.startDate} - {props.item.endDate}
        </h4>
        <p className="text-xs text-[#2B283A] leading-[15px]">
          {props.item.description}
        </p>
      </div>
    </div>
  );
}
