import { connect } from "react-redux";
import { saveUserAction } from "../actions/action";
import Login from "../../components/Login/Login";
const getMyState = (state) => {
  return state;
};

const LoginContainer = connect(getMyState, { saveUserAction })(Login);
export default LoginContainer;
