import { useSelector } from "react-redux";
import { RootState } from "store";

export const useAuth = () => {
  const { AuthLogin, token } = useSelector(
    (state: RootState) => state.AuthLogin
  );
  return {
    user: AuthLogin,
    token,
  };
};
