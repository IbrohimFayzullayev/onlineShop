import { connect } from "react-redux/es/exports";
import Card from "../../components/Card/Card";
import {
  buyAction,
  changeIdAction,
  removeAction,
  countAction,
} from "../actions/action";

const getMyState = (state) => {
  return state;
};

const CardContainer = connect(getMyState, {
  buyAction,
  changeIdAction,
  removeAction,
  countAction,
})(Card);
export default CardContainer;
