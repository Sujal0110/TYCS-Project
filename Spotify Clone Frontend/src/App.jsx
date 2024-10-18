import React, { useContext, useState, useEffect } from "react";
import Sidebar from "./components/Sidebar";
import Player from "./components/Player";
import Display from "./components/Display";
import { PlayerContext } from "./context/PlayerContext";
import { Route, Routes, useNavigate } from "react-router-dom";
import Login from "./components/Login";
import ComingSoon from "./components/ComingSoon";
import SignUp from "./components/SignUp";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const App = () => {
    const { audioRef, track, songsData } = useContext(PlayerContext);
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    const [Chart, setChart] = useState("");
    const [password, setPassword] = useState("");
    const [email, setEmail] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");
    const navigate = useNavigate();

    const notifyLogin = () => {
        toast.success("Login successfully!");
    };
    const notifySignup = () => {
        toast.success("Signup successfully!");
    };

    const handleLogin = (e) => {
        e.preventDefault();
        localStorage.setItem("userEmail", email);
        setIsLoggedIn(true);
        navigate(-1);
        notifyLogin();
    };

    const handleSignup = (e) => {
        e.preventDefault();
        if (password !== confirmPassword) {
            toast.error("Passwords don't match!");
        } else {
            localStorage.setItem("userEmail", email);
            setIsLoggedIn(true);
            navigate(-2);
            notifySignup();
        }
    };
    const handleLogout = () => {
        setIsLoggedIn(false);
        localStorage.removeItem("userEmail");
    };
    useEffect(() => {
        const savedEmail = localStorage.getItem("userEmail");
        if (savedEmail) {
            setIsLoggedIn(true);
            setEmail(savedEmail);
        }
    }, []);

    useEffect(() => {
        const savedEmail = localStorage.getItem("userEmail");
        if (savedEmail) {
            setChart(savedEmail.charAt(0).toUpperCase());
        } else {
            setChart("");
        }
    }, [isLoggedIn]);
    return (
        <>
            <ToastContainer />
            <Routes>
                <Route
                    path="*"
                    element={
                        <div className="h-screen bg-black">
                            {songsData.length !== 0 ? (
                                <>
                                    <div className="h-[90%] flex">
                                        <Sidebar />
                                        <Display
                                            Chart={Chart}
                                            isLoggedIn={isLoggedIn}
                                            handleLogout={handleLogout}
                                        />
                                    </div>
                                    <Player />
                                </>
                            ) : null}

                            <audio
                                ref={audioRef}
                                src={track ? track.file : ""}
                                preload="auto"></audio>
                        </div>
                    }
                />
                <Route
                    path="/login"
                    element={
                        <Login
                            email={email}
                            setEmail={setEmail}
                            password={password}
                            setPassword={setPassword}
                            setChart={setChart}
                            handleLogin={handleLogin}
                        />
                    }
                />
                <Route
                    path="/signup"
                    element={
                        <SignUp
                            setChart={setChart}
                            handleSignup={handleSignup}
                            email={email}
                            setEmail={setEmail}
                            password={password}
                            setPassword={setPassword}
                            confirmPassword={confirmPassword}
                            setConfirmPassword={setConfirmPassword}
                        />
                    }
                />
                <Route path="/premium" element={<ComingSoon />} />
                <Route path="/installapp" element={<ComingSoon />} />
            </Routes>
        </>
    );
};

export default App;
