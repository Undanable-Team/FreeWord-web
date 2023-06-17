import Image from "next/image";
import React, { ReactElement } from "react";
import styles from "./newsCard.module.sass";
import { FaCalendar, FaEye } from "react-icons/fa";
import { useRouter } from "next/router";

interface cardProps {
  title: string;
  imgPath: string;
  date: string;
  views: number;
}

const NewsCard: React.FC<cardProps> = ({
  title,
  imgPath,
  date,
  views,
}): ReactElement => {
  const router = useRouter();

  const id = 1;

  return (
    <div
      className={styles.card}
      onClick={() => router.push(`/full-post/${id}`)}
    >
      <Image src={`/${imgPath}`} alt="" width={300} height={200} />
      <div className={styles.cardMain}>
        <h2 className={styles.cardTitle}>{title}</h2>
        <div className={styles.newsInfo}>
          <div className={styles.dateWrap}>
            <FaCalendar />
            <span className={styles.date}>{date}</span>
          </div>
          <div className={styles.viewsWrap}>
            <FaEye />
            <span className={styles.views}>{views}</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NewsCard;
