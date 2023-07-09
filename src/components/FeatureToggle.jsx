import Toggle from "./Toggle";
import { Button, Card } from "flowbite-react";

const FeatureToggle = () => {
	return (
		<div>
			<Card className="max-w-sm">
				<h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
					<p>Image Costomize</p>
				</h5>
				<p className="font-normal text-gray-700 dark:text-gray-400">
					<p>Allow user to costomize their own image</p>
				</p>
				<Button>
					<p>Read more</p>
				</Button>
			</Card>

			<Toggle />
		</div>
	);
};

export default FeatureToggle;

("use client");
