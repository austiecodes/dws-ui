const WaitQueueItem = ({ waitItemInfo }) => {
	const user = waitItemInfo.user;
	const task = waitItemInfo.task;
	const timeToStart = waitItemInfo.timeToStart;
	const timeToEnd = waitItemInfo.timeToEnd;
	return (
		<tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
			<th
				scope="row"
				className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
			>
				{user}
			</th>
			<td className="px-6 py-4">{task}</td>
			<td className="px-6 py-4">{timeToStart}</td>
			<td className="px-6 py-4">{timeToEnd}</td>
		</tr>
	);
};

export default WaitQueueItem;
