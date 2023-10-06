import { useSelector } from "react-redux"
import { Navigate, Outlet } from "react-router-dom"
import HeaderMusic from "../components/HomePage/shared/HeaderMusic"

const ProtectedRoutes = () => {

    const credential = useSelector(store => store.credentials)

    if (credential !== null) {
        return (
            <>
                <HeaderMusic />
                <Outlet />
            </>
        )
    } else {
        return <Navigate to="/auth/login" />
    }
}

export default ProtectedRoutes