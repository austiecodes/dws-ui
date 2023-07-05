import Progress from "../components/Progress";
import ProgressCard from "../components/ProgressCard";

const GPUInfo = () => {

	return (
		<div className="flex-row">
			{/* <Progress percents={45} /> */}
			<div>
			<ProgressCard titile={"GPU Utilization"} percents={45} />
			<ProgressCard titile={"GPU Memory"} percents={25} />
			</div>

			<div>
				
			</div>

		</div>
	);
};

export default GPUInfo;
