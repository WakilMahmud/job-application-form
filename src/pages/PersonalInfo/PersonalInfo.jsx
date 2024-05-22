import { useEffect, useRef, useState } from "react";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { EDUCATION_INFO } from "../../routes/routes";
import Swal from "sweetalert2";

const PersonalInfo = () => {
	const [personalData, setPersonalData] = useState(null);
	const [users, setUsers] = useState([]);
	const hobbyRef = useRef(null);
	const navigate = useNavigate();
	const [hobbies, setHobbies] = useState([]);

	useEffect(() => {
		console.log("Inside UseEffect");
		fetch("https://dummyjson.com/users")
			.then((res) => res.json())
			.then((data) => setUsers(data.users));
	}, []);

	const {
		register,
		handleSubmit,
		formState: { errors },
	} = useForm();
	const onSubmit = (data) => {
		data.hobbies = hobbies;

		Swal.fire(JSON.stringify(data));

		setPersonalData(data);
		navigate(EDUCATION_INFO);
	};

	const handleHobbies = () => {
		const newHobby = hobbyRef.current.querySelector("input").value;
		if (hobbies.length == 5) {
			return;
		}
		setHobbies([...hobbies, newHobby]);
		hobbyRef.current.querySelector("input").value = "";
	};

	return (
		<>
			<h1 className="text-center">PERSONAL INFO</h1>
			<form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-5 max-w-3xl mx-auto my-32 border border-black p-6 rounded-md">
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
					<label htmlFor="hobbies" className="font-bold">
						Hobbies (max 5)
					</label>

					<div className="flex gap-2" ref={hobbyRef}>
						<input
							type="text"
							id="hobbies"
							name="hobbies"
							rows="1"
							placeholder="Write your hobby"
							className="bg-gray-100  rounded w-full"
							{...register("hobbies")}
						/>
						<button type="button" className="btn bg-blue-400 p-3 rounded-md" onClick={handleHobbies}>
							+
						</button>
					</div>
				</div>
				{hobbies.length == 5 && <span className="text-red-500">You can&apos;t add more hobbies.</span>}
				{hobbies && hobbies.map((hobby, index) => <li key={index}>{hobby}</li>)}

				<div className="flex gap-4 items-center justify-end mt-4">
					<button className="text-gray-400" disabled>
						Previous
					</button>

					<button type="submit" className="w-20 h-10 rounded-md bg-blue-500 text-white">
						Next
					</button>
				</div>
			</form>

			<div className="max-w-7xl mx-auto px-4">
				<h1 className="text-3xl font-bold mb-4">User List</h1>
				<div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-4 gap-4">
					{users.map((user) => (
						<div key={user.id} className="bg-white rounded shadow-lg">
							<img src={user.image} className="w-full h-48 object-cover rounded-t" alt="Avatar" />
							<div className="p-4">
								<p className="text-xl font-semibold">First Name: {user.firstName} </p>
								<p className="text-xl font-semibold">Name: {user.lastName}</p>
								{/* <p className="text-gray-600">Email: {user.email}</p> */}
								{/* <p className="text-gray-600"> Street: {user.address.address}</p> */}
								{/* <p className="text-gray-600">City: {user.address.city}</p> */}
								<p className="text-gray-600">Suite: {user.address.state}</p>
								<p className="text-gray-600">Company Name: {user.company.name}</p>
							</div>
						</div>
					))}
				</div>
			</div>
		</>
	);
};

export default PersonalInfo;
