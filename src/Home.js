import React from "react";
import "./Home.css";
import Product from "./Product";

function Home() {
  return (
    <div className="home">
      <img className="home__image" src="homebg.jpg" alt="HOME_BG" />

      <div className="home__row">
      <Product
          id="1234657919"
          title="New Apple iPad Pro (11-inch, Wi-Fi, 512GB) - Space Grey (2nd Generation)"
          price={75000}
          rating={5}
          image="products/ipad.jpg"
        />
        <Product
          id="1234657920"
          title="Apple iPhone 11 (64GB) - White"
          price={61000}
          rating={5}
          image="products/iphone.jpg"
        />
        
        <Product
          id="1234657921"
          title="Apple AirPods Pro"
          price={21000}
          rating={5}
          image="products/pods.jpg"
        />
        <Product
          id="1234657921"
          title="Apple MacBook Pro (16-inch, 16GB RAM, 1TB Storage, 2.3GHz 9th Gen Intel Core i9) - Space Grey"
          price={224900}
          rating={5}
          image="products/book.jpg"
        />
      </div>      

      <div className="home__row">
      <Product
          id="1234657982"
          title="Elegant Bedroom Suite"
          price={75000}
          rating={5}
          image="products/bd1.jpg"
        />
        <Product
          id="1234657983"
          title="Conference Table"
          price={65000}
          rating={5}
          image="products/o1.jpg"
        />
        <Product
          id="1234657984"
          title="High Back Chairs"
          price={15000}
          rating={5}
          image="products/c1.jpg"
        />
      </div>

      <div className="home__row">
        <Product
          id="1234657980"
          title="Murphy (Recliner Sofa) Available In : 3+1+1 (Full Fabric)"
          price={45000}
          rating={5}
          image="products/sofa1.jpg"
        />
        <Product
          id="1234657981"
          title="Perry Available In : 3+2+1 & 3+1+1 (Full Fabric)"
          price={50000}
          rating={4}
          image="products/sofa2.jpg"
        />
        
      </div>

      <div className="home__row">
      <Product
          id="1234657910"
          title="Samsung 80 cm (32 Inches) Wondertainment Series"
          price={15000}
          rating={4}
          image="products/tv1.jpg"
        />
        <Product
          id="1234657911"
          title="LG 80 cm (32 inches) HD Ready Smart LED TV"
          price={15000}
          rating={4}
          image="products/tv2.jpg"
        />
        <Product
          id="1234657912"
          title="OnePlus Y Series 80 cm (32 inches) HD Ready LED Smart Android TV"
          price={15000}
          rating={4}
          image="products/tv3.jpg"
        />        
        
      </div>

      <div className="home__row">
      <Product
          id="1234657913"
          title="MI Smart Band 5-1.1” AMOLED Color Display, Magnetic Charging, Personal Activity Intelligence"
          price={2499}
          rating={5}
          image="products/w1.jpg"
        />
        <Product
          id="1234657914"
          title="JBL Cinema SB261 2.1 Channel Soundbar with Wireless Subwoofer"
          price={14000}
          rating={5}
          image="products/jbl.jpg"
        />
        <Product
          id="1234657915"
          title="Sony WF-1000XM3 Truly Wireless Bluetooth Earbuds/Earbuds with Battery Life 32 Hours"
          price={19000}
          rating={5}
          image="products/sony.jpg"
        />
      </div>

      <div className="home__row">
      <Product
          id="1234657916"
          title="Bose QuietComfort 35 II Wireless Bluetooth Headphones, Noise-Cancelling, with Alexa Voice Control - Black"
          price={30000}
          rating={5}
          image="products/bose.jpg"
        />
        <Product
          id="1234657917"
          title="Fujifilm Instax Mini 9 Instant Camera (Lime Green) with Film (20 Shots)"
          price={5000}
          rating={5}
          image="products/fuji.jpg"
        />
        <Product
          id="1234657918"
          title="Samsung Galaxy Tab A7 (10.4 inch, RAM 3 GB, ROM 32 GB, Wi-Fi-only), Gold"
          price={18000}
          rating={5}
          image="products/sam.jpg"
        />
      </div>
<div className="home__row">
<Product
          id="1234657919"
          title="Samsung C34H890WJN - 34 Inch (3440 x 1440) WQHD UltraWide Professional LED Curved Monitor"
          price={88900}
          rating={5}
          image="products/wtv.jpg"
        />
</div>
      

    </div>
  );
}

export default Home;
