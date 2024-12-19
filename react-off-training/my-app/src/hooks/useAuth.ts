import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../store";
import { useNavigate } from "react-router-dom";
import Axios from "axios";
import { clearUserSession, setUserSession } from "../store/slices/userSlice";

export default function useAuth() {
  const isLoggedIn = useSelector((state: RootState) => state.user !== null);
  const user = useSelector((state: RootState) => state.user);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const login = async (email: string, password: string) => {
    try {
      const data = { email, password };
      const url = "";
      //   const res = await Axios.post(url, data);
      const res = { data: { email: email } };
      dispatch(setUserSession(res.data));
      navigate("/");
    } catch (err) {
      console.log(err);
    }
  };

  const logout = () => {
    dispatch(clearUserSession());
    navigate("/");
  };

  return { isLoggedIn, user, login, logout };
}
