import FeatureManageCard from "../../components/FeatureManage/FeatureManageCard";

const Features = () => {
	return (
		<div className="px-4 pt-10">
			<div className="grid w-full grid-cols-1 gap-4 mt-4 xl:grid-cols-2 2xl:grid-cols-3">
				<FeatureManageCard title="Feature 1" />
			</div>
		</div>
	);
};

export default Features;
