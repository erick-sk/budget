import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import { reviewBudget } from '../helpers';

const ControlBudget = ({ budget, remaining }) => {
  return (
    <Fragment>
      <div className='alert alert-primary'>Budget: $ {budget}</div>
      <div className={reviewBudget(budget, remaining)}>
        Remaining: $ {remaining}
      </div>
    </Fragment>
  );
};

export default ControlBudget;

ControlBudget.propTypes = {
  budget: PropTypes.number.isRequired,
  remaining: PropTypes.number.isRequired,
};
