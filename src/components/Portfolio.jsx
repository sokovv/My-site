const portfolio = [
  {
    title: "Онлайн-система администрирования кинозалов",
    task: "Создание сайта для бронирования онлайн билетов в кинотеатр и разработка информационной системы для администрирования залов, сеансов и предварительного бронирования билетов",
    tech: "PHP, фреймворк Laravel, библиотека Livewirel, MySQL, HTML, CSS",
    image: "./img/cinema.png",
    urlGit: "https://github.com/sokovv/Cinema",
  },
  {
    title: "Шар предсказаний",
    task: "Веб-приложение для получения случайного ответа на вопрос пользователя по типу шара предсказаний.",
    tech: "PHP, фреймворк Laravel, MySQL, HTML, CSS",
    image: "./img/magic_ball.png",
    urlGit: "https://github.com/sokovv/MagicBall",
  },
  {
    title: "Платежный сервис",
    task: "Приложение для отложенных переводов денежных средств между клиентами.",
    tech: "PHP, фреймворк Laravel, MySQL, HTML, CSS",
    image: "./img/payment-system.png",
    urlGit: "https://github.com/sokovv/Payment-systems",
  },
  {
    title: "Интернет-магазин обуви",
    task: "Создание работающего приложения, всеми основными функциями которого можно пользоваться",
    tech: "JavaScript, React JS, React router, Redux, Redux Toolkit, HTML, CSS, Fetch API, сервис — Render(Для серверной части)", 
    image: "./img/shop.png",
    url: "https://sokovv.github.io/ra-diplom-frontend/",
    urlGit: "https://github.com/sokovv/ra-diplom-frontend",
  },
  {
    title: "Мировые часы",
    task: "Часы, показывающие время в разных городах мира. Вводите название города и его часовой пояс относительно Гринвича, получаете красивые часики на стене)",
    tech: "JavaScript, React JS, HTML, CSS ", 
    image: "./img/часы.png",
    url: "https://sokovv.github.io/ReactHW6.1/",
    urlGit: "https://github.com/sokovv/ReactHW6.1",
  },
  {
    title: "Бот для поиска и хранения информации",
    task: "Создать бота, предназначенного для хранения информации, поиска и других сервисов: напоминания, уведомления и интеграции с внешними сервисам (Примеры: Slack, Telegram, WhatsApp)",
    tech: "JavaScript, Babel, Webpack, ESLint, HTML, CSS, Fetch API, Websockets, сервис — Render(Для серверной части)",
    image: "./img/bot.png",
    url: "https://sokovv.github.io/ahj-diploma/",
    urlGit: "https://github.com/sokovv/ahj-diploma",
  },

  {
    title: "CRUD функционал",
    task: "Написать CRUD функционал для работы с заявками",
    tech: "JavaScript, npm, Babel, Webpack, ESLint, HTML, CSS, Fetch API, сервис — Render(Для серверной части)",
    image: "./img/tisket.png",
    url: "https://sokovv.github.io/HomeWork-7.2-fron/",
    urlGit: "https://github.com/sokovv/HomeWork-7.2-fron",
  },

  {
    title: "Доска Трелло",
    task: "Реализовать что-то похожее на доску Трелло",
    tech: "JavaScript, npm, Babel, Webpack, ESLint, DnD, HTML, CSS",
    image: "./img/trello.png",
    url: "https://sokovv.github.io/ahj-dnd1.1/",
    urlGit: "https://github.com/sokovv/ahj-dnd1.1",
  },

  {
    title: "Игра Гоблин",
    task: "Реализовать некое подобие игры, где гоблины, выскакивают из отверстий и по ним нужно бить молотком:",
    tech: "JavaScript, npm, Babel, Webpack, ESLint, HTML, CSS",
    image: "./img/goblin.png",
    url: "https://sokovv.github.io/ahj-event/",
    urlGit: "https://github.com/sokovv/ahj-event",
  },

  {
    title: "Онлайн-игра «Ходилка» в стиле фэнтези",
    task: "Разработать небольшую пошаговую игру",
    tech: "JavaScript, npm, Babel, Webpack, ESLint",
    image: "./img/retro.png",
    url: "https://sokovv.github.io/js-advanced-diploma",
    urlGit: "https://github.com/sokovv/js-advanced-diploma",
  },
  {
    title: "Веб-менеджер личных финансов",
    task: "Разработать приложение для управления финансами",
    tech: "JavaScript, HTML, CSS",
    image: "./img/финансы.png",
    urlGit: "https://github.com/sokovv/diplom-JS-",
  },
  {
    title: "Сайт-биржа по продаже криптовалюты",
    task: "Связать интерфейс взаимодействия с АPI и интерфейс взаимодействия с DOM",
    tech: "JavaScript, NodeJS",
    image: "./img/биржа неткоинов.png",
    urlGit: "https://github.com/sokovv/bjs-diplom",
  },
];

export default function Portfolio() {
  return (
    <section className="containerPortfolio">
      <h2 className="text-center">Портфолио</h2>
      <div className="itemsPortfolio">
        {portfolio.map((item, key) => (
          <div key={key}>
            <div className="card-body">
            <a href= {item.image} rel="nofollow" target="_blank">
              <img
                className="imagePortfolio img-fluid"
                alt={item.title}
                src={item.image}
              />
              </a>
              <br />
              <br />
              <div className="card-text">
                {" "}
                <p1>Название проекта:</p1> {item.title}
              </div>
              <div className="card-text">
                <p1>Задачи:</p1> {item.task}
              </div>
              <div className="card-text">
                <p1>Используемые технологии:</p1> {item.tech}
              </div>

              {item.url &&  <div className="card-text">
              <p1>Ссылка:</p1> <a href={`${item.url}`} >
                   {item.url}
                </a>
              </div>}
              <div className="card-text">
              <p1>Ссылка на GitHub:</p1><a href={`${item.urlGit}`}>
                  {item.urlGit}
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
