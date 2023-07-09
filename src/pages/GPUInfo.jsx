import GPUCard from "../components/GPU/GPUCard";

const GPUInfo = () => {
	const gpuInfo = {
		gpuNumber: "0",
		gpuName: "RTX 3090",
		utilization: 45,
		memory: "60",
	};

	const backendInfo = async () => {
		try {
			const response = await fetch("http://192.168.120.128:10000/api/machines/info", {
				method: "GET",
				mode: "cors",
				headers: {
					"Content-Type": "application/json",
					Authorization: "Bearer " + localStorage.getItem("access_token"),
				},
			});

			if (!response.ok) {
				throw new Error("Network response was not ok");
			}
			const data = await response.json();
			console.log(data);
			return data;
		} catch (error) {
			console.error(
				"There has been a problem with your fetch operation:",
				error
			);
		}
	};

	console.log(backendInfo());

	return (
		<div className="flex-row">
			{/* <Progress percents={45} /> */}
			<div>
				<GPUCard gpuInfo={gpuInfo} />
			</div>

			<div></div>
		</div>
	);
};

export default GPUInfo;
