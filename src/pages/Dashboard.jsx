import NavBar from "../components/NavBar";
import Sidebar from "../components/SideBar";
import { Outlet } from "react-router-dom";

function Dashboard() {
	return (
		<div>
			<NavBar />
			<Sidebar />
			<div id="details">
				<Outlet />
			</div>
		</div>
	);
}

export default Dashboard;
