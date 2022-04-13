import { Footer, Header } from "@/components";
import { api } from "@/services";
import React from "react";

export async function getServerSideProps({ query }) {
  const { id } = query;
  const product = await api.get("/products/" + id);

  return {
    props: {
      product: product.data,
    },
  };
}

type Props = {
  product: never;
};

const ProductPage = ({ product }: Props) => {
  return (
    <>
      <Header />
      <section className="product-inner">
        <div className="container">
          <div className="col-12 product-upper-content">
            <div className="col-6 col-m-12 left-content">
              <h1>{product.name}</h1>
              <div className="swiper mySwiper2">
                <div className="swiper-wrapper">
                  <div className="swiper-slide">
                    <img src="img/product-slide1.png" />
                  </div>
                  <div className="swiper-slide">
                    <img src="img/product-slide1.png" />
                  </div>
                  <div className="swiper-slide">
                    <img src="img/product-slide1.png" />
                  </div>
                  <div className="swiper-slide">
                    <img src="img/product-slide1.png" />
                  </div>
                  <div className="swiper-slide">
                    <div className="video-wrapper">
                      <div className="vid-btn"></div>
                      <img src="/static/video-slide1.png" />
                    </div>
                  </div>
                </div>
                <div className="swiper-pagination"></div>
              </div>
              <div className="swiper mySwiper">
                <div className="swiper-wrapper">
                  <div className="swiper-slide">
                    <img src="img/product-slide1.png" />
                  </div>
                  <div className="swiper-slide">
                    <img src="img/product-slide1.png" />
                  </div>
                  <div className="swiper-slide">
                    <img src="img/product-slide1.png" />
                  </div>
                  <div className="swiper-slide">
                    <img src="img/product-slide1.png" />
                  </div>
                  <div className="swiper-slide">
                    <div className="video-wrapper">
                      <div className="vid-btn"></div>
                      <img src="/static/video-slide1.png" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-6 col-m-12">
              <div className="lot-info">
                <div className="lot-desc fw-b">
                  Конец лота через:
                  <span className="blue">2 дня 12 часов 32 минуты</span>
                </div>
                <div className="lot-desc lot-end">
                  (Лот закрывается
                  <span> 30 декабря в 12:00</span>)
                </div>
              </div>
              <form className="lot-form" action="">
                <div className="lot-info product-info">
                  <div className="products-info-wrapper">
                    <div className="lot-item-wrapper">
                      <div className="col-6">
                        <p className="fw-b">Текущая ставка:</p>
                      </div>
                      <div className="col-6">
                        <p className="fw-b">
                          {product.recommendedRetailPrice} ₽
                        </p>
                      </div>
                    </div>
                    <div className="lot-item-wrapper">
                      <div className="col-6">
                        <p className="fw-b">Минимальная ставка:</p>
                      </div>
                      <div className="col-6">
                        <p>{product.minRate} ₽</p>
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
                          {product.condition}
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
                          {product.totalWeight} {product.unitType} килограмм
                        </p>
                      </div>
                    </div>
                    <div className="lot-item-wrapper">
                      <div className="col-6">
                        <p>Колличество в лоте:</p>
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
                        <p>{product.auctionType}</p>
                      </div>
                    </div>
                  </div>
                  <div className="col-12">
                    <div className="payment-methods">
                      <img src="img/icons/visa.svg" alt="" />
                      <img src="img/icons/visa.svg" alt="" />
                      <img src="img/icons/visa.svg" alt="" />
                    </div>
                    <div className="further-information">
                      <div className="item item-left">
                        Просмотров
                        <span>264</span>
                      </div>
                      <div className="item">
                        В списке товаров
                        <span>21</span>
                      </div>
                    </div>
                    <div className="input-wrapper">
                      <input type="text" placeholder="Введите ставку" />
                    </div>
                    <div className="input-wrapper">
                      <input type="submit" value="Сделать ставку" />
                    </div>
                  </div>
                </div>
              </form>
            </div>
          </div>
          <div className="col-12 product-data">
            <div className="product-subtitle">
              <div className="img-wrapper">
                <img src="img/icons/prod-desc.svg" alt="" />
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
                <img src="img/icons/truck.svg" alt="" />
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
