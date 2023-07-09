import UserItem from "./UserItem";

const UserList = ({Users}) => {
	return (
		<>
			<table className="min-w-full mt-4 divide-y divide-gray-200 table-fixed dark:divide-gray-600">
				{/* Table Headers */}
				<thead className="bg-gray-100 dark:bg-gray-700">
					<tr>
						<th scope="col" className="p-4">
							<div className="flex items-center">
								<input
									id="checkbox-all"
									aria-describedby="checkbox-1"
									type="checkbox"
									className="w-4 h-4 border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-primary-300 dark:focus:ring-primary-600 dark:ring-offset-gray-800 dark:bg-gray-700 dark:border-gray-600"
								/>
								<label htmlFor="checkbox-all" className="sr-only">
									checkbox
								</label>
							</div>
						</th>
						<th
							scope="col"
							className="p-4 text-xs font-medium text-left text-gray-500 uppercase dark:text-gray-400"
						>
							Name
						</th>
						<th
							scope="col"
							className="p-4 text-xs font-medium text-left text-gray-500 uppercase dark:text-gray-400"
						>
							Email
						</th>
						<th
							scope="col"
							className="p-4 text-xs font-medium text-left text-gray-500 uppercase dark:text-gray-400"
						>
							Phone
						</th>
						<th
							scope="col"
							className="p-4 text-xs font-medium text-left text-gray-500 uppercase dark:text-gray-400"
						>
							Nickname
						</th>
						{/* <th scope="col" className="p-4 text-xs font-medium text-left text-gray-500 uppercase dark:text-gray-400">
                                Status
                            </th> */}
						<th
							scope="col"
							className="p-4 text-xs font-medium text-left text-gray-500 uppercase dark:text-gray-400"
						>
							Actions
						</th>
					</tr>
				</thead>
				<tbody>
					{
						Users.map((user) => 
							<UserItem user={user} key={user.id}/>
						)
					}
					{/* <UserItem /> */}
				</tbody>
			</table>
		</>
	);
};

export default UserList;
