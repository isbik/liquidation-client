import { CallbackForm, PageHead } from "@/components";
import { Accordion } from "@/ui";
import type { NextPage } from "next";

const Home: NextPage = () => {
  const AccordionIcon = (active: boolean) => (
    <svg
      width="36"
      height="36"
      viewBox="0 0 36 36"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <circle cx="18" cy="18" r="18" fill="#022869" />
      {!active && (
        <rect
          x="17"
          y="31"
          width="26"
          height="2"
          transform="rotate(-90 17 31)"
          fill="white"
        />
      )}
      <rect
        x="31"
        y="19"
        width="26"
        height="2"
        transform="rotate(-180 31 19)"
        fill="white"
      />
    </svg>
  );

  return (
    <>
      <PageHead title="Главная страница" />

      <section className="banner">
        <div className="container">
          <div className="col-6 col-m-12">
            <div className="banner_left">
              <h1>Покупайте и продавайте излишки на нашей торговой площадке</h1>
              <div className="banner_left-wrapper">
                <span>500+</span>
                <p>Категория активов и одна компания</p>
              </div>
            </div>
          </div>
          <div className="col-5 col-m-12">
            <div className="banner_center">
              <div className="banner_center-wrapper">
                <a href="">Купить</a>
                <a href="" className="sell">
                  Продать
                </a>
              </div>
              <a href="catalog" className="catalog-btn">
                Каталог
              </a>
            </div>
          </div>
          <div className="col-1">
            <div className="banner_right">
              <span>01</span>
            </div>
          </div>
        </div>
      </section>
      <section className="industries">
        <div className="container">
          <h2 className="title">Отрасли промышленности</h2>
          <div className="industries_items">
            <a href="" className="industries_item">
              <div className="item_title">Авиационная промышленность</div>
              <img src="/static/ind_img1.png" alt="" />
            </a>
            <a href="" className="industries_item">
              <div className="item_title">Авиационная промышленность</div>
              <div className="img-wrapper">
                <img src="/static/ind_img2.png" alt="" />
              </div>
            </a>
            <a href="" className="industries_item">
              <div className="item_title">Строительство</div>
              <img src="/static/ind_img3.png" alt="" />
            </a>
          </div>
          <div className="industries_items bottom">
            <a href="" className="industries_item">
              <div className="item_title">Химическая промышленность</div>
              <img src="/static/ind_img4.png" alt="" />
            </a>
            <a href="" className="industries_item">
              <div className="item_title">Металлургическая промышленность</div>
              <img src="/static/ind_img5.png" alt="" />
            </a>
          </div>
        </div>
      </section>
      <section className="about_us">
        <div className="container">
          <div className="about_us-left">
            <h2 className="title">О нас</h2>
            <p>
              Компания liquidationmarket была основана на наборе основных
              ценностей и убеждении в том, что существует лучший путь вперед в
              отрасли обратной цепочки поставок стоимостью 150 миллиардов
              долларов - способ превратить излишки из бремени в возможность
              создания добавленной стоимости.
            </p>
          </div>
          <div className="about_us-right">
            <img src="/static/about_us-img.jpg" alt="" />
          </div>
        </div>
      </section>
      <section className="buy_easy">
        <div className="container">
          <h2 className="title">Купить легко</h2>
          <h3 className="subtitle">
            Зарегестрируйся бесплатно и начни за считанные минуты
          </h3>
          <div className="buy_easy-wrapper">
            <div className="buy_easy-item">
              <h5>Экономьте время и деньги</h5>
              <p>
                Простые в использовании торговые площадки и оперативная служба
                поддержки клиентов помогут вам совершать покупки просто и
                быстро. Кроме того, наши справедливые цены могут дать
                значительную экономию по сравнению с покупкой нового!
              </p>
            </div>
            <div className="buy_easy-item">
              <h5>Покупайте уверенно</h5>
              <p>
                Наши активы получены от лидеров отрасли и перечислены с
                исчерпывающей информацией, включая описания и фотографии, что
                вселяет в вас уверенность в своей покупке.
              </p>
            </div>
            <div className="buy_easy-item">
              <h5>Развивайте свой бизнес</h5>
              <p>
                Доступ к товарам практически в каждой категории, отрасли и
                регионе позволяет быстро получить оборудование или инвентарь,
                необходимые для расширения вашего бизнеса.
              </p>
            </div>
          </div>
        </div>
      </section>
      <CallbackForm />
      <section className="questions">
        <div className="container">
          <h2 className="title">Ответы на частые вопросы</h2>
          <div className="accordion_item">
            <Accordion
              header={(active) => (
                <div className="accordion_header">
                  <span>Какие продукты я могу найти на вашей площадке?</span>
                  {AccordionIcon(active)}
                </div>
              )}
            >
              <div className="accordion_content">
                <p>
                  Наша площадка предлагает широкий ассортимент оптовых товаров,
                  удовлетворяющих уникальные потребности профессиональных
                  покупателей, включая новые, бывшие в употреблении товары,
                  снятые с полки, восстановленные, возвратные и утилизированные
                  во многих различных категориях.
                </p>
                <p>
                  Наши категории продуктов включают одежду и аксессуары,
                  ювелирные изделия и часы, компьютеры и сети, бытовую
                  электронику, товары общего назначения, товары для дома,
                  инструменты и оборудование, а также приспособления и
                  приспособления для магазинов.
                </p>
              </div>
            </Accordion>
          </div>
          <div className="accordion_item">
            <Accordion
              header={(active) => (
                <>
                  <div className="accordion_header">
                    <span>Как мне платить?</span>
                    {AccordionIcon(active)}
                  </div>
                </>
              )}
            >
              <div className="accordion_content">
                <p>
                  Наша площадка предлагает широкий ассортимент оптовых товаров,
                  удовлетворяющих уникальные потребности профессиональных
                  покупателей, включая новые, бывшие в употреблении товары,
                  снятые с полки, восстановленные, возвратные и утилизированные
                  во многих различных категориях.
                </p>
                <p>
                  Наши категории продуктов включают одежду и аксессуары,
                  ювелирные изделия и часы, компьютеры и сети, бытовую
                  электронику, товары общего назначения, товары для дома,
                  инструменты и оборудование, а также приспособления и
                  приспособления для магазинов.
                </p>
              </div>
            </Accordion>
          </div>
          <div className="accordion_item">
            <Accordion
              header={(active) => (
                <div className="accordion_header">
                  <span>Кто занимается доставкой?</span>
                  {AccordionIcon(active)}
                </div>
              )}
            >
              <div className="accordion_content">
                <p>
                  Наша площадка предлагает широкий ассортимент оптовых товаров,
                  удовлетворяющих уникальные потребности профессиональных
                  покупателей, включая новые, бывшие в употреблении товары,
                  снятые с полки, восстановленные, возвратные и утилизированные
                  во многих различных категориях.
                </p>
                <p>
                  Наши категории продуктов включают одежду и аксессуары,
                  ювелирные изделия и часы, компьютеры и сети, бытовую
                  электронику, товары общего назначения, товары для дома,
                  инструменты и оборудование, а также приспособления и
                  приспособления для магазинов.
                </p>
              </div>
            </Accordion>
          </div>
          <div className="accordion_item">
            <Accordion
              header={(active) => (
                <div className="accordion_header">
                  <span>Как мне приобрести продукт на вашей площадке?</span>
                  {AccordionIcon(active)}
                </div>
              )}
            >
              <div className="accordion_content">
                <p>
                  Наша площадка предлагает широкий ассортимент оптовых товаров,
                  удовлетворяющих уникальные потребности профессиональных
                  покупателей, включая новые, бывшие в употреблении товары,
                  снятые с полки, восстановленные, возвратные и утилизированные
                  во многих различных категориях.
                </p>
                <p>
                  Наши категории продуктов включают одежду и аксессуары,
                  ювелирные изделия и часы, компьютеры и сети, бытовую
                  электронику, товары общего назначения, товары для дома,
                  инструменты и оборудование, а также приспособления и
                  приспособления для магазинов.
                </p>
              </div>
            </Accordion>
          </div>
          <div className="accordion_item">
            <Accordion
              header={(active) => (
                <div className="accordion_header">
                  <span>Как мне управлять профилем?</span>
                  {AccordionIcon(active)}
                </div>
              )}
            >
              <div className="accordion_content">
                <p>
                  Наша площадка предлагает широкий ассортимент оптовых товаров,
                  удовлетворяющих уникальные потребности профессиональных
                  покупателей, включая новые, бывшие в употреблении товары,
                  снятые с полки, восстановленные, возвратные и утилизированные
                  во многих различных категориях.
                </p>
                <p>
                  Наши категории продуктов включают одежду и аксессуары,
                  ювелирные изделия и часы, компьютеры и сети, бытовую
                  электронику, товары общего назначения, товары для дома,
                  инструменты и оборудование, а также приспособления и
                  приспособления для магазинов.
                </p>
              </div>
            </Accordion>
          </div>
          <div className="accordion_item">
            <Accordion
              header={(active) => (
                <div className="accordion_header">
                  <span>Какую информацию я должен предоставить площадке?</span>
                  {AccordionIcon(active)}
                </div>
              )}
            >
              <div className="accordion_content">
                <p>
                  Наша площадка предлагает широкий ассортимент оптовых товаров,
                  удовлетворяющих уникальные потребности профессиональных
                  покупателей, включая новые, бывшие в употреблении товары,
                  снятые с полки, восстановленные, возвратные и утилизированные
                  во многих различных категориях.
                </p>
                <p>
                  Наши категории продуктов включают одежду и аксессуары,
                  ювелирные изделия и часы, компьютеры и сети, бытовую
                  электронику, товары общего назначения, товары для дома,
                  инструменты и оборудование, а также приспособления и
                  приспособления для магазинов.
                </p>
              </div>
            </Accordion>
          </div>
        </div>
      </section>
      
    </>
  );
};

export default Home;
