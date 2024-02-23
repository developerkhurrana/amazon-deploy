import React from "react";
import "./Home.css";

import Product from "./Product";

const Home = () => {
  return (
    <div className="home">
      <div className="home__container">
        <img
          src="https://images-eu.ssl-images-amazon.com/images/G/02/digital/video/merch2016/Hero/Covid19/Generic/GWBleedingHero_ENG_COVIDUPDATE__XSite_1500x600_PV_en-GB._CB428684220_.jpg"
          alt="home img"
          className="home__img"
        />
        <div className="home__row">
          <Product
            id="123"
            title="The Lean Startup: How Constant Innovation Creates Radically Successful Businesses Paperback"
            price={11}
            rating={5}
            image="https://images-na.ssl-images-amazon.com/images/I/51Zymoq7UnL.jpg"
          />

          <Product
            id="456"
            title="Atomic Habits: An Easy & Proven Way to Build Good Habits & Break Bad Ones Paperback"
            price={14}
            rating={4}
            image="https://m.media-amazon.com/images/I/81Ls+SBCLiL._SL1500_.jpg"
          />

          <Product
            id="789"
            title="The 4-Hour Workweek: Escape 9-5, Live Anywhere, and Join the New Rich Paperback"
            price={16}
            rating={3}
            image="https://m.media-amazon.com/images/I/71DPD5QEZCL._SL1263_.jpg"
          />
        </div>
        <div className="home__row">
          <Product
            id="123"
            title="Kenwood kMix Stand Mixer for Baking, Stylish Kitchen Mixer with K-beater, Dough Hook and Whisk, 5 Litre Glass Bowl"
            price={11}
            rating={5}
            image="https://images-na.ssl-images-amazon.com/images/I/81O%2BGNdkzKL._AC_SX450_.jpg
            "
          />

          <Product
            id="456"
            title="Samsung LC49RG90SSUXEN 49' Curved LED Smartwatch"
            price={14}
            rating={4}
            image="https://images-na.ssl-images-amazon.com/images/I/71Swqqe7XAL._AC_SX466_.jpg"
          />

          <Product
            id="789"
            title="Amazon Echo (3rd generation) | Smart speaker with Alexa, Charcoal Fabric"
            price={16}
            rating={3}
            image="https://media.very.co.uk/i/very/P6LTG_SQ1_0000000071_CHARCOAL_SLf?$300x400_retinamobilex2$"
          />
        </div>
      </div>
    </div>
  );
};

export default Home;
