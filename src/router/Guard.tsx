import type { PropsWithChildren } from "react"
import type { Roles } from "../types/Roles"
import {  useAppSelector } from "../redux/store/hooks"
import UnauthorizedPage from "../pages/UnauthorizedPage/UnauthorizedPage"

interface gaurdProps extends PropsWithChildren{
  allowed: Array<Roles>
}

export const Guard = ({ allowed, children }: gaurdProps) => {
  const user = useAppSelector(state => state.auth.user);
  if(allowed.includes(user?.role as Roles)){
    return children;
  }
  return <UnauthorizedPage/>
}

export default Guard