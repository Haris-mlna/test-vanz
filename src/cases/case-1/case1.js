import React from "react";
import "./case1.css";
import { Link } from "react-router-dom";

const fruits = [
  {
    fruitId: 1,
    fruitName: "Apel",
    fruitType: "IMPORT",
    stock: 10,
  },
  {
    fruitId: 2,
    fruitName: "Kurma",
    fruitType: "IMPORT",
    stock: 20,
  },
  {
    fruitId: 3,
    fruitName: "apel",
    fruitType: "IMPORT",
    stock: 50,
  },
  {
    fruitId: 4,
    fruitName: "Manggis",
    fruitType: "LOCAL",
    stock: 100,
  },
  {
    fruitId: 5,
    fruitName: "Jeruk Bali",
    fruitType: "LOCAL",
    stock: 10,
  },
  {
    fruitId: 5,
    fruitName: "KURMA",
    fruitType: "IMPORT",
    stock: 20,
  },
  {
    fruitId: 5,
    fruitName: "Salak",
    fruitType: "LOCAL",
    stock: 150,
  },
];

function case1() {
  const showName = (array) => {
    array = array.forEach((element) => {
      console.log(element.fruitName);
    });
  };

  showName(fruits);

  return (
    <div className="case-1">
      <div className="whiteboard">
    <h1 className="header-whiteboard">CASE 1</h1>
    <pre>{"const = showName = (array) => {array = array = array.forEach( (element) => console.log(element.fruitName) )}"}</pre>
    <pre>{'showName(fruits)'}</pre>
    <p>ATAU MENGGUNAKAN REACTJS</p>
    <pre>{"{fruits.map((fruit) => (<div key={fruit.fruitName}>{fruit.fruitName}</div>))}"}</pre>
    <div>
      <h2>RESULT :</h2>
      {fruits.map((fruit) => (
        <div key={fruit.fruitName}>
          {fruit.fruitName}
        </div>
      ))}
    </div>
      </div>
      <Link to="/case2">
        <button className="next-button">Case 2</button>
      </Link>
    </div>
  );
}

export default case1;
