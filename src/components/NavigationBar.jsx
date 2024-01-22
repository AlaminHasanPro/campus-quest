import { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../Context/AuthProvider";
import { FaUserCircle } from "react-icons/fa";
import logo from "./../../public/LogoTest.png";

const NavigationBar = () => {
  const { user, logOut } = useContext(AuthContext);
  console.log(user);
  const handleLogout = () => {
    logOut()
      .then()
      .catch((error) => {
        console.error(error);
      });
  };

  const navItems = (
    <>
      <li>
        <Link to="/">Home</Link>
      </li>
      <li>
        <Link to="colleges">Colleges</Link>
      </li>
      <li>
        <Link to="admission">Admission</Link>
      </li>
      <li>
        <Link to="/myColleges">My College</Link>
      </li>
    </>
  );

  return (
    <div className="navbar bg-base-100 py-6">
      <div className="navbar-start">
        <div className="dropdown">
          <label tabIndex={0} className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </label>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
          >
            {navItems}
          </ul>
        </div>

        <Link className="text-2xl font-bold flex items-center fixed bg-transparent" to="/">
          <span className="text-green-500">Campus</span>
          <span className="text-red-400">Quest</span>
          <img className="h-48 w-48 " src={logo} alt="" />
        </Link>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">{navItems}</ul>
      </div>
      <div className="join">
        <input
          className="input input-bordered join-item rounded-full"
          placeholder="Search College"
        />
        <button className="btn join-item bg-orange-400 rounded-full ">
          Subscribe
        </button>
      </div>
      <div className="navbar-end">
        <div className="">
          <div className="tooltip  tooltip-left" data-tip={user?.displayName}>
            {user?.photoURL ? (
              <img className="h-12 w-12 rounded-full" src={user.photoURL} />
            ) : (
              user && <FaUserCircle className="h-12 w-12" />
            )}
          </div>
        </div>
        {user ? (
          <Link onClick={handleLogout} className="bg-orange-500 btn md:mx-5">
            Log Out
          </Link>
        ) : (
          <Link className="btn md:mx-5 bg-orange-500" to="/login">
            Login
          </Link>
        )}
      </div>
    </div>
  );
};

export default NavigationBar;
