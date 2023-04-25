import React from 'react'
import { Navigate, Outlet } from 'react-router-dom'

const PrivateRoute = () => {
    let loginStatus = false;
    return (
        <div>
            {
                loginStatus ? <Outlet /> : <Navigate to="/login" />
            }

        </div>
    )
}

export default PrivateRoute
