import { createAction } from '@reduxjs/toolkit';

export const fetchJobSeekerAndJobCount = createAction(
  '[Home] Fetch Job Seeker and Job Count'
);

export const fetchJobSeekerAndJobsCountFulfilled = createAction(
  '[Home] Fetch Job Seeker and Jobs Count Fulfilled'
);
