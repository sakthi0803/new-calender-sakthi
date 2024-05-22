"use client";
import { dashboardSelector, getCandidateStatusList } from "@/store/reducers/dashboard";
import Link from "next/link";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

function CandidateStatus() {

  const dispatch = useDispatch()
  const dashboardData = useSelector(dashboardSelector)

  useEffect(() => {
    dispatch(getCandidateStatusList())
  }, [])

  return (
    <div className=" bg-white p-3 table-responsive ">
      <div>
        <table className="table CandidateStatus">
          <thead>
            <tr>
              <th scope="col">Job ID</th>
              <th scope="col">Name</th>
              <th scope="col">Position</th>
              <th scope="col">1st Level</th>
              <th scope="col">2nd Level</th>
              <th scope="col">3rd Level</th>
              <th scope="col">4th Level</th>
              <th scope="col">Total Marks</th>
              <th scope="col">Status</th>
              <th scope="col">Actions</th>
            </tr>
          </thead>
          <tbody>
            {dashboardData?.candidate_status_list?.slice(0, 6)?.map((list) => (
              <tr key={list?.candidate_details?.id}>
                <td>{list?.job_details?.id}</td>
                <td>{list?.candidate_details?.candidate_firstName + " " + list?.candidate_details?.candidate_lastName}</td>
                <td>{list?.job_details?.jobRequest_Role}</td>
                <td>{list?.meeting_details[0]?.computed_score}/{list?.meeting_details[0]?.out_of_score}</td>
                <td>{list?.meeting_details[1]?.computed_score}/{list?.meeting_details[1]?.out_of_score}</td>
                <td>{list?.meeting_details[2]?.computed_score}/{list?.meeting_details[2]?.out_of_score}</td>
                <td>{list?.meeting_details[3]?.computed_score}/{list?.meeting_details[3]?.out_of_score}</td>
                {/* UPDATE TOTAL MARKS REAMAINING */}
                <td>{list?.meeting_details[0]?.computed_score}/{list?.meeting_details[0]?.out_of_score}</td>
                {list?.status === "Hired" || list?.status === "hired" ? (
                  <td>
                    <button className="bg-[#cbffd7] rounded-2 px-2 py-1 text-green-700">
                      {list?.status.toUpperCase()}
                    </button>
                  </td>
                ) : null}

                {list?.status === "Active" || list?.status === "active" ? (
                  <td>
                    <button className="bg-[#fff3f3] rounded-2 px-2 py-1 text-yellow-400">
                      {list?.status.toUpperCase()}
                    </button>
                  </td>
                ) : null}

                {list?.status === "Reject" || list?.status === "reject" ? (
                  <td>
                    <button className="bg-[#E73B3B26] rounded-2 px-2 py-1 redColor">
                      {list?.status.toUpperCase()}
                    </button>
                  </td>
                ) : null}

                <td>
                  <Link className="btn" href={`CandidatesStatus3/${list?.candidate_details?.id}`}>
                    <img src="image/eye-black.png" alt="" className="text-muted text-dark" />
                    {/* <i className="fa fa-eye text-muted" aria-hidden="true"></i> */}
                  </Link>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default CandidateStatus;
