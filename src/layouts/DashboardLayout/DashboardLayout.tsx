import { useAppSelector } from "../../redux/store/hooks"

const DashboardLayout = () => {
    const user = useAppSelector(state => state.auth.user);
    // console.log(user);
  return (
    <div>welcome, {user?.name}</div>
  )
}

export default DashboardLayout