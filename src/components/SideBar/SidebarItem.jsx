import { Link } from "react-router-dom";
import React from "react";

const SideBarItem = ({ title, subtitle, path, icon, badge }) => {
	const IconStyled = icon
		? React.cloneElement(icon, {
				className:
					"flex-shrink-0 w-6 h-6 text-gray-500 transition duration-75 group-hover:text-gray-900 dark:text-gray-400 dark:group-hover:text-white",
		  })
		: null;
	return (
		<li>
			<Link
				to={path}
				className="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700"
			>
				{IconStyled && IconStyled}

				<span className="flex-1 ml-3 whitespace-nowrap">{title}</span>
				{badge && (
					<span className="inline-flex items-center justify-center w-3 h-3 p-3 ml-3 text-sm font-medium text-blue-800 bg-blue-100 rounded-full dark:bg-blue-900 dark:text-blue-300">
						{badge}
					</span>
				)}
				{subtitle && (
					<span className="inline-flex items-center justify-center px-2 ml-3 text-sm font-medium text-gray-800 bg-gray-100 rounded-full dark:bg-gray-700 dark:text-gray-300">
						{subtitle}
					</span>
				)}
			</Link>
		</li>
	);
};

export default SideBarItem;
