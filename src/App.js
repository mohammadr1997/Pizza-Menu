import image1 from "./images/funghi.jpg";
import image2 from "./images/margherita.jpg";
import image3 from "./images/spinaci.jpg";
import image4 from "./images/funghi.jpg";
import image5 from "./images/salamino.jpg";
import image6 from "./images/prosciutto.jpg";
import pizzaData from "./data";
import "./index.css";

function App() {
  return (
    <div className="container">
      <Header />
      <Menu />
      <Footer />
    </div>
  );
}

const Header = function () {
  return (
    <header className="header" style={{ color: "blue" }}>
      <h1>Fast React Pizza.co</h1>
    </header>
  );
};
const Menu = function () {
  const pizzaList = pizzaData;
  const pizzaNUm = pizzaList.length;
  return (
    <main className="menu">
      <h2>Our Menu</h2>
      {pizzaNUm > 0 ? (
        <>
          <p>
            Authentic Italian Cuisine.6 creative dishes to choose from. All from
            our stone oven. all organic, all delicious
          </p>
          <ul className="pizzas">
            {pizzaList.map((pizza, index) => {
              let imgs = [image1, image2, image3, image4, image5, image6];
              return (
                <Pizza key={pizza.name} data={pizza} photo={imgs[index]} />
              );
            })}
          </ul>
        </>
      ) : (
        <p> we're working on our menu, please come back later</p>
      )}
    </main>
  );
};
const Pizza = function ({ data, photo }) {
  return (
    <li className={`pizza ${data.soldOut ? "sold-out" : ""}`}>
      <img src={photo} alt="pic"></img>
      <div>
        <h4>{data.name}</h4>
        <p>{data.ingredients}</p>
        <span>{data.soldOut ? "Sold Out" : data.price}</span>
      </div>
    </li>
  );
};
const Footer = function () {
  const hour = new Date().getHours();
  const isOpen = 12;
  const isClosed = 22;
  const openingHour = hour >= isOpen && hour <= isClosed;

  return (
    <footer className="footer">
      {openingHour ? (
        <Order close={isClosed} open={isOpen} />
      ) : (
        <p>
          {" "}
          we are happy to welcome you between {isOpen}:00 and {isClosed}:00
        </p>
      )}
    </footer>
  );
};
function Order({ close, open }) {
  return (
    <div className="order">
      <p>
        we're open from {open}:00 to {close}:00 you can order now
      </p>
      <button className="btn">Order</button>
    </div>
  );
}

export default App;
