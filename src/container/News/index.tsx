import React, { useEffect, useState } from "react";
import { Button } from "@mui/material";
import style from "./style.module.sass";
import Image from "next/image";
import Modal from "@/components/Modal";
import Card from "./Card";
import { getData } from "@/api";

interface ButtonProps {
  text: string;
  data?: any;
}

const NewsPage = () => {
  const [database, setDatabase] = useState<any[]>([]);
  console.log(database);

  const [activeButton, setActiveButton] = useState<ButtonProps>({
    text: "Все новости",
    data: database,
  });
  const [show, setShow] = useState(false);
  const [showModal, setShowModal] = useState(false);

  const handleButtonChangeData = (button: ButtonProps) => {
    setActiveButton(button);
    setDatabase(button.data);
  };
  const handleButtonClickAddReport = () => {
    setShow(!show);
  };
  const handleButtonClickModal = () => {
    setShowModal(true);
  };
  const closeButtonClickModal = () => {
    setShowModal(false);
  };
  console.log(database);

  const buttons: ButtonProps[] = [
    { text: "Все новости" },
    { text: "В кыргызстане", data: [] },
    { text: "Экономика", data: [] },
    { text: "Политика", data: [] },
  ];

  useEffect(() => {
    getData().then((res: any) => {
      setDatabase(res.data);
    });
  }, []);

  return (
    <>
      <div className={style.News}>
        <div className={style.News__div}>
          <h1 className={style.News__div__title}>Новости</h1>
        </div>
        <div className={style.News__btns}>
          {buttons.map((button, index) => (
            <Button
              key={index}
              variant="contained"
              onClick={() => handleButtonChangeData(button)}
              className={`${style.News__btns__btn} ${
                activeButton?.text === button.text
                  ? style.active
                  : style.News__btns__btn__disabled
              }`}
            >
              {button.text}
            </Button>
          ))}
        </div>
        <div className={style.News__cards}>
          {database &&
            database.map((item: any, index: number) => (
              <Card
                url={item?.attributes?.media?.data?.attributes?.url}
                alt={item?.attributes?.media?.data?.attributes?.name}
                title={item?.attributes?.title}
                description={item?.attributes?.description}
                date={item?.attributes?.publishedAt}
                key={index}
              />
            ))}
        </div>

        <div className={style.News__added}>
          {show && (
            <div className={style.News__added__modal}>
              <Button
                onClick={handleButtonClickModal}
                className={style.News__added__modal__btn}
              >
                Оставить Жалобу
              </Button>
              <Button className={style.News__added__modal__btn}>
                Оставить Заявку
              </Button>
            </div>
          )}
          <div className={style.plus}>
            <Button
              onClick={handleButtonClickAddReport}
              className={`${style.plus__btn} ${
                showModal ? style.plus__active : ""
              }`}
            >
              +
            </Button>
          </div>
        </div>
        <Modal open={showModal} onClose={closeButtonClickModal}>
          Оставьте жалобу для улучшения нашего города
        </Modal>
      </div>
    </>
  );
};

export default NewsPage;
