import { useRouter } from "next/navigation";

import React, { FormEvent, useEffect, useState } from "react";
import styles from "./style.module.sass";

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
// import { useRouter } from "next/router";
import { PostRegistr } from "@/api";
// import Cookie from 'js-cookie'

export interface registerData {
  firsname: string;
  lastname: string;
  username: string;
  email: string;
  password: string;
  phone: number;
  ages: number;
}

const RegisterPage = () => {
  const router = useRouter();
  const [showPassword, setShowPassword] = useState<boolean>(false);
  const [err, setErr] = useState<string>("");
  const [confirmPass, setConfirmPass] = useState<string>("");

  const [user, setUser] = useState<registerData>({
    firsname: "",
    lastname: "",
    username: "",
    email: "",
    password: "",
    phone: 0,
    ages: 0,
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

    const togglePasswordVisibility = () => {
      setShowPassword(!showPassword);
    };

    const postData = await PostRegistr(user)
      .then(() => router.push("/auth"))
      .catch((err) => {
        if (err.message.indexOf("400")) {
          setErr("такие данные уже существуют");
        } else if (err.message.indexOf("500")) {
          setErr("сервер времено не доступен");
        }
      });

    console.log(postData);
  };

  return (
    <div className={styles.cont}>
      <form className={styles.form} onSubmit={submit}>
        <h2 className={styles["form-title"]}>Регистрация</h2>
        <div className={styles["form-content"]}>
          <Box sx={{ display: "flex", gap: 2 }}>
            <TextField
              id="outlined-basic"
              label="Имя"
              variant="outlined"
              name="firsname"
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
            />
          </Box>
          <Box sx={{ display: "flex", gap: 2 }}>
            <TextField
              id="outlined-basic"
              label="возрост"
              variant="outlined"
              name="ages"
              required
              type="number"
              onChange={change}
            />
            <TextField
              id="outlined-basic"
              label="номер телефона"
              variant="outlined"
              name="phone"
              required
              onChange={change}
            />
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
            // onClick={click}
            disabled={!regSubmit}
          >
            Создать аккаунт
          </Button>
          {err && <span className={styles.err}>{err}</span>}
          <span className={styles.spann}>
            Есть аккаунт? Тогда <Link href={"/Auth"}>авторизуйтесь</Link>
          </span>
        </div>
      </form>
    </div>
  );
};

export default RegisterPage;
