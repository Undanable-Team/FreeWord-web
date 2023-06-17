import { Button, Container, TextField } from "@mui/material";
import styles from "./profile.module.sass";
import Image from "next/image";
import { FaRegEdit } from "react-icons/fa";
import { useState } from "react";

const ProfileUser = () => {
  const [input, setInput] = useState<boolean>(false);
  const [chandeName, setChangename] = useState<boolean>(false);
  const [email, setEmail] = useState<string>("sadasd@gmail.com");
  const [name, setName] = useState<string>("Укиев Айдин Талантович");
  const [btnText, setBtnText] = useState<string>("Редактировать");

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

  return (
    <Container
      sx={{
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
          <button className={styles.hover_blog}>
            <FaRegEdit className={styles.icon_edit} />
            Редактировать
          </button>
        </div>
        <div className={styles.input_data_group}>
          <div className={styles.input_group}>
            {chandeName && (
              <TextField
                id="standard-basic"
                label="Введите изменённый емайл"
                variant="standard"
                // value="sdcsdc"
                placeholder="Введите Email адрес"
                onChange={changehandleNameUser}
              />
            )}
            {!chandeName && <h3>{name}</h3>}
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
            {!input && <h3>{email}</h3>}
            <Button variant="contained" onClick={sendChangeEmail}>
              {!input ? "Редактировать" : "Сохранить"}
            </Button>
          </div>
        </div>
      </div>
    </Container>
  );
};

export default ProfileUser;
