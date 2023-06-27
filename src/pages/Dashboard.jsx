import NavBar from "../components/NavBar";
import Sidebar from "../components/SideBar";
import { useState } from "react";

function Dashboard() {
	return (
		<div>
			<NavBar />
			<Sidebar />
		</div>
	);
}

export default Dashboard;
