"use client";

import { Button, Container, TextField } from "@mui/material";
import styles from "./profile.module.sass";
import Image from "next/image";
import { FaRegEdit } from "react-icons/fa";
import { useState } from "react";

import ComplaintsBlog from "./ComplaintsBlog";

const ProfileUser = () => {
  const [input, setInput] = useState<boolean>(false);
  const [chandeName, setChangename] = useState<boolean>(false);
  const [email, setEmail] = useState<string>("sadasd@gmail.com");
  const [name, setName] = useState<string>("Укиев Айдин Талантович");
  const [btnText, setBtnText] = useState<string>("Редактировать");

  const [image, setImage] = useState<any>("/image/spiderman.jpg");

  const changehandle = (e: any) => {
    setEmail(e.target.value);
  };
  const changehandleNameUser = (e: any) => {
    setName(e.target.value);
  };

  const sendChangeName = () => {
    setChangename(!chandeName);
  };

  const sendChangeEmail = () => {
    setInput(!input);
  };

  const changeImgClick = () => {
    const newImg =
      "https://upload.wikimedia.org/wikipedia/ru/thumb/3/31/Tobey_Maguire_as_Spider-Man.jpeg/560px-Tobey_Maguire_as_Spider-Man.jpeg";
    setImage(newImg);
  };

  return (
    <Container
      className={styles.container}
      sx={{
        paddingTop: "50px",
        maxWidth: "1280px",
      }}
    >
      <h3 className={styles.title_profile}>Профиль пользователя</h3>
      <div className={styles.data_user}>
        <div className={styles.user_img_blog}>
          <Image
            src="/image/spiderman.jpg"
            width={170}
            height={170}
            alt="profile-user"
            className={styles.user_picture}
          />
          <button className={styles.hover_blog} onClick={changeImgClick}>
            <FaRegEdit className={styles.icon_edit} />
            Редактировать
          </button>
        </div>
        <div className={styles.input_data_group}>
          <div className={styles.input_group}>
            {chandeName && (
              <TextField
                id="standard-basic"
                label="Введите ФИО"
                variant="standard"
                // value="sdcsdc"
                placeholder="Введите ФИО"
                onChange={changehandleNameUser}
              />
            )}
            {!chandeName && <h3 className={styles.title_container}>{name}</h3>}
            <Button variant="contained" onClick={sendChangeName}>
              {!chandeName ? "Редактировать" : "Сохранить"}
            </Button>
          </div>
          <div className={styles.input_group}>
            {input && (
              <TextField
                id="standard-basic"
                label="Введите изменённый емайл"
                variant="standard"
                // value="sdcsdc"
                placeholder="Введите Email адрес"
                onChange={changehandle}
              />
            )}
            {!input && <h3 className={styles.title_container}>{email}</h3>}
            <Button variant="contained">
              {!input ? "Редактировать" : "Сохранить"}
            </Button>
          </div>
        </div>
      </div>
      <ComplaintsBlog />
    </Container>
  );
};

export default ProfileUser;
