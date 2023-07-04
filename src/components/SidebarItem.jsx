const SideBarItem = ({ name, icon, active }) => {
	return (
		<li>
			<a
				href="#"
				className="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700"
			>
				<icon className="flex-shrink-0 w-6 h-6 text-gray-500 transition duration-75 group-hover:text-gray-900 dark:text-gray-400 dark:group-hover:text-white" />
				<span className="flex-1 ml-3 whitespace-nowrap">{name}</span>
				{/* <span className="inline-flex items-center justify-center px-2 ml-3 text-sm font-medium text-gray-800 bg-gray-200 rounded-full dark:bg-gray-700 dark:text-gray-300">
									Pro
								</span> */}
			</a>
		</li>
	);
};

export default SideBarItem;
