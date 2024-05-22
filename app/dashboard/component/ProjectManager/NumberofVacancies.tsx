import Link from "next/link";

function NumberofVacancies() {
  return (
    <>
      <div className="TotalEmployees shadow bg-white rounded-3 p-3 d-flex flex-column justify-content-between h-100">
        <div className="flex align-items-center border-bottom">
          <h3 className="projectManHeading">Number of Vacancies</h3>
          <Link href={"/TotalEmployee0"} prefetch>
            <img className="h-5 ml-5" src="image/eyeicon.png" alt="" />
          </Link>
          <div className="ml-auto">
            <h4 className="totalCount Poppins-SemiBold">36</h4>
          </div>
        </div>

        <div className="row mt-4">
          <div className="col-lg-6">
            <div className="PythonDeveloper border rouded-2 p-2">
              <h4 className="text-[14px] md:text-[16px] text-[#091316]">
                Python Developer
              </h4>
              <div className="d-flex justify-content-between mt-3">
                <h5 className="text-[25px] md:text-[29px] Poppins-SemiBold">
                  9
                </h5>
                <img src="image/python.png" alt="" />
              </div>
            </div>
          </div>
          <div className="col-lg-6">
            <div className="PythonDeveloper border rouded-2 p-2">
              <h4 className="text-[14px] md:text-[16px] text-[#091316]">
                java Developer
              </h4>
              <div className="d-flex justify-content-between mt-3">
                <h5 className="text-[25px] md:text-[29px] Poppins-SemiBold">
                  9
                </h5>
                <img src="image/java.png" alt="" />
              </div>
            </div>
          </div>
          <div className="col-lg-6 mt-3">
            <div className="PythonDeveloper border rouded-2 p-2">
              <h4 className="text-[14px] md:text-[16px] text-[#091316]">
                Anguls Developer
              </h4>
              <div className="d-flex justify-content-between mt-3">
                <h5 className="text-[25px] md:text-[29px] Poppins-SemiBold">
                  9
                </h5>
                <img src="image/Angularicon.png" alt="" />
              </div>
            </div>
          </div>
          <div className="col-lg-6 mt-3">
            <div className="PythonDeveloper border rouded-2 p-2">
              <h4 className="text-[14px] md:text-[16px] text-[#091316]">
                UX|UI Designer
              </h4>
              <div className="d-flex justify-content-between mt-3">
                <h5 className="text-[25px] md:text-[29px] Poppins-SemiBold">
                  9
                </h5>
                <img src="image/graphic.png" alt="" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default NumberofVacancies;
