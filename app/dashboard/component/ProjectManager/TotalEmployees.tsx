import Link from "next/link";
import TotalEmployeesGraph from "./TotalEmployeesGraph";

function TotalEmployees() {
  const man = {
    color: "#0B74AD",
  };
  const women = {
    color: "#40484A",
  };

  return (
    <>
      <div className="TotalEmployees shadow bg-white rounded-3 p-3 d-flex flex-column justify-content-between h-100">
        <div className="flex align-items-center border-bottom">
          <h3 className="projectManHeading">Total Employees</h3>
          <Link href={"/TotalEmployee0"} prefetch>
            <img className="h-5 ml-5" src="image/eyeicon.png" alt="" />
          </Link>
          <div className="ml-auto">
            <h4 className="totalCount Poppins-SemiBold">72</h4>
          </div>
        </div>

        <div className="flex pt-4 justify-center position-relative  overflow-hidden">
          <div className="col-6 flex align-middle">
            <div className="text-center w-[147px]">
              <TotalEmployeesGraph
                totalEmloyeesCount={72}
                count={40}
                color={"#0B74AD"}
              />
              <i className="fa fa-square" aria-hidden="true" style={man}></i>{" "}
              Men
            </div>
          </div>
          <div className="col-6 text-center">
            <div className="text-center w-[147px]">
              <TotalEmployeesGraph
                totalEmloyeesCount={72}
                count={32}
                color={"#40484A"}
              />
              <i className="fa fa-square" aria-hidden="true" style={women}></i>{" "}
              Women
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default TotalEmployees;
