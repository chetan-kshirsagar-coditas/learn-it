import { Navigate, Outlet, useNavigate } from "react-router-dom"
import { useAppDispatch, useAppSelector } from "../../redux/store/hooks"
import Loader from "../Loader/Loader";
import { useEffect } from "react";
import { restoreSession } from "../../redux/slices/authSlice";
import { useLazyGetMeQuery } from "../../redux/slices/authApiSlice";

const AuthGuard = () => {
  const navigate = useNavigate();

  const user = useAppSelector(state => state.auth.user);
  
  const token = localStorage.getItem("token");
  
  const dispatch = useAppDispatch();

  const [getMe, { isFetching, isLoading }] = useLazyGetMeQuery();

  useEffect(() => {
    const fetchUserData = async () => {
      try {
        if (token && !user) {
          const response = await getMe().unwrap();
          if (response) {
            dispatch(restoreSession(response));
          }
        }
      } catch (e) {
        navigate("/login");
      }
    };

    fetchUserData();
  }, [ user, getMe]);

  if (!token) {
    return <Navigate to="/login" replace />;
  }

  if (isLoading || isFetching || (token && !user)) {
    return <Loader />;
  }

  return <Outlet />;
};


export default AuthGuard








