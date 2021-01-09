/** @format */

import React from "react";
import { Search } from "react-feather";
import { SearchIconWrapper } from "./Styled";

import { CATEGORIES } from "./constants";

export const SelectInput = () => {
  return (
    <div className='d-flex k-ml-30 justify-content-center flex-wrap k-w-max-50'>
      <select className='k-h-20 k-w-max-10'>
        {CATEGORIES.map((category) => (
          <option key={category}>{category}</option>
        ))}
      </select>
      <input className='k-h-20' />
      <SearchIconWrapper className='flex-center'>
        <Search color='black' />
      </SearchIconWrapper>
    </div>
  );
};
