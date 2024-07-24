import React from "react";

const IdCards = () => {
  return (
    <div>
      <main>
        <div className="container">
          <div className="row mt-5">
            <div className="col-md-4">
              <main>
                <div className="idcardBox">
                  <div className="container">
                    <div className="row">
                      <div className="col-md-12">
                        <div className="text-center">
                          <span className="t1">LAGOS STATE GOVERNMENT</span>{" "}
                          <br />
                          <span className="t2">
                            MINISTRY OF WOMEN AFFAIRS & POVERTY ALLEVIATION
                          </span>
                          <br />
                          <span className="t3">
                            WOMEN DEVELOPMENT CENTRE AGEGE
                          </span>
                          <br />
                          <span className="t4">
                            OBA-OGUNJI ROAD, PEN-CINEMA AGEGE, LAGOS
                          </span>
                          <br />
                          <span className="t5">sewing & fashion</span>
                        </div>
                      </div>
                    </div>
                    <div className="row">
                      <div className="d-flex">
                        <div>
                          <img className="passport" src="" alt="passport" />
                          <div className="passportFoot">
                            <span className="pft">Student i.d. card</span>
                          </div>
                        </div>
                        <div>
                          <ul>
                            <li>Name:</li>
                            <li>Designation:</li>
                            <li>Student N0:</li>
                            <li>Dept:</li>
                            <li>Expiry Date:</li>
                            <li>Signature:</li>
                          </ul>
                        </div>
                        <div>
                          <div className="userDetails">
                            <ul className="ul">
                              <li>
                                <input
                                  type="text"
                                  className="d-forms"
                                  placeholder="ARIYO IDOWU ROTIMI"
                                  // {value={inputValueName}}
                                />
                              </li>
                              <li>
                                <input
                                  type="text"
                                  className="d-forms"
                                  placeholder="STUDENT"
                                  // {value={inputValueDesig}}
                                />
                              </li>
                              <li>
                                <input
                                  type="text"
                                  className="d-forms"
                                  placeholder="LASG/WDC/CTO/123"
                                  //  { value={inputValueStdntNo}}
                                />
                              </li>
                              <li>
                                <input
                                  type="text"
                                  className="d-forms"
                                  placeholder="SEWING & FASHION"
                                  // {value={inputValueDept}}
                                />
                              </li>
                              <li>
                                <input
                                  type="text"
                                  className="d-forms"
                                  placeholder="DECEMBER, 2023"
                                  // {value={inputValueExp}}
                                />
                              </li>
                              <li>
                                <input
                                  type="text"
                                  className="d-forms signs"
                                  npm
                                />
                                <img
                                  className="passportSmall"
                                  // {src={Passport}}
                                  alt="passport"
                                />
                              </li>
                            </ul>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </main>
            </div>
            <div className="col-md-4">
              <main>
                <div className="idcardBoxs ">
                  <div className="container"></div>
                </div>
              </main>
            </div>
            <div className="col-md-4 mt-3">
              <main>
               
              </main>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default IdCards;
