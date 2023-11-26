// components/SignIn.js
import React, { useState, useEffect } from "react";
import styles from "@/styles/SignIn.module.css";
import Navbar from "../components/Navbar";
import Link from "next/link";
import {
  ChakraProvider,
  extendTheme,
  Alert,
  AlertIcon,
  CloseButton,
} from "@chakra-ui/react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faUser,
  faKey,
  faEye,
  faEyeSlash,
} from "@fortawesome/free-solid-svg-icons";

const SignIn = () => {
  const [isredPassAlertVisible, setIsredPassAlertVisible] = useState(false); 
  const [showPassword, setShowPassword] = useState(false);
  const [message, setMessage] = useState("");
  const [status, setStatus] = useState("");
  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };
  const [query, setQuery] = useState({
    email: "",
    password: "",
  });

  const theme = extendTheme({
    styles: {
      global: {
        body: {
          bg: "#0E101F",
          position: "fixed",
          top: "0",
          // overflowhidden: "hidden",
          width: "100%",
        },
      },
    },
  });

  return (
    <>
      <Navbar />
      <ChakraProvider theme={theme}>
        {isredEmailAlertVisible && (
          <Alert
            status="warning"
            variant="top-accent"
            className={styles.alertzindexImp}
          >
            <AlertIcon />
            {message}
            <CloseButton
              position="absolute"
              right="8px"
              top="8px"
              onClick={() => setIsredEmailAlertVisible(false)}
            />
          </Alert>
        )}
      </ChakraProvider>
      <div className={styles.body}>
        <div className={styles.signCont}>
          <h1 className={styles.signTitle}>Sign In</h1>
          <form method="POST" action="/userSignin">
            <div className={styles.signInfoItems}>
              <div className={styles.ItemCont}>
                <label className={styles.signUpLabel} htmlFor="signInemail">
                  <FontAwesomeIcon
                    icon={faUser}
                    className={styles.customIcon}
                  />
                  Email :{" "}
                </label>
                <input
                  type="email"
                  name="signInemail"
                  placeholder="Enter your email"
                  className={styles.signInemail}
                  onChange={(event) => {
                    setQuery({ ...query, email: event.target.value });
                  }}
                  required
                />
              </div>
              <div className={styles.ItemCont3}>
                <label className={styles.signUpLabel} htmlFor="signInpassword">
                  <FontAwesomeIcon icon={faKey} className={styles.customIcon} />
                  Password :{" "}
                </label>
                <input
                  type={showPassword ? "text" : "password"}
                  name="signInpassword"
                  placeholder="Enter your password"
                  className={styles.signInPassword}
                  onChange={(event) => {
                    setQuery({ ...query, password: event.target.value });
                  }}
                  required
                />
                <FontAwesomeIcon
                  icon={showPassword ? faEye : faEyeSlash}
                  className={styles.customEyeIcon}
                  id="passwordEye"
                  onClick={togglePasswordVisibility}
                />
              </div>
              <div className={styles.ItemCont2}>
                <button className={styles.signInBtn}>Sign In</button>
                <div className={styles.ItemCont1}>
                  <button className={styles.ForgotPasswordBtn}>
                    Forgot Password,
                  </button>
                  <button className={styles.CreateAccountBtn}>
                    <Link href="/SignUp" className={styles.signUpLink}>
                      Create New Account
                    </Link>
                  </button>
                </div>
              </div>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};
export default SignIn;
