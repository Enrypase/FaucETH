"use client";

import { useState } from "react";

const Hacker = ({ pfp, name, address, pools }) => {
  return (
    <div className="w-full h-full flex gap-2">
      <div className="relative">
        <div className="w-[55px] h-[55px] rounded-xl bg-white" />
      </div>
      <div className="grid gap-2">
        <h3 className="font-bold">{name}</h3>
        <h3>{address}</h3>
      </div>
      <div className="absolute bottom-0 right-0">
        <h3>{pools} 🎱</h3>
      </div>
    </div>
  );
};

const Pool = () => {
  const isOwner = true;
  const [selectedCat, setSelectedCat] = useState(0);
  return (
    <div className="flex justify-center">
      <div className="flex flex-col items-center gap-10 w-[90%] max-w-[1024px]">
        <div className="flex gap-5 border-b-[1px] border-solid border-white">
          <button
            className={`${
              selectedCat === 0 ? "border-b-2" : "border-b-0"
            } border-solid border-white`}
            onClick={() => setSelectedCat(0)}
          >
            <h3>1. add whitelist</h3>
          </button>
          <button
            className={`${
              selectedCat === 1 ? "border-b-2" : "border-b-0"
            } border-solid border-white`}
            onClick={() => setSelectedCat(1)}
          >
            <h3>2. add funds</h3>
          </button>
          <button
            className={`${
              selectedCat === 2 ? "border-b-2" : "border-b-0"
            } border-solid border-white`}
            onClick={() => setSelectedCat(2)}
          >
            <h3>3. delete pool</h3>
          </button>
        </div>
        {selectedCat === 0 ? (
          <div className="grid grid-template-cols-3">
            <Hacker name="Tab" address={"0x...asd"} pools={2} />
          </div>
        ) : selectedCat === 1 ? (
          <div>
            <h2>Contract address: 0x...</h2>
          </div>
        ) : (
          <div>
            <h2>Delete contract: 0x...</h2>
          </div>
        )}
      </div>
    </div>
  );
};
export default Pool;
