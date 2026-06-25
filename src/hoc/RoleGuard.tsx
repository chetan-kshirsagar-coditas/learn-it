import type { PropsWithChildren } from "react";
import type { ROLES } from "../types/Roles";
import UnauthorizedPage from "../pages/UnauthorizedPage/UnauthorizedPage";
import useCanView from "../hooks/useCanView";

interface RoleGuardProps extends PropsWithChildren {
  allowed: ROLES[];
  isRouterGuard?: boolean;
}

export const RoleGuard = ({ allowed, children, isRouterGuard = false }: RoleGuardProps) => {
  const { isAllowed } = useCanView(allowed);

  if (isRouterGuard) {
    return isAllowed ? children : <UnauthorizedPage />;
  }

  return isAllowed ? children : null;
};

export default RoleGuard;
