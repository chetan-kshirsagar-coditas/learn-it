import type { PropsWithChildren } from "react"
import type { ROLES } from "../types/Roles"
import {  useAppSelector } from "../redux/store/hooks"
import UnauthorizedPage from "../pages/UnauthorizedPage/UnauthorizedPage"

interface gaurdProps extends PropsWithChildren{
  allowed: Array<ROLES>
}

export const Guard = ({ allowed, children }: gaurdProps) => {
  const user = useAppSelector(state => state.auth.user);
  if(allowed.includes(user?.role as ROLES)){
    return children;
  }
  return <UnauthorizedPage/>
}

export default Guard