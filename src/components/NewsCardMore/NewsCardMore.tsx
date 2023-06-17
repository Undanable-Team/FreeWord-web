import React from "react";
import styles from "./newsCardMore.module.sass";

const NewsCardMore: React.FC<{ id: number }> = ({ id }) => {
  return (
    <div className={styles.newsCardMore}>
      <div className={styles.container}>News Card More {id}</div>
    </div>
  );
};

export default NewsCardMore;
