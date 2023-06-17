import React, { useState } from "react";
import { Button } from "@mui/material";
import style from "./style.module.sass";
import Image from "next/image";
import Modal from "@/components/Modal";

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
        description: "loremasdaksodkasokdosakd",
        img: {
          url: "/bgcard.png",
          alt: "novosty",
        },
        date: "1213131",
      },
    ],
  });
  const [data, setData] = useState(activeButton.data);
  const [showModal, setShowModal] = useState(false);
  const handleButtonChangeData = (button: ButtonProps) => {
    setActiveButton(button);
    setData(button.data);
  };
  const handleButtonClickMore = (btn: ButtonProps) => {
    console.log(btn);
    console.log(btn.data);
  };
  const handleButtonClickAddReport = () => {
    setShowModal(!showModal);
  };

  const buttons: ButtonProps[] = [
    { text: "Все новости", data: [] },
    { text: "В кыргызстане", data: [] },
    { text: "Экономика", data: [] },
    { text: "Политика", data: [] },
  ];

  return (
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
          <div className={style.News__card} key={index}>
            <Image
              className={style.News__card__bg}
              src={data?.img?.url}
              width={287}
              height={466}
              alt={data?.img?.alt}
            />

            <div className={style.News__card__date}>
              <span>{item.date}</span>
            </div>
            <div className={style.News__card__info}>
              <span>{item.title}</span>
              <p>{item.description}</p>
              <Button
                variant="contained"
                onClick={() => {
                  handleButtonClickMore(item);
                }}
                className={style.News__card__info__btn}
              >
                Подробнее
              </Button>
            </div>
          </div>
        ))}
      </div>
      <div className={style.News__added}>
        {showModal && (
          <div className={style.News__added__modal}>
            <Button className={style.News__added__modal__btn}>
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
      {/* <Modal>Оставьте жалобу для улучшения нашего города</Modal> */}
    </div>
  );
};

export default NewsPage;
