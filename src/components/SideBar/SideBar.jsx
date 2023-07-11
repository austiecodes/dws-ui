import { BsGpuCard } from "react-icons/bs";
import { BiUser, BiLogoDocker, BiToggleRight } from "react-icons/bi";
import { MdAdminPanelSettings } from "react-icons/md";
import SideBarItem from "./SidebarItem";
import SideBarDropdownItem from "./SideBarDropdownItem";

function Sidebar() {
	const dropdownItems = [
		{
			title: "Users",
			path: "/dashboard/allusers",
			icon: <BiUser />,
		},
		{
			title: "Features",
			path: "/dashboard/features",
			icon: <BiToggleRight />,
		},
		// etc.
	];

	return (
		<div>
			<aside
				className="fixed top-0 left-0 z-40 w-64 h-screen pt-14 transition-transform bg-white border-r border-gray-200 dark:bg-gray-800 dark:border-gray-700"
				aria-label="Sidenav"
				id="drawer-navigation"
			>
				<div className="h-full px-3 py-4 overflow-y-auto bg-gray-50 dark:bg-gray-800">
					<ul className="space-y-2 font-medium">
						<SideBarItem
							title="Machines"
							path="/dashboard/gpuinfo"
							icon={<BsGpuCard />}
						/>
						<SideBarItem
							title="Containers"
							path="/dashboard/containers"
							icon={<BiLogoDocker />}
						/>
						<SideBarDropdownItem
							title="Admin"
							icon={<MdAdminPanelSettings />}
							dropdownItems={dropdownItems}
						/>
					</ul>
				</div>
			</aside>
		</div>
	);
}

export default Sidebar;
