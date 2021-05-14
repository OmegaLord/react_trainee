import React, { useState } from "react";

import ExpensesFilter from "./ExpensesFilter";
import ExpensesList from "./ExpensesList";
import Card from "../UI/Card";
import "./Expenses.css";
import ExpensesChart from "./ExpensesCart";

const Expenses = (props) => {
  const [filteredYear, setFilteredYear] = useState("2020");

  const filterChangeHandler = (selectedYear) => {
    setFilteredYear(() => selectedYear);
  };

  const filteredExpenses = props.items.filter(
    (expense) => expense.date.getFullYear() === parseInt(filteredYear)
  );

  return (
    <Card className="expenses">
      <ExpensesFilter
        selected={filteredYear}
        onFilterChanged={filterChangeHandler}
      />
      <ExpensesChart items={filteredExpenses} />
      <ExpensesList items={filteredExpenses} />
    </Card>
  );
};

export default Expenses;
