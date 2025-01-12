import React from 'react'
import digitalImage from '../../src/assets/Digital-removebg-preview.png';

const Header = () => {
    return (
        <>
            <div className="navbar"
                style={{
                    background: "linear-gradient(to right, rgb(45, 0, 90), rgb(60, 0, 90) , rgb(108, 0, 108))",
                    boxShadow: "0 4px 15px rgba(0, 0, 0, 0.5)", // Transparent shadow
                    border: "1px solid rgba(255, 255, 255, 0.2)", // Transparent border
                }}>
                <div className="flex-1 ">
                    <a
                        className="btn btn-ghost text-xl"
                        href={digitalImage}
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        <img src={digitalImage} alt="Linked Image" className=" w-36 h-12" />
                    </a>
                </div>

                <div className="flex-none gap-2">
                    <div className="form-control">
                        <input
                            type="text"
                            placeholder="Search"
                            className="input input-bordered w-24 md:w-auto bg-transparent text-[#68006B] border-[#68006B] shadow-xl backdrop-blur-md focus:text-white"
                        />
                    </div>


                    <div className="dropdown dropdown-end">
                        <div tabIndex={0} role="button" className="btn btn-ghost btn-circle avatar">
                            <div className="ring-[#68006B] ring-offset-base-100 w-10 rounded-full ring ring-offset-2">
                                <img
                                    alt="Tailwind CSS Navbar component"
                                    src="https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_1280.png" />
                            </div>
                        </div>
                        <ul
                            tabIndex={0}
                            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow">
                            <li>
                                <a className="justify-between">
                                    Profile
                                    <span className="badge">New</span>
                                </a>
                            </li>
                            <li><a>Settings</a></li>
                            <li><a>Logout</a></li>
                        </ul>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Header