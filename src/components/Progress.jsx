const Progress = () => {
	return (
		<>
			<div className="flex justify-center mt-8 gap-20 ">
				<div className="flex flex-col items-center justify-center">
					<div className="w-20 h-20 flex justify-center items-center rounded-full bg-blue-500 mx-auto">
						<p className="text-center">1</p>
					</div>
					<h1 className="text-gray-500">Personal Information</h1>
				</div>
				<div className="flex flex-col items-center justify-center">
					<div className="w-20 h-20 flex justify-center items-center rounded-full bg-blue-500 mx-auto">
						<p className="text-center">2</p>
					</div>
					<h1 className="text-gray-500">Education background</h1>
				</div>
				<div className="flex flex-col items-center justify-center">
					<div className="w-20 h-20 flex justify-center items-center rounded-full bg-blue-500 mx-auto">
						<p className="text-center">3</p>
					</div>
					<h1 className="text-gray-500">Work Experience</h1>
				</div>
			</div>
		</>
	);
};

export default Progress;
