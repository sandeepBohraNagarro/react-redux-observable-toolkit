import { combineEpics } from 'redux-observable';
import * as homeEpics from 'home/home.epics';

const rootEpic = combineEpics(homeEpics.fetchJobSeekerAndJobCountEpic);

export default rootEpic;
