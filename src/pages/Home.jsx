import "./Home.css";

const tours = [
  {
    date: "JUL 16",
    city: "DETROIT, MI",
    venue: "DTE ENERGY MUSIC THEATRE",
  },
  {
    date: "JUL 19",
    city: "TORONTO, ON",
    venue: "BUDWEISER STAGE",
  },
  {
    date: "JUL 22",
    city: "BRISTOW, VA",
    venue: "JIGGY LUBE LIVE",
  },
  {
    date: "JUL 29",
    city: "PHOENIX, AZ",
    venue: "AK-CHIN PAVILION",
  },
  {
    date: "AUG 2",
    city: "LAS VEGAS, NV",
    venue: "T-MOBILE ARENA",
  },
];

function Home() {
  return (
    <div className="home-container">

      <section className="album-section">
        <h2 className="section-title">
          Latest Album
        </h2>

        <button className="album-btn">
          Buy Our Latest Album
        </button>
      </section>

      <section className="tour-section">
        <h2 className="section-title">
          Tours
        </h2>

        {tours.map((tour) => (
          <div
            className="tour-item"
            key={tour.date}
          >
            <span>{tour.date}</span>
            <span>{tour.city}</span>
            <span>{tour.venue}</span>

            <button className="ticket-btn">
              BUY TICKETS
            </button>
          </div>
        ))}
      </section>
    </div>
  );
}

export default Home;