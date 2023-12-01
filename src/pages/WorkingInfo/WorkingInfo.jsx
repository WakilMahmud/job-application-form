import { useContext, useState } from "react";
import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";
import { EDUCATION_INFO } from "../../routes/routes";
import { InformationContext } from "../../App";

const WorkingInfo = () => {
	// const { info, setInfo } = useContext(InformationContext);
	const [workingData, setWorkingData] = useState(null);

	const { register, handleSubmit } = useForm();
	const onSubmit = (data) => {
		alert(JSON.stringify(data));
		// setInfo({ ...info, data });
		setWorkingData(data);
		// console.log(info);
	};

	return (
		<form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-5 max-w-7xl mx-auto my-32">
			<div className="flex flex-col gap-2">
				<label htmlFor="company_name" className="font-bold">
					Company Name
				</label>
				<input
					type="text"
					id="company_name"
					name="company_name"
					placeholder="Company name here"
					className="bg-gray-100 p-2 rounded"
					{...register("company_name")}
				/>
			</div>

			<div className="flex flex-col gap-2">
				<label htmlFor="position_held" className="font-bold">
					Position Held
				</label>
				<input
					type="text"
					id="position_held"
					name="position_held"
					placeholder="Junior Developer"
					className="bg-gray-100 p-2 rounded"
					{...register("position_held")}
				/>
			</div>

			<div className="flex flex-col gap-2">
				<label htmlFor="employment_duration" className="font-bold">
					Employment Duration
				</label>
				<input
					type="text"
					id="employment_duration"
					name="employment_duration"
					placeholder="6 months"
					className="bg-gray-100 p-2 rounded"
					{...register("employment_duration")}
				/>
			</div>

			<div className="flex flex-col gap-2">
				<label htmlFor="description" className="font-bold">
					Description
				</label>

				<textarea
					type="text"
					id="description"
					name="description"
					placeholder="Description"
					rows="10"
					className="bg-gray-100 p-2 rounded"
					{...register("description")}
				/>
			</div>

			<div className="flex gap-4 items-center justify-end mt-4">
				<Link to={EDUCATION_INFO}>
					<p className="text-gray-400">Previous</p>
				</Link>

				<button className="w-20 h-10 rounded-md bg-blue-500 text-white">Submit</button>
			</div>
		</form>
	);
};
export default WorkingInfo;
