import Axios from "axios";
import React, { useState } from "react";
import LoadingBox from "../LoadingBox/LoadingBox";

const ContactForm = () => {
	const [name, setName] = useState("");
	const [email, setEmail] = useState("");
	const [message, setMessage] = useState("");
	const [loading, setLoading] = useState(false);
	const [success, setSuccess] = useState(false);
	const [error, setError] = useState("");

	const submitHandler = (e) => {
		e.preventDefault();
		setLoading(true);
		Axios.post("/api/contact", {
			name,
			email,
			message,
		})
			.then((res) => {
				setLoading(false);
				if (res.data.success) {
					setSuccess(true);
				} else {
					setError(res.data.error);
				}
			})
			.catch((err) => {
				setLoading(false);
				if (err.response) {
					// client received an error response (5xx, 4xx)
				} else if (err.request) {
					// client never received a response, or request never left
				} else {
					// anything else
				}
				setError(err.message);
			});
	};

	return (
		<form onSubmit={submitHandler} className="col-1 half-screen">
			<div>
				<h2>Let's talk</h2>
			</div>
			<div>
				<div>
					<label htmlFor="name">Name</label>
					<input
						type="text"
						name="name"
						id="name"
						placeholder="What's your name?"
						required
						onChange={(e) => setName(e.target.value)}
					></input>
				</div>
				<div>
					<label htmlFor="email">Email</label>
					<input
						type="email"
						name="email"
						id="email"
						placeholder="What's your email adress?"
						required
						onChange={(e) => setEmail(e.target.value)}
					></input>
				</div>

				<div>
					<label htmlFor="message">Your message</label>
					<textarea
						name="message"
						id="message"
						placeholder="What would you like to say?"
						required
						onChange={(e) => setMessage(e.target.value)}
					></textarea>
				</div>
				<div>
					<label>&nbsp;</label>
					<button type="submit" disabled={loading}>
						{loading ? (
							<LoadingBox></LoadingBox>
						) : success ? (
							"Success!"
						) : error ? (
							"Retry"
						) : (
							"Send it!"
						)}
					</button>
					{error && <div>{error}</div>}
				</div>
			</div>
		</form>
	);
};

export default ContactForm;
