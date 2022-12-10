import React from "react";
import data from "./data";
import Header from "./Header";
import Card from "./Card";

export default function App() {
  const cards = data.map((item) => {
    return <Card key={item.id} item={item} />;
  });
  return (
    <div className="absolute top-0 left-0 right-0 bottom-0 m-auto w-[550px] h-[704px] border-2 border-[#F55A5A] rounded-xl bg-white">
      <Header />
      <div className="flex flex-col gap-9 mt-9">{cards}</div>
    </div>
  );
}
