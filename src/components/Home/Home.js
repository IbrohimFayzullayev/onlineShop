import React, { useEffect } from "react";
import "./home.scss";
const Home = (props) => {
  useEffect(() => {
    props.getDataAction();
  }, []);

  props.getData(props.cards.length);
  return (
    <div className="home">
      {props.products.map((val) => {
        return (
          <div key={val.id} className="card">
            <div className="image">
              <img src={`${val.image}`} />
            </div>
            <div className="content">
              <div className="title">{val.title}</div>
              <div className="category">category: {val.category}</div>
              <div className="price">price: {val.price}$</div>
            </div>
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
                  props.buyAction(val);
                }}
                className="ui inverted green button"
              >
                Buy
              </button>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default Home;
