import React, { useState } from 'react';
import styles from '../../styles/help.module.css';
import axios from 'axios';

function Contact() {
	const [formData, setFormData] = useState({
		name: '',
		email: '',
		message: '',
	});

	const handleInputChange = (event) => {
		const { name, value } = event.target;
		setFormData({
			...formData,
			[name]: value,
		});
	};

	const handleSubmit = async (event) => {
		event.preventDefault();
		try {
			await axios.post(
				'https://mailserver-seven.vercel.app/submit-form',
				formData
			);
			alert('Form submitted successfully!');
		} catch (error) {
			console.error('Error submitting form:', error);
		}

		setFormData({
			name: '',
			email: '',
			message: '',
		});
	};

	return (
		<div className={styles['contact']}>
			<h1>Contact</h1>
			<form onSubmit={handleSubmit}>
				<label htmlFor='name'>Name:</label>
				<input
					type='text'
					id='name'
					name='name'
					value={formData.name}
					onChange={handleInputChange}
					required
				/>

				<label htmlFor='email'>Email:</label>
				<input
					type='email'
					id='email'
					name='email'
					value={formData.email}
					onChange={handleInputChange}
					required
				/>

				<label htmlFor='message'>Message:</label>
				<textarea
					id='message'
					name='message'
					value={formData.message}
					onChange={handleInputChange}
					rows='4'
					required
				/>

				<button
					type='submit'
					style={{
						padding: '10px ',
					}}
				>
					Submit
				</button>
			</form>
		</div>
	);
}

export default Contact;
