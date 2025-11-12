import React, { useContext, useState } from "react";
import { NavLink, useNavigate } from "react-router";
import logo from "../assets/logo.png";
import { FaShoppingCart } from "react-icons/fa";
import { CartContext } from "./CartContext";
import { AuthContext } from "./AuthProvider";
import { toast } from "react-toastify";

const Navbar = () => {
  const { cartItems } = useContext(CartContext);
  const { user, setUser } = useContext(AuthContext);
  const navigate = useNavigate();
  const [dropdownOpen, setDropdownOpen] = useState(false);

  const totalItems = cartItems.reduce(
    (acc, item) => acc + (item.quantity || 1),
    0
  );

  const handleLogout = () => {
    setUser(null);
    toast.success("Logged out successfully");
    navigate("/");
  };

  const navLinkClass = ({ isActive }) =>
    isActive ? "text-purple-600 font-bold" : "text-green-600";

  return (
    <div className="navbar bg-base-100 lg:px-[70px] lg:py-[30px]">
      <div className="navbar-start">
        <NavLink to="/" className="flex items-center gap-2">
          <img src={logo} className="w-15" alt="logo" />
          <h2 className="font-bold text-green-700">GreenNest</h2>
        </NavLink>
      </div>

      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">
          <li>
            <NavLink to="/" className={navLinkClass}>
              Home
            </NavLink>
          </li>
          <li>
            <NavLink to="/plants" className={navLinkClass}>
              Plants
            </NavLink>
          </li>
          {user && (
            <li>
              <NavLink to="/profile" className={navLinkClass}>
                My Profile
              </NavLink>
            </li>
          )}
        </ul>
      </div>

      <div className="navbar-end flex items-center gap-3">
        <NavLink to="/cart">
          <button className="btn flex items-center gap-2 relative">
            <FaShoppingCart />
            Cart
            {totalItems > 0 && (
              <span className="absolute -top-2 -right-2 bg-red-600 text-white text-xs font-bold rounded-full w-5 h-5 flex items-center justify-center">
                {totalItems}
              </span>
            )}
          </button>
        </NavLink>

        {user ? (
          <div className="relative">
            <img
              src={user.photoURL || "https://via.placeholder.com/40"}
              alt={user.displayName || "User"}
              className="w-10 h-10 rounded-full cursor-pointer"
              onClick={() => setDropdownOpen(!dropdownOpen)}
            />

            {dropdownOpen && (
              <div className="absolute right-0 mt-2 w-48 bg-white shadow-lg rounded-lg z-50 p-4">
                <p className="text-sm font-semibold text-gray-700 mb-2">
                  {user.displayName || "No Name"}
                </p>
                <p className="text-sm text-gray-500 mb-4">{user.email}</p>
                <button
                  onClick={handleLogout}
                  className="btn btn-sm w-full bg-red-600 text-white hover:bg-red-700"
                >
                  Log Out
                </button>
              </div>
            )}
          </div>
        ) : (
          <div className="flex items-center gap-2">
            <NavLink to="/login">
              <button className="btn bg-green-600 text-white hover:bg-green-700">
                Log In
              </button>
            </NavLink>

            <NavLink to="/signup">
              <button className="btn bg-purple-600 text-white hover:bg-purple-700">
                Register
              </button>
            </NavLink>
          </div>
        )}
      </div>
    </div>
  );
};

export default Navbar;
