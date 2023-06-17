import React, { FormEvent, useEffect, useState } from "react";
import styles from "./regist.module.sass";

import { IoEyeSharp } from "react-icons/io5";
import {
  Box,
  Button,
  Checkbox,
  FormControlLabel,
  IconButton,
  TextField,
} from "@mui/material";
import Link from "next/link";
import { useRouter } from "next/router";
import { PostRegistr } from "@/api";
// import Cookie from 'js-cookie'

export interface registerData {
  // firstname: string;
  // lastname: string;
  username: string;
  email: string;
  password: string;
}

const RegisterPage = () => {
  const router = useRouter();
  const [showPassword, setShowPassword] = useState<boolean>(false);

  const [confirmPass, setConfirmPass] = useState<string>("");

  const [user, setUser] = useState<registerData>({
    // firstname: "",
    // lastname: "",
    username: "",
    email: "",
    password: "",
  });

  const [regSubmit, setRegSubmit] = useState<boolean>(false);

  useEffect(() => {
    const userData = Object.keys(user).map((key) => {
      if (user[key] !== "") {
        return true;
      } else {
        return false;
      }
    });
    if (
      user.password === confirmPass &&
      user.password !== "" &&
      !userData.includes(false)
    ) {
      setRegSubmit(true);
    } else {
      setRegSubmit(false);
    }
  }, [user, confirmPass]);

  const change = (e: React.ChangeEvent<HTMLInputElement>) => {
    setUser((prev: registerData) => {
      return { ...prev, [e.target.name]: e.target.value };
    });
  };

  const submit = async (e: FormEvent) => {
    e.preventDefault();
    // createUser(user).then((resp: { jwt: string; user: object }) => {
    //     Cookie.set('token', resp.jwt, { expires: 7 })
    // })

   const postData = await PostRegistr(user)

 console.log(postData)
  };
  const click = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    router.push("/Test");

    const togglePasswordVisibility = () => {
      setShowPassword(!showPassword);
    };
  };

  return (
    <div className={styles.cont}>
      <form className={styles.form} onSubmit={submit}>
        <h2 className={styles["form-title"]}>Регистрация</h2>
        <div className={styles["form-content"]}>
          <Box sx={{ display: "flex", gap: 2 }}>
            {/* <TextField
              id="outlined-basic"
              label="Имя"
              variant="outlined"
              name="firstname"
              required
              onChange={change}
            />
            <TextField
              id="outlined-basic"
              label="Фамилия"
              variant="outlined"
              name="lastname"
              required
              onChange={change}
            /> */}
          </Box>
          <TextField
            id="outlined-basic"
            label="Никнейм"
            variant="outlined"
            name="username"
            required
            onChange={change}
          />
          <TextField
            id="outlined-basic"
            label="Email"
            variant="outlined"
            name="email"
            required
            onChange={change}
          />
          <Box sx={{ display: "flex", gap: 2 }}>
            <TextField
              id="outlined-basic"
              label="Пароль"
              variant="outlined"
              type={showPassword ? "text" : "password"}
              onChange={change}
              name="password"
              required
              helperText={
                user.password !== confirmPass && "Пароли не совпадают"
              }
            />
            <TextField
              id="outlined-basic"
              label="Повторите пароль"
              variant="outlined"
              type={showPassword ? "text" : "password"}
              onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                setConfirmPass(e.target.value)
              }
              name="confirmPassword"
            />
      
          </Box>
          <FormControlLabel
            control={<Checkbox />}
            label="Показывать пароль"
            onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
              setShowPassword(e.target.checked)
            }
          />

          <Button
            variant="contained"
            type="submit"
            onClick={click}
            disabled={!regSubmit}
          >
            Создать аккаунт
          </Button>
          <span className={styles.spann}>
            Есть аккаунт? Тогда <Link href={"/Auth"}>авторизуйтесь</Link>
          </span>
        </div>
      </form>
    </div>
  );
};

export default RegisterPage;
