import { useState } from "react";
import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";
import { ROOT, WORK_EXPERIENCE_INFO } from "../../routes/routes";

const EducationInfo = () => {
	const [educationData, setEducationData] = useState(null);

	const { register, handleSubmit } = useForm();
	const onSubmit = (data) => {
		alert(JSON.stringify(data));
		setEducationData(data);
	};

	return (
		<>
			<h1 className="text-center">EDUCATION INFO</h1>
			<form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-5 max-w-7xl mx-auto my-32">
				<div className="flex flex-col gap-2">
					<label htmlFor="highest_degree" className="font-bold">
						Highest Degree
					</label>
					<select id="highest_degree" name="highest_degree" className="bg-gray-100 p-2 rounded" {...register("highest_degree")}>
						<option>Enter your Highest Degree</option>
						<option value="MSC">MSC</option>
						<option value="BSC">BSC</option>
						<option value="HSC">HSC</option>
						<option value="SSC">SSC</option>
					</select>
				</div>

				<div className="flex flex-col gap-2">
					<label htmlFor="field_of_study" className="font-bold">
						Field of Study
					</label>
					<input
						type="text"
						id="field_of_study"
						name="field_of_study"
						placeholder="Field of Study"
						className="bg-gray-100 p-2 rounded"
						{...register("field_of_study")}
					/>
				</div>

				<div className="flex flex-col gap-2">
					<label htmlFor="institution_name" className="font-bold">
						Institution Name
					</label>
					<input
						type="text"
						id="institution_name"
						name="institution_name"
						placeholder="Institution Name"
						className="bg-gray-100 p-2 rounded"
						{...register("institution_name")}
					/>
				</div>

				<div className="flex flex-col gap-2">
					<label htmlFor="graduation_year" className="font-bold">
						Graduation Year
					</label>

					<input
						type="number"
						id="graduation_year"
						name="graduation_year"
						placeholder="Graduation Year"
						className="bg-gray-100 p-2 rounded"
						{...register("graduation_year")}
					/>
				</div>

				<div className="flex gap-4 items-center justify-end mt-4">
					<Link to={ROOT}>Previous</Link>

					<Link to={WORK_EXPERIENCE_INFO}>
						<button className="w-20 h-10 rounded-md bg-blue-500 text-white">Next</button>
					</Link>
				</div>
			</form>
		</>
	);
};
export default EducationInfo;
