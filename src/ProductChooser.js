import React, { useState } from "react";
import ringImage from "./images/ring.jpg"; // Import the first image
import ring2Image from "./images/ring2.jpg"; // Import the second image
import "./ProductChooser.css";

const ProductChooser = () => {
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [message, setMessage] = useState("");
  const [score, setScore] = useState(0);

  const products = [
    {
      id: 1,
      image: ringImage, // Local image for the first product
      price: 100,
      description: (
        <>
          <p className="description-item">✔ Enormous, flawless diamond.</p>
          <p className="description-item">
            ✔A luxurious flawless diamond in a platinum setting.
          </p>
          <p className="description-item">
            ✔Showcases unmatched clarity and brilliance.
          </p>
          <p className="description-item">
            ✔ Symbolizes ultimate wealth and timeless elegance.
          </p>
          <p className="description-item">
            ✔Combines stunning beauty with sophisticated design.
          </p>
        </>
      ),
      className: "product-1", // Class for background color
    },
    {
      id: 2,
      image: ring2Image, // Local image for the second product
      price: 150,
      description: (
        <>
          <p className="description-item">
            ✔ showcasing unparalleled clarity and brilliance in every facet.
          </p>
          <p className="description-item">
            ✔ A romantic rose gold ring with a captivating, vintage charm.
          </p>
          <p className="description-item">
            ✔ Features a unique design and rich pink tones.
          </p>
          <p className="description-item">
            ✔ Blends classic style with modern allure.
          </p>
          <p className="description-item">
            ✔ Reflects elegant, sophisticated taste.
          </p>
        </>
      ),
      className: "product-2", // Class for background color
    },
  ];

  const handleChoose = (chosenProduct) => {
    const otherProduct = products.find(
      (product) => product.id !== chosenProduct.id
    );
    if (chosenProduct.price > otherProduct.price) {
      setMessage("Correct! This product is more expensive.");
      setScore(score + 1);
    } else {
      setMessage("Incorrect! This product is less expensive.");
    }
    setSelectedProduct(chosenProduct);
  };

  return (
    <div className="product-chooser">
      <h1 className="heading">Choose Your Favorite Ring</h1>
      <div className="product-container">
        {products.map((product) => (
          <div key={product.id} className={`product ${product.className}`}>
            <img src={product.image} alt={`Product ${product.id}`} />
            <h2 className="product-heading">
              {product.id === 1
                ? "The Pinnacle of Luxury: The World’s Most Expensive Ring"
                : "Romantic Elegance: The Allure of Rose Gold"}
            </h2>
            <button onClick={() => handleChoose(product)}>Choose</button>
            <div className="description">{product.description}</div>
          </div>
        ))}
      </div>
      {selectedProduct && <p className="result">{message}</p>}
      <p className="score">Score: {score}</p>
      <div className="vs-container">
        <div className="vs-circle">VS</div>
      </div>
    </div>
  );
};

export default ProductChooser;
