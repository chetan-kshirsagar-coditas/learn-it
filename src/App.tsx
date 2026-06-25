import styles from "./App.module.scss"
import SnackbarContainer from "./components/Snackbar/SnackbarContainer"
import type { PropsWithChildren } from "react"
const App = ({ children }: PropsWithChildren) => {

  return (
    <div className={styles.app}>
      <SnackbarContainer />
      {children}
    </div>
  )
}

export default App