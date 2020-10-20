import React, { useState } from 'react';
import * as EmailValidator from 'email-validator';
import Modal from 'react-modal';
import { Container, Row, Form, Button } from 'react-bootstrap';
import swal from 'sweetalert';

import contactStyle from './contact.module.css';

const Contact = () => {
	const [error, setError] = useState(false);
	const [errorInput, setErrorInput] = useState('Email Address');
	// form input
	const [name, setName] = useState('');
	const [email, setEmail] = useState('');
	const [mobile, setMobile] = useState('');
	const [body, setBody] = useState('');
	const [checkBox, setCheckBox] = useState(false);

	// form uri
	const formUri = 'https://formspree.io/f/xnqodjjd';

	const onChangeName = (e) => {
		const name = e.target.value;
		setName(() => name);
	};

	const onChangeEmail = (e) => {
		const email = e.target.value;
		setEmail(() => email);
	};
	const onChangeMobile = (e) => {
		let mobile = e.target.value.toString();
		mobile = mobile.replace(/\D/g, '');
		setMobile(() => mobile);
	};
	const onChangeBody = (e) => {
		const body = e.target.value;
		setBody(() => body);
	};

	const onChangeCheckBox = () => {
		setCheckBox((prev) => !prev);
	};

	const onAlert = () => {
		setError(() => false);
	};

	const onSubmit = async (e) => {
		e.preventDefault();
		if (!EmailValidator.validate(email)) {
			setError(() => true);
			setErrorInput(() => 'Email Address');
			return;
		}
		if (name.length < 3) {
			setError(() => true);
			setErrorInput(() => 'Name should be more than 3 characters');
			return;
		}
		if (name.length > 15) {
			setError(() => true);
			setErrorInput(() => 'Name should be less than 15 characters');
			return;
		}
		if (mobile.length !== 10) {
			setError(() => true);
			setErrorInput(() => 'Invalid Mobile');
			return;
		}

		if (body.length < 10) {
			setError(() => true);
			setErrorInput(() => 'Enquiry should be more than 10 characters');
			return;
		}
		const data = await fetch(formUri, {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json;charset=utf-8',
			},
			body: JSON.stringify({
				name,
				email,
				mobile,
				body,
				jobRelated: checkBox,
			}),
		});
		const result = await data.json();
		if (result.ok) {
			swal(name, ' your form successfully submitted!', 'Thank you!');
		}
	};

	return (
		<Container className={contactStyle.Container}>
			<Modal
				isOpen={error}
				onAfterOpen={() => setTimeout(onAlert, 2000)}
				onRequestClose={onAlert}
				contentLabel="Error"
				className={contactStyle.Modal}
				ariaHideApp={false}
			>
				<h2 className={contactStyle.Error}>
					<strong>Error: Invalid </strong>
					{errorInput}
				</h2>
			</Modal>
			<h1 className={contactStyle.Title}>Contact Me</h1>
			<Row className="justify-content-md-center">
				<Form className={contactStyle.Form} onSubmit={onSubmit}>
					<Form.Control
						type="text"
						value={name}
						placeholder="Full Name"
						onChange={onChangeName}
						className={contactStyle.FormItem}
					/>

					<Form.Control
						type="text"
						placeholder="Your Email Address"
						value={email}
						onChange={onChangeEmail}
						className={contactStyle.FormItem}
					/>

					<Form.Control
						type="text"
						placeholder="0450 xxx xxx"
						value={mobile}
						onChange={onChangeMobile}
						className={contactStyle.FormItem}
					/>

					<Form.Control
						as="textarea"
						rows={7}
						value={body}
						onChange={onChangeBody}
						placeholder="Hi Akash, we are looking for a full stack developer. We think you are the perfect fit for this role. Write here..."
						className={contactStyle.FormItem}
					/>

					<Form.Check
						label="Check this box if this is job related"
						className={contactStyle.FormItem}
						value={checkBox}
						onChange={onChangeCheckBox}
					/>

					<Button variant="primary" type="submit">
						Submit
					</Button>
				</Form>
			</Row>
		</Container>
	);
};

export default Contact;
