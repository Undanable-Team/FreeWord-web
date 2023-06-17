import { Button } from "@mui/base";
import Image from "next/image";
import React, { ReactElement } from "react";
import styles from "./newsCard.module.sass";

interface cardProps {
  title: string;
  imgPath: string;
}

const NewsCard: React.FC<cardProps> = ({ title, imgPath }): ReactElement => {
  return (
    <div className={styles.card}>
      <Image src={`/${imgPath}`} alt="" width={300} height={200} />
      <div className={styles.cardMain}>
        <h2 className={styles.cardTitle}>{title}</h2>
        <Button>Подробнее</Button>
      </div>
    </div>
  );
};

export default NewsCard;
