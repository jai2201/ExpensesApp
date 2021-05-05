import React, { useState } from "react";
import Expenses from "./components/Expenses";
import NewExpense from "./components/NewExpense";

const DUMMY_EXPENSES = [
	{
		id: "e1",
		title: "Toilet Paper",
		amount: "97",
		date: new Date(2020, 7, 14),
	},
	{
		id: "e2",
		title: "Television",
		amount: "100",
		date: new Date(2020, 5, 12),
	},
	{
		id: "e3",
		title: "Car Insurance",
		amount: "789",
		date: new Date(2021, 3, 29),
	},
];

function App() {
	const [expenses, setExpenses] = useState(DUMMY_EXPENSES);

	const addExpenseHandler = (expense) => {
		setExpenses((prevExpenses) => {
			return [expense, ...prevExpenses];
		});
	};
	return (
		<div className="App">
			<NewExpense onAddExpense={addExpenseHandler} />
			<Expenses items={expenses} />
		</div>
	);
}

export default App;
