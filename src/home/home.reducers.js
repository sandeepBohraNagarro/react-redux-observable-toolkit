import { createReducer } from '@reduxjs/toolkit';
import * as homeActions from './home.actions';

const initialState = {
  jobSeekerCount: 0,
  jobsCount: 0
};

const reducers = {};

reducers[homeActions.fetchJobSeekerAndJobsCountFulfilled] = function (
  state,
  action
) {
  const { jobsCount, jobSeekerCount } = action.payload;
  state.jobsCount = jobsCount;
  state.jobSeekerCount = jobSeekerCount;
};

export default createReducer(initialState, reducers);
