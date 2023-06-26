import React from "react";
import styles from "./PriceCol.module.css";

const PriceCol = ({
  name,
  price,
  speed,
  info,
  isChosen,
  titleColor,
  speedBlockColor,
  onChangeColumn,
}) => {
  return (
    <div
      onClick={() => onChangeColumn(name)}
      className={isChosen ? styles.speedBlockActive : styles.speedBlock}
    >
      <h2 style={{ backgroundColor: titleColor }} className={styles.title}>
        {name}
      </h2>
      <div
        style={{ backgroundColor: speedBlockColor }}
        className={styles.priceBlock}
      >
        <p className={styles.textUp}>руб</p>
        <p className={styles.price}>{price}</p>
        <p className={styles.textDown}>/мес</p>
      </div>
      <p className={styles.speed}>{speed}</p>
      <p className={styles.info}>{info}</p>
    </div>
  );
};

export default PriceCol;
