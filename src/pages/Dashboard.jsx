import NavBar from "../components/NavBar";
import Sidebar from "../components/SideBar/SideBar";
import { Outlet } from "react-router-dom";

function Dashboard() {
	return (
		<div className="min-w-fit">
			<NavBar />
			<Sidebar />
			<div className="p-4 pt-5 sm:ml-64">
				<Outlet />
			</div>
		</div>
	);
}

export default Dashboard;
