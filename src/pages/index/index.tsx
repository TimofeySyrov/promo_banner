import React from "react";

import qrCodeImg from "../../static/images/promo-qr-code.svg";
import volvoTrucksVideo from "../../static/video/VolvoTrucks.mp4";
import PromoBanner from "../../components/PromoBanner/PromoBanner";
import styles from "./index.module.css";

const Index = () => {
  return (
    <div className={styles.index}>
      <div className={styles.promo}>
        <div className={styles.promo__video}>
          <video autoPlay muted>
            <source src={volvoTrucksVideo} type="video/mp4"></source>
          </video>
        </div>
        <div className={styles.promo__banner}>
          <PromoBanner
            title={
              <>
                Исполните мечту вашего малыша!
                <br />
                Подарите ему собаку!
              </>
            }
            imgSrc={qrCodeImg}
            imgTitle="Сканируйте QR-код или нажмите ОК"
            buttonName="Ок"
          />
        </div>
      </div>
    </div>
  );
};

export default Index;
