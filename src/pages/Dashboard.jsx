import NavBar from "../components/NavBar";
import Sidebar from "../components/SideBar";
import { useState } from "react";

function Dashboard() {
	const [sideBarOpen, setSideBarOpen] = useState(false);
	const toggleSideBar = () => {
		setSideBarOpen(!sideBarOpen);
	};

	return (
		<div>
			<NavBar sideBarOpen={sideBarOpen} setSideBarOpen={setSideBarOpen} />
			<Sidebar open={sideBarOpen} />
		</div>
	);
}

export default Dashboard;
