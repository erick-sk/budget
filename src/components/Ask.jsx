import React, { Fragment, useState } from 'react';
import PropTypes from 'prop-types';
import Error from './Error';

const Ask = ({ saveBudget, saveRemaining, updateAsk }) => {
  // Define State
  const [amount, saveAmount] = useState(0);
  const [error, saveError] = useState(false); // No error start

  // Function read budget
  const defineBudget = (e) => {
    saveAmount(parseInt(e.target.value, 10));
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
    saveBudget(amount);
    saveRemaining(amount);
    updateAsk(false);
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

Ask.propTypes = {
  saveBudget: PropTypes.func.isRequired,
  saveRemaining: PropTypes.func.isRequired,
  updateAsk: PropTypes.func.isRequired,
};

export default Ask;
