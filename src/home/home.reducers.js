import { createReducer } from '@reduxjs/toolkit';
import * as homeActions from './home.actions';

const initialState = {
  jobSeekersCount: 0,
  jobsCount: 0
};

const reducers = {};

reducers[homeActions.fetchJobSeekerAndJobsCountFulfilled] = function (
  state,
  action
) {
  const { jobsCount, jobSeekersCount } = action.payload;
  state.jobsCount = jobsCount;
  state.jobSeekerCount = jobSeekersCount;
};

export default createReducer(initialState, reducers);
