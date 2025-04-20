"use client";

import { setCookie } from "cookies-next";
import { useState } from "react";

interface Props {
  currentIndex?: number;
  tapOptions?: number[];
}
export const TabBar = ({
  currentIndex = 1,
  tapOptions = [1, 2, 3, 4, 5],
}: Props) => {
  const [selected, setSelected] = useState(currentIndex);
  const onTabSelected = (tab: number) => {
    setSelected(tab);
    setCookie("selected-tab", tab.toString());
  };
  return (
    <div className="inline-flex w-full rounded-xl bg-gray-100 p-1 shadow-inner">
      {tapOptions.map((option) => (
        <div key={option} className="flex-1">
          <input
            checked={selected === option}
            onChange={() => {}}
            type="radio"
            id={option.toString()}
            name="tab-options"
            className="peer hidden"
          />
          <label
            onClick={() => onTabSelected(option)}
            htmlFor={option.toString()}
            className="flex cursor-pointer items-center justify-center rounded-lg py-3 transition-all duration-200 
                     peer-checked:bg-gradient-to-br peer-checked:from-blue-600 peer-checked:to-blue-400 
                     peer-checked:font-semibold peer-checked:text-white peer-checked:shadow-md
                     hover:bg-gray-200 hover:text-blue-600"
          >
            {option}
          </label>
        </div>
      ))}
    </div>
  );
};
