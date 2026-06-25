import { Outlet, useNavigate } from "react-router-dom"
import { useEffect } from "react"
import { useAppSelector } from "../../redux/store/hooks"
import { Roles } from "../../types/Roles"

const DashboardRedirector = () => {
  const navigate = useNavigate();
  const user = useAppSelector((state) => state.auth.user);

  useEffect(() => {
    if (!user) return; 

    switch(user.role){
      case Roles.ADMIN:
        navigate("/courses");
        break;
      case Roles.STUDENT:
        navigate("/adduser");
        break;
      case Roles.INSTRUCTOR:
        navigate("/adduser");
    }

  }, [user]);

  return <Outlet />;
};


export default DashboardRedirector;