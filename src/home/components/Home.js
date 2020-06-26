import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import * as homeActions from 'home/home.actions';
import logo from 'assets/logo/ic-logo-small.svg';
import carousel1 from 'assets/images/carousel-1.png';
import { APP_ROUTES } from 'common/constants';
import history from 'common/utils/history';

// TODO: remove the below styles once the styles are available
const styles = {
  logo: {
    textAlign: 'center'
  },
  seekersAndJobs: {
    fontFamily: 'Noto Sans',
    fontStyle: 'normal',
    fontWeight: 'bold',
    fontSize: '18px',
    lineHeight: '25px',
    margin: '10px auto',
    color: '#555555'
  },
  carousel: {
    width: '100%',
    margin: '10px 0'
  },
  differentIndustries: {
    fontFamily: 'Roboto',
    fontStyle: 'normal',
    fontWeight: 'bold',
    fontSize: '12px',
    lineHeight: '14px',
    color: '#777777'
  }
};

export default function Home() {
  const dispatch = useDispatch();

  const jobsCount = useSelector((state) => state.home.jobsCount);
  const jobSeekerCount = useSelector((state) => state.home.jobSeekerCount);
  /**
   * Fetches job seeker and jobs count
   */
  useEffect(() => {
    dispatch(homeActions.fetchJobSeekerAndJobCount());
  });

  /**
   * Navigate to employer login page
   */
  function hirePeople() {
    history.push(APP_ROUTES.EMPLOYER_LOGIN);
  }

  /**
   * Navigate to employee login
   */
  function findJob() {
    history.push(APP_ROUTES.SEEKER_LOGIN);
  }

  return (
    <div className="app-container">
      <div className="app-content">
        <div className="home-logo">
          <div className="logo" style={styles.logo}>
            <img src={logo} alt="Logo"></img>
          </div>
          <div className="logo-heading text-center mt-2">Unnati</div>
          <div className="sub-heading text-center">Job for every labourer</div>
          <div className="imageCrousel">
            <img src={carousel1} alt="carousel-1" />
          </div>
          <div style={styles.seekersAndJobs} className="text-center mt-3">
            {`${jobSeekerCount} seekers, ${jobsCount} jobs`}
          </div>
          <div className="sub-heading text-center mt-2">
            Unnati helps Indian workers find jobs across employers all over the
            country.
          </div>
        </div>
        <div
          className="jobs-in-diff-industries mt-5 text-center"
          style={styles.differentIndustries}
        >
          Jobs in different Industries
        </div>
        <div className="home-btn-container">
          <button
            type="button"
            className="btn secondary-btn bdr-radius32 btn-block mr-3"
            onClick={hirePeople}
          >
            Hire People
          </button>
          <button
            type="button"
            className="btn btn-primary bdr-radius32 btn-block"
            onClick={findJob}
          >
            Find Job
          </button>
        </div>
      </div>
    </div>
  );
}
