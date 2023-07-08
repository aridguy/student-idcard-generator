
import React, { useState } from 'react';
import SignatureCanvas from 'react-signature-canvas'
import './Admin.css'

const Admin = () => {
    const [getRandomNumbers, setGetRandomNumbers] = useState('')
    const generateRandomNumber = () => {
        const randomLength = Math.floor(Math.random() * 3) + 10;
        let randomNumber = '';
        for (let i = 0; i < randomLength; i++) {
            const digit = Math.floor(Math.random() * 10);
            randomNumber += digit;
        }

        return randomNumber;
    };
    const handleClick = () => {
        const randomNum = generateRandomNumber();
        setGetRandomNumbers(randomNum);
    };
    return (
        <div>
            <nav className="navbar navbar-expand-lg navbar-light bg-light">
                <div className="container justify-content-between">
                    <div className="d-flex">
                        <a className="navbar-brand me-2 mb-1 d-flex align-items-center" href="/">
                            <img
                                src="https://mdbcdn.b-cdn.net/img/logo/mdb-transaprent-noshadows.webp"
                                height="20"
                                alt="MDB Logo"
                                loading="lazy"
                            />
                        </a>
                        <form className="input-group w-auto my-auto d-none d-sm-flex">
                            <input
                                autocomplete="off"
                                type="search"
                                className="form-control rounded"
                                placeholder="Search"

                            />
                            <span className="input-group-text border-0 d-none d-lg-flex"
                            ><i className="fas fa-search"></i></span>
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
                                <span><i className="fas fa-plus-circle fa-lg"></i></span>
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

                                <span className="badge rounded-pill badge-notification bg-danger">6</span>
                            </a>
                            <ul
                                className="dropdown-menu dropdown-menu-end"
                                aria-labelledby="navbarDropdownMenuLink"
                            >
                                <li>
                                    <a className="dropdown-item" href="/">Some news</a>
                                </li>
                                <li>
                                    <a className="dropdown-item" href="/">Another news</a>
                                </li>
                                <li>
                                    <a className="dropdown-item" href="/">Something else here</a>
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
                                <span className="badge rounded-pill badge-notification bg-danger">12</span>
                            </a>
                            <ul
                                className="dropdown-menu dropdown-menu-end"
                                aria-labelledby="navbarDropdownMenuLink"
                            >
                                <li>
                                    <a className="dropdown-item" href="/">Some news</a>
                                </li>
                                <li>
                                    <a className="dropdown-item" href="/">Another news</a>
                                </li>
                                <li>
                                    <a className="dropdown-item" href="/">Something else here</a>
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
                                    <a className="dropdown-item" href="/">Some news</a>
                                </li>
                                <li>
                                    <a className="dropdown-item" href="/">Another news</a>
                                </li>
                                <li>
                                    <a className="dropdown-item" href="/">Something else here</a>
                                </li>
                            </ul>
                        </li>
                    </ul>
                </div>
            </nav>
            <div className='container'>
                <div className='row'>
                    <div className='col-md-4'></div>
                    <div className='col-md-4'>
                        <div className='signArea'>
                            <SignatureCanvas penColor='black'
                                canvasProps={{ width: 500, height: 200, className: 'sigCanvas' }} />,
                        </div>
                        <h1>'{getRandomNumbers}' has now been generated</h1>
                        <h2>'{getRandomNumbers}' has now been generated</h2>
                        <button className="btn btn-primary btn-lg btn-block" onClick={handleClick}>Generate Random String</button>

                    </div>
                    <div className='col-md-4'></div>
                </div>
            </div>
        </div>
    );
}

export default Admin;
