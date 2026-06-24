import { useEffect } from "react";
import { useAppDispatch, useAppSelector } from "../../redux/store/hooks"
import { useGetMeQuery } from "../../redux/slices/authApiSlice";
import { logout, restoreSession } from "../../redux/slices/authSlice";
import Loader from "../../components/Loader/Loader";
import styles from "./DashboardLayout.module.scss";
import { NavLink, Outlet, useNavigate } from "react-router-dom";
import Button from "../../components/Button/Button";
import { NAV_ITEMS_BY_ROLE } from "./constants/NavItems";

const DashboardLayout = () => {

  const navigate = useNavigate();
  const user = useAppSelector(state => state.auth.user);
  const dispatch = useAppDispatch();

  const { data, isFetching, isLoading } = useGetMeQuery();

  useEffect(() => {
    if (data) {
      dispatch(restoreSession(data));
    }
  }, [data, isFetching, isLoading]);

  if (isFetching) return <Loader />;

  const navItems = NAV_ITEMS_BY_ROLE[(user?.role ?? "") as keyof typeof NAV_ITEMS_BY_ROLE] ?? []
  console.log(navItems);
  return (
    <div className={styles.DashboardLayout}>
      <div className={styles.leftPanel}>
        
          <span className={styles.name}>LearnIT</span>
          <div className={styles.leftMenu}>
              {
                navItems.map(navItem => 
                  <NavLink className={styles.navs} to={navItem.to}>{navItem.label}</NavLink>
                )
              }
          </div>
       
      </div>
      <div className={styles.rightPanel}>
              <div className={styles.dashboardNav}>
                <span>{user?.name}</span>
                <Button variant="danger" onClick={() => {
                  dispatch(logout());
                  navigate("/");
                }}>Logout</Button>
              </div>
              <div className={styles.outletDiv}>
                <Outlet/>
              </div>
      </div>
    </div>
  )
}

export default DashboardLayout