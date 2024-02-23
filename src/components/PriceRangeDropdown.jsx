import React, { useState, useEffect, useContext } from "react";

//importing icons
import {
  RiWallet3Line,
  RiArrowDropDownLine,
  RiArrowDropUpLine,
} from "react-icons/ri";

// import headless ui
import { Menu } from "@headlessui/react";

// import house context
import { HouseContext } from "./HouseContext";

const PriceRangeDropdown = () => {
  const { price, setPrice } = useContext(HouseContext);
  const [isOpen, setIsOpen] = useState(false);

  const prices = [
    {
      value : 'Price range(any)'
    },
    {
      value : '100000 - 130000'
    },
    {
      value : '130000 - 160000'
    },
    {
      value : '160000 - 190000'
    },
    {
      value : '190000 - 220000'
    },
    {
      value : '220000 - 260000'
    },
    {
      value : '10000 - 14000'
    },
    {
      value : '14000 - 30000'
    },
  ];

  return (
    <Menu as="div" className="dropdown relative">
      <Menu.Button
        className="dropdown-btn w-full text-left"
        onClick={() => setIsOpen(!isOpen)}
      >
        <RiWallet3Line className="dropdown-icon-primary" />
        <div>
          <div className="text-[15px] font-medium leading-tight">{price}</div>

          <div className="text-[13px]">Choose Price Range</div>
        </div>
        {isOpen ? (
          <RiArrowDropUpLine className="dropdown-icon-secondary" />
        ) : (
          <RiArrowDropDownLine className="dropdown-icon-secondary" />
        )}
      </Menu.Button>

      <Menu.Items className='dropdown-menu'>
        {prices.map((price, index) => {
          return (
            <Menu.Item
              as="li"
              key={index}
              className="cursor-pointer hover:text-violet-700 transition"
              onClick={() => setPrice(price.value)}
            >
              {price.value}
            </Menu.Item>
          );
        })}
      </Menu.Items>
    </Menu>
  );
};

export default PriceRangeDropdown;
