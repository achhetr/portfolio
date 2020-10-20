import React, { useState, useEffect } from 'react';
import * as EmailValidator from 'email-validator';
import { Container, Row, Form, Button } from 'react-bootstrap';
import swal from 'sweetalert';
import { useHistory } from 'react-router-dom';

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

	// history
	const history = useHistory();

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

	useEffect(() => {
		if (error) {
			swal({
				title: 'ERROR',
				text: errorInput,
			});
		}
		return () => {
			setErrorInput('');
			setError(false);
		};
	});

	const onSubmit = async (e) => {
		e.preventDefault();
		// const errorSwal = <strong> </strong>;
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
		if (!EmailValidator.validate(email)) {
			setError(() => true);
			setErrorInput(() => 'Invalid Email Address');
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
			swal({
				title: name,
				text: 'Your form successfully submitted!',
				type: 'Thank you!',
			});
			history.push('/');
		}
	};

	return (
		<Container className={contactStyle.Container}>
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
