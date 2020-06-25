import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import * as homeActions from 'home/home.actions';
import logo from 'assets/logo/ic-logo-small.svg';
import carousel1 from 'assets/images/1.png';
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
    margin: '10px auto'
  },
  carousel: {
    width: '100%',
    margin: '10px 0'
  }
};

export default function Home() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(homeActions.fetchJobSeekerAndJobCount());
  });

  function hirePeople() {
    history.push(APP_ROUTES.EMPLOYER_LOGIN);
  }

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
          <div className="logo-heading">Unnati</div>
          <div className="sub-heading">Job for every labourer</div>
          <div className="imageCrousel">
            <img src={carousel1} alt="carousel-1" />
          </div>
          <div style={styles.seekersAndJobs}>1,00,00 seekers, 20,000 jobs</div>
          <div className="sub-heading">
            Unnati helps Indian workers find jobs across employers all over the
            country.
          </div>
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
