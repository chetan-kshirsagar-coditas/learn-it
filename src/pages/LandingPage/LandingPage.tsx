import Navbar from "../../components/Navbar/Navbar";
import { MULTICLASS } from "../../utility/multiClass";
import styles from "./LandingPage.module.scss";
import LeftBG from "../../assets/leftSection_BG.svg"
import Button from "../../components/Button/Button";
import { snack } from "../../components/Snackbar/hooks/useSnackbarStore";

const LandingPage = () => {
    return (
        <div className={styles.LandingPage}>
            <Navbar />
            <div className={styles.heroSection}>
                <div className={MULTICLASS([styles.section, styles.leftSection])}>
                    <img src={LeftBG} alt="teacher_png" />
                </div>
                <div className={MULTICLASS([styles.section, styles.rightSection])}>
                    <span>Bharat's Trusted &</span>
                    <span className={styles.highlight}>Affordable</span>
                    <span>Educational Platform</span>
                    <p>Unlock your potential by signing up with LearnIT-The most affordable learning solution </p>
                </div>
            </div>
        </div>
    )
}

export default LandingPage