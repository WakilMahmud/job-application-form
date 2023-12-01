import { useState } from "react";
import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";
import { EDUCATION_INFO } from "../../routes/routes";

const PersonalInfo = () => {
	const [personalData, setPersonalData] = useState(null);
	const {
		register,
		handleSubmit,
		formState: { errors },
	} = useForm();
	const onSubmit = (data) => {
		console.log(data);
		setPersonalData(data);
	};

	return (
		<form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-5 max-w-7xl mx-auto my-32">
			<div className="flex flex-col gap-2">
				<label htmlFor="name" className="font-bold">
					Name <span className="text-red-500">*</span>
				</label>
				<input
					type="text"
					id="name"
					name="name"
					placeholder="Enter your name"
					className="bg-gray-100 p-2 rounded"
					{...register("name", { required: true })}
				/>
			</div>
			{errors.name && <span className="text-red-500">Please enter your name</span>}
			<div className="flex flex-col gap-2">
				<label htmlFor="email" className="font-bold">
					Email <span className="text-red-500">*</span>
				</label>
				<input
					type="text"
					id="email"
					name="email"
					placeholder="Enter your email"
					className="bg-gray-100 p-2 rounded"
					{...register("email", { required: true })}
				/>
			</div>
			{errors.email && <span className="text-red-500">Please enter your email</span>}
			<div className="flex flex-col gap-2">
				<label htmlFor="phone" className="font-bold">
					Phone <span className="text-red-500">*</span>
				</label>
				<input
					type="text"
					id="phone"
					name="phone"
					placeholder="(+880) 1725055555"
					className="bg-gray-100 p-2 rounded"
					{...register("phone", { required: true })}
				/>
			</div>
			{errors.phone && <span className="text-red-500">Please enter your phone number</span>}
			<div className="flex flex-col gap-2">
				<label htmlFor="address" className="font-bold">
					Address
				</label>

				<textarea
					type="textarea"
					id="address"
					name="address"
					rows="1"
					placeholder="2464 Royal Ln. Mesa, New Jersey 45463"
					className="bg-gray-100 p-2 rounded"
					{...register("address")}
				/>
			</div>
			<div className="flex flex-col gap-2">
				<label htmlFor="hobbies" className="font-bold">
					Hobbies (max 5)
				</label>

				<input
					type="text"
					id="hobbies"
					name="hobbies"
					rows="1"
					placeholder="Write your hobby"
					className="bg-gray-100 p-2 rounded"
					{...register("hobbies")}
				/>
			</div>

			<div className="flex flex-col gap-2">
				<label htmlFor="image" className="font-bold">
					Image
				</label>
				<input type="file" id="image" name="image" className="bg-gray-100 p-2 rounded" {...register("image")} />
			</div>

			<div className="flex gap-4 items-center justify-end mt-4">
				<p className="text-gray-400">Previous</p>
				<Link to={EDUCATION_INFO}>
					<button className="w-20 h-10 rounded-md bg-blue-500 text-white">Next</button>
				</Link>
			</div>
		</form>
	);
};

export default PersonalInfo;
