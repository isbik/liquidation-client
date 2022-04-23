import { Footer, Header } from "@/components";
import { EndTimerAuction } from "@/features/product/components";
import {
  getAuctionType,
  getConditionText,
  getUnitTypeText,
} from "@/features/product/product.utils";
import { $user } from "@/features/user/user.model";
import { api } from "@/services";
import dayjs from "dayjs";
import { useStore } from "effector-react";
import { GetServerSideProps } from "next";
import React, { useState } from "react";
import { FreeMode, Navigation, Thumbs } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";

export const getServerSideProps = async ({
  query,
  req,
}: GetServerSideProps) => {
  const { id } = query;
  const product = await api.get("/products/" + id, {
    headers: req ? { cookie: req.headers.cookie } : undefined,
  });

  return {
    props: {
      product: product.data,
    },
  };
};

type Props = {
  product: never;
};

const ProductPage = ({ product }: Props) => {
  const user = useStore($user);
  const [thumbsSwiper, setThumbsSwiper] = useState(null);

  return (
    <>
      <Header />
      <section className="product-inner">
        <div className="container">
          <div className="col-12 product-upper-content">
            <div className="col-6 col-m-12 left-content">
              <h1>{product.name}</h1>
              <Swiper
                thumbs={{ swiper: thumbsSwiper }}
                modules={[FreeMode, Navigation, Thumbs]}
                className="mySwiper2"
              >
                <SwiperSlide>
                  <img src="/static/product-slide1.png" />
                </SwiperSlide>
                <SwiperSlide>
                  <img src="/static/product-slide1.png" />
                </SwiperSlide>
                <SwiperSlide>
                  <img src="/static/product-slide1.png" />
                </SwiperSlide>
                <SwiperSlide>
                  <img src="/static/product-slide1.png" />
                </SwiperSlide>
                <SwiperSlide>
                  <div className="video-wrapper">
                    <div className="vid-btn"></div>
                    <img src="/static/video-slide1.png" />
                  </div>
                </SwiperSlide>
              </Swiper>

              <Swiper
                spaceBetween={10}
                slidesPerView={4}
                freeMode={true}
                watchSlidesProgress={true}
                modules={[FreeMode, Navigation, Thumbs]}
                className="mySwiper"
              >
                <SwiperSlide>
                  <img src="/static/product-slide1.png" />
                </SwiperSlide>
                <SwiperSlide>
                  <img src="/static/product-slide1.png" />
                </SwiperSlide>
                <SwiperSlide>
                  <img src="/static/product-slide1.png" />
                </SwiperSlide>
                <SwiperSlide>
                  <img src="/static/product-slide1.png" />
                </SwiperSlide>
                <SwiperSlide>
                  <div className="video-wrapper">
                    <div className="vid-btn"></div>
                    <img src="/static/video-slide1.png" />
                  </div>
                </SwiperSlide>
              </Swiper>
            </div>
            <div className="col-6 col-m-12">
              <EndTimerAuction finishAt={product.finishAuctionAt} />

              <form className="lot-form" action="">
                <div className="lot-info product-info">
                  <div className="products-info-wrapper">
                    <div className="lot-item-wrapper">
                      <div className="col-6">
                        <p className="fw-b">Текущая ставка:</p>
                      </div>
                      <div className="col-6">
                        <p className="fw-b">{product.bet.count} ₽</p>
                      </div>
                    </div>
                    <div className="lot-item-wrapper">
                      <div className="col-6">
                        <p className="fw-b">Минимальная ставка:</p>
                      </div>
                      <div className="col-6">
                        <p>{product.bet.count + 1} ₽</p>
                      </div>
                    </div>
                    <div className="lot-item-wrapper">
                      <div className="col-6">
                        <p>Номер лота:</p>
                      </div>
                      <div className="col-6">
                        <p>{product.id}</p>
                      </div>
                    </div>
                    <div className="lot-item-wrapper">
                      <div className="col-6">
                        <p>Продавец:</p>
                      </div>
                      <div className="col-6">
                        <p>{product.seller}</p>
                      </div>
                    </div>
                    <div className="lot-item-wrapper">
                      <div className="col-6">
                        <p>Расположение:</p>
                      </div>
                      <div className="col-6">
                        <p>{product.location}</p>
                      </div>
                    </div>
                    <div className="lot-item-wrapper">
                      <div className="col-6">
                        <p>Состояние:</p>
                      </div>
                      <div className="col-6">
                        <p>
                          {getConditionText(product.condition)}
                          <i className="help-quality"></i>
                        </p>
                        <div className="quality-info">
                          <div className="title">Новое</div>
                          <p className="desc">
                            Новые активы находятся в оригинальной упаковке и
                            обладают всеми характеристиками /качествами /
                            функциями, заявленными производителем.
                          </p>
                        </div>
                      </div>
                    </div>
                    <div className="lot-item-wrapper">
                      <div className="col-6">
                        <p>Вес лота:</p>
                      </div>
                      <div className="col-6">
                        <p>
                          {product.totalWeight}{" "}
                          {getUnitTypeText(product.unitType)}
                        </p>
                      </div>
                    </div>
                    <div className="lot-item-wrapper">
                      <div className="col-6">
                        <p>Количество в лоте:</p>
                      </div>
                      <div className="col-6">
                        <p>{product.quantity}</p>
                      </div>
                    </div>
                    <div className="lot-item-wrapper">
                      <div className="col-6">
                        <p>Тип аукциона:</p>
                      </div>
                      <div className="col-6">
                        <p>{getAuctionType(product.auctionType)}</p>
                      </div>
                    </div>
                  </div>
                  <div className="col-12">
                    <div className="payment-methods">
                      <img src="/static/icons/visa.svg" alt="" />
                      <img src="/static/icons/visa.svg" alt="" />
                      <img src="/static/icons/visa.svg" alt="" />
                    </div>
                    <div className="further-information">
                      <div className="item item-left">
                        Просмотров
                        <span>{product.viewsCount}</span>
                      </div>
                      <div className="item">
                        В списке товаров
                        <span>{product.favoritesCount}</span>
                      </div>
                    </div>
                    {product.finishAuctionAt &&
                      dayjs(product.finishAuctionAt).isAfter(new Date()) &&
                      product.bet.userId !== user.id && (
                        <>
                          <div className="input-wrapper">
                            <input type="text" placeholder="Введите ставку" />
                          </div>
                          <div className="input-wrapper">
                            <input type="submit" value="Сделать ставку" />
                          </div>
                        </>
                      )}

                    {product.bet.userId === user.id && (
                      <p className="w-full font-bold text-center">
                        Вы сделали ставку
                      </p>
                    )}
                  </div>
                </div>
              </form>
            </div>
          </div>
          <div className="col-12 product-data">
            <div className="product-subtitle">
              <div className="img-wrapper">
                <img src="/static/icons/prod-desc.svg" alt="" />
              </div>
              Описание
            </div>
            <div className="product-content">
              <div className="product-desc">
                <p>{product.shortDescription}</p>
                <p>{product.description}</p>
              </div>
              <div className="product-links">
                <li>
                  <i
                    style={{
                      backgroundImage: "url(static/icons/icon-eye.svg)",
                    }}
                  ></i>
                  <a href="#">Посмотреть манифест </a>
                </li>
                <li>
                  <i
                    style={{
                      backgroundImage: "url(static/icons/icon-download.svg)",
                    }}
                  ></i>
                  <a href="#">Скачать манифест</a>
                </li>
              </div>
            </div>
          </div>
          <div className="col-12 product-data">
            <div className="product-subtitle">
              <div className="img-wrapper">
                <img src="/static/icons/truck.svg" alt="" />
              </div>
              Доставка
            </div>
            <div className="product-content">
              <div className="product-delivery">
                <div className="product-info">
                  <div className="lot-item-wrapper">
                    <div className="col-3 col-m-7">
                      <p>Вес лота:</p>
                    </div>
                    <div className="col-8 col-m-5">
                      <p>5 кг</p>
                    </div>
                  </div>
                  <div className="lot-item-wrapper">
                    <div className="col-3 col-m-7">
                      <p>Стоимость доставки от:</p>
                    </div>
                    <div className="col-8 col-m-5">
                      <p>3000 ₽</p>
                    </div>
                  </div>
                  <div className="lot-item-wrapper">
                    <div className="col-3 col-m-12">
                      <p>Условия доставки:</p>
                    </div>
                    <div className="col-8 col-m-12">
                      <p>
                        Liquidationmarket организует доставку
                        <a href="#">(рассчитать цену)</a>
                      </p>
                    </div>
                  </div>
                  <div className="lot-item-wrapper">
                    <div className="col-3 col-m-7">
                      <p>Размерная классификация:</p>
                    </div>
                    <div className="col-8 col-m-5">
                      <p>Коробка</p>
                    </div>
                  </div>
                  <div className="lot-item-wrapper">
                    <div className="col-3 col-m-7">
                      <p>Колличество упаковок</p>
                    </div>
                    <div className="col-8 col-m-5">
                      <p>1</p>
                    </div>
                  </div>
                  <div className="lot-item-wrapper">
                    <div className="col-3 col-m-7">
                      <p>Доступно лотов:</p>
                    </div>
                    <div className="col-8 col-m-5">
                      <p>1</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
};

export default ProductPage;
