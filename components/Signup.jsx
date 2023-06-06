import React, { useState } from "react";
import { useRouter } from "next/router";
import { useUserContext } from "@/context/user_context";

function Signup() {
	const [registerData, setRegisterData] = useState({});
	const [check, setCheck] = useState(false);
	const { getUser } = useUserContext();
	const router = useRouter();

	const handleOnSubmit = (event) => {
		event.preventDefault();
		const form = event.target;
		const firstname = form.firstname.value;
		const lastname = form.firstname.value;
		const email = form.email.value;
		const password = form.password.value;
		const passwordConfrim = form.passwordConfrim.value;
		const phoneNumber = form.phoneNumber.value;
		const blood = form.blood.value;

		const userData = {
			firstname,
			lastname,
			email,
			password,
			passwordConfrim,
			phoneNumber,
			blood,
		};
		console.log(userData);
		fetch("http://localhost:8008/users", {
			method: "POST",
			headers: {
				"content-type": "application/json",
			},
			body: JSON.stringify(userData),
		})
			.then((res) => res.json())
			.then((data) => {
				console.log(data);

				if (data) {
					alert("sucessfully register");
					getUser(data);
					form.reset();
					router.push("/");
				} else {
					alert(data.message);
				}
			});
	};

	return (
		<div className="flex items-center justify-center m-10">
			<div className="w-full max-w-md p-8 space-y-3 rounded-xl bg-gray-300 ">
				<form onSubmit={handleOnSubmit} className=" pt-0 ng-valid ">
					<div className="space-y-4">
						<div className=" text-center">
							<h1 className="my-3 text-4xl font-bold">Register Now</h1>
							<p className="text-sm ">Create your account</p>
						</div>
						<div>
							<label for="email" className="block mb-2 text-sm">
								Email address
							</label>
							<input
								type="email"
								name="email"
								id="email"
								placeholder="Email Address"
								className="w-full px-3 py-2 text-gray-900"
								fdprocessedid="u8s23"
								er
								rounded-md
								required
							/>
						</div>
						<div>
							<div className="flex justify-between mb-2">
								<label for="password" className="text-sm">
									Password
								</label>
							</div>
							<input
								type="password"
								name="password"
								placeholder="Password"
								className="w-full px-3 py-2 border rounded-md text-gray-900"
								required
							/>
						</div>
						<div className="flex justify-between mb-2">
							<label for="passwordConfrim" className="text-sm">
								Re type Password
							</label>
						</div>
						<input
							type="password"
							name="passwordConfrim"
							placeholder="Re-type Password"
							className="w-full px-3 py-2 border rounded-md text-gray-900"
							required
						/>

						<div className="flex gap-5">
							<div>
								<label for="text" className="text-sm">
									First Name
								</label>
								<input
									type="text"
									name="firstname"
									placeholder="Your First Name"
									className="input w-full max-w-xs"
								/>
							</div>
							<div>
								<label for="text" className="text-sm">
									Last Name
								</label>
								<input
									type="text"
									name="lastname"
									placeholder="Your Last Name"
									className="input w-full max-w-xs"
								/>
							</div>
						</div>
						{/* <div className="flex justify-start gap-3">
							<input
								type="radio"
								name="radio-7"
								className="radio radio-info bg-red-600"
							/>
							<label htmlFor="text">Male</label>
							<input
								type="radio"
								name="radio-7"
								className="radio radio-info bg-red-600"
							/>
							<label htmlFor="text">Female</label>
						</div> */}
						<div className="flex items-center justify-center gap-3">
							<label for="text" className="text-sm">
								Your Phone Number
							</label>
							<input
								type="text"
								placeholder="+880"
								name="phoneNumber"
								className="input "
							/>
						</div>
						<select
							className="select select-bordered w-full max-w-xs "
							name="blood"
						>
							<option disabled selected className="bg-gray-900">
								Your Blood Group?
							</option>
							<option className="bg-white">A+</option>
							<option className="bg-white">A-</option>
							<option className="bg-white">B+</option>
							<option className="bg-white">B-</option>
							<option className="bg-white">O+</option>
							<option className="bg-white">O-</option>
						</select>
					</div>

					<div className="space-y-2">
						<div className="modal-action">
							<button
								type="submit"
								className="w-full bg-red-600 cursor-pointer hover:bg-red-700 text-center text-white font-semibold px-8 py-3  rounded-md "
							>
								Register
							</button>
						</div>
						<p className="px-6 text-sm text-center ">
							Already have an Account?
							<a
								onClick={(func) => router.push(`/Home/Login`)}
								className="hover:underline cursor-pointer  text-red-600"
							>
								{" "}
								Login{" "}
							</a>
						</p>
					</div>
				</form>
			</div>
		</div>
	);
}

export default Signup;
