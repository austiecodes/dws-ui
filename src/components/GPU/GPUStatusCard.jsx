import PressureBar from "../Progress/PressureProgressBar";


const GPUStatusCard = ({ gpuInfo }) => {
  const utilization = gpuInfo.utilization;
  const memory = gpuInfo.memory;

  return (
    <div className="p-4 bg-white border border-gray-200 rounded-lg shadow-sm 2xl:col-span-2 dark:border-gray-700 sm:p-6 dark:bg-gray-800">
    <div className="flex items-center justify-between mb-4">
      <div className="flex-shrink-0">
        <span className="text-xl font-bold leading-none text-gray-900 sm:text-2xl dark:text-white">
          Machine 1
        </span>
        <h3 className="text-base font-light text-gray-500 dark:text-gray-400">
          GPU:{gpuInfo.gpuNumber},{gpuInfo.gpuName}
        </h3>
      </div>
      {/* <div className="flex items-center justify-end flex-1 text-base font-medium text-green-500 dark:text-green-500">
        Available
      </div> */}
      <div className="flex items-center justify-end flex-1 text-base font-medium text-red-600 dark:text-red-600">
        Occupied
      </div>
    </div>
    <PressureBar title="Utilization" percentage={utilization} />
    <PressureBar title="Memory" percentage={memory} subtitle="6G/12G"/>
  </div>
  )
}

export default GPUStatusCard;