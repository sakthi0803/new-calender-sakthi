"use client";
import React, { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { format, parse, startOfWeek, getDay } from "date-fns";
import { enUS } from "date-fns/locale";
import Link from "next/link";
import axios from "axios";

import {
  Calendar,
  momentLocalizer,
  dateFnsLocalizer,
} from "react-big-calendar";

import "./style.css";

import SideMenu from "@/app/dashboard/component/SideMenu";
import "react-big-calendar/lib/css/react-big-calendar.css";
import dayjs from "dayjs";
import {Modal, Typography} from "antd";

const locales = {
  "en-US": enUS,
};

const localizer = dateFnsLocalizer({
  format,
  parse,
  startOfWeek,
  getDay,
  locales,
});

export default function P_M_Todo0() {

  const dispatch = useDispatch()




  const myEventsList = [
    {
      title: "Event 1",
      start: new Date(),
      end: new Date(new Date().setHours(new Date().getHours() + 1)),
    },
  ];
  const [selectedMonth, setSelectedMonth] = useState('01');
  const [selectedYear, setSelectedYear] = useState(2024);
  const [activeEventModal, setActiveEventModal] = useState();
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [events, setEvents] = useState(myEventsList);


  // Define months and years
  const months = [
    { value: "01", label: "January" },
    { value: "02", label: "February" },
    { value: "03", label: "March" },
    { value: "04", label: "April" },
    { value: "05", label: "May" },
    { value: "06", label: "June" },
    { value: "07", label: "July" },
    { value: "08", label: "August" },
    { value: "09", label: "September" },
    { value: "10", label: "October" },
    { value: "11", label: "November" },
    { value: "12", label: "December" },
  ];

  const years = [
    { value: "2022", label: "2022" },
    { value: "2023", label: "2023" },
    { value: "2024", label: "2024" },
    // Add more years as needed
  ];

  // Handle month and year changes
  const handleMonthChange = (e: {
    target: { value: React.SetStateAction<string> };
  }) => {
    setSelectedMonth(e.target.value);
    getInterviewDetails(e.target.value, selectedYear);
  };

  const handleYearChange = (e: {
    target: { value: React.SetStateAction<string> };
  }) => {
    setSelectedYear(e.target.value);
    getInterviewDetails(selectedMonth, e.target.value);
  };

  const getInterviewDetails = (selectMonth = selectedMonth, selectYear= selectedYear) => {
    axios.get('http://192.168.3.23:8000/calendar_app/api/calendar',
        { params: {
          "from_date": `${selectYear}-${selectMonth}-1`,
          "to_date": `${selectYear}-${selectMonth}-${
            dayjs(`${selectYear}-${selectMonth}`).endOf('month').format('DD')}`
        }})
        .then((response) => {
          let res = response.data, arr = [];
          res.map((item) => {
            arr.push({
              ...item,
              title: item.desc,
              start: new Date(item.start),
              end: new Date(new Date(item.start).setHours(new Date().getHours() + 1))
            });
            return item;
          });
          setEvents(arr);
        });
  }

  useEffect(() => {
    getInterviewDetails()
  }, [])

  const handleSelectSlot = (event: any) => {
    if (typeof event.start === "string") {
      event.start = new Date(event.start);
    }

    if (typeof event.end === "string") {
      event.end = new Date(event.end);
    }

    setActiveEventModal(event);

  };

  const handleSelect = (event: any, e) => {
    const { start, end } = event;
    setActiveEventModal(event);
    getCalenderDetails(event);
    setPosition({ x: e.clientX, y: e.clientY });
  };

  const EventDetailModal = () => {
    return (
      <>
        {activeEventModal?.title && (
          <div
            style={{
              position: "absolute",
              top: 0,
              left: 0,
              width: "100%",
              backgroundColor: "white",
              border: "1px solid black",
              padding: "10px",
              color: "blue",
              height: "100%",
              zIndex: 1000,
            }}
          >
            {activeEventModal?.title}
          </div>
        )}
      </>
    );
  };

  const getCalenderDetails = (event) => {
    axios.get('http://192.168.3.23:8000/calendar_app/api/calendar_meeting',
        { params: { id: event.id}})
        .then((response) => {
          const data = response.data;
          let email_string = data.attendees, email_list = null;
          email_string = email_string.replace(/[\[\]]/g, '').replace(/"/g, '');
          email_list = email_string.split('", "')
          Modal.info({
            title: data.desc,
            content: (
                <div>
                  <p><Typography.Text strong>Attendees: </Typography.Text>{email_list}</p>
                  <p><Typography.Text strong>Scheduled: </Typography.Text>
                    {dayjs(data.start).format('hh:mm a')} - {dayjs(data.end).format('hh:mm a')}
                  </p>
                </div>
            ),
            onOk() {},
          });
        }).catch((reason) => {
          console.log(reason);
        });
  }

  // Custom Event Component
  const CustomEvent = ({ event }: any) => {
    return (
      <>
        <div className="calendarTopSection" >
          <ul>
            <li className="text-[12px] py-1">{event.desc}</li>
            {/*<li className="text-[12px] py-1">Interviewer: {event.attendees}</li>*/}
            <li className="text-[12px] py-1">Time : {dayjs(event.start).format('hh:mm a')} -
              {dayjs(event.end).format('hh:mm a')}</li>
            <li className="text-[12px] py-1">Via : <a href={event.link}>{event.link}</a></li>
          </ul>
        </div>
        {/* <div className="shadow bg-white" style={{ position: "relative" }}>
          <strong className="text-black">{event.title}</strong>
          <p>{event.start.toLocaleString()}</p>
        </div>
        {activeEventModal && <EventDetailModal />} */}
      </>
    );
  };

  return (
    <section className="">
      <div className="container-fluid my-md-5 my-4">
        <div className="row">
          <div className="col-lg-1 leftMenuWidth ps-0 position-relative">
            <SideMenu />
          </div>

          <div className="col-lg-11 pe-lg-4 ps-lg-0">
            <div className="row justify-content-between align-items-center">
              <div className="col-lg-8 projectText">
                <h1>Calendar</h1>
                <p className="mt-3">
                  Enjoy your selecting potential candidates Tracking and
                  Management System.
                </p>
              </div>

              <div className="col-lg-4 mt-3 mt-lg-0 text-center text-lg-end">
                <Link
                  prefetch
                  href="/P_M_JobDescriptions1"
                  className="btn btn-light me-3 mx-lg-2"
                >
                  JD Assets
                </Link>
                <Link
                  prefetch
                  href="P_M_JobDescriptions4"
                  className="btn btn-blue bg-[#0a66c2!important]"
                >
                  Create New JD
                </Link>
              </div>
            </div>

            <div className="TotalEmployees shadow bg-white rounded-3 p-3 w-100 mt-4">
              <div className="md:flex align-items-center">
                <h3 className="projectManHeading">Your Todo’s</h3>
                <div className="ml-auto d-flex todoHeadingSelect">
                  <div className="month-year-picker">
                    <select value={selectedMonth} onChange={handleMonthChange}>
                      <option value="">Select Month</option>
                      {months.map((month) => (
                        <option key={month.value} value={month.value}>
                          {month.label}
                        </option>
                      ))}
                    </select>
                    <select value={selectedYear} onChange={handleYearChange}>
                      <option value="">Select Year</option>
                      {years.map((year) => (
                        <option key={year.value} value={year.value}>
                          {year.label}
                        </option>
                      ))}
                    </select>
                  </div>
                </div>
              </div>
              <div
                className="d-none d-lg-block "
                style={{ width: "100%", position: "relative" }}
              >

                {/* <div className="calendarTopSection top-[250px] left-[100px]">
                  <ul>
                    <li className="text-[12px] py-1">Python Developer</li>
                    <li className="text-[12px] py-1">Interviewer: Geetha</li>
                    <li className="text-[12px] py-1">Time : 10 - 11 A.M</li>
                    <li className="text-[12px] py-1">Via : Google Voice</li>
                  </ul>
                </div>

                <div className="calendarTopSection top-[450px] left-[200px]">
                  <ul>
                    <li className="text-[12px] py-1">Python Developer</li>
                    <li className="text-[12px] py-1">Interviewer: Geetha</li>
                    <li className="text-[12px] py-1">Time : 10 - 11 A.M</li>
                    <li className="text-[12px] py-1">Via : Google Voice</li>
                  </ul>
                </div>

                <div className="calendarTopSection top-[450px] left-[800px]">
                  <ul>
                    <li className="text-[12px] py-1">Python Developer</li>
                    <li className="text-[12px] py-1">Interviewer: Geetha</li>
                    <li className="text-[12px] py-1">Time : 10 - 11 A.M</li>
                    <li className="text-[12px] py-1">Via : Google Voice</li>
                  </ul>
                </div>


                <div className="calendarTopSection top-[280px] left-[400px]">
                  <ul>
                    <li className="text-[12px] py-1">Python Developer</li>
                    <li className="text-[12px] py-1">Interviewer: Geetha</li>
                    <li className="text-[12px] py-1">Time : 10 - 11 A.M</li>
                    <li className="text-[12px] py-1">Via : Google Voice</li>
                  </ul>
                </div>

                <div className="calendarTopSection top-[280px] left-[700px]">
                  <ul>
                    <li className="text-[12px] py-1">Python Developer</li>
                    <li className="text-[12px] py-1">Interviewer: Geetha</li>
                    <li className="text-[12px] py-1">Time : 10 - 11 A.M</li>
                    <li className="text-[12px] py-1">Via : Google Voice</li>
                  </ul>
                </div>

                <div className="calendarTopSection top-[320px] left-[1000px]">
                  <ul>
                    <li className="text-[12px] py-1">Python Developer</li>
                    <li className="text-[12px] py-1">Interviewer: Geetha</li>
                    <li className="text-[12px] py-1">Time : 10 - 11 A.M</li>
                    <li className="text-[12px] py-1">Via : Google Voice</li>
                  </ul>
                </div> */}
                <Calendar
                  className="TodoDataTable"
                  selectable
                  localizer={localizer}
                  events={events}
                  startAccessor="start"
                  endAccessor="end"
                  style={{ height: 600 }}
                  defaultView={"month"}
                  date={`${selectedYear}-${selectedMonth}`}
                  timeslots={4} // number of per section
                  step={15}
                  views={{ month: true, week: true, day: true }} // Show only month, week, and day views
                  components={{ event: CustomEvent }}
                  formats={{
                    dayFormat: "EEEE", // day labels
                  }}
                  onSelectSlot={handleSelectSlot}
                  handleNavigate={handleSelectSlot}
                  onSelectEvent={handleSelect}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

// const CustomEvent = (event:any) => {
//   console.log(event,"sadfsdfsd")
//   return (
//     <span> <strong> {event.title} </strong> </span>
//   )
// }
// Custom Toolbar Component
const CustomToolbar = ({ label }: any) => {
  return (
    <div className="custom-toolbar ">
      <strong>{label}</strong>
      {/* Add custom buttons or components here */}
    </div>
  );
};
