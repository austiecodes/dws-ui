const UserInfoCard = ({ user }) => {
	return (
		<div className="p-4 mb-4 bg-white border border-gray-200 rounded-lg shadow-sm 2xl:col-span-2 dark:border-gray-700 sm:p-6 dark:bg-gray-800">
			<h3 className="mb-4 text-xl font-semibold dark:text-white">
				General information
			</h3>
			<form action="#">
				<div className="grid grid-cols-6 gap-6">
					<div className="col-span-6 sm:col-span-3">
						<label
							htmlFor="user-name"
							className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
						>
							UserName
						</label>
						<input
							type="text"
							name="user-name"
							id="user-name"
							className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
							placeholder="jeffdean"
							required=""
						/>
					</div>

					<div className="col-span-6 sm:col-span-3">
						<label
							htmlFor="nick-name"
							className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
						>
							NickName
						</label>
						<input
							type="text"
							name="nick-name"
							id="nick-name"
							className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
							placeholder="United States"
							required=""
						/>
					</div>

					<div className="col-span-6 sm:col-span-3">
						<label
							htmlFor="email"
							className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
						>
							Email
						</label>
						<input
							type="email"
							name="email"
							id="email"
							className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
							placeholder="example@company.com"
							required=""
						/>
					</div>
					<div className="col-span-6 sm:col-span-3">
						<label
							htmlFor="phone-number"
							className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
						>
							Phone Number
						</label>
						<input
							type="number"
							name="phone-number"
							id="phone-number"
							className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
							placeholder="e.g. +(12)3456 789"
							required=""
						/>
					</div>

					{/* <div className="col-span-6 sm:col-span-3">
						<label
							htmlFor="department"
							className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
						>
							Lab No.
						</label>
						<input
							type="text"
							name="department"
							id="department"
							className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
							placeholder="Development"
							required=""
						/>
					</div> */}
					{/* <div className="col-span-6 sm:col-span-3">
						<label
							htmlFor="zip-code"
							className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
						>
							Zip/postal code
						</label>
						<input
							type="number"
							name="zip-code"
							id="zip-code"
							className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
							placeholder="123456"
							required=""
						/>
					</div> */}
					<div className="col-span-6 sm:col-full">
						<button
							className="text-white bg-blue-700 hover:bg-primary-800 focus:ring-4 focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800"
							type="submit"
						>
							Save all
						</button>
					</div>
				</div>
			</form>
		</div>
	);
};

export default UserInfoCard;
