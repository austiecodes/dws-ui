import WaitQueueItem from "./WaitQueueItem";

const WaitQueueCard = () => {
	const waitItemInfo = [
		{
			user: "User1",
			task: "2023-8-1",
			timeToStart: "2021-8-1",
			timeToEnd: "2021-8-1",
		},
		{
			user: "User2",
			task: "2023-8-1",
			timeToStart: "2021-8-1",
			timeToEnd: "2021-8-1",
		},
	];

	return (
		<div className="relative overflow-x-auto">
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
							Time to Start
						</th>
						<th scope="col" className="px-6 py-3">
							Time to End
						</th>
					</tr>
				</thead>
				<tbody>
					{waitItemInfo.map((waitItem, index) => (
						<WaitQueueItem waitItemInfo={waitItem} key={index} />
					))}
				</tbody>
			</table>
		</div>
	);
};

export default WaitQueueCard;
