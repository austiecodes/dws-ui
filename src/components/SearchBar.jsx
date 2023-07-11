const SearchBar = () => {
	return (
		<>
			<div className="items-center hidden mb-3 sm:flex sm:divide-x sm:divide-gray-100 sm:mb-0 dark:divide-gray-700">
				<form className="lg:pr-3" action="#" method="GET">
					<label htmlFor="users-search" className="sr-only">
						Search
					</label>
					<div className="relative mt-1 lg:w-64 xl:w-96">
						<input
							type="text"
							name="email"
							id="users-search"
							className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
							placeholder="Search for users"
						/>
					</div>
				</form>
			</div>
		</>
	);
};

export default SearchBar;
