import React, { useState } from "react";
import { Button } from "@mui/material";
import style from "./style.module.sass";

interface ButtonProps {
  text: string;
  data: string;
}

const NewsPage = () => {
  const [activeButton, setActiveButton] = useState<ButtonProps | null>(null);
  const [data, setData] = useState("");

  const handleButtonClick = (button: ButtonProps) => {
    setActiveButton(button);
    setData(button.data);
  };

  const buttons: ButtonProps[] = [
    { text: "Все новости", data: "Данные для всех новостей" },
    { text: "В кыгрызстане", data: "Данные для новостей в Кыргызстане" },
    { text: "Экнономика", data: "Данные для новостей об экономике" },
    { text: "Политика", data: "Данные для новостей о политике" },
  ];

  return (
    <div className={style.News}>
      <div className={style.News__btns}>
        {buttons.map((button, index) => (
          <Button
            key={index}
            variant="contained"
            onClick={() => handleButtonClick(button)}
            className={`${style.News__btns__btn} ${
              activeButton === button
                ? style.active
                : style.News__btns__btn__disabled
            }`}
          >
            {button.text}
          </Button>
        ))}
      </div>
      <div className={style.News__card}>{data}</div>
    </div>
  );
};

export default NewsPage;
