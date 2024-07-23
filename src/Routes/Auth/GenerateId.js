import React, { useState } from "react";
import "./GenId.css";
import Passport from "../../Assets/Aridman.jpg";
import Iconics from "../../Assets/undraw_certificate_re_yadi.svg";
import Marquee from "react-fast-marquee";

const GenerateId = () => {
  // collecting the value of the form fillers
  const [inputValueName, setInputValueName] = useState("");
  const [inputValueDesig, setInputValueDesig] = useState("");
  const [inputValueStdntNo, setInputValueStdntNo] = useState("");
  const [inputValueDept, setInputValueDept] = useState("");
  const [inputValueExp, setInputValueExp] = useState("");
  const handleChangeName = (event) => {
    setInputValueName(event.target.value);
  };
  const handleChangeDesig = (event) => {
    setInputValueDesig(event.target.value);
  };
  const handleChangeStdntNo = (event) => {
    setInputValueStdntNo(event.target.value);
  };
  const handleChangeDept = (event) => {
    setInputValueDept(event.target.value);
  };
  const handleChangeExp = (event) => {
    setInputValueExp(event.target.value);
  };

  return (
    <div className="theWrapperIdPlace">
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <div className="container justify-content-between">
          <div className="d-flex">
            <a
              className="navbar-brand me-2 mb-1 d-flex align-items-center"
              href="/"
            >
              <img
                src="https://mdbcdn.b-cdn.net/img/logo/mdb-transaprent-noshadows.webp"
                height="20"
                alt="MDB Logo"
                loading="lazy"
              />
            </a>
            <form className="input-group w-auto my-auto d-none d-sm-flex">
              <input
                autoComplete="off"
                type="search"
                className="form-control rounded"
                placeholder="Search"
              />
              <span className="input-group-text border-0 d-none d-lg-flex">
                <i className="fas fa-search"></i>
              </span>
            </form>
          </div>

          <ul className="navbar-nav flex-row">
            <li className="nav-item me-3 me-lg-1">
              <a className="nav-link d-sm-flex align-items-sm-center" href="/">
                <img
                  src="https://mdbcdn.b-cdn.net/img/new/avatars/1.webp"
                  className="rounded-circle"
                  height="22"
                  alt="Black and White Portrait of a Man"
                  loading="lazy"
                />
                <strong className="d-none d-sm-block ms-1">John</strong>
              </a>
            </li>
            <li className="nav-item me-3 me-lg-1">
              <a className="nav-link" href="/">
                <span>
                  <i className="fas fa-plus-circle fa-lg"></i>
                </span>
              </a>
            </li>
            <li className="nav-item dropdown me-3 me-lg-1">
              <a
                className="nav-link dropdown-toggle hidden-arrow"
                href="/"
                id="navbarDropdownMenuLink"
                role="button"
                data-mdb-toggle="dropdown"
                aria-expanded="false"
              >
                <i className="fas fa-comments fa-lg"></i>

                <span className="badge rounded-pill badge-notification bg-danger">
                  6
                </span>
              </a>
              <ul
                className="dropdown-menu dropdown-menu-end"
                aria-labelledby="navbarDropdownMenuLink"
              >
                <li>
                  <a className="dropdown-item" href="/">
                    Some news
                  </a>
                </li>
                <li>
                  <a className="dropdown-item" href="/">
                    Another news
                  </a>
                </li>
                <li>
                  <a className="dropdown-item" href="/">
                    Something else here
                  </a>
                </li>
              </ul>
            </li>
            <li className="nav-item dropdown me-3 me-lg-1">
              <a
                className="nav-link dropdown-toggle hidden-arrow"
                href="/"
                id="navbarDropdownMenuLink"
                role="button"
                data-mdb-toggle="dropdown"
                aria-expanded="false"
              >
                <i className="fas fa-bell fa-lg"></i>
                <span className="badge rounded-pill badge-notification bg-danger">
                  12
                </span>
              </a>
              <ul
                className="dropdown-menu dropdown-menu-end"
                aria-labelledby="navbarDropdownMenuLink"
              >
                <li>
                  <a className="dropdown-item" href="/">
                    Some news
                  </a>
                </li>
                <li>
                  <a className="dropdown-item" href="/">
                    Another news
                  </a>
                </li>
                <li>
                  <a className="dropdown-item" href="/">
                    Something else here
                  </a>
                </li>
              </ul>
            </li>
            <li className="nav-item dropdown me-3 me-lg-1">
              <a
                className="nav-link dropdown-toggle hidden-arrow"
                href="/"
                id="navbarDropdownMenuLink"
                role="button"
                data-mdb-toggle="dropdown"
                aria-expanded="false"
              >
                <i className="fas fa-chevron-circle-down fa-lg"></i>
              </a>
              <ul
                className="dropdown-menu dropdown-menu-end"
                aria-labelledby="navbarDropdownMenuLink"
              >
                <li>
                  <a className="dropdown-item" href="/">
                    Some news
                  </a>
                </li>
                <li>
                  <a className="dropdown-item" href="/">
                    Another news
                  </a>
                </li>
                <li>
                  <a className="dropdown-item" href="/">
                    Something else here
                  </a>
                </li>
              </ul>
            </li>
          </ul>
        </div>
      </nav>

      {
        // the generate idcard screen
        <div>
          <div className="container">
            <div className="row mt-5">
              <div className="col-md-4 mt-3">
                <main>
                  <Marquee>
                    Hello student, carefully go through the ID card creation
                    before completing the form, and make sure correct
                    informations are filled on this ID before submiting the
                    form. Once ID card is created, you might not be able to edit
                    again. to the left handside is the ID card interface and to
                    the left hand side of the screen is the form to complete the
                    ID card Goodluck champ!
                  </Marquee>
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
                            <img
                              className="passport"
                              src={Passport}
                              alt="passport"
                            />
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
                                    value={inputValueName}
                                  />
                                </li>
                                <li>
                                  <input
                                    type="text"
                                    className="d-forms"
                                    placeholder="STUDENT"
                                    value={inputValueDesig}
                                  />
                                </li>
                                <li>
                                  <input
                                    type="text"
                                    className="d-forms"
                                    placeholder="LASG/WDC/CTO/123"
                                    value={inputValueStdntNo}
                                  />
                                </li>
                                <li>
                                  <input
                                    type="text"
                                    className="d-forms"
                                    placeholder="SEWING & FASHION"
                                    value={inputValueDept}
                                  />
                                </li>
                                <li>
                                  <input
                                    type="text"
                                    className="d-forms"
                                    placeholder="DECEMBER, 2023"
                                    value={inputValueExp}
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
                                    src={Passport}
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
                <main>
                  <div className="idcardBoxs mt-3">
                    <div className="container">
                      
                    </div>
                  </div>
                </main>
              </div>
              <div className="col-md-4 mt-3">
                <span>Fill this form to create your ID Card</span>
                <form>
                  <div className="formFiller gap-2">
                    <input
                      type="text"
                      className="form-control name"
                      placeholder="full name"
                      onChange={handleChangeName}
                    />
                    <input
                      type="text"
                      className="form-control designation mt-3"
                      placeholder="student"
                      onChange={handleChangeDesig}
                    />
                    <input
                      type="text"
                      className="form-control studentNo mt-3"
                      placeholder="LASG N0"
                      onChange={handleChangeStdntNo}
                    />

                    <select
                      className="form-control studentNo mt-3"
                      onChange={handleChangeDept}
                    >
                      <option className="disabled">Choose Department</option>
                      <option>Computer Techniques</option>
                      <option>Barbing </option>
                      <option>Textile Design</option>
                      <option>Catering</option>
                      <option>Sewing & Fashion</option>
                      <option>Hairdressing</option>
                      <option>Adult Literacy</option>
                      <option>Photography</option>
                    </select>
                    <input
                      type="text"
                      className="form-control expDate mt-3"
                      value="DECEMBER, 2023"
                      onChange={handleChangeExp}
                    />
                    <input
                      type="text"
                      className="form-control signature mt-3"
                    />
                    <button className="btn btn-primary" type="submit">
                      Submit
                    </button>
                  </div>
                </form>
              </div>
              <div className="col-md-4 mt-3">
                <main>
                  <img width="100%" src={Iconics} alt="iconics" />
                </main>
              </div>
            </div>
          </div>
        </div>
      }
    </div>
  );
};

export default GenerateId;
