export default function Contacts() {
  return (
    <section className=" container">
      <h2 className="text-center">Контакты</h2>
      <p>
        Я живу в г.Кемерово
      </p>
      <h5 className="text-center">Координаты для связи:</h5>
      <br />
      <div className="meInfo text-center">
          <div>&#9742; +7 (923) 602-26-25</div>
          <div>&#128386; komproekt42@gmail.com</div>
          <div>
            Telegram:{" "}
            <a href="https://t.me/Sokolov_web_developer">
              t.me/Sokolov_web_developer
            </a>
          </div>
          <div>
            Github: <a href="https://github.com/sokovv">github.com/sokovv</a>
          </div>
        </div>
    </section>
  );
}
