import Link from "next/link";

function ApplicationsReceived() {
  return (
    <>
      <div
        className="bg-center bg-cover w-100 shadow overflow-hidden d-flex"
        style={{ backgroundImage: 'url("image/ApplicationsReceive.png")' }}
      >
        <div className="row mx-0 px-3 py-5 h-100">
          <div className="pe-lg-0 col-lg-6 col-6 col-md-6 px-0 px-lg-3 d-flex flex-column justify-content-between">
            <div className="bg-white d-inline-block w-[90px] p-2 text-center">
              <img
                className="w-[50px] mx-auto"
                src="image/simicon.png"
                alt=""
              />
            </div>
            <div>
              <h1 className="text-white text-[35px] mt-auto lg:text-[40px] mt-4">
                2024
              </h1>
              <h5 className="text-white text-[10px] lg:text-[16px] mt-lg-3 mt-2">
                Applications Received
              </h5>
            </div>
          </div>
          <div className="col-lg-6 col-6 col-md-6 text-end d-flex align-items-end  flex-column justify-content-between">
            <img
              className="w-[190px] ms-auto"
              src="image/computerwork.png"
              alt=""
            />
            <Link prefetch href="/JobApplication0">
              <button className="btn btn-white btn-sm text-[10px] lg:text-[16px] btn-sm mt-3">
                View Details
              </button>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}

export default ApplicationsReceived;
