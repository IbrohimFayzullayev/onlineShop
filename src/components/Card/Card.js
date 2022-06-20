import React from "react";
import "./card.scss";

const Card = (props) => {
  let summa = props.cards.map((val) => {
    return val.count * val.price;
  });
  props.getData(props.cards.length);
  const initialValue = 0;
  const sumWithInitial = summa.reduce(
    (previousValue, currentValue) => previousValue + currentValue,
    initialValue
  );
  return (
    <div className="cards">
      {props.cards.map((val) => {
        return (
          <div key={val.id} className="card">
            <div className="image">
              <img src={`${val.image}`} />
            </div>
            <div className="desc">
              <div className="content">
                <div className="title">{val.title}</div>
                <div className="category">category: {val.category}</div>
                <div className="price_one">{val.price}$</div>
              </div>
              <div className="price">Price: {val.price * val.count}$</div>
              <div className="buying">
                <div className="inc">
                  <i
                    onClick={() => {
                      props.changeIdAction(++val.count, val.id);
                    }}
                    className="inc_icon ui plus circle icon"
                  ></i>
                  <p>{val.count}</p>
                  <i
                    onClick={() => {
                      props.changeIdAction(--val.count, val.id);
                    }}
                    className="dec_icon ui minus circle icon"
                  ></i>
                </div>
                <button
                  onClick={() => {
                    console.log(val.id);
                    props.removeAction(val.id);
                  }}
                  className="ui inverted red button"
                >
                  Remove
                </button>
              </div>
            </div>
          </div>
        );
      })}
      <div className="products_desc">
        <p className="all_price">Price: {sumWithInitial} $</p>
        <button className="buy_btn ui inverted green button">Buy</button>
      </div>
    </div>
  );
};

export default Card;
