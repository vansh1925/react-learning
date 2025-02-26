import { Outlet } from "react-router-dom";

function Dashboard() {
    return ( 
        <div>
            <h1>Dashboard</h1>
            <p>Welcome to the Dashboard page!</p>
            <Outlet />
        
        </div>
     );
}

export default Dashboard;