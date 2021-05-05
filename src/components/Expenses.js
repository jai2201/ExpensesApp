import React, { useState } from "react";
import ExpenseItem from "./ExpenseItem";
import ExpensesFilter from "./ExpensesFilter";
import "./Expenses.css";
const Expenses = (props) => {
	const [filteredYear, setFilteredYear] = useState("2020");
	const filterChangeHandler = (selectedYear) => {
		setFilteredYear(selectedYear);
	};

	const filteredExpenses = props.items.filter((expense) => {
		return expense.date.getFullYear().toString() === filteredYear;
	});

	return (
		<div className="expenses">
			<ExpensesFilter
				selected={filteredYear}
				onChangeFilter={filterChangeHandler}
			></ExpensesFilter>

			{filteredExpenses.length === 0 ? (
				<p
					style={{
						color: "white",
						fontWeight: "bold",
						fontSize: 20,
						textAlign: "center",
					}}
				>
					No Expenses Found
				</p>
			) : (
				filteredExpenses.map((expense) => (
					<ExpenseItem
						key={expense.id}
						title={expense.title}
						amount={expense.amount}
						date={expense.date}
					/>
				))
			)}
		</div>
	);
};

export default Expenses;
