import React, { useState } from "react";
import Arrow from "../../img/arrow-right.png";
import ErrorIcon from "../../img/error-icon.png";
import { phoneRegex, nameRegex } from "./regex";
import "../form/form.css";

const Form = ({ popupContent }) => {
	const [nameValue, setNameValue] = useState("");
	const [phoneValue, setPhoneValue] = useState("");
	const [errorMsgName, setErrorMsgName] = useState("");
	const [errorMsgPhone, setErrorMsgPhone] = useState("");
	const validName = nameRegex.test(nameValue);
	const validPhone = phoneRegex.test(phoneValue);

	const nameOnChange = (e) => {
		setErrorMsgName("");
		setNameValue(e.target.value);
	};

	const phoneOnChange = (e) => {
		setErrorMsgPhone("");
		setPhoneValue(e.target.value);
	};

	const nameOnBlur = () => {
		if (nameValue.length < 2) {
			setErrorMsgName("This field in required");
		} else if (!validName && validName !== "") {
			setErrorMsgName("Only letters allowed");
		} else {
			setErrorMsgName("");
		}
	};

	const phoneOnBlur = () => {
		if (phoneValue.length === 0) {
			setErrorMsgPhone("This field in required");
		} else if (!validPhone && validPhone !== "") {
			setErrorMsgPhone("Only numbers allowed");
		} else if (phoneValue.length !== 12) {
			setErrorMsgPhone("Should contain 12 characters");
		} else {
			setErrorMsgPhone("");
		}
	};

	const onSubmit = () => {
		nameOnBlur();
		phoneOnBlur();
		if (
			validName &&
			nameValue.length >= 2 &&
			validPhone &&
			phoneValue.length === 12
		) {
			const result = {
				...popupContent,
				inputName: nameValue,
				inputPhone: phoneValue,
			};
			console.log(result);
		}
	};

	return (
		<form>
			<div className='input-wrap'>
				<input
					type='text'
					className={
						errorMsgName
							? "input error"
							: validName && nameValue.length >= 2
							? "input valid"
							: "input"
					}
					placeholder='Name'
					value={nameValue}
					onChange={nameOnChange}
					onBlur={nameOnBlur}
					style={
						errorMsgName
							? { backgroundImage: `url(${ErrorIcon})` }
							: {}
					}
				/>
				<span className={errorMsgName ? " msg error" : "msg"}>
					{errorMsgName}
				</span>
			</div>
			<div className='input-wrap'>
				<input
					type='text'
					className={
						errorMsgPhone
							? "input error"
							: validPhone && phoneValue.length === 12
							? "input valid"
							: "input"
					}
					placeholder='Number'
					value={phoneValue}
					onChange={phoneOnChange}
					onBlur={phoneOnBlur}
					style={
						errorMsgPhone
							? { backgroundImage: `url(${ErrorIcon})` }
							: {}
					}
				/>
				<span className={errorMsgPhone ? " msg error" : "msg"}>
					{errorMsgPhone}
				</span>
			</div>
			<button type='button' className='btn' onClick={onSubmit}>
				Order
				<img className='arrow-icon' src={Arrow} alt='arrow' />
			</button>
		</form>
	);
};

export default Form;
