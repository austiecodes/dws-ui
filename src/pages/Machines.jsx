import { useEffect, useState } from "react";
import MachineInfoGroup from "../components/Machines/MachineInfoGroup";

const Machines = () => {
	const [allMachineInfo, setAllMachineInfo] = useState([]);
	const intervalTime = 5000;

	useEffect(() => {
		const fetchData = async () => {
			try {
				const response = await fetch(
					"http://192.168.120.128:10000/api/machines/info",
					{
						method: "GET",
						mode: "cors",
						headers: {
							"Content-Type": "application/json",
							Authorization: "Bearer " + localStorage.getItem("access_token"),
						},
					}
				);

				if (!response.ok) {
					throw new Error("Network response was not ok");
				}
				const data = await response.json();
				setAllMachineInfo(data);
				console.log(data);
			} catch (error) {
				console.error(error);
			}
		};
		fetchData();
		const interval = setInterval(() => {
			fetchData();
		}, intervalTime);

		return () => clearInterval(interval);
	}, []);

	return (
		<div className="flex-row">
			<div>
				{allMachineInfo.map((machineInfo, index) => (
					<MachineInfoGroup
						machineIndex={index}
						machineInfo={machineInfo}
						key={index}
					/>
				))}
			</div>
		</div>
	);
};

export default Machines;
