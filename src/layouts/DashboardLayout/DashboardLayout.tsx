import { useEffect } from "react";
import { useAppDispatch, useAppSelector } from "../../redux/store/hooks"
import { useGetMeQuery } from "../../redux/slices/authApiSlice";
import { restoreSession } from "../../redux/slices/authSlice";
import Loader from "../../components/Loader/Loader";

const DashboardLayout = () => {

  const user = useAppSelector(state => state.auth.user);
  const dispatch = useAppDispatch();

  const { data, isFetching, isLoading } = useGetMeQuery();

  useEffect(() => {
    if (data) {
      dispatch(restoreSession(data));
    }
  }, [data, isFetching, isLoading]);

  if (isFetching) return <Loader />;

  return (
    <div>welcome, {user?.name}</div>
  )
}

export default DashboardLayout