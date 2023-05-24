const certificate = [
  {
    image: "./img/certificate/0.jpg",
  },
  {
    image: "./img/certificate/1.jpg",
  },
  {
    image: "./img/certificate/2.jpg",
  },
  {
    image: "./img/certificate/3.jpg",
  },
  {
    image: "./img/certificate/4.jpg",
  },
  {
    image: "./img/certificate/5.jpg",
  },
  {
    image: "./img/certificate/6.jpg",
  },
  {
    image: "./img/certificate/7.jpg",
  },
  {
    image: "./img/certificate/8.jpg",
  },
  {
    image: "./img/certificate/9.jpg",
  },
  {
    image: "./img/certificate/10.jpg",
  },
  {
    image: "./img/certificate/11.jpg",
  },
  {
    image: "./img/certificate/12.jpg",
  },
  {
    image: "./img/certificate/13.jpg",
  },
  {
    image: "./img/certificate/14.jpg",
  },
];

export default function Certificate() {
  return (
    <section className="containerPortfolio">
      <h2 className="text-center">Диплом, Сертификаты</h2>
      <div className="itemsPortfolio">
        {certificate.map((item, key) => (
          <div key={key}>
            <div className="card-body-certificate">
            <a href= {item.image} rel="nofollow" target="_blank">
              <img
                className="imagePortfolio img-fluid"
                src={item.image}
              />
              </a>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
