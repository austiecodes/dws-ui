import WaitQueueItem from "./WaitQueueItem";

const WaitQueueCard = () => {
	const waitItemInfo = [{"nickname":"User1","reason":"2023-8-1","date":"2021-8-1"},{"nickname":"User2","reason":"2023-8-1","date":"2021-8-1"}]

	return (
			<div className="relative overflow-x-auto shadow-md sm:rounded-lg p-4 bg-white border border-gray-200 rounded-lg shadow-sm dark:border-gray-700 sm:p-6 dark:bg-gray-800">
				<table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
					<thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
						<tr>
							<th scope="col" className="px-6 py-3">
								User
							</th>
							<th scope="col" className="px-6 py-3">
								Task
							</th>
							<th scope="col" className="px-6 py-3">
								Action
							</th>
						</tr>
					</thead>
					<tbody>
						{waitItemInfo.map((item) => 
						<WaitQueueItem waitItemInfo={item} key={item.nickname}/>
						)
						}
					</tbody>
				</table>

			</div>
	);
};

export default WaitQueueCard;
