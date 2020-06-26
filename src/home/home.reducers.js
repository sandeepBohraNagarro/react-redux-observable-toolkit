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
  const { totalJobsCount, totalJobSeeker } = action.payload;
  state.jobsCount = totalJobsCount;
  state.jobSeekerCount = totalJobSeeker;
};

export default createReducer(initialState, reducers);
