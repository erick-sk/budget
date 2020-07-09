import React, { Fragment, useState } from 'react';
import Error from './Error';

const Ask = () => {
  // Define State
  const [amount, saveAmount] = useState(0);
  const [error, saveError] = useState(false); // No error start

  // Function read budget
  const defineBudget = (e) => {
    saveAmount(parseInt(e.target.value));
  };

  // Submit for define budget
  const addBudget = (e) => {
    e.preventDefault(); // no send query like URL= www.type?order?etc

    // Validation
    if (amount < 1 || isNaN(amount)) {
      saveError(true);
      return;
    }

    // Post validation

    saveError(false);
  };

  return (
    <Fragment>
      <h2>Put your Budget</h2>
      {error ? <Error message='Wrong budget' /> : null}

      <form onSubmit={addBudget}>
        <input
          type='number'
          className='u-full-width'
          placeholder='Put your budget'
          onChange={defineBudget}
        />

        <input
          type='submit'
          className='button-primary u-full-width'
          value='Define Budget'
        />
      </form>
    </Fragment>
  );
};

export default Ask;
