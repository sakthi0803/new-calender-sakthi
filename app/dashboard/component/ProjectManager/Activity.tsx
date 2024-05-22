"use client"
import React from 'react';
import Link from 'next/link';
import { useSelector } from 'react-redux';
import { dashboardSelector } from '@/store/reducers/dashboard';

function ActivityItem(props) {
    return (
        <div className="row mt-4 align-items-center ">
            <div className="col-3 pe-0">
                <img className='h-[60px] w-[60px] rounded-full object-cover' src={props.profileImg} alt="img not available" />
            </div>

            <div className="col-9 pe-0">
                <h6 className="text-[12px] Poppins-Medium">{props.desc}<span className='text-blue'> [{props?.user_det?.job_id?.jobRequest_Title}]</span></h6>
                <h6 className="text-[11px] mt-1">Created by <Link href="/" prefetch>{props?.user_det?.handled_by?.firstName}</Link></h6>
                <h6 className="text-[9px] text-muted mt-1">{props.time}static</h6>
            </div>
        </div>
    );
}

export default function Activity() {
    const dashboardData = useSelector(dashboardSelector);

    const appointments = [
        {
            time: '15 mins ago',
            title: 'John Doe',
            creator: 'Stella',
            profileImg: 'https://t4.ftcdn.net/jpg/03/64/21/11/360_F_364211147_1qgLVxv1Tcq0Ohz3FawUfrtONzz8nq3e.jpg'

        },
        {
            time: '17 mins ago',
            title: 'John Doe',
            creator: 'Stella',
            profileImg: 'https://www.shutterstock.com/shutterstock/videos/1086926591/thumb/12.jpg?ip=x480'

        },
        {
            time: '15 mins ago',
            title: 'John Doe',
            creator: 'Stella',
            profileImg: 'https://t4.ftcdn.net/jpg/03/64/21/11/360_F_364211147_1qgLVxv1Tcq0Ohz3FawUfrtONzz8nq3e.jpg'


        },
        // Add more appointments as needed
    ];

    return (
        <div>

            <div className="flex justify-between align-items-center ">
                <h5>Activity</h5>
                <Link prefetch className='text-blue text-[14px]' href="/P_M_Activity">
                    <u>View All</u>
                </Link>
            </div>

            {dashboardData?.activities_list?.slice(0, 3).map((appointment, index) => (
                <ActivityItem key={index} {...appointment} />
            ))}
        </div>
    );
}
