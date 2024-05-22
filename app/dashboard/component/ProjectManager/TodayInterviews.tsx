function TodayInterviews() {
    return (
        <>
            <div className="col-lg-8 me-3">
                <div className="row mx-0 border">
                    <div className="col-lg-5 px-0 col-5">
                        <div className="border-end w-100 pt-3 text-center">
                            <img className="w-[100px] h-[100px] rounded-full border-3 border-blue-500 mx-auto" src="https://images.ctfassets.net/h6goo9gw1hh6/2sNZtFAWOdP1lmQ33VwRN3/24e953b920a9cd0ff2e1d587742a2472/1-intro-photo-final.jpg?w=1200&h=992&fl=progressive&q=70&fm=jpg" alt="" />

                            <h3 className="text-[16px] text-center mt-3">John Smith</h3>
                            <h3 className="text-[12px] text-center mt-1">Senior Python Developer</h3>

                            <div className="row w-100 mx-0 border-top mt-3 ">
                                <div className="col-lg-6 py-3  border-end px-1 text-center col-6">
                                <img className="mx-auto" src="image/date.png" alt="" />
                                    <h5 className="text-blue text-[10px] mt-2">19th Feb 2024</h5>
                                </div>
                                <div className="col-lg-6 px-1 py-3 text-center col-6">
                                   
                                    <img className="mx-auto" src="image/watch.png" alt="" />
                                    <h5 className="text-blue text-[10px] mt-2">10.30 A.M</h5>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="col-lg-7 px-0 d-flex col-7">
                        <div className="table-responsive w-100">
                            <table className="table text-center  mb-0 tabledataInterVi border-start-0 border-end-0">
                                <tbody>
                                    <tr>
                                        <td>
                                            <span className="mx-1 text-[12px] md:text-[13px]">1st Level:</span>
                                            <span className="mx-1 text-[12px] md:text-[13px]">7/10</span>
                                        </td>
                                        <td>
                                            <span className="mx-1 text-[12px] md:text-[13px]">1st Level:</span>
                                            <span className="mx-1 text-[12px] md:text-[13px]">7/10</span>
                                        </td>
                                    </tr>

                                    <tr>
                                        <td>
                                            <span className="mx-1 text-[12px] md:text-[13px]">1st Level:</span>
                                            <span className="mx-1 text-[12px] md:text-[13px]">7/10</span>
                                        </td>
                                        <td>
                                            <span className="mx-1 text-[12px] md:text-[13px]">1st Level:</span>
                                            <span className="mx-1 text-[12px] md:text-[13px]">7/10</span>
                                        </td>
                                    </tr>


                                    <tr>
                                        <td>
                                            <span className="mx-1 text-[12px] md:text-[13px]">1st Level:</span>
                                            <span className="mx-1 text-[12px] md:text-[13px]">7/10</span>
                                        </td>
                                        <td>
                                            <span className="mx-1 text-[12px] md:text-[13px]">1st Level:</span>
                                            <span className="mx-1 text-[12px] md:text-[13px]">7/10</span>
                                        </td>
                                    </tr>

                                    <tr>
                                        <td>
                                            <span className="mx-1 text-[12px] md:text-[13px]">1st Level:</span>
                                            <span className="mx-1 text-[12px] md:text-[13px]">7/10</span>
                                        </td>
                                        <td>
                                            <span className="mx-1 text-[12px] md:text-[13px]">1st Level:</span>
                                            <span className="mx-1 text-[12px] md:text-[13px]">7/10</span>
                                        </td>
                                    </tr>

                                    <tr>
                                        <td className="py-4" colSpan={2} style={{borderBottom:0}}>
                                            <button className="btn btnOutlineblue px-[10px!important] mx-1 mt-2">Reschedule Meeting</button>
                                            <button className="btn btn-blue px-[10px!important] text-[11px] mx-1 mt-2">Join Meeting</button>
                                        </td>

                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default TodayInterviews