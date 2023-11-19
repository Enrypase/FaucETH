"use client";

import { FullSection } from "@/components/common/Sections";
import Link from "next/link";
import { useState } from "react";
const PickTheChains = ({ name }) => {
  const activeChains = [
    {
      name: "Ethereum",
      chainName: "SEPOLIA",
    },
  ];
  const [selectedCat, setSelectedCat] = useState(0);
  const addEvent = (chain) => {
    console.log(chain, name);
  };
  return (
    <div className="flex justify-center gap-5">
      <div className="flex flex-col items-center gap-10 w-[90%] max-w-[1024px]">
        <h1 className="pb-5 border-b-2 border-solid border-white text-center">
          🎣 PICK THE CHAINS
        </h1>
        <div className="flex justify-center gap-5">
          <button
            className={`px-4 py-1 rounded-full border-2 border-solid ${
              selectedCat === 0 ? "border-white" : "border-gray-500"
            }`}
            onClick={() => setSelectedCat(0)}
          >
            <h3>ALL (1)</h3>
          </button>
          <button
            className={`px-4 py-1 rounded-full border-2 border-solid ${
              selectedCat === 1 ? "border-white" : "border-gray-500"
            }`}
            onClick={() => setSelectedCat(1)}
          >
            <h3>ADDED (0)</h3>
          </button>
        </div>
        {activeChains.map((el, i) => (
          <FullSection
            left={""}
            right={
              <button onClick={() => addEvent("sepolia")}>
                <h3 className="border-2 border-solid border-white py-1 px-4 rounded-xl">
                  Add
                </h3>
              </button>
            }
            key={`chain_${i}`}
            firstLine={el.name}
            secondLine={el.chainName}
          />
        ))}
      </div>
    </div>
  );
};

const NewEvent = () => {
  const [namePopup, setNamePopup] = useState(false);
  const [name, setName] = useState("");
  const [next, setNext] = useState(false);
  const arr = [{ name: "ETH GLOBAL ISTANBUL", permission: "owner" }];
  return (
    <div className="flex justify-center">
      <div className="flex flex-col items-center gap-10 w-[90%] max-w-[1024px]">
        {next ? (
          <PickTheChains name={name} />
        ) : (
          <>
            <h1 className="pb-5 border-b-2 border-solid border-white text-center">
              🎩🐇✨CREATE NEW EVENT
            </h1>
            <FullSection
              left="🗺️"
              right="📌"
              firstLine={"WHERE"}
              secondLine={"add a city"}
            />
            <FullSection
              left="📅"
              right="⏰"
              firstLine={"WHEN"}
              secondLine={"add a date"}
            />
            <button className="w-full" onClick={() => setNamePopup(true)}>
              <FullSection
                left="📰"
                right="📚"
                firstLine={"INFO"}
                secondLine={"add info & links"}
              />
            </button>
            <button
              onClick={() => setNext(true)}
              className="py-1 px-4 border-2 border-solid border-white rounded-full w-min"
            >
              <h2>NEXT</h2>
            </button>
          </>
        )}
      </div>
      {namePopup && (
        <form
          onSubmit={(e) => {
            e.preventDefault();
            setNamePopup(false);
          }}
          className="flex flex-col gap-2 justify-center items-center z-10 fixed top-0 left-0 w-full h-full bg-black"
        >
          <h3>Name of the event:</h3>
          <div className="border-2 border-solid border-white rounded-xl px-6 py-1">
            <input
              className="bg-transparent border-none outline-none"
              type="text"
              onChange={(e) => setName(e.target.value)}
              value={name}
            />
            <input className="cursor-pointer" type="submit" value="Confirm" />
          </div>
        </form>
      )}
    </div>
  );
};
export default NewEvent;
