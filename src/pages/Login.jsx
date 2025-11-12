import React, { useContext, useRef, useState } from "react";
import { FcGoogle } from "react-icons/fc";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import { Link, useLocation, useNavigate } from "react-router";
import { AuthContext } from "../components/AuthProvider";
import { toast } from "react-toastify";

const Login = () => {
  const {
    signInWithEmailAndPasswordFunc,
    googleLogInFunction,
    sendPassResetEmailFunction,
    setLoading,
    setUser,
  } = useContext(AuthContext);

  const navigate = useNavigate();
  const location = useLocation();
  const emailRef = useRef();
  const passwordRef = useRef();
  const [showPassword, setShowPassword] = useState(false);

  const from = location.state?.from?.pathname || "/";

  const handleEmailLogin = (e) => {
    e.preventDefault();
    const email = emailRef.current.value;
    const password = passwordRef.current.value;

    if (!email || !password) return toast.error("Please fill all fields");

    setLoading(true);
    signInWithEmailAndPasswordFunc(email, password)
      .then((res) => {
        setUser(res.user);
        setLoading(false);
        toast.success("Login Successful");
        navigate(from, { replace: true });
      })
      .catch((e) => {
        setLoading(false);
        toast.error(e.message);
      });
  };

  const handleGoogleSignIn = (e) => {
    e.preventDefault();
    setLoading(true);
    googleLogInFunction()
      .then((res) => {
        setUser(res.user);
        setLoading(false);
        toast.success("Login Successful");
        navigate(from, { replace: true });
      })
      .catch((e) => {
        setLoading(false);
        toast.error(e.message);
      });
  };

  const handleForgetPassword = (e) => {
    e.preventDefault();
    const email = emailRef.current.value;
    if (!email) return toast.error("Please enter your email first");
    sendPassResetEmailFunction(email)
      .then(() => toast.success("Check your email to reset password"))
      .catch((e) => toast.error(e.message));
  };

  return (
    <div className="hero bg-base-200 min-h-screen">
      <div className="hero-content flex-col lg:flex-row-reverse">
        <div className="text-center lg:text-left">
          <h1 className="text-4xl font-bold">Login now!</h1>
          <p className="py-6">
            Please log in for a better experience on our page.
          </p>
        </div>

        <form
          onSubmit={handleEmailLogin}
          className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl p-6"
        >
          <fieldset className="fieldset">
            <label className="label">Email</label>
            <input
              ref={emailRef}
              type="email"
              className="input"
              placeholder="Email"
              required
            />

            <label className="label">Password</label>
            <div className="relative">
              <input
                ref={passwordRef}
                type={showPassword ? "text" : "password"}
                className="input w-full pr-10"
                placeholder="Password"
                required
              />
              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                className="absolute right-3 top-3 text-gray-500 hover:text-gray-700"
              >
                {showPassword ? <FaEyeSlash /> : <FaEye />}
              </button>
            </div>

            <div>
              <button
                onClick={handleForgetPassword}
                type="button"
                className="link link-hover mt-2"
              >
                Forgot password?
              </button>
            </div>

            <button className="btn btn-neutral mt-4 w-full">Login</button>

            <p className="text-center mt-3">or</p>

            <button
              onClick={handleGoogleSignIn}
              type="button"
              className="btn btn-outline mt-2 flex items-center justify-center gap-2 w-full"
            >
              <FcGoogle /> Continue with Google
            </button>

            <p className="mt-5 flex justify-center gap-1">
              Don't have an account?
              <Link to="/signup" className="text-blue-500">
                Sign Up
              </Link>
            </p>
          </fieldset>
        </form>
      </div>
    </div>
  );
};

export default Login;
