import { Footer, Header, PageHead } from "@/components";
import {
  EndTimerAuction,
  ProductCatalogItem,
  ProductGuest,
} from "@/features/product/components";
import { Product } from "@/features/product/product.types";
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
import { toast } from "react-toastify";
import { FreeMode, Navigation, Thumbs } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";

export const getServerSideProps: GetServerSideProps = async ({
  query,
  req,
}) => {
  const { id } = query;

  const headers: any = req ? { cookie: req.headers.cookie } : {};

  const [product, similarProducts] = await Promise.all([
    api.get("/products/" + id, {
      headers,
    }),
    api.get("/products/" + id + "/similar", {
      headers,
    }),
  ]);

  return {
    props: {
      product: product.data,
      similarProducts: similarProducts.data,
    },
  };
};

type Props = {
  product: Product;
  similarProducts: Product[];
};

const ProductPage = ({ similarProducts, ...props }: Props) => {
  const [product, setProduct] = useState(props.product);
  const user = useStore($user);
  const [thumbsSwiper, setThumbsSwiper] = useState(null);

  const handleSubmitBet = (event: React.FormEvent) => {
    event.preventDefault();
  };

  const [bet, setBet] = useState(0);

  const handleSendBet = (event: React.MouseEvent<HTMLInputElement>) => {
    event.preventDefault();

    api
      .post("/product-bets", { bet: Number(bet), productId: product.id })
      .then((response) => {
        console.log("response: ", response);
        setProduct((product) => ({
          ...product,
          bet: response.data,
        }));
      })
      .catch((error) => {
        if (error.response.status === 400) {
          toast.error(error.response.data.message);
        }
      });
  };

  return (
    <>
      <PageHead title={product.name} />

      <Header />
      {user ? (
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
                  {product.images.map((image) => (
                    <SwiperSlide key={image.id}>
                      <div className="icons-wrapper">
                        <i className="add-favorite"></i>
                      </div>
                      <img src={image.url} />
                    </SwiperSlide>
                  ))}
                </Swiper>

                <Swiper
                  spaceBetween={10}
                  slidesPerView={4}
                  freeMode={true}
                  watchSlidesProgress={true}
                  modules={[FreeMode, Navigation, Thumbs]}
                  className="mySwiper"
                >
                  {product.images.map((image) => (
                    <SwiperSlide key={image.id}>
                      <img src={image.url} />
                    </SwiperSlide>
                  ))}
                </Swiper>
              </div>
              <div className="col-6 col-m-12">
                <EndTimerAuction finishAt={product.finishAuctionAt} />

                <form className="lot-form" action="" onSubmit={handleSubmitBet}>
                  <div className="lot-info product-info">
                    <div className="products-info-wrapper">
                      <div className="lot-item-wrapper">
                        <div className="col-6">
                          <p className="fw-b">Текущая ставка:</p>
                        </div>
                        <div className="col-6">
                          <p className="fw-b">
                            {product.bet?.count
                              ? `${product.bet?.count}₽`
                              : "Отсутствует"}
                          </p>
                        </div>
                      </div>
                      <div className="lot-item-wrapper">
                        <div className="col-6">
                          <p className="fw-b">Минимальная ставка:</p>
                        </div>
                        <div className="col-6">
                          <p>
                            {product.bet?.count
                              ? product.bet.count + 1
                              : product.minRate}{" "}
                            ₽
                          </p>
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
                        product.bet?.userId !== user?.id &&
                        typeof product.owner !== "number" &&
                        product.owner?.id !== user?.id && (
                          <>
                            <div className="input-wrapper">
                              <input
                                onChange={(e) => setBet(Number(e.target.value))}
                                type="number"
                                placeholder="Введите ставку"
                              />
                            </div>
                            <div className="input-wrapper">
                              <input
                                onClick={handleSendBet}
                                type="submit"
                                value="Сделать ставку"
                              />
                            </div>
                          </>
                        )}

                      {product.bet?.userId === user?.id && (
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
                {product.manifesto && (
                  <div className="product-links">
                    <li>
                      <i
                        style={{
                          backgroundImage: "url(/static/icons/icon-eye.svg)",
                        }}
                      ></i>
                      <a
                        target={"_blank"}
                        href={product.manifesto.url}
                        rel="noreferrer"
                      >
                        Посмотреть манифест{" "}
                      </a>
                    </li>
                    <li>
                      <i
                        style={{
                          backgroundImage:
                            "url(/static/icons/icon-download.svg)",
                        }}
                      ></i>
                      <a download href={product.manifesto.url}>
                        Скачать манифест
                      </a>
                    </li>
                  </div>
                )}
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
      ) : (
        <ProductGuest product={product} />
      )}

      {similarProducts.length !== 0 && (
        <div className="container">
          <div className="col-12 catalog-inner similar-products">
            <div className="similar-title">Похожие товары</div>
            <div className="items-wrapper">
              {similarProducts.map((product) => (
                <ProductCatalogItem key={product.id} product={product} />
              ))}
            </div>
          </div>
        </div>
      )}

      <Footer />
    </>
  );
};

export default ProductPage;
