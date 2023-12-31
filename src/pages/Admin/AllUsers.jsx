import SearchBar from "../../components/SearchBar";
import UserList from "../../components/Admin/UserList/UsersList";

const AllUsers = () => {
	// const [users, setUsers] = useState([]);
	// const [page, setPage] = useState(1);
	// const [loading, setLoading] = useState(true);
	// const [hasMore, setHasMore] = useState(false);
	// const userPerPage = 20;

	const users = [
		{
			id: 1,
			nickname: "Leanne Graham",
			username: "Bret",
			email: "bret@gmail.com",
			phone: "1-770-736-8031 x56442",
		},
		{
			id: 2,
			nickname: "Ervin Howell",
			username: "Antonette",
			email: "an@gmail.com",
			phone: "010-692-6593 x09125",
		},
		{
			id: 3,
			nickname: "Clementine Bauch",
			username: "Samantha",
			email: "sm@gmail.com",
			phone: "1-463-123-4447",
		},
	];

	return (
		<>
			<div className="mb-4 pt-20">
				<h1 className="text-xl font-semibold text-gray-900 sm:text-2xl dark:text-white">
					All users
				</h1>
			</div>
			<div className="sm:flex">
				<SearchBar />
				<div className="flex items-center ml-auto space-x-2 sm:space-x-3">
					<button
						type="button"
						data-modal-toggle="add-user-modal"
						className="inline-flex items-center justify-center w-1/2 px-3 py-2 text-sm font-medium bg-sky-300 text-center text-white rounded-lg bg-primary-700 hover:bg-primary-800 focus:ring-4 focus:ring-primary-300 sm:w-auto dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800"
					>
						<svg
							className="w-5 h-5 mr-2 -ml-1"
							fill="currentColor"
							viewBox="0 0 20 20"
							xmlns="http://www.w3.org/2000/svg"
						>
							<path
								fillRule="evenodd"
								d="M10 5a1 1 0 011 1v3h3a1 1 0 110 2h-3v3a1 1 0 11-2 0v-3H6a1 1 0 110-2h3V6a1 1 0 011-1z"
								clipRule="evenodd"
							></path>
						</svg>
						Add user
					</button>
					<a
						href="#"
						className="inline-flex items-center justify-center w-1/2 px-3 py-2 text-sm font-medium text-center text-gray-900 bg-white border border-gray-300 rounded-lg hover:bg-gray-100 focus:ring-4 focus:ring-primary-300 sm:w-auto dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700 dark:focus:ring-gray-700"
					>
						<svg
							className="w-5 h-5 mr-2 -ml-1"
							fill="currentColor"
							viewBox="0 0 20 20"
							xmlns="http://www.w3.org/2000/svg"
						>
							<path
								fillRule="evenodd"
								d="M6 2a2 2 0 00-2 2v12a2 2 0 002 2h8a2 2 0 002-2V7.414A2 2 0 0015.414 6L12 2.586A2 2 0 0010.586 2H6zm5 6a1 1 0 10-2 0v3.586l-1.293-1.293a1 1 0 10-1.414 1.414l3 3a1 1 0 001.414 0l3-3a1 1 0 00-1.414-1.414L11 11.586V8z"
								clipRule="evenodd"
							></path>
						</svg>
						Export
					</a>
				</div>
			</div>
			<UserList Users={users} />
		</>
	);
};

export default AllUsers;
