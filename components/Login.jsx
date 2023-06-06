import React from "react";
import {
	AiOutlineGoogle,
	AiOutlineGithub,
	AiOutlineTwitter,
} from "react-icons/ai";
import { useRouter } from "next/router";
import { useUserContext } from "@/context/user_context";

function Login() {
	const { getUser } = useUserContext();
	const router = useRouter();
	const handleOnSubmit = async (e) => {
		e.preventDefault();
		const email = e.target.email.value;
		const password = e.target.password.value;
		const loginData = { email, password };
		console.log(loginData);

		fetch("http://localhost:8008/users/login", {
			method: "POST",
			headers: {
				"content-type": "application/json",
			},
			body: JSON.stringify(loginData),
		})
			.then((res) => res.json())
			.then((data) => {
				console.log(data);
				if (data === null) {
					alert("please register first");
				} else {
					getUser(data);
					alert("login success !");
					router.push("/Dashboard");
				}
			});
	};

	return (
		<div className="flex items-center justify-center m-24">
			<div className="w-full max-w-md p-8 space-y-3 rounded-xl bg-gray-300 ">
				<h1 className="text-2xl font-bold text-center">Login</h1>
				<form className="space-y-6 " onSubmit={handleOnSubmit}>
					<div className="space-y-1 text-sm">
						<label className="block ">Username</label>
						<input
							placeholder="Username"
							name="email"
							type="text"
							className="w-full px-4 py-3 rounded-md "
						/>
					</div>
					<div className="space-y-1 text-sm">
						<label className="block ">Password</label>
						<input
							type="password"
							name="password"
							placeholder="Password"
							className="w-full px-4 py-3 rounded-md "
						/>
					</div>
					<button
						type="submit"
						className="block w-full p-3 text-white font-semibold text-center rounded-sm bg-red-700"
					>
						Log in
					</button>
				</form>
				<div className="flex items-center pt-4 space-x-1">
					<div className="flex-1 h-px sm:w-16 "></div>
					<p className="px-3 text-sm ">Login with social accounts</p>
					<div className="flex-1 h-px sm:w-16 "></div>
				</div>
				<div className="flex justify-center space-x-4">
					<button aria-label="Log in with Google" className="p-3 rounded-sm">
						<AiOutlineGoogle className="w-5  h-5 fill-current" />
					</button>
					<button aria-label="Log in with Twitter" className="p-3 rounded-sm">
						<AiOutlineGithub className="w-5 h-5  fill-current" />
					</button>
					<button aria-label="Log in with GitHub" className="p-3 rounded-sm">
						<AiOutlineTwitter className="w-5 h-5  fill-current" />
					</button>
				</div>
				<p className="text-xs text-center sm:px-6 ">
					Don't have an account?
					<a
						onClick={(functions) => router.push(`/Home/Signup`)}
						className="hover:underline cursor-pointer text-red-600 "
					>
						Sign up
					</a>
				</p>
			</div>
		</div>
	);
}

export default Login;
