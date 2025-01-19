import { useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import { AtSign, Phone, Lock, Eye, EyeOff } from "lucide-react";
import axios from "axios";

const LogIn = () => {
  const [loginMethod, setLoginMethod] = useState("email");
  const [formData, setFormData] = useState({
    emailOrPhone: "",
    password: "",
  });
  const [showPassword, setShowPassword] = useState(false);
  const [errors, setErrors] = useState({});

  const navigate = useNavigate();

  const validateForm = () => {
    const newErrors = {};

    if (!formData.emailOrPhone) {
      newErrors.emailOrPhone = "This field is required";
    } else if (loginMethod === "email") {
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!emailRegex.test(formData.emailOrPhone)) {
        newErrors.emailOrPhone = "Invalid email format";
      }
    } else if (loginMethod === "phone") {
      const phoneRegex = /^\+?[\d\s-]{10,}$/;
      if (!phoneRegex.test(formData.emailOrPhone)) {
        newErrors.emailOrPhone = "Invalid phone number format";
      }
    }

    if (!formData.password) {
      newErrors.password = "Password is required";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (validateForm()) {
      try {
        // Here you would typically make an API call to your backend
        const response = {};
        console.log("Form submitted:", {
          loginMethod,
          ...formData,
          response,
        });
        if (loginMethod === "phone") {
          if (
            formData.emailOrPhone === `${import.meta.env.VITE_PHONE_NUMBER}` &&
            formData.password === `${import.meta.env.VITE_PASSWORD}`
          ) {
            navigate("/home");
          }
        }
      } catch (error) {
        console.error("Login error:", error);
      }
    }
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
    // Clear error when user starts typing
    if (errors[name]) {
      setErrors((prev) => ({
        ...prev,
        [name]: "",
      }));
    }
  };

  return (
    <div className="w-full max-w-md mx-auto p-6 bg-white rounded-lg shadow-md">
      <h2 className="text-2xl text-cyan-500 text-center mb-6">
        <span className="text-green-500">L</span>ogin
      </h2>

      <div className="flex gap-4 mb-6">
        <button
          type="button"
          onClick={() => setLoginMethod("email")}
          className={`flex-1 py-2 px-4 rounded-md ${
            loginMethod === "email"
              ? "bg-green-400 text-white"
              : "bg-gray-100 text-gray-700"
          }`}
        >
          Email
        </button>
        <button
          type="button"
          onClick={() => setLoginMethod("phone")}
          className={`flex-1 py-2 px-4 rounded-md ${
            loginMethod === "phone"
              ? "bg-green-400 text-white"
              : "bg-gray-100 text-gray-700"
          }`}
        >
          Phone
        </button>
      </div>

      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label className="block text-sm font-light text-gray-700 mb-1">
            {loginMethod === "email" ? "Email" : "Phone Number"}
          </label>
          <div className="relative">
            <span className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400">
              {loginMethod === "email" ? (
                <AtSign size={20} />
              ) : (
                <Phone size={20} />
              )}
            </span>
            <input
              type={loginMethod === "email" ? "email" : "tel"}
              name="emailOrPhone"
              value={formData.emailOrPhone}
              onChange={handleInputChange}
              placeholder={
                loginMethod === "email"
                  ? "Enter your email"
                  : "Enter your phone number"
              }
              className={`w-full pl-10 pr-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-green-400 ${
                errors.emailOrPhone ? "border-red-500" : "border-gray-300"
              }`}
            />
          </div>
          {errors.emailOrPhone && (
            <p className="mt-1 text-sm text-red-500">{errors.emailOrPhone}</p>
          )}
        </div>

        <div>
          <label className="block text-sm font-light text-gray-700 mb-1">
            Password
          </label>
          <div className="relative">
            <span className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400">
              <Lock size={20} />
            </span>
            <input
              type={showPassword ? "text" : "password"}
              name="password"
              value={formData.password}
              onChange={handleInputChange}
              placeholder="Enter your password"
              className={`w-full pl-10 pr-12 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-green-400 ${
                errors.password ? "border-red-500" : "border-gray-300"
              }`}
            />
            <button
              type="button"
              onClick={() => setShowPassword(!showPassword)}
              className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400"
            >
              {showPassword ? <EyeOff size={20} /> : <Eye size={20} />}
            </button>
          </div>
          {errors.password && (
            <p className="mt-1 text-sm text-red-500">{errors.password}</p>
          )}
        </div>

        <button
          type="submit"
          className="w-full bg-green-400 text-white py-2 px-4 rounded-md hover:bg-green-400 focus:outline-none focus:ring-2 focus:ring-green-400 focus:ring-offset-2 transition-colors"
        >
          Login
        </button>
      </form>
      <p className="text-center text-sm text-gray-600 mt-4">
        Don't have an account?{" "}
        <NavLink
          to="/auth/signup"
          className="text-green-400 hover:text-green-500"
        >
          Sign up
        </NavLink>
      </p>
    </div>
  );
};

export default LogIn;
