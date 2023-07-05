const Sample = () => {



  return (
    <>
<div className="relative mt-20 w-full h-full overflow-y-auto bg-gray-50  dark:bg-gray-900">
<div className="px-4 pt-6">
        <div className="grid gap-4 xl:grid-cols-2 2xl:grid-cols-3">
          <div className="p-4 bg-white border border-gray-200 rounded-lg shadow-sm 2xl:col-span-2 dark:border-gray-700 sm:p-6 dark:bg-gray-800">
            <div className="flex items-center justify-between mb-4">
              <div class="flex-shrink-0">
            <span class="text-xl font-bold leading-none text-gray-900 sm:text-2xl dark:text-white">Machine 1</span>
            <h3 class="text-base font-light text-gray-500 dark:text-gray-400">GPU:0 RTX 3060</h3>
              </div>
            
              <div class="flex items-center justify-end flex-1 text-base font-medium text-green-500 dark:text-green-400">
                Available
              </div>
              
            </div>
          </div>
          <div className="p-4 bg-white border border-gray-200 rounded-lg shadow-sm dark:border-gray-700 sm:p-6 dark:bg-gray-800">
            <div className="flex items-center justify-between mb-4">
              <div class="flex-shrink-0">
            <span class="text-xl font-bold leading-none text-gray-900 sm:text-2xl dark:text-white">Machine 1</span>
            <h3 class="text-base font-light text-gray-500 dark:text-gray-400">GPU:0 RTX 3060</h3>
              </div>
            
              <div class="flex items-center justify-end flex-1 text-base font-medium text-green-500 dark:text-green-400">
                Available
              </div>
              
            </div>
          </div>
        </div>

      </div>
</div>



    </>
  )
}


export default Sample;