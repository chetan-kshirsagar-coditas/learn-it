import type { PropsWithChildren } from "react"
import type { ROLES } from "../types/Roles"
import { useAppSelector } from "../redux/store/hooks";

interface PermissionGuardProps extends PropsWithChildren {
  allowed: Array<ROLES>
}
const PermissionGuard = ({ children, allowed }: PermissionGuardProps) => {
  const user = useAppSelector(state => state.auth.user);

  if (allowed.includes(user?.role as ROLES)) {
    return children;
  }

  return <></>
}

export default PermissionGuard