import { useState } from "react";

function PersonalDropdown() {
	const [isOpen, setIsOpen] = useState(false);
	const handleToggle = () => {
		setIsOpen(!isOpen);
	};

	return (
		<div>
			<button
				type="button"
				className="flex mx-3 text-sm bg-gray-800 rounded-full md:mr-0 focus:ring-4 focus:ring-gray-300 dark:focus:ring-gray-600"
				id="user-menu-button"
				aria-expanded="false"
				data-dropdown-toggle="dropdown"
				onClick={handleToggle}
			>
				<span className="sr-only">Open user menu</span>
				<img
					className="w-8 h-8 rounded-full"
					src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/avatars/michael-gough.png"
					alt="user photo"
				/>
			</button>
			<div
				className={
					isOpen
						? "z-60 absolute top-12 right-0 mt-2 w-56 text-base list-none bg-white rounded divide-y divide-gray-100 shadow dark:bg-gray-700 dark:divide-gray-600 rounded-xl"
						: "hidden"
				}
				id="dropdown"
			>
				<div className="py-3 px-4">
					<span className="block text-sm font-semibold text-gray-900 dark:text-white">
						Neil Sims
					</span>
					<span className="block text-sm text-gray-900 truncate dark:text-white">
						name@flowbite.com
					</span>
				</div>
				<ul
					className="py-1 text-gray-700 dark:text-gray-300"
					aria-labelledby="dropdown"
				>
					<li>
						<a
							href="#"
							className="block py-2 px-4 text-sm hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-400 dark:hover:text-white"
						>
							My profile
						</a>
					</li>
					<li>
						<a
							href="#"
							className="block py-2 px-4 text-sm hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-400 dark:hover:text-white"
						>
							Account settings
						</a>
					</li>
				</ul>
				<ul
					className="py-1 text-gray-700 dark:text-gray-300"
					aria-labelledby="dropdown"
				>
					<li>
						<a
							href="#"
							className="flex items-center py-2 px-4 text-sm hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
						>
							<svg
								className="mr-2 w-5 h-5 text-gray-400"
								fill="currentColor"
								viewBox="0 0 20 20"
								xmlns="http://www.w3.org/2000/svg"
							>
								<path
									fill-rule="evenodd"
									d="M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z"
									clip-rule="evenodd"
								></path>
							</svg>
							My likes
						</a>
					</li>
					<li>
						<a
							href="#"
							className="flex items-center py-2 px-4 text-sm hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
						>
							<svg
								className="mr-2 w-5 h-5 text-gray-400"
								fill="currentColor"
								viewBox="0 0 20 20"
								xmlns="http://www.w3.org/2000/svg"
							>
								<path d="M7 3a1 1 0 000 2h6a1 1 0 100-2H7zM4 7a1 1 0 011-1h10a1 1 0 110 2H5a1 1 0 01-1-1zM2 11a2 2 0 012-2h12a2 2 0 012 2v4a2 2 0 01-2 2H4a2 2 0 01-2-2v-4z"></path>
							</svg>
							Collections
						</a>
					</li>
				</ul>
				<ul
					className="py-1 text-gray-700 dark:text-gray-300"
					aria-labelledby="dropdown"
				>
					<li>
						<a
							href="#"
							className="block py-2 px-4 text-sm hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
						>
							Sign out
						</a>
					</li>
				</ul>
			</div>
		</div>
	);
}

export default PersonalDropdown;
