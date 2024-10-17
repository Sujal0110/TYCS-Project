import { useState } from "react";
import React from "react";
import { Link } from "react-router-dom";

const SignUp = ({
    setChart,
    handleSignup,
    password,
    setPassword,
    confirmPassword,
    setConfirmPassword,
}) => {
    const [email, setEmail] = useState("");

    const getChar = () => {
        setChart(email.charAt(0).toUpperCase());
    };

    return (
        <div className="flex items-center justify-center h-screen bg-gray-900">
            <div className="bg-gray-800 p-8 rounded-lg shadow-lg max-w-md w-full">
                <h2 className="text-3xl font-semibold text-white mb-6">
                    Sign Up for Spotify
                </h2>
                <form onSubmit={handleSignup}>
                    <div className="mb-4">
                        <label
                            className="block text-sm font-medium text-gray-400 mb-2"
                            htmlFor="email">
                            Email
                        </label>
                        <input
                            type="email"
                            id="email"
                            className="w-full px-4 py-2 text-gray-900 bg-gray-200 rounded-md focus:outline-none focus:ring focus:border-blue-300"
                            placeholder="Enter your email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            required
                            autoComplete="off"
                        />
                    </div>
                    <div className="mb-4">
                        <label
                            className="block text-sm font-medium text-gray-400 mb-2"
                            htmlFor="password">
                            Password
                        </label>
                        <input
                            type="password"
                            id="password"
                            className="w-full px-4 py-2 text-gray-900 bg-gray-200 rounded-md focus:outline-none focus:ring focus:border-blue-300"
                            placeholder="Enter your password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            required
                        />
                    </div>
                    <div className="mb-6">
                        <label
                            className="block text-sm font-medium text-gray-400 mb-2"
                            htmlFor="confirmPassword">
                            Confirm Password
                        </label>
                        <input
                            type="password"
                            id="confirmPassword"
                            className="w-full px-4 py-2 text-gray-900 bg-gray-200 rounded-md focus:outline-none focus:ring focus:border-blue-300"
                            placeholder="Confirm your password"
                            value={confirmPassword}
                            onChange={(e) => setConfirmPassword(e.target.value)}
                            required
                        />
                    </div>
                    <button
                        type="submit"
                        onClick={(e) => {
                            handleSignup(e);
                            getChar();
                        }}
                        className="w-full py-2 px-4 bg-green-500 text-white rounded-md hover:bg-green-600 transition duration-300">
                        Sign Up
                    </button>
                </form>
                <p className="text-gray-400 mt-4">
                    Already have an account?{" "}
                    <Link
                        className="text-green-500 hover:underline"
                        to="/login">
                        Login
                    </Link>
                </p>
            </div>
        </div>
    );
};

export default SignUp;
