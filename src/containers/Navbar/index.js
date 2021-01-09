/** @format */

import React from "react";
import { bool, object } from "prop-types";

import logo from "../../@ui/assets/images/amazon.png";

import { Address } from "./Styled";
import { SelectInput } from "./SelectInput";

export const Navbar = ({ isLoggedIn, userInfo }) => {
  return (
    <div className='d-flex bg-dark text-white p-2'>
      <img src={logo} alt='amazon' className='k-h-25 light ' />
      <Address className='k-ml-15'>
        <span className='k-font-12'>Deliver to {userInfo?.name}</span>
        <span className='k-font-weight-8 k-font-14'>{userInfo?.address}</span>
      </Address>
      <SelectInput />
    </div>
  );
};

Navbar.propTypes = {
  isLoggedIn: bool,
  userInfo: object,
};

Navbar.defaultProps = {
  userInfo: {
    name: "Hasmuddin",
    address: "Ghaziabad 201009",
  },
};
