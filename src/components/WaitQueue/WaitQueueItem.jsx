const WaitQueueItem = ({ waitItemInfo }) => {
	const nickname = waitItemInfo.nickname;
	const reason = waitItemInfo.reason;
	const date = waitItemInfo.date;
	return (
		<tr className="bg-white dark:bg-gray-800 hover:bg-gray-50 dark:hover:bg-gray-600">
			<td className="w-4 p-4">
				<div className="flex items-center">
					{/* <input
										id="checkbox-table-search-2"
										type="checkbox"
										className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 dark:focus:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
									/>
									<label for="checkbox-table-search-2" className="sr-only">
										checkbox
									</label> */}
				</div>
			</td>

			<th
				scope="row"
				className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
			>
				{nickname}{" "}
			</th>
			<td className="px-6 py-4">{reason}</td>
			<td className="px-6 py-4">{date}</td>

			<td className="px-6 py-4">
				<a
					href="#"
					className="font-medium text-blue-600 dark:text-blue-500 hover:underline"
				>
					Edit
				</a>
			</td>
		</tr>
	);
};

export default WaitQueueItem;
