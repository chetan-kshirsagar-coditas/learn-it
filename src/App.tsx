import { Outlet } from "react-router-dom"
import styles from "./App.module.scss"
import SnackbarContainer from "./components/Snackbar/SnackbarContainer"
const App = () => {

  return (
    <div className={styles.app}>
      <SnackbarContainer />
      <Outlet />
    </div>
  )
}

export default App