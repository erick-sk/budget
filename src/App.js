import React, { useState, useEffect } from 'react';
import Ask from './components/Ask';
import Form from './components/Form';
import List from './components/List';
import ControlBudget from './components/ControlBudget';

function App() {
  // Define State
  const [budget, saveBudget] = useState(0);
  const [remaining, saveRemaining] = useState(0);
  const [showAsk, updateAsk] = useState(true);
  const [expenses, saveExpenses] = useState([]);
  const [expense, saveExpense] = useState({});
  const [createExpense, saveCreateExpense] = useState(false);

  // UseEffect update remaining
  useEffect(() => {
    if (createExpense) {
      saveExpenses([
        // add new budget
        ...expenses,
        expense,
      ]);

      // Reset budget current
      const budgetRemaining = remaining - expense.amount;
      saveRemaining(budgetRemaining);

      // Reset a false
      saveCreateExpense(false);
    }
  }, [createExpense, expense, expenses, remaining]); // just (expense) others add automatic fixs

  return (
    <div className='container'>
      <header>
        <h1>Weekly Budget</h1>

        <div className='contenido-principal contenido'>
          {showAsk ? (
            <Ask
              saveBudget={saveBudget}
              saveRemaining={saveRemaining}
              updateAsk={updateAsk}
            />
          ) : (
            <div className='row'>
              <div className='one-half column'>
                <Form
                  saveExpense={saveExpense}
                  saveCreateExpense={saveCreateExpense}
                />
              </div>
              <div className='one-half column'>
                <List expenses={expenses} />

                <ControlBudget budget={budget} remaining={remaining} />
              </div>
            </div>
          )}
        </div>
      </header>
    </div>
  );
}

export default App;
