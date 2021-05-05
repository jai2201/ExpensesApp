import React, { useState } from "react";

import "./ExpenseForm.css";

const ExpenseForm = (props) => {
	const [enteredValue, setEnteredValue] = useState({
		enteredTitle: "",
		enteredAmount: "",
		enteredDate: "",
	});
	// const [enteredTitle, setEnteredTitle] = useState("");
	// const [enteredAmount, setEnteredAmount] = useState("");
	// const [enteredDate, setEnteredDate] = useState("");

	const titleChangeHandler = (event) => {
		setEnteredValue((prevState) => {
			return { ...prevState, enteredTitle: event.target.value };
		});
	};

	const amountChangeHandler = (event) => {
		setEnteredValue((prevState) => {
			return { ...prevState, enteredAmount: event.target.value };
		});
	};

	const dateChangeHandler = (event) => {
		setEnteredValue((prevState) => {
			return { ...prevState, enteredDate: event.target.value };
		});
	};

	const submitHandler = (event) => {
		event.preventDefault();

		const expenseData = {
			title: enteredValue.enteredTitle,
			amount: enteredValue.enteredAmount,
			date: new Date(enteredValue.enteredDate),
		};
		props.onSaveExpenseData(expenseData);

		setEnteredValue({
			enteredTitle: "",
			enteredAmount: "",
			enteredDate: "",
		});
	};

	return (
		<form onSubmit={submitHandler}>
			<div className="new-expense__controls">
				<div className="new-expense__control">
					<label>Title</label>
					<input
						type="text"
						value={enteredValue.enteredTitle}
						onChange={titleChangeHandler}
					/>
				</div>
				<div className="new-expense__control">
					<label>Amount</label>
					<input
						type="number"
						min="0.01"
						step="0.01"
						value={enteredValue.enteredAmount}
						onChange={amountChangeHandler}
					/>
				</div>
				<div className="new-expense__control">
					<label>Date</label>
					<input
						type="date"
						min="2019-01-02"
						max="2022-12-31"
						value={enteredValue.enteredDate}
						onChange={dateChangeHandler}
					/>
				</div>
			</div>
			<div className="new-expense__actions">
				<button type="submit">Add Expense</button>
			</div>
		</form>
	);
};

export default ExpenseForm;
