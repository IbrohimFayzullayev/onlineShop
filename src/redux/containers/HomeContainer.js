import { connect } from "react-redux";
import Home from "../../components/Home/Home";
import { getDataAction, changeIdAction, buyAction } from "../actions/action";

const getMyState = (state) => {
  return state;
};

const HomeContainer = connect(getMyState, {
  getDataAction,
  changeIdAction,
  buyAction,
})(Home);

export default HomeContainer;
