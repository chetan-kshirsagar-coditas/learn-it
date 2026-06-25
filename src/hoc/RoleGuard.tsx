import type { PropsWithChildren } from "react"
import type { ROLES } from "../types/Roles"
import {  useAppSelector } from "../redux/store/hooks"
import UnauthorizedPage from "../pages/UnauthorizedPage/UnauthorizedPage"

interface RoleGuardProps extends PropsWithChildren{
  allowed: Array<ROLES>
}

export const RoleGuard = ({ allowed, children }: RoleGuardProps) => {

  const user = useAppSelector(state => state.auth.user);

  if(allowed.includes(user?.role as ROLES)){
    return children;
  }
  
  return <UnauthorizedPage/>
}

export default RoleGuard