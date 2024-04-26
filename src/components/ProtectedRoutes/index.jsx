import { useContext } from "react";
import { PropsContext } from "../../providers/context"
import { Outlet, Navigate } from "react-router-dom";

export const ProtectedRoutes =  () => {
    const {user} = useContext(PropsContext);

    return user ? <Outlet /> : <Navigate to="/" />
}

