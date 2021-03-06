import { PageHead } from "@/components";
import {
  EndTimerAuction,
  ProductCatalogItem,
  ProductGuest,
} from "@/features/product/components";
import { Product } from "@/features/product/product.types";
import {
  getAuctionType,
  getConditionText,
  getDeliverySizeText,
  getUnitTypeText,
} from "@/features/product/product.utils";
import { $user } from "@/features/user/user.model";
import { ThumbnailPlugin } from "@/lib";
import { displayTotalWeight } from "@/lib/displayTotalWeight";
import { api } from "@/services";
import clsx from "clsx";
import dayjs from "dayjs";
import { useStore } from "effector-react";
import { useKeenSlider } from "keen-slider/react";
import { GetServerSideProps } from "next";
import React, { useEffect, useState } from "react";
import { toast } from "react-toastify";

export const getServerSideProps: GetServerSideProps = async ({
  query,
  req,
}) => {
  const { id } = query;

  const headers: any = req ? { cookie: req.headers?.cookie || "" } : {};

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

const ProductPage = ({ similarProducts, product: _product }: Props) => {
  const [isTogglingFavorite, setIsTogglingFavorite] = useState(false);

  const [product, setProduct] = useState(_product);

  const [bet, setBet] = useState(0);

  const [sliderRef, instanceRef] = useKeenSlider<HTMLDivElement>({
    initial: 0,
  });

  const [thumbnailRef] = useKeenSlider<HTMLDivElement>(
    {
      initial: 0,
      slides: {
        perView: 4,
        spacing: 10,
      },
    },
    [ThumbnailPlugin(instanceRef)]
  );

  const user = useStore($user);

  const handleSubmitBet = (event: React.FormEvent) => {
    event.preventDefault();
  };

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

  useEffect(() => {
    setProduct(_product);
  }, [_product]);

  const handleToggleFavorite = async (
    event: React.MouseEvent<HTMLButtonElement, MouseEvent>
  ) => {
    event.preventDefault();
    if (isTogglingFavorite) return;

    setIsTogglingFavorite(true);

    try {
      if (product.isFavorite) {
        await api.put(`/favorites/products/${product.id}/remove`).then(() => {
          setProduct((prev) => ({ ...prev, isFavorite: false }));
        });
      } else {
        await api.put(`/favorites/products/${product.id}/add`).then(() => {
          setProduct((prev) => ({ ...prev, isFavorite: true }));
        });
      }
    } finally {
      setIsTogglingFavorite(false);
    }
  };

  return (
    <>
      <PageHead title={product.name} />

      {user ? (
        <section className="mt-20 product-inner">
          <div className="container">
            <div className="col-12 product-upper-content">
              <div className="col-6 col-m-12 left-content">
                <h1>{product.name}</h1>

                <div ref={sliderRef} className="keen-slider keen-slider-main">
                  {product.images.map((image) => (
                    <div className="keen-slider__slide " key={image.id}>
                      <div className="icons-wrapper">
                        <i
                          onClick={handleToggleFavorite}
                          className={clsx("add-favorite", {
                            active: product.isFavorite,
                          })}
                        ></i>
                      </div>
                      <img src={image.url} />
                    </div>
                  ))}
                </div>

                <div ref={thumbnailRef} className="keen-slider thumbnail">
                  {product.images.map((image) => (
                    <div className="keen-slider__slide " key={image.id}>
                      <img src={image.url} />
                    </div>
                  ))}
                </div>
              </div>
              <div className="col-6 col-m-12">
                <EndTimerAuction finishAt={product.finishAuctionAt} />

                <form className="lot-form" action="" onSubmit={handleSubmitBet}>
                  <div className="lot-info product-info">
                    <div className="products-info-wrapper">
                      <div className="lot-item-wrapper">
                        <div className="col-6">
                          <p className="fw-b">?????????????? ????????????:</p>
                        </div>
                        <div className="col-6">
                          <p className="fw-b">
                            {product.bet
                              ? `${
                                  typeof product.bet === "number"
                                    ? product.bet
                                    : product.bet?.count
                                }???`
                              : "??????????????????????"}
                          </p>
                        </div>
                      </div>
                      <div className="lot-item-wrapper">
                        <div className="col-6">
                          <p className="fw-b">?????????????????????? ????????????:</p>
                        </div>
                        <div className="col-6">
                          <p>
                            {product.bet
                              ? typeof product.bet === "number"
                                ? product.bet
                                : product.bet?.count
                              : product.price}
                            ???
                          </p>
                        </div>
                      </div>
                      <div className="lot-item-wrapper">
                        <div className="col-6">
                          <p>?????????? ????????:</p>
                        </div>
                        <div className="col-6">
                          <p>{product.id}</p>
                        </div>
                      </div>
                      <div className="lot-item-wrapper">
                        <div className="col-6">
                          <p>????????????????:</p>
                        </div>
                        <div className="col-6">
                          <p>{product.seller}</p>
                        </div>
                      </div>
                      <div className="lot-item-wrapper">
                        <div className="col-6">
                          <p>????????????????????????:</p>
                        </div>
                        <div className="col-6">
                          <p>{product.location}</p>
                        </div>
                      </div>
                      <div className="lot-item-wrapper">
                        <div className="col-6">
                          <p>??????????????????:</p>
                        </div>
                        <div className="col-6">
                          <p>
                            {getConditionText(product.condition)}
                            <i className="help-quality"></i>
                          </p>
                          <div className="quality-info">
                            <div className="title">??????????</div>
                            <p className="desc">
                              ?????????? ???????????? ?????????????????? ?? ???????????????????????? ???????????????? ??
                              ???????????????? ?????????? ???????????????????????????????? /???????????????????? /
                              ??????????????????, ?????????????????????? ????????????????????????????.
                            </p>
                          </div>
                        </div>
                      </div>
                      <div className="lot-item-wrapper">
                        <div className="col-6">
                          <p>?????? ????????:</p>
                        </div>
                        <div className="col-6">
                          <p>
                            {displayTotalWeight(
                              product.totalWeight,
                              product.unitType
                            )}{" "}
                            {getUnitTypeText(product.unitType)}
                          </p>
                        </div>
                      </div>
                      <div className="lot-item-wrapper">
                        <div className="col-6">
                          <p>???????????????????? ?? ????????:</p>
                        </div>
                        <div className="col-6">
                          <p>{product.quantity}</p>
                        </div>
                      </div>
                      <div className="lot-item-wrapper">
                        <div className="col-6">
                          <p>?????? ????????????????:</p>
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
                          ????????????????????
                          <span>{product.viewsCount}</span>
                        </div>
                        <div className="item">
                          ?? ???????????? ??????????????
                          <span>{product.favoritesCount}</span>
                        </div>
                      </div>
                      {product.finishAuctionAt &&
                        dayjs(product.finishAuctionAt).isAfter(new Date()) &&
                        typeof product.bet === "object" &&
                        product.bet?.userId !== user?.id &&
                        typeof product.owner !== "number" &&
                        product.owner?.id !== user?.id && (
                          <>
                            <div className="input-wrapper">
                              <input
                                onChange={(e) => setBet(Number(e.target.value))}
                                type="number"
                                placeholder="?????????????? ????????????"
                              />
                            </div>
                            <div className="input-wrapper">
                              <input
                                onClick={handleSendBet}
                                type="submit"
                                value="?????????????? ????????????"
                              />
                            </div>
                          </>
                        )}

                      {typeof product.bet === "object" &&
                        product.bet?.userId === user?.id && (
                          <p className="w-full font-bold text-center">
                            ???? ?????????????? ????????????
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
                ????????????????
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
                        ???????????????????? ????????????????{" "}
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
                        ?????????????? ????????????????
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
                ????????????????
              </div>
              <div className="product-content">
                <div className="product-delivery">
                  <div className="product-info">
                    <div className="lot-item-wrapper">
                      <div className="col-3 col-m-7">
                        <p>?????? ????????:</p>
                      </div>
                      <div className="col-8 col-m-5">
                        <p>
                          {displayTotalWeight(
                            product.totalWeight,
                            product.unitType
                          )}{" "}
                          ????
                        </p>
                      </div>
                    </div>
                    <div className="lot-item-wrapper">
                      <div className="col-3 col-m-7">
                        <p>?????????????????? ???????????????? ????:</p>
                      </div>
                      <div className="col-8 col-m-5">
                        <p>3000 ???</p>
                      </div>
                    </div>
                    <div className="lot-item-wrapper">
                      <div className="col-3 col-m-12">
                        <p>?????????????? ????????????????:</p>
                      </div>
                      <div className="col-8 col-m-12">
                        <p>
                          Liquidationmarket ???????????????????? ????????????????
                          <a href="#">(???????????????????? ????????)</a>
                        </p>
                      </div>
                    </div>
                    <div className="lot-item-wrapper">
                      <div className="col-3 col-m-7">
                        <p>?????????????????? ??????????????????????????:</p>
                      </div>
                      <div className="col-8 col-m-5">
                        <p>{getDeliverySizeText(product.delivery.size)}</p>
                      </div>
                    </div>
                    <div className="lot-item-wrapper">
                      <div className="col-3 col-m-7">
                        <p>???????????????????? ????????????????</p>
                      </div>
                      <div className="col-8 col-m-5">
                        <p>1</p>
                      </div>
                    </div>
                    <div className="lot-item-wrapper">
                      <div className="col-3 col-m-7">
                        <p>???????????????? ??????????:</p>
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
            <div className="similar-title">?????????????? ????????????</div>
            <div className="items-wrapper">
              {similarProducts.map((product) => (
                <ProductCatalogItem key={product.id} product={product} />
              ))}
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default ProductPage;
