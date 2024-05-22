"use client"
import React from "react";
import Link from "next/link";
import { dashboardSelector } from "@/store/reducers/dashboard";
import { useSelector } from "react-redux";
import moment from "moment";

function AppointmentItem({ date, title, creator, time, colorName,...props }: any) {
  return (
    <div className="row mt-4 align-items-center ">
      <div className="col-3 pe-0">
        <div className={`bg-[${colorName}] text-center rounded-2 py-3 px-2`}>
          <h6 className="text-[12px] text-blue">{moment(props.start)?.format("DD")}</h6>
          <h6 className="text-[12px] text-blue">{moment(props.start)?.format("MMM")}</h6>
        </div>
      </div>

      <div className="col-6 pe-0">
        <h6 className="text-[12px] Poppins-Medium">{props.desc}</h6>
        <h6 className="text-[11px] mt-1">
          Created by{" "}
          <Link className="text-blue" href="/" prefetch>
            {props?.user_det?.handled_by?.firstName}
          </Link>
        </h6>
        <h6 className="text-[9px] text-muted mt-1">{time}static</h6>
      </div>

      <div className="col-3 text-end">
        <button className=" btn btn-blue btn-sm text-[13px!important]">
          Details
        </button>
      </div>
    </div>
  );
}

export default function AppointmentsPage() {
  const dashboardData = useSelector(dashboardSelector);
  // const appointments = [
  //   {
  //     date: "07",
  //     title: "Interview with Designer",
  //     creator: "Stella",
  //     time: "10 A.M to 11 A.M",
  //     colorName: "#0B74AD26",
  //   },
  //   {
  //     date: "07",
  //     title: "Interview with Designer",
  //     creator: "Stella",
  //     time: "10 A.M to 11 A.M",
  //     colorName: "#0B74AD26",
  //   },
  //   {
  //     date: "07",
  //     title: "Interview with Designer",
  //     creator: "Stella",
  //     time: "10 A.M to 11 A.M",
  //     colorName: "#0B74AD26",
  //   },
  //   // Add more appointments as needed
  // ];

  return (
    <div>
      <div className="flex justify-between align-items-center ">
        <h5>Upcomings</h5>
        <Link className="text-blue text-[14px]" href="/P_M_Upcomings" prefetch>
          <u>View All</u>
        </Link>
      </div>

      {dashboardData?.upcomings_list?.slice(0,3)?.map((appointment, index) => (
        <AppointmentItem key={index} {...appointment} />
      ))}
    </div>
  );
}
