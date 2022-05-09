import React from "react";
import { Product } from "../../product.types";
import { getFinishAuction } from "../../utils";

type Props = {
  product: Product;
};

const ProductGuest = ({ product }: Props) => {
  const { days, hours, minutes } = getFinishAuction(product.finishAuctionAt);

  return (
    <section className="product-inner">
      <div className="container">
        <div className="col-12">
          <h1>
            {product.name}, {product.minRate} ₽
          </h1>
        </div>
      </div>
      <div className="col-12">
        <div className="faq-for-guest">
          <div className="faq-wrapper">
            <svg
              width="4"
              height="16"
              viewBox="0 0 4 16"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M0.738062 9.27202C0.798812 9.90477 0.901812 10.375 1.04356 10.6853C1.18706 10.9945 1.44181 11.1488 1.80956 11.1488C1.87831 11.1488 1.93981 11.138 2.00081 11.1255C2.06331 11.138 2.12456 11.1488 2.19381 11.1488C2.56056 11.1488 2.81606 10.9945 2.95881 10.6853C3.10131 10.375 3.20256 9.90477 3.26456 9.27202L3.59106 4.38652C3.65181 3.43427 3.68281 2.75102 3.68281 2.33627C3.68281 1.77177 3.53556 1.33127 3.24006 1.01502C2.94356 0.698766 2.55406 0.541016 2.07156 0.541016C2.04581 0.541016 2.02656 0.546766 2.00131 0.547766C1.97731 0.546766 1.95756 0.541016 1.93256 0.541016C1.44906 0.541016 1.06031 0.698766 0.764312 1.01502C0.468562 1.33177 0.320312 1.77252 0.320312 2.33652C0.320312 2.75127 0.350562 3.43452 0.412312 4.38677L0.738062 9.27202ZM2.01356 12.9345C1.54506 12.9345 1.14706 13.0823 0.816562 13.3778C0.486312 13.6735 0.320812 14.0325 0.320812 14.454C0.320812 14.9298 0.488312 15.3043 0.820812 15.5763C1.15481 15.8483 1.54431 15.9843 1.98956 15.9843C2.44281 15.9843 2.83806 15.8503 3.17606 15.5815C3.51356 15.3135 3.68231 14.937 3.68231 14.4545C3.68231 14.033 3.52081 13.674 3.19781 13.3783C2.87481 13.0823 2.48006 12.9345 2.01281 12.9345"
                fill="white"
              />
            </svg>
            <p>
              <a href="">Войдите или подайте заявку</a>, чтобы увидеть полную
              информацию об аукционе и сделать ставку
            </p>
          </div>
        </div>
      </div>
      <div className="container">
        <div className="col-12 product-upper-content">
          <div className="col-6 col-m-12 left-content guest-left-content">
            <div className="guest-img-block">
              <div className="img-wrapper">
                <img src={product.images[0]?.url} alt="" />
              </div>
              <p>
                Еще <span>{product.images.length}</span> изображений.{" "}
              </p>
              <p>
                <a href="#">Войдите или подайте заявку</a>, чтобы увидеть их
              </p>
            </div>
          </div>
          <div className="col-6 col-m-12">
            <div className="lot-info product-info lot-info-guest">
              <form className="lot-form" action="">
                <div className="products-info-wrapper">
                  <div className="lot-item-wrapper lot-guest">
                    <div className="col-5 col-m-12">
                      <p className="fw-b mobile-fw-n mobile-hidden">
                        Конец аукциона через:
                      </p>
                      <p className="fw-b mobile-fw-n pc-hidden">
                        Аукцион заканчивается через:{" "}
                      </p>
                    </div>
                    <div className="col-7 col-m-12 flex-end">
                      <p className="blue-p">
                        {days} дня {hours} часов {minutes} минуты
                      </p>
                    </div>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export { ProductGuest };
