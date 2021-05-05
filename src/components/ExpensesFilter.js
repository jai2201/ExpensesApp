import React from "react";

const ExpensesFilter = (props) => {
	const dropDownChangeHandler = (event) => {
		props.onChangeFilter(event.target.value);
	};

	return (
		<div className="expenses-filter">
			<div
				className="expenses-filter__control"
				style={{
					display: "flex",
					flexDirection: "row",
					justifyContent: "space-between",
				}}
			>
				<label
					style={{
						textAlign: "left",
						color: "white",
						fontSize: 20,
						fontWeight: "bold",
					}}
				>
					Filter By year
				</label>
				<select value={props.selected} onChange={dropDownChangeHandler}>
					<option value="2022">2022</option>
					<option value="2021">2021</option>
					<option value="2020">2020</option>
					<option value="2019">2019</option>
				</select>
			</div>
		</div>
	);
};

export default ExpensesFilter;
