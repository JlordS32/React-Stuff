import React, { useState } from 'react';
import styles from '../../styles/help.module.css';

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

	const handleSubmit = (event) => {
		event.preventDefault();
		// You can perform form submission logic here, such as sending data to a server
		console.log('Form data:', formData);
		// Reset the form after submission
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
