import { Outlet } from "react-router-dom"
import styles from "./App.module.scss"
import SnackbarContainer from "./components/Snackbar/SnackbarContainer"
import { useEffect } from "react"
import { useGetMeQuery } from "./redux/slices/authApiSlice"
import { useAppDispatch } from "./redux/store/hooks"
import { restoreSession } from "./redux/slices/authSlice"
const App = () => {

  const { data, isFetching } = useGetMeQuery();
  const dispatch = useAppDispatch();

  useEffect(() => {
    if(data) {
      dispatch(restoreSession(data));
    }
  }, [data, isFetching]);

  return (
    <div className={styles.app}>
      <SnackbarContainer />
      <Outlet />
    </div>
  )
}

export default App