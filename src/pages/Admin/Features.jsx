import FeatureCard from "../../components/Features/FeatureCard";
import { useEffect } from "react";

const Features = () => {
	const backendURL = import.meta.env.VITE_BACKEND_URL;
	const apiURL = backendURL + "api/feature/all-features-status";
	// const [isToggle, setToggle] = useState(false);
	useEffect(() => {
		fetch(
			apiURL, {
			headers: {
				"Content-Type": "application/json",
			},
			mode: "cors", // 
			method: "GET",
		})
			.then((response) => response.json())
			.then((data) => {
				console.log(data);
				setToggle(data.enable);
			})
			.catch((error) => {
				console.log(error);
			});
	}, []);
	

	return (
		<div className="px-4 pt-10">
			<div className="grid w-full grid-cols-1 gap-4 mt-4 xl:grid-cols-2 2xl:grid-cols-3">
				<FeatureCard title="Image Costomize" description="Allow users to costomize their own docker images" initialStatus={true}/>
			</div>
		</div>
	);
};

export default Features;
