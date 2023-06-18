import React, { useState } from "react";
import { Button } from "@mui/material";
import style from "./style.module.sass";
import Image from "next/image";
import Modal from "@/components/Modal";
import Card from "./Card";

interface ButtonProps {
  text: string;
  data: any;
}

const NewsPage = () => {
  const [activeButton, setActiveButton] = useState<ButtonProps>({
    text: "Все новости",
    data: [
      {
        title: "НОВОСТИ",
        description: "lorem",
        img: {
          url: "./bgcard.png",
          alt: "novosty",
        },
        date: "12.08.04",
      },
      {
        title: "НОВОСТИ",
        description: "lorem",
        img: {
          url: "./bgcard.png",
          alt: "novosty",
        },
        date: "12.08.04",
      },
      {
        title: "НОВОСТИ",
        description: "lorem",
        img: {
          url: "./bgcard.png",
          alt: "novosty",
        },
        date: "12.08.04",
      },
      {
        title: "НОВОСТИ",
        description: "lorem",
        img: {
          url: "./bgcard.png",
          alt: "novosty",
        },
        date: "12.08.04",
      },
      {
        title: "НОВОСТИ",
        description: "lorem",
        img: {
          url: "./bgcard.png",
          alt: "novosty",
        },
        date: "12.08.04",
      },
      {
        title: "НОВОСТИ",
        description: "lorem",
        img: {
          url: "./bgcard.png",
          alt: "novosty",
        },
        date: "12.08.04",
      },
    ],
  });
  const [data, setData] = useState(activeButton.data);
  const [show, setShow] = useState(false);
  const [showModal, setShowModal] = useState(false);

  const handleButtonChangeData = (button: ButtonProps) => {
    setActiveButton(button);
    setData(button.data);
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
  const buttons: ButtonProps[] = [
    { text: "Все новости", data: [] },
    { text: "В кыргызстане", data: [] },
    { text: "Экономика", data: [] },
    { text: "Политика", data: [] },
  ];

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
          {data.map((item: any, index: number) => (
            <Card
              url={data?.img?.url}
              alt={data?.img?.alt}
              title={item?.title}
              description={item?.description}
              date={item?.date}
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
