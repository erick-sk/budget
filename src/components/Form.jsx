import React, { useState } from 'react';
import PropTypes from 'prop-types';
import Error from './Error';
import shortid from 'shortid';

const Form = ({ saveExpense, saveCreateExpense }) => {
  // useState
  const [name, saveName] = useState('');
  const [amount, saveAmount] = useState(0);
  const [error, saveError] = useState(false);

  // When user add a expense
  const addExpense = (e) => {
    e.preventDefault();

    // validation
    if (amount < 1 || isNaN(amount) || name.trim() === '') {
      saveError(true);
      return;
    }

    saveError(false);

    // build expense
    const expense = {
      name, // seem value inplicite form
      amount,
      id: shortid.generate(),
    };

    // send expense to app
    saveExpense(expense);
    saveCreateExpense(true);

    // reset form
    saveName('');
    saveAmount(0);
  };

  return (
    <form
      onSubmit={addExpense} // preventDefault data send no show
    >
      <h2>Add your expenses here </h2>

      {error ? (
        <Error message='Both fields are required or Budget invalid' />
      ) : null}

      <div className='campo'>
        <label>Expense name</label>
        <input
          type='text'
          className='u-full-width'
          placeholder='i.e Transport'
          value={name}
          onChange={(e) => saveName(e.target.value)} // form quick
        />
      </div>

      <div className='campo'>
        <label>Amount Spending</label>
        <input
          type='number'
          className='u-full-width'
          placeholder='i.e 300'
          value={amount}
          onChange={(e) => saveAmount(parseInt(e.target.value, 10))}
        />
      </div>

      <input
        type='submit'
        className='button-primary u-full-width'
        value='Add expense'
      />
    </form>
  );
};

Form.propTypes = {
  saveExpense: PropTypes.func.isRequired,
  saveCreateExpense: PropTypes.func.isRequired,
};

export default Form;
