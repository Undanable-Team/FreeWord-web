import { Container } from "@mui/material";
import React from "react";
import styles from "./regist.module.sass";
import logo from '../../../public/img/logo.svg'
import { BsEnvelopeFill, BsCpuFill } from "react-icons/bs";
const RegistrPage = () => {
  return (
    <div className={styles.conteiner}>
      <div className={styles.box}>
     <img src={logo} alt="" />
        <h1 className={styles.text}>Registration</h1>
        <div className={styles.value}>
          <form>
            <div className={styles.inputbox}>
              <input type="email" required name="email" />
              
              <BsEnvelopeFill className={styles.icon} />
            </div>
            <div className={styles.inputbox}>
              <input required name="password" />
             
              <BsCpuFill className={styles.icon} />
            </div>
            {/* <div className={styles.forget}>
              <label htmlFor="">
                <input type="checkbox" />
                Remember me <a href="#">Forget Password</a>
              </label>
            </div> */}
            <button className={styles.btn}>Log in</button>
            <div className={styles.registr}>
              <p>
                Yours have  account? <a href="@">sign in</a>
              </p>
              <p className={styles.error_title}></p>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default RegistrPage;
