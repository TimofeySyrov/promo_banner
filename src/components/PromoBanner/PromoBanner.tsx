import React from "react";

import Button from "../button/Button";
import styles from "./promoBanner.module.css";

type PromoBannerProps = {
  title: JSX.Element | string;
  imgSrc: string;
  imgTitle: JSX.Element | string;
  buttonName: string;
}

const PromoBanner = ({ title, imgSrc, imgTitle, buttonName }: PromoBannerProps) => {
  return (
    <div className={styles.promoBanner}>
      <div className={styles.promoBanner__title}>
        {title}
      </div>
      <div className={styles["promoBanner__qr-code-box"]}>
        <img src={imgSrc} alt="qr-code" />
        {imgTitle}
      </div>
      <div className={styles["promoBanner__confirm-button"]}>
        <Button active>{buttonName}</Button>
      </div>
    </div>
  );
};

export default PromoBanner;
