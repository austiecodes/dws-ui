const ContainersPage = () => {
	return (
		<>
			<div className="grid w-full grid-cols-1 gap-4 mt-4 xl:grid-cols-2 2xl:grid-cols-3">
				<div className="items-center justify-between p-4 bg-white border border-gray-200 rounded-lg shadow-sm sm:flex dark:border-gray-700 sm:p-6 dark:bg-gray-800">
					<div className="w-full">
						<h3 className="text-base font-normal text-gray-500 dark:text-gray-400">
							New products
						</h3>
						<span className="text-2xl font-bold leading-none text-gray-900 sm:text-3xl dark:text-white">
							2,340
						</span>
						<p className="flex items-center text-base font-normal text-gray-500 dark:text-gray-400">
							<span className="flex items-center mr-1.5 text-sm text-green-500 dark:text-green-400">
								<svg
									className="w-4 h-4"
									fill="currentColor"
									viewBox="0 0 20 20"
									xmlns="http://www.w3.org/2000/svg"
									aria-hidden="true"
								>
									<path
										clip-rule="evenodd"
										fill-rule="evenodd"
										d="M10 17a.75.75 0 01-.75-.75V5.612L5.29 9.77a.75.75 0 01-1.08-1.04l5.25-5.5a.75.75 0 011.08 0l5.25 5.5a.75.75 0 11-1.08 1.04l-3.96-4.158V16.25A.75.75 0 0110 17z"
									></path>
								</svg>
								12.5%
							</span>
							Since last month
						</p>
					</div>
					<div
						className="w-full"
						id="new-products-chart"
						style="min-height: 155px;"
					>
						<div
							id="apexchartsta8paf4z"
							className="apexcharts-canvas apexchartsta8paf4z apexcharts-theme-light"
							style="width: 185px; height: 140px;"
						>
							<svg
								id="SvgjsSvg2312"
								width="185"
								height="140"
								xmlns="http://www.w3.org/2000/svg"
								version="1.1"
								xmlns:xlink="http://www.w3.org/1999/xlink"
								xmlns:svgjs="http://svgjs.dev"
								className="apexcharts-svg"
								xmlns:data="ApexChartsNS"
								transform="translate(0, 0)"
								style="background: transparent;"
							>
								<g
									id="SvgjsG2314"
									className="apexcharts-inner apexcharts-graphical"
									transform="translate(12, 30)"
								>
									<defs id="SvgjsDefs2313">
										<linearGradient
											id="SvgjsLinearGradient2318"
											x1="0"
											y1="0"
											x2="0"
											y2="1"
										>
											<stop
												id="SvgjsStop2319"
												stop-opacity="0.4"
												stop-color="rgba(216,227,240,0.4)"
												offset="0"
											></stop>
											<stop
												id="SvgjsStop2320"
												stop-opacity="0.5"
												stop-color="rgba(190,209,230,0.5)"
												offset="1"
											></stop>
											<stop
												id="SvgjsStop2321"
												stop-opacity="0.5"
												stop-color="rgba(190,209,230,0.5)"
												offset="1"
											></stop>
										</linearGradient>
										<clipPath id="gridRectMaskta8paf4z">
											<rect
												id="SvgjsRect2323"
												width="172"
												height="83"
												x="-4.5"
												y="-2.5"
												rx="0"
												ry="0"
												opacity="1"
												strokeWidth="0"
												stroke="none"
												stokeDasharray="0"
												fill="#fff"
											></rect>
										</clipPath>
										<clipPath id="forecastMaskta8paf4z"></clipPath>
										<clipPath id="nonForecastMaskta8paf4z"></clipPath>
										<clipPath id="gridRectMarkerMaskta8paf4z">
											<rect
												id="SvgjsRect2324"
												width="167"
												height="82"
												x="-2"
												y="-2"
												rx="0"
												ry="0"
												opacity="1"
												strokeWidth="0"
												stroke="none"
												stokeDasharray="0"
												fill="#fff"
											></rect>
										</clipPath>
									</defs>
									<rect
										id="SvgjsRect2322"
										width="20.95714285714286"
										height="78"
										x="0"
										y="0"
										rx="0"
										ry="0"
										opacity="1"
										strokeWidth="0"
										stokeDasharray="3"
										fill="url(#SvgjsLinearGradient2318)"
										className="apexcharts-xcrosshairs"
										y2="78"
										filter="none"
										fillOpacity="0.9"
									></rect>
									<g
										id="SvgjsG2343"
										className="apexcharts-xaxis"
										transform="translate(0, 0)"
									>
										<g
											id="SvgjsG2344"
											className="apexcharts-xaxis-texts-g"
											transform="translate(0, 4)"
										></g>
									</g>
									<g id="SvgjsG2353" className="apexcharts-grid">
										<g
											id="SvgjsG2354"
											className="apexcharts-gridlines-horizontal"
											style="display: none;"
										>
											<line
												id="SvgjsLine2356"
												x1="0"
												y1="0"
												x2="163"
												y2="0"
												stroke="#e0e0e0"
												stokeDasharray="0"
												stokeLinecap="butt"
												className="apexcharts-gridline"
											></line>
											<line
												id="SvgjsLine2357"
												x1="0"
												y1="19.5"
												x2="163"
												y2="19.5"
												stroke="#e0e0e0"
												stokeDasharray="0"
												stokeLinecap="butt"
												className="apexcharts-gridline"
											></line>
											<line
												id="SvgjsLine2358"
												x1="0"
												y1="39"
												x2="163"
												y2="39"
												stroke="#e0e0e0"
												stokeDasharray="0"
												stokeLinecap="butt"
												className="apexcharts-gridline"
											></line>
											<line
												id="SvgjsLine2359"
												x1="0"
												y1="58.5"
												x2="163"
												y2="58.5"
												stroke="#e0e0e0"
												stokeDasharray="0"
												stokeLinecap="butt"
												className="apexcharts-gridline"
											></line>
											<line
												id="SvgjsLine2360"
												x1="0"
												y1="78"
												x2="163"
												y2="78"
												stroke="#e0e0e0"
												stokeDasharray="0"
												stokeLinecap="butt"
												className="apexcharts-gridline"
											></line>
										</g>
										<g
											id="SvgjsG2355"
											className="apexcharts-gridlines-vertical"
											style="display: none;"
										></g>
										<line
											id="SvgjsLine2362"
											x1="0"
											y1="78"
											x2="163"
											y2="78"
											stroke="transparent"
											stokeDasharray="0"
											stokeLinecap="butt"
										></line>
										<line
											id="SvgjsLine2361"
											x1="0"
											y1="1"
											x2="0"
											y2="78"
											stroke="transparent"
											stokeDasharray="0"
											stokeLinecap="butt"
										></line>
									</g>
									<g
										id="SvgjsG2325"
										className="apexcharts-bar-series apexcharts-plot-series"
									>
										<g
											id="SvgjsG2326"
											className="apexcharts-series"
											rel="1"
											seriesName="Quantity"
											data:realIndex="0"
										>
											<path
												id="SvgjsPath2330"
												d="M 1.1642857142857128 78L 1.1642857142857128 14.700000000000003Q 1.1642857142857128 11.700000000000003 4.164285714285713 11.700000000000003L 14.121428571428574 11.700000000000003Q 17.121428571428574 11.700000000000003 17.121428571428574 14.700000000000003L 17.121428571428574 14.700000000000003L 17.121428571428574 78L 17.121428571428574 78z"
												fill="rgba(26,86,219,1)"
												fillOpacity="1"
												stroke="transparent"
												stokeOpacity="1"
												stokeLinecap="round"
												strokeWidth="5"
												stokeDasharray="0"
												className="apexcharts-bar-area"
												index="0"
												clipPath="url(#gridRectMaskta8paf4z)"
												pathTo="M 1.1642857142857128 78L 1.1642857142857128 14.700000000000003Q 1.1642857142857128 11.700000000000003 4.164285714285713 11.700000000000003L 14.121428571428574 11.700000000000003Q 17.121428571428574 11.700000000000003 17.121428571428574 14.700000000000003L 17.121428571428574 14.700000000000003L 17.121428571428574 78L 17.121428571428574 78z"
												pathFrom="M 1.1642857142857128 78L 1.1642857142857128 78L 17.121428571428574 78L 17.121428571428574 78L 17.121428571428574 78L 17.121428571428574 78L 17.121428571428574 78L 1.1642857142857128 78"
												cy="11.700000000000003"
												cx="21.949999999999996"
												j="0"
												val="170"
												barHeight="66.3"
												barWidth="20.95714285714286"
											></path>
											<path
												id="SvgjsPath2332"
												d="M 24.449999999999996 78L 24.449999999999996 10.800000000000011Q 24.449999999999996 7.800000000000011 27.449999999999996 7.800000000000011L 37.40714285714286 7.800000000000011Q 40.40714285714286 7.800000000000011 40.40714285714286 10.800000000000011L 40.40714285714286 10.800000000000011L 40.40714285714286 78L 40.40714285714286 78z"
												fill="rgba(26,86,219,1)"
												fillOpacity="1"
												stroke="transparent"
												stokeOpacity="1"
												stokeLinecap="round"
												strokeWidth="5"
												stokeDasharray="0"
												className="apexcharts-bar-area"
												index="0"
												clipPath="url(#gridRectMaskta8paf4z)"
												pathTo="M 24.449999999999996 78L 24.449999999999996 10.800000000000011Q 24.449999999999996 7.800000000000011 27.449999999999996 7.800000000000011L 37.40714285714286 7.800000000000011Q 40.40714285714286 7.800000000000011 40.40714285714286 10.800000000000011L 40.40714285714286 10.800000000000011L 40.40714285714286 78L 40.40714285714286 78z"
												pathFrom="M 24.449999999999996 78L 24.449999999999996 78L 40.40714285714286 78L 40.40714285714286 78L 40.40714285714286 78L 40.40714285714286 78L 40.40714285714286 78L 24.449999999999996 78"
												cy="7.800000000000011"
												cx="45.23571428571428"
												j="1"
												val="180"
												barHeight="70.19999999999999"
												barWidth="20.95714285714286"
											></path>
											<path
												id="SvgjsPath2334"
												d="M 47.73571428571428 78L 47.73571428571428 17.040000000000006Q 47.73571428571428 14.040000000000006 50.73571428571428 14.040000000000006L 60.692857142857136 14.040000000000006Q 63.692857142857136 14.040000000000006 63.692857142857136 17.040000000000006L 63.692857142857136 17.040000000000006L 63.692857142857136 78L 63.692857142857136 78z"
												fill="rgba(26,86,219,1)"
												fillOpacity="1"
												stroke="transparent"
												stokeOpacity="1"
												stokeLinecap="round"
												strokeWidth="5"
												stokeDasharray="0"
												className="apexcharts-bar-area"
												index="0"
												clipPath="url(#gridRectMaskta8paf4z)"
												pathTo="M 47.73571428571428 78L 47.73571428571428 17.040000000000006Q 47.73571428571428 14.040000000000006 50.73571428571428 14.040000000000006L 60.692857142857136 14.040000000000006Q 63.692857142857136 14.040000000000006 63.692857142857136 17.040000000000006L 63.692857142857136 17.040000000000006L 63.692857142857136 78L 63.692857142857136 78z"
												pathFrom="M 47.73571428571428 78L 47.73571428571428 78L 63.692857142857136 78L 63.692857142857136 78L 63.692857142857136 78L 63.692857142857136 78L 63.692857142857136 78L 47.73571428571428 78"
												cy="14.040000000000006"
												cx="68.52142857142857"
												j="2"
												val="164"
												barHeight="63.959999999999994"
												barWidth="20.95714285714286"
											></path>
											<path
												id="SvgjsPath2336"
												d="M 71.02142857142857 78L 71.02142857142857 24.450000000000003Q 71.02142857142857 21.450000000000003 74.02142857142857 21.450000000000003L 83.97857142857143 21.450000000000003Q 86.97857142857143 21.450000000000003 86.97857142857143 24.450000000000003L 86.97857142857143 24.450000000000003L 86.97857142857143 78L 86.97857142857143 78z"
												fill="rgba(26,86,219,1)"
												fillOpacity="1"
												stroke="transparent"
												stokeOpacity="1"
												stokeLinecap="round"
												strokeWidth="5"
												stokeDasharray="0"
												className="apexcharts-bar-area"
												index="0"
												clipPath="url(#gridRectMaskta8paf4z)"
												pathTo="M 71.02142857142857 78L 71.02142857142857 24.450000000000003Q 71.02142857142857 21.450000000000003 74.02142857142857 21.450000000000003L 83.97857142857143 21.450000000000003Q 86.97857142857143 21.450000000000003 86.97857142857143 24.450000000000003L 86.97857142857143 24.450000000000003L 86.97857142857143 78L 86.97857142857143 78z"
												pathFrom="M 71.02142857142857 78L 71.02142857142857 78L 86.97857142857143 78L 86.97857142857143 78L 86.97857142857143 78L 86.97857142857143 78L 86.97857142857143 78L 71.02142857142857 78"
												cy="21.450000000000003"
												cx="91.80714285714285"
												j="3"
												val="145"
												barHeight="56.55"
												barWidth="20.95714285714286"
											></path>
											<path
												id="SvgjsPath2338"
												d="M 94.30714285714285 78L 94.30714285714285 5.340000000000003Q 94.30714285714285 2.3400000000000034 97.30714285714285 2.3400000000000034L 107.2642857142857 2.3400000000000034Q 110.2642857142857 2.3400000000000034 110.2642857142857 5.340000000000003L 110.2642857142857 5.340000000000003L 110.2642857142857 78L 110.2642857142857 78z"
												fill="rgba(26,86,219,1)"
												fillOpacity="1"
												stroke="transparent"
												stokeOpacity="1"
												stokeLinecap="round"
												strokeWidth="5"
												stokeDasharray="0"
												className="apexcharts-bar-area"
												index="0"
												clipPath="url(#gridRectMaskta8paf4z)"
												pathTo="M 94.30714285714285 78L 94.30714285714285 5.340000000000003Q 94.30714285714285 2.3400000000000034 97.30714285714285 2.3400000000000034L 107.2642857142857 2.3400000000000034Q 110.2642857142857 2.3400000000000034 110.2642857142857 5.340000000000003L 110.2642857142857 5.340000000000003L 110.2642857142857 78L 110.2642857142857 78z"
												pathFrom="M 94.30714285714285 78L 94.30714285714285 78L 110.2642857142857 78L 110.2642857142857 78L 110.2642857142857 78L 110.2642857142857 78L 110.2642857142857 78L 94.30714285714285 78"
												cy="2.3400000000000034"
												cx="115.09285714285713"
												j="4"
												val="194"
												barHeight="75.66"
												barWidth="20.95714285714286"
											></path>
											<path
												id="SvgjsPath2340"
												d="M 117.59285714285713 78L 117.59285714285713 14.700000000000003Q 117.59285714285713 11.700000000000003 120.59285714285713 11.700000000000003L 130.54999999999998 11.700000000000003Q 133.54999999999998 11.700000000000003 133.54999999999998 14.700000000000003L 133.54999999999998 14.700000000000003L 133.54999999999998 78L 133.54999999999998 78z"
												fill="rgba(26,86,219,1)"
												fillOpacity="1"
												stroke="transparent"
												stokeOpacity="1"
												stokeLinecap="round"
												strokeWidth="5"
												stokeDasharray="0"
												className="apexcharts-bar-area"
												index="0"
												clipPath="url(#gridRectMaskta8paf4z)"
												pathTo="M 117.59285714285713 78L 117.59285714285713 14.700000000000003Q 117.59285714285713 11.700000000000003 120.59285714285713 11.700000000000003L 130.54999999999998 11.700000000000003Q 133.54999999999998 11.700000000000003 133.54999999999998 14.700000000000003L 133.54999999999998 14.700000000000003L 133.54999999999998 78L 133.54999999999998 78z"
												pathFrom="M 117.59285714285713 78L 117.59285714285713 78L 133.54999999999998 78L 133.54999999999998 78L 133.54999999999998 78L 133.54999999999998 78L 133.54999999999998 78L 117.59285714285713 78"
												cy="11.700000000000003"
												cx="138.3785714285714"
												j="5"
												val="170"
												barHeight="66.3"
												barWidth="20.95714285714286"
											></path>
											<path
												id="SvgjsPath2342"
												d="M 140.8785714285714 78L 140.8785714285714 20.550000000000004Q 140.8785714285714 17.550000000000004 143.8785714285714 17.550000000000004L 153.83571428571426 17.550000000000004Q 156.83571428571426 17.550000000000004 156.83571428571426 20.550000000000004L 156.83571428571426 20.550000000000004L 156.83571428571426 78L 156.83571428571426 78z"
												fill="rgba(26,86,219,1)"
												fillOpacity="1"
												stroke="transparent"
												stokeOpacity="1"
												stokeLinecap="round"
												strokeWidth="5"
												stokeDasharray="0"
												className="apexcharts-bar-area"
												index="0"
												clipPath="url(#gridRectMaskta8paf4z)"
												pathTo="M 140.8785714285714 78L 140.8785714285714 20.550000000000004Q 140.8785714285714 17.550000000000004 143.8785714285714 17.550000000000004L 153.83571428571426 17.550000000000004Q 156.83571428571426 17.550000000000004 156.83571428571426 20.550000000000004L 156.83571428571426 20.550000000000004L 156.83571428571426 78L 156.83571428571426 78z"
												pathFrom="M 140.8785714285714 78L 140.8785714285714 78L 156.83571428571426 78L 156.83571428571426 78L 156.83571428571426 78L 156.83571428571426 78L 156.83571428571426 78L 140.8785714285714 78"
												cy="17.550000000000004"
												cx="161.66428571428568"
												j="6"
												val="155"
												barHeight="60.449999999999996"
												barWidth="20.95714285714286"
											></path>
											<g
												id="SvgjsG2328"
												className="apexcharts-bar-goals-markers"
												style="pointer-events: none"
											>
												<g
													id="SvgjsG2329"
													className="apexcharts-bar-goals-groups"
												></g>
												<g
													id="SvgjsG2331"
													className="apexcharts-bar-goals-groups"
												></g>
												<g
													id="SvgjsG2333"
													className="apexcharts-bar-goals-groups"
												></g>
												<g
													id="SvgjsG2335"
													className="apexcharts-bar-goals-groups"
												></g>
												<g
													id="SvgjsG2337"
													className="apexcharts-bar-goals-groups"
												></g>
												<g
													id="SvgjsG2339"
													className="apexcharts-bar-goals-groups"
												></g>
												<g
													id="SvgjsG2341"
													className="apexcharts-bar-goals-groups"
												></g>
											</g>
										</g>
										<g
											id="SvgjsG2327"
											className="apexcharts-datalabels"
											data:realIndex="0"
										></g>
									</g>
									<line
										id="SvgjsLine2363"
										x1="0"
										y1="0"
										x2="163"
										y2="0"
										stroke="#b6b6b6"
										stokeDasharray="0"
										strokeWidth="1"
										stokeLinecap="butt"
										className="apexcharts-ycrosshairs"
									></line>
									<line
										id="SvgjsLine2364"
										x1="0"
										y1="0"
										x2="163"
										y2="0"
										stokeDasharray="0"
										strokeWidth="0"
										stokeLinecap="butt"
										className="apexcharts-ycrosshairs-hidden"
									></line>
									<g
										id="SvgjsG2365"
										className="apexcharts-yaxis-annotations"
									></g>
									<g
										id="SvgjsG2366"
										className="apexcharts-xaxis-annotations"
									></g>
									<g
										id="SvgjsG2367"
										className="apexcharts-point-annotations"
									></g>
								</g>
								<g
									id="SvgjsG2352"
									className="apexcharts-yaxis"
									rel="0"
									transform="translate(-18, 0)"
								></g>
								<g id="SvgjsG2315" className="apexcharts-annotations"></g>
							</svg>
							<div
								className="apexcharts-legend"
								style="max-height: 70px;"
							></div>
							<div className="apexcharts-tooltip apexcharts-theme-light">
								<div
									className="apexcharts-tooltip-title"
									style="font-family: Inter, sans-serif; font-size: 14px;"
								></div>
								<div
									className="apexcharts-tooltip-series-group"
									style="order: 1;"
								>
									<span
										className="apexcharts-tooltip-marker"
										style="background-color: rgb(26, 86, 219);"
									></span>
									<div
										className="apexcharts-tooltip-text"
										style="font-family: Inter, sans-serif; font-size: 14px;"
									>
										<div className="apexcharts-tooltip-y-group">
											<span className="apexcharts-tooltip-text-y-label"></span>
											<span className="apexcharts-tooltip-text-y-value"></span>
										</div>
										<div className="apexcharts-tooltip-goals-group">
											<span className="apexcharts-tooltip-text-goals-label"></span>
											<span className="apexcharts-tooltip-text-goals-value"></span>
										</div>
										<div className="apexcharts-tooltip-z-group">
											<span className="apexcharts-tooltip-text-z-label"></span>
											<span className="apexcharts-tooltip-text-z-value"></span>
										</div>
									</div>
								</div>
							</div>
							<div className="apexcharts-yaxistooltip apexcharts-yaxistooltip-0 apexcharts-yaxistooltip-left apexcharts-theme-light">
								<div className="apexcharts-yaxistooltip-text"></div>
							</div>
						</div>
					</div>
				</div>
				<div className="items-center justify-between p-4 bg-white border border-gray-200 rounded-lg shadow-sm sm:flex dark:border-gray-700 sm:p-6 dark:bg-gray-800">
					<div className="w-full">
						<h3 className="text-base font-normal text-gray-500 dark:text-gray-400">
							Users
						</h3>
						<span className="text-2xl font-bold leading-none text-gray-900 sm:text-3xl dark:text-white">
							2,340
						</span>
						<p className="flex items-center text-base font-normal text-gray-500 dark:text-gray-400">
							<span className="flex items-center mr-1.5 text-sm text-green-500 dark:text-green-400">
								<svg
									className="w-4 h-4"
									fill="currentColor"
									viewBox="0 0 20 20"
									xmlns="http://www.w3.org/2000/svg"
									aria-hidden="true"
								>
									<path
										clip-rule="evenodd"
										fill-rule="evenodd"
										d="M10 17a.75.75 0 01-.75-.75V5.612L5.29 9.77a.75.75 0 01-1.08-1.04l5.25-5.5a.75.75 0 011.08 0l5.25 5.5a.75.75 0 11-1.08 1.04l-3.96-4.158V16.25A.75.75 0 0110 17z"
									></path>
								</svg>
								3,4%
							</span>
							Since last month
						</p>
					</div>
					<div
						className="w-full"
						id="week-signups-chart"
						style="min-height: 155px;"
					>
						<div
							id="apexcharts0cwxslm8"
							className="apexcharts-canvas apexcharts0cwxslm8 apexcharts-theme-light"
							style="width: 185px; height: 140px;"
						>
							<svg
								id="SvgjsSvg2458"
								width="185"
								height="140"
								xmlns="http://www.w3.org/2000/svg"
								version="1.1"
								xmlns:xlink="http://www.w3.org/1999/xlink"
								xmlns:svgjs="http://svgjs.dev"
								className="apexcharts-svg"
								xmlns:data="ApexChartsNS"
								transform="translate(0, 0)"
								style="background: transparent;"
							>
								<g
									id="SvgjsG2460"
									className="apexcharts-inner apexcharts-graphical"
									transform="translate(12, 30)"
								>
									<defs id="SvgjsDefs2459">
										<linearGradient
											id="SvgjsLinearGradient2464"
											x1="0"
											y1="0"
											x2="0"
											y2="1"
										>
											<stop
												id="SvgjsStop2465"
												stop-opacity="0.4"
												stop-color="rgba(216,227,240,0.4)"
												offset="0"
											></stop>
											<stop
												id="SvgjsStop2466"
												stop-opacity="0.5"
												stop-color="rgba(190,209,230,0.5)"
												offset="1"
											></stop>
											<stop
												id="SvgjsStop2467"
												stop-opacity="0.5"
												stop-color="rgba(190,209,230,0.5)"
												offset="1"
											></stop>
										</linearGradient>
										<clipPath id="gridRectMask0cwxslm8">
											<rect
												id="SvgjsRect2469"
												width="167"
												height="78"
												x="-2"
												y="0"
												rx="0"
												ry="0"
												opacity="1"
												strokeWidth="0"
												stroke="none"
												stokeDasharray="0"
												fill="#fff"
											></rect>
										</clipPath>
										<clipPath id="forecastMask0cwxslm8"></clipPath>
										<clipPath id="nonForecastMask0cwxslm8"></clipPath>
										<clipPath id="gridRectMarkerMask0cwxslm8">
											<rect
												id="SvgjsRect2470"
												width="167"
												height="82"
												x="-2"
												y="-2"
												rx="0"
												ry="0"
												opacity="1"
												strokeWidth="0"
												stroke="none"
												stokeDasharray="0"
												fill="#fff"
											></rect>
										</clipPath>
									</defs>
									<rect
										id="SvgjsRect2468"
										width="5.821428571428571"
										height="78"
										x="0"
										y="0"
										rx="0"
										ry="0"
										opacity="1"
										strokeWidth="0"
										stokeDasharray="3"
										fill="url(#SvgjsLinearGradient2464)"
										className="apexcharts-xcrosshairs"
										y2="78"
										filter="none"
										fillOpacity="0.9"
									></rect>
									<g
										id="SvgjsG2496"
										className="apexcharts-xaxis"
										transform="translate(0, 0)"
									>
										<g
											id="SvgjsG2497"
											className="apexcharts-xaxis-texts-g"
											transform="translate(0, 4)"
										></g>
									</g>
									<g id="SvgjsG2506" className="apexcharts-grid">
										<g
											id="SvgjsG2507"
											className="apexcharts-gridlines-horizontal"
											style="display: none;"
										>
											<line
												id="SvgjsLine2509"
												x1="0"
												y1="0"
												x2="163"
												y2="0"
												stroke="#e0e0e0"
												stokeDasharray="0"
												stokeLinecap="butt"
												className="apexcharts-gridline"
											></line>
											<line
												id="SvgjsLine2510"
												x1="0"
												y1="15.6"
												x2="163"
												y2="15.6"
												stroke="#e0e0e0"
												stokeDasharray="0"
												stokeLinecap="butt"
												className="apexcharts-gridline"
											></line>
											<line
												id="SvgjsLine2511"
												x1="0"
												y1="31.2"
												x2="163"
												y2="31.2"
												stroke="#e0e0e0"
												stokeDasharray="0"
												stokeLinecap="butt"
												className="apexcharts-gridline"
											></line>
											<line
												id="SvgjsLine2512"
												x1="0"
												y1="46.8"
												x2="163"
												y2="46.8"
												stroke="#e0e0e0"
												stokeDasharray="0"
												stokeLinecap="butt"
												className="apexcharts-gridline"
											></line>
											<line
												id="SvgjsLine2513"
												x1="0"
												y1="62.4"
												x2="163"
												y2="62.4"
												stroke="#e0e0e0"
												stokeDasharray="0"
												stokeLinecap="butt"
												className="apexcharts-gridline"
											></line>
											<line
												id="SvgjsLine2514"
												x1="0"
												y1="78"
												x2="163"
												y2="78"
												stroke="#e0e0e0"
												stokeDasharray="0"
												stokeLinecap="butt"
												className="apexcharts-gridline"
											></line>
										</g>
										<g
											id="SvgjsG2508"
											className="apexcharts-gridlines-vertical"
											style="display: none;"
										></g>
										<line
											id="SvgjsLine2516"
											x1="0"
											y1="78"
											x2="163"
											y2="78"
											stroke="transparent"
											stokeDasharray="0"
											stokeLinecap="butt"
										></line>
										<line
											id="SvgjsLine2515"
											x1="0"
											y1="1"
											x2="0"
											y2="78"
											stroke="transparent"
											stokeDasharray="0"
											stokeLinecap="butt"
										></line>
									</g>
									<g
										id="SvgjsG2471"
										className="apexcharts-bar-series apexcharts-plot-series"
									>
										<g
											id="SvgjsG2472"
											className="apexcharts-series"
											rel="1"
											seriesName="Users"
											data:realIndex="0"
										>
											<rect
												id="SvgjsRect2475"
												width="5.821428571428571"
												height="78"
												x="8.732142857142858"
												y="0"
												rx="3"
												ry="3"
												opacity="1"
												strokeWidth="0"
												stroke="none"
												stokeDasharray="0"
												fill="#E5E7EB"
												className="apexcharts-backgroundBar"
											></rect>
											<path
												id="SvgjsPath2477"
												d="M 8.732142857142858 78L 8.732142857142858 46.315999999999995Q 8.732142857142858 43.315999999999995 11.732142857142858 43.315999999999995L 11.553571428571429 43.315999999999995Q 14.553571428571429 43.315999999999995 14.553571428571429 46.315999999999995L 14.553571428571429 46.315999999999995L 14.553571428571429 78L 14.553571428571429 78z"
												fill="rgba(26,86,219,1)"
												fillOpacity="1"
												stokeOpacity="1"
												stokeLinecap="round"
												strokeWidth="0"
												stokeDasharray="0"
												className="apexcharts-bar-area"
												index="0"
												clipPath="url(#gridRectMask0cwxslm8)"
												pathTo="M 8.732142857142858 78L 8.732142857142858 46.315999999999995Q 8.732142857142858 43.315999999999995 11.732142857142858 43.315999999999995L 11.553571428571429 43.315999999999995Q 14.553571428571429 43.315999999999995 14.553571428571429 46.315999999999995L 14.553571428571429 46.315999999999995L 14.553571428571429 78L 14.553571428571429 78z"
												pathFrom="M 8.732142857142858 78L 8.732142857142858 78L 14.553571428571429 78L 14.553571428571429 78L 14.553571428571429 78L 14.553571428571429 78L 14.553571428571429 78L 8.732142857142858 78"
												cy="43.315999999999995"
												cx="32.01785714285714"
												j="0"
												val="1334"
												barHeight="34.684000000000005"
												barWidth="5.821428571428571"
											></path>
											<rect
												id="SvgjsRect2478"
												width="5.821428571428571"
												height="78"
												x="32.01785714285714"
												y="0"
												rx="3"
												ry="3"
												opacity="1"
												strokeWidth="0"
												stroke="none"
												stokeDasharray="0"
												fill="#E5E7EB"
												className="apexcharts-backgroundBar"
											></rect>
											<path
												id="SvgjsPath2480"
												d="M 32.01785714285714 78L 32.01785714285714 17.689999999999998Q 32.01785714285714 14.689999999999998 35.01785714285714 14.689999999999998L 34.83928571428571 14.689999999999998Q 37.83928571428571 14.689999999999998 37.83928571428571 17.689999999999998L 37.83928571428571 17.689999999999998L 37.83928571428571 78L 37.83928571428571 78z"
												fill="rgba(26,86,219,1)"
												fillOpacity="1"
												stokeOpacity="1"
												stokeLinecap="round"
												strokeWidth="0"
												stokeDasharray="0"
												className="apexcharts-bar-area"
												index="0"
												clipPath="url(#gridRectMask0cwxslm8)"
												pathTo="M 32.01785714285714 78L 32.01785714285714 17.689999999999998Q 32.01785714285714 14.689999999999998 35.01785714285714 14.689999999999998L 34.83928571428571 14.689999999999998Q 37.83928571428571 14.689999999999998 37.83928571428571 17.689999999999998L 37.83928571428571 17.689999999999998L 37.83928571428571 78L 37.83928571428571 78z"
												pathFrom="M 32.01785714285714 78L 32.01785714285714 78L 37.83928571428571 78L 37.83928571428571 78L 37.83928571428571 78L 37.83928571428571 78L 37.83928571428571 78L 32.01785714285714 78"
												cy="14.689999999999998"
												cx="55.30357142857142"
												j="1"
												val="2435"
												barHeight="63.31"
												barWidth="5.821428571428571"
											></path>
											<rect
												id="SvgjsRect2481"
												width="5.821428571428571"
												height="78"
												x="55.30357142857142"
												y="0"
												rx="3"
												ry="3"
												opacity="1"
												strokeWidth="0"
												stroke="none"
												stokeDasharray="0"
												fill="#E5E7EB"
												className="apexcharts-backgroundBar"
											></rect>
											<path
												id="SvgjsPath2483"
												d="M 55.30357142857142 78L 55.30357142857142 35.422Q 55.30357142857142 32.422 58.30357142857142 32.422L 58.12499999999999 32.422Q 61.12499999999999 32.422 61.12499999999999 35.422L 61.12499999999999 35.422L 61.12499999999999 78L 61.12499999999999 78z"
												fill="rgba(26,86,219,1)"
												fillOpacity="1"
												stokeOpacity="1"
												stokeLinecap="round"
												strokeWidth="0"
												stokeDasharray="0"
												className="apexcharts-bar-area"
												index="0"
												clipPath="url(#gridRectMask0cwxslm8)"
												pathTo="M 55.30357142857142 78L 55.30357142857142 35.422Q 55.30357142857142 32.422 58.30357142857142 32.422L 58.12499999999999 32.422Q 61.12499999999999 32.422 61.12499999999999 35.422L 61.12499999999999 35.422L 61.12499999999999 78L 61.12499999999999 78z"
												pathFrom="M 55.30357142857142 78L 55.30357142857142 78L 61.12499999999999 78L 61.12499999999999 78L 61.12499999999999 78L 61.12499999999999 78L 61.12499999999999 78L 55.30357142857142 78"
												cy="32.422"
												cx="78.58928571428571"
												j="2"
												val="1753"
												barHeight="45.578"
												barWidth="5.821428571428571"
											></path>
											<rect
												id="SvgjsRect2484"
												width="5.821428571428571"
												height="78"
												x="78.58928571428571"
												y="0"
												rx="3"
												ry="3"
												opacity="1"
												strokeWidth="0"
												stroke="none"
												stokeDasharray="0"
												fill="#E5E7EB"
												className="apexcharts-backgroundBar"
											></rect>
											<path
												id="SvgjsPath2486"
												d="M 78.58928571428571 78L 78.58928571428571 46.472Q 78.58928571428571 43.472 81.58928571428571 43.472L 81.41071428571428 43.472Q 84.41071428571428 43.472 84.41071428571428 46.472L 84.41071428571428 46.472L 84.41071428571428 78L 84.41071428571428 78z"
												fill="rgba(26,86,219,1)"
												fillOpacity="1"
												stokeOpacity="1"
												stokeLinecap="round"
												strokeWidth="0"
												stokeDasharray="0"
												className="apexcharts-bar-area"
												index="0"
												clipPath="url(#gridRectMask0cwxslm8)"
												pathTo="M 78.58928571428571 78L 78.58928571428571 46.472Q 78.58928571428571 43.472 81.58928571428571 43.472L 81.41071428571428 43.472Q 84.41071428571428 43.472 84.41071428571428 46.472L 84.41071428571428 46.472L 84.41071428571428 78L 84.41071428571428 78z"
												pathFrom="M 78.58928571428571 78L 78.58928571428571 78L 84.41071428571428 78L 84.41071428571428 78L 84.41071428571428 78L 84.41071428571428 78L 84.41071428571428 78L 78.58928571428571 78"
												cy="43.472"
												cx="101.875"
												j="3"
												val="1328"
												barHeight="34.528"
												barWidth="5.821428571428571"
											></path>
											<rect
												id="SvgjsRect2487"
												width="5.821428571428571"
												height="78"
												x="101.875"
												y="0"
												rx="3"
												ry="3"
												opacity="1"
												strokeWidth="0"
												stroke="none"
												stokeDasharray="0"
												fill="#E5E7EB"
												className="apexcharts-backgroundBar"
											></rect>
											<path
												id="SvgjsPath2489"
												d="M 101.875 78L 101.875 50.97Q 101.875 47.97 104.875 47.97L 104.69642857142857 47.97Q 107.69642857142857 47.97 107.69642857142857 50.97L 107.69642857142857 50.97L 107.69642857142857 78L 107.69642857142857 78z"
												fill="rgba(26,86,219,1)"
												fillOpacity="1"
												stokeOpacity="1"
												stokeLinecap="round"
												strokeWidth="0"
												stokeDasharray="0"
												className="apexcharts-bar-area"
												index="0"
												clipPath="url(#gridRectMask0cwxslm8)"
												pathTo="M 101.875 78L 101.875 50.97Q 101.875 47.97 104.875 47.97L 104.69642857142857 47.97Q 107.69642857142857 47.97 107.69642857142857 50.97L 107.69642857142857 50.97L 107.69642857142857 78L 107.69642857142857 78z"
												pathFrom="M 101.875 78L 101.875 78L 107.69642857142857 78L 107.69642857142857 78L 107.69642857142857 78L 107.69642857142857 78L 107.69642857142857 78L 101.875 78"
												cy="47.97"
												cx="125.16071428571428"
												j="4"
												val="1155"
												barHeight="30.03"
												barWidth="5.821428571428571"
											></path>
											<rect
												id="SvgjsRect2490"
												width="5.821428571428571"
												height="78"
												x="125.16071428571428"
												y="0"
												rx="3"
												ry="3"
												opacity="1"
												strokeWidth="0"
												stroke="none"
												stokeDasharray="0"
												fill="#E5E7EB"
												className="apexcharts-backgroundBar"
											></rect>
											<path
												id="SvgjsPath2492"
												d="M 125.16071428571428 78L 125.16071428571428 38.568Q 125.16071428571428 35.568 128.16071428571428 35.568L 127.98214285714286 35.568Q 130.98214285714286 35.568 130.98214285714286 38.568L 130.98214285714286 38.568L 130.98214285714286 78L 130.98214285714286 78z"
												fill="rgba(26,86,219,1)"
												fillOpacity="1"
												stokeOpacity="1"
												stokeLinecap="round"
												strokeWidth="0"
												stokeDasharray="0"
												className="apexcharts-bar-area"
												index="0"
												clipPath="url(#gridRectMask0cwxslm8)"
												pathTo="M 125.16071428571428 78L 125.16071428571428 38.568Q 125.16071428571428 35.568 128.16071428571428 35.568L 127.98214285714286 35.568Q 130.98214285714286 35.568 130.98214285714286 38.568L 130.98214285714286 38.568L 130.98214285714286 78L 130.98214285714286 78z"
												pathFrom="M 125.16071428571428 78L 125.16071428571428 78L 130.98214285714286 78L 130.98214285714286 78L 130.98214285714286 78L 130.98214285714286 78L 130.98214285714286 78L 125.16071428571428 78"
												cy="35.568"
												cx="148.44642857142856"
												j="5"
												val="1632"
												barHeight="42.432"
												barWidth="5.821428571428571"
											></path>
											<rect
												id="SvgjsRect2493"
												width="5.821428571428571"
												height="78"
												x="148.44642857142856"
												y="0"
												rx="3"
												ry="3"
												opacity="1"
												strokeWidth="0"
												stroke="none"
												stokeDasharray="0"
												fill="#E5E7EB"
												className="apexcharts-backgroundBar"
											></rect>
											<path
												id="SvgjsPath2495"
												d="M 148.44642857142856 78L 148.44642857142856 46.263999999999996Q 148.44642857142856 43.263999999999996 151.44642857142856 43.263999999999996L 151.26785714285714 43.263999999999996Q 154.26785714285714 43.263999999999996 154.26785714285714 46.263999999999996L 154.26785714285714 46.263999999999996L 154.26785714285714 78L 154.26785714285714 78z"
												fill="rgba(26,86,219,1)"
												fillOpacity="1"
												stokeOpacity="1"
												stokeLinecap="round"
												strokeWidth="0"
												stokeDasharray="0"
												className="apexcharts-bar-area"
												index="0"
												clipPath="url(#gridRectMask0cwxslm8)"
												pathTo="M 148.44642857142856 78L 148.44642857142856 46.263999999999996Q 148.44642857142856 43.263999999999996 151.44642857142856 43.263999999999996L 151.26785714285714 43.263999999999996Q 154.26785714285714 43.263999999999996 154.26785714285714 46.263999999999996L 154.26785714285714 46.263999999999996L 154.26785714285714 78L 154.26785714285714 78z"
												pathFrom="M 148.44642857142856 78L 148.44642857142856 78L 154.26785714285714 78L 154.26785714285714 78L 154.26785714285714 78L 154.26785714285714 78L 154.26785714285714 78L 148.44642857142856 78"
												cy="43.263999999999996"
												cx="171.73214285714283"
												j="6"
												val="1336"
												barHeight="34.736000000000004"
												barWidth="5.821428571428571"
											></path>
											<g
												id="SvgjsG2474"
												className="apexcharts-bar-goals-markers"
												style="pointer-events: none"
											>
												<g
													id="SvgjsG2476"
													className="apexcharts-bar-goals-groups"
												></g>
												<g
													id="SvgjsG2479"
													className="apexcharts-bar-goals-groups"
												></g>
												<g
													id="SvgjsG2482"
													className="apexcharts-bar-goals-groups"
												></g>
												<g
													id="SvgjsG2485"
													className="apexcharts-bar-goals-groups"
												></g>
												<g
													id="SvgjsG2488"
													className="apexcharts-bar-goals-groups"
												></g>
												<g
													id="SvgjsG2491"
													className="apexcharts-bar-goals-groups"
												></g>
												<g
													id="SvgjsG2494"
													className="apexcharts-bar-goals-groups"
												></g>
											</g>
										</g>
										<g
											id="SvgjsG2473"
											className="apexcharts-datalabels"
											data:realIndex="0"
										></g>
									</g>
									<line
										id="SvgjsLine2517"
										x1="0"
										y1="0"
										x2="163"
										y2="0"
										stroke="#b6b6b6"
										stokeDasharray="0"
										strokeWidth="1"
										stokeLinecap="butt"
										className="apexcharts-ycrosshairs"
									></line>
									<line
										id="SvgjsLine2518"
										x1="0"
										y1="0"
										x2="163"
										y2="0"
										stokeDasharray="0"
										strokeWidth="0"
										stokeLinecap="butt"
										className="apexcharts-ycrosshairs-hidden"
									></line>
									<g
										id="SvgjsG2519"
										className="apexcharts-yaxis-annotations"
									></g>
									<g
										id="SvgjsG2520"
										className="apexcharts-xaxis-annotations"
									></g>
									<g
										id="SvgjsG2521"
										className="apexcharts-point-annotations"
									></g>
								</g>
								<g
									id="SvgjsG2505"
									className="apexcharts-yaxis"
									rel="0"
									transform="translate(-18, 0)"
								></g>
								<g id="SvgjsG2461" className="apexcharts-annotations"></g>
							</svg>
							<div
								className="apexcharts-legend"
								style="max-height: 70px;"
							></div>
							<div className="apexcharts-tooltip apexcharts-theme-light">
								<div
									className="apexcharts-tooltip-title"
									style="font-family: Inter, sans-serif; font-size: 14px;"
								></div>
								<div
									className="apexcharts-tooltip-series-group"
									style="order: 1;"
								>
									<span
										className="apexcharts-tooltip-marker"
										style="background-color: rgb(26, 86, 219);"
									></span>
									<div
										className="apexcharts-tooltip-text"
										style="font-family: Inter, sans-serif; font-size: 14px;"
									>
										<div className="apexcharts-tooltip-y-group">
											<span className="apexcharts-tooltip-text-y-label"></span>
											<span className="apexcharts-tooltip-text-y-value"></span>
										</div>
										<div className="apexcharts-tooltip-goals-group">
											<span className="apexcharts-tooltip-text-goals-label"></span>
											<span className="apexcharts-tooltip-text-goals-value"></span>
										</div>
										<div className="apexcharts-tooltip-z-group">
											<span className="apexcharts-tooltip-text-z-label"></span>
											<span className="apexcharts-tooltip-text-z-value"></span>
										</div>
									</div>
								</div>
							</div>
							<div className="apexcharts-yaxistooltip apexcharts-yaxistooltip-0 apexcharts-yaxistooltip-left apexcharts-theme-light">
								<div className="apexcharts-yaxistooltip-text"></div>
							</div>
						</div>
					</div>
				</div>
				<div className="p-4 bg-white border border-gray-200 rounded-lg shadow-sm dark:border-gray-700 sm:p-6 dark:bg-gray-800">
					<div className="w-full">
						<h3 className="mb-2 text-base font-normal text-gray-500 dark:text-gray-400">
							Audience by age
						</h3>
						<div className="flex items-center mb-2">
							<div className="w-16 text-sm font-medium dark:text-white">
								50+
							</div>
							<div className="w-full bg-gray-200 rounded-full h-2.5 dark:bg-gray-700">
								<div
									className="bg-primary-600 h-2.5 rounded-full dark:bg-primary-500"
									style="width: 18%"
								></div>
							</div>
						</div>
						<div className="flex items-center mb-2">
							<div className="w-16 text-sm font-medium dark:text-white">
								40+
							</div>
							<div className="w-full bg-gray-200 rounded-full h-2.5 dark:bg-gray-700">
								<div
									className="bg-primary-600 h-2.5 rounded-full dark:bg-primary-500"
									style="width: 15%"
								></div>
							</div>
						</div>
						<div className="flex items-center mb-2">
							<div className="w-16 text-sm font-medium dark:text-white">
								30+
							</div>
							<div className="w-full bg-gray-200 rounded-full h-2.5 dark:bg-gray-700">
								<div
									className="bg-primary-600 h-2.5 rounded-full dark:bg-primary-500"
									style="width: 60%"
								></div>
							</div>
						</div>
						<div className="flex items-center mb-2">
							<div className="w-16 text-sm font-medium dark:text-white">
								20+
							</div>
							<div className="w-full bg-gray-200 rounded-full h-2.5 dark:bg-gray-700">
								<div
									className="bg-primary-600 h-2.5 rounded-full dark:bg-primary-500"
									style="width: 30%"
								></div>
							</div>
						</div>
					</div>
					<div id="traffic-channels-chart" className="w-full"></div>
				</div>
			</div>
		</>
	);
};

export default ContainersPage;
