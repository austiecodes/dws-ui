import Toggle from "../Base/Toggle";
const FeatureManageCard = ({ title, description }) => {
	return(
    <div className="p-4 mt-4 bg-white border border-gray-200 rounded-lg shadow-sm dark:border-gray-700 sm:p-6 dark:bg-gray-800"
      style={{ height: "200px" }}
    >
        <div className="w-full">
          <div className="flex items-center justify-between"> 
          <h1 className="mb-2 text-base font-bold text-3xl text-black-500 dark:text-gray-400">{title}</h1>
          <Toggle />
          </div>

          <div className="flex items-center mb-2">
            {description}
          </div>
        </div>
        <div id="traffic-channels-chart" className="w-full"></div>
      </div>

  )
};

export default FeatureManageCard;
