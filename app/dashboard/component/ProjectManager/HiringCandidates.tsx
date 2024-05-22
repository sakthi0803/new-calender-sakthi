import React from "react";
import Link from "next/link";

function AppointmentItem(props) {
  return (
    <div className="row mt-4 align-items-center ">
      <div className="col-3 pe-0">
        <img
          className="h-[60px] w-[60px] rounded-full object-cover"
          src={props.profileImg}
          alt=""
        />
      </div>

      <div className="col-6 pe-0">
        <h6 className="text-[12px] text-[#091316] Poppins-Medium">
          {props.title}
        </h6>
        <h6 className="text-[10px] text-[#091316] mt-1">{props.position}</h6>
        <h6 className="text-[10px] mt-1">
          Created by{" "}
          <Link href="/" prefetch>
            {props.creator}
          </Link>
        </h6>
      </div>

      <div className="col-3 text-end">
        <button className="btn btnOutlineblue btn-sm text-[13px!important]">
          Details
        </button>
      </div>
    </div>
  );
}

export default function HiringCandidates() {
  const appointments = [
    {
      title: "John Doe",
      creator: "Stella",
      position: "Senior Python Develpper",
      profileImg:
        "https://t4.ftcdn.net/jpg/03/64/21/11/360_F_364211147_1qgLVxv1Tcq0Ohz3FawUfrtONzz8nq3e.jpg",
    },
    {
      title: "John Doe",
      creator: "Stella",
      position: "Senior Python Develpper",
      profileImg:
        "https://a.storyblok.com/f/191576/1200x800/faa88c639f/round_profil_picture_before_.webp",
    },
    {
      title: "John Doe",
      creator: "Stella",
      position: "Senior Python Develpper",
      profileImg:
        "https://t4.ftcdn.net/jpg/04/44/53/99/360_F_444539901_2GSnvmTX14LELJ6edPudUsarbcytOEgj.jpg",
    },
    // Add more appointments as needed
  ];

  return (
    <div>
      <div className="flex justify-between align-items-center ">
        <h5>Hiring Candidates</h5>
        <Link
          className="text-blue text-[14px]"
          prefetch
          href="/HiringCandidates"
        >
          <u>View All</u>
        </Link>
      </div>

      {appointments.map((appointment, index) => (
        <AppointmentItem key={index} {...appointment} />
      ))}
    </div>
  );
}
