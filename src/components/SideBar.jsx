import Dropdown from "./Dropdown";
import { BsGpuCard } from "react-icons/bs";
import { Link, Outlet } from "react-router-dom";

function Sidebar() {
	const sidebarClass = `fixed top-0 left-0 z-40 w-64 h-screen pt-14 transition-transform bg-white border-r border-gray-200 dark:bg-gray-800 dark:border-gray-700`;
	return (
		<div>
			<aside
				className={sidebarClass}
				aria-label="Sidenav"
				id="drawer-navigation"
			>
				<div className="h-full px-3 py-4 overflow-y-auto bg-gray-50 dark:bg-gray-800">
					<ul className="space-y-2 font-medium">
						{/* <Dropdown
							mainText="GPU"
							dropdownItems={["Info", "Status", "Usage"]}
							icon={<BsGpuCard />}
						/> */}
						<li>
							<Link
								to={`/dashboard/gpuinfo`}
								className="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700"
							>
								<BsGpuCard className="flex-shrink-0 w-6 h-6 text-gray-500 transition duration-75 group-hover:text-gray-900 dark:text-gray-400 dark:group-hover:text-white" />
								<span className="flex-1 ml-3 whitespace-nowrap">GPU</span>
							</Link>
							{/* <a
								href=""
								className="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700"
							>
								<BsGpuCard className="flex-shrink-0 w-6 h-6 text-gray-500 transition duration-75 group-hover:text-gray-900 dark:text-gray-400 dark:group-hover:text-white" />
								<span className="flex-1 ml-3 whitespace-nowrap">
									<Link to={`contacts/1`}>Your Name</Link>
								</span>
							</a> */}
						</li>
						<li>
							<a
								href="#"
								className="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700"
							>
								<svg
									aria-hidden="true"
									className="flex-shrink-0 w-6 h-6 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white"
									fill="currentColor"
									viewBox="0 0 20 20"
									xmlns="http://www.w3.org/2000/svg"
								>
									<path d="M5 3a2 2 0 00-2 2v2a2 2 0 002 2h2a2 2 0 002-2V5a2 2 0 00-2-2H5zM5 11a2 2 0 00-2 2v2a2 2 0 002 2h2a2 2 0 002-2v-2a2 2 0 00-2-2H5zM11 5a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V5zM11 13a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2z"></path>
								</svg>
								<span className="flex-1 ml-3 whitespace-nowrap">
									Containers
								</span>
								{/* <span className="inline-flex items-center justify-center px-2 ml-3 text-sm font-medium text-gray-800 bg-gray-200 rounded-full dark:bg-gray-700 dark:text-gray-300">
									Pro
								</span> */}
							</a>
						</li>
						<li>
							<a
								href="#"
								className="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700"
							>
								<svg
									aria-hidden="true"
									className="flex-shrink-0 w-6 h-6 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white"
									fill="currentColor"
									viewBox="0 0 20 20"
									xmlns="http://www.w3.org/2000/svg"
								>
									<path d="M8.707 7.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l2-2a1 1 0 00-1.414-1.414L11 7.586V3a1 1 0 10-2 0v4.586l-.293-.293z"></path>
									<path d="M3 5a2 2 0 012-2h1a1 1 0 010 2H5v7h2l1 2h4l1-2h2V5h-1a1 1 0 110-2h1a2 2 0 012 2v10a2 2 0 01-2 2H5a2 2 0 01-2-2V5z"></path>
								</svg>
								<span className="flex-1 ml-3 whitespace-nowrap">Inbox</span>
								<span className="inline-flex items-center justify-center w-3 h-3 p-3 ml-3 text-sm font-medium text-blue-800 bg-blue-100 rounded-full dark:bg-blue-900 dark:text-blue-300">
									3
								</span>
							</a>
						</li>
					</ul>
				</div>
			</aside>
		</div>
	);
}

export default Sidebar;
