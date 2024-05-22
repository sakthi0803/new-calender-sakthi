"use client";

import * as React from "react";
import Link from "next/link";
import { useEffect, useState } from "react";
import {
  ReactElement,
  JSXElementConstructor,
  ReactNode,
  ReactPortal,
  PromiseLikeOfReactNode,
} from "react";
import Button from "@mui/material/Button";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import FilterListIcon from "@mui/icons-material/FilterList";

function PostedJobsTop(props: {
  titleName:
    | string
    | number
    | boolean
    | ReactElement<any, string | JSXElementConstructor<any>>
    | Iterable<ReactNode>
    | ReactPortal
    | PromiseLikeOfReactNode
    | null
    | undefined;
}) {
  // filter btn
  const [filterBtn, setfilterBtn] = React.useState<null | HTMLElement>(null);
  const open = Boolean(filterBtn);
  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setfilterBtn(event.currentTarget);
  };
  const handleClose = () => {
    setfilterBtn(null);
  };
  // filter btn end

  return (
    <>
      <div
        className={`row justify-between align-items-center p-3  ${props.className}`}
      >
        <div className="col-md-5 col-12 col-lg-4 d-flex mb-3 mb-md-0 justify-between align-items-center ">
          <h4 className={`small_historyText  ${props?.classTitle}`}>
            {props.titleName}
          </h4>
          <h6>
            <Link
              className={`text-blue text-[14px]  ${props?.classSamll}`}
              href={props?.viewAllPath}
              prefetch
            >
              {props?.samllText}
            </Link>
          </h6>
        </div>

        <div className="col-md-5 col-8 col-lg-5 ms-auto ps-lg-5">
          <div className="position-relative PostedInput">
            <input
              className="form-control border-0 rouned-2"
              type="text"
              placeholder="Search......."
            />
            <button className="PostedSearch p-0">
              {" "}
              <img src="image/search.png" alt="" />
            </button>
          </div>
        </div>

        <div
          className={`col-lg-2 col-4 col-md-2 text-end ${props.filterBtnClass}`}
        >
          {/* <button className="shadow btn btn-white px-1 px-md-3 w-100 w-lg-auto">
                        <img src="image/filterBtn.png" className="h-[10px]" alt="" /> Filters
                        <i className="fa fa-filter" aria-hidden="true"></i> Filters
                    </button> */}

          <Button
            className="shadow btn btn-white px-1 px-md-3 w-100 w-lg-auto d-flex"
            id="basic-button"
            aria-controls={open ? "basic-menu" : undefined}
            aria-haspopup="true"
            aria-expanded={open ? "true" : undefined}
            onClick={handleClick}
          >
            <FilterListIcon /> Filters
          </Button>

          <Menu
            className="filterBtns"
            id="basic-menu"
            anchorEl={filterBtn}
            open={open}
            onClose={handleClose}
            MenuListProps={{
              "aria-labelledby": "basic-button",
            }}
          >
            <MenuItem onClick={handleClose}>Profile</MenuItem>
            <MenuItem onClick={handleClose}>My account</MenuItem>
            <MenuItem onClick={handleClose}>Logout</MenuItem>
          </Menu>
        </div>
      </div>
    </>
  );
}

export default PostedJobsTop;
