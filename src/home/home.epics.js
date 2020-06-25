import { ofType } from 'redux-observable';
import { switchMap, mergeMap, catchError, map } from 'rxjs/operators';
import { fromFetch } from 'rxjs/fetch';
import { of } from 'rxjs';
import lodashGet from 'lodash.get';
import * as homeActions from 'home/home.actions';
import { constructApiEndpoint } from 'common/utils/api';
import { API_ENDPOINTS } from 'common/constants';
import { constructError } from 'common/utils/error';

function fetchJobSeekerAndJobsCount$() {
  const endpoint = constructApiEndpoint(API_ENDPOINTS.JOBS_COUNT);
  return fromFetch(endpoint).pipe(
    switchMap((response) => {
      if (response.ok) {
        return response.json();
      } else {
        return of(constructError(response));
      }
    }),
    catchError((error) => {
      return of(constructError(error));
    })
  );
}

/**
 * Epic to fetch total number of jobs and total job seeker.
 * @param {Object} action$ The home action stream.
 */
export function fetchJobSeekerAndJobCountEpic(action$) {
  return action$.pipe(
    ofType(homeActions.fetchJobSeekerAndJobCount),
    mergeMap(() => {
      return fetchJobSeekerAndJobsCount$().pipe(
        map((response) => lodashGet(response, 'data.totalJobsCount', 0))
      );
    }),
    mergeMap((error) => {
      homeActions.fetchJobSeekerAndJobsCountFailed(error);
    })
  );
}
