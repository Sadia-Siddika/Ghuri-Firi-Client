import React from 'react';
import { Link  } from 'react-router-dom';
import useAuth from '../../Hooks/useAuth';

const Heade = () => {
  const { user, logOut } = useAuth();

  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-secondary">
      <div className="container">
        <p className="navbar-brand fw-bold text-white">Ghuri Firi</p>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarTogglerDemo02" aria-controls="navbarTogglerDemo02" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarTogglerDemo02">
          <div className="navbar-nav ms-auto mb-2 mb-lg-0">
            <Link className="fw-bold text-white mx-2 text-decoration-none" to="/home">HOME</Link>
            <Link className="fw-bold text-white mx-2 text-decoration-none" to="/blog">BLOG</Link>
            <Link className="fw-bold text-white mx-2 text-decoration-none" to="/manage">MANAGES</Link>
          </div>
          <div className="d-flex">
            {
              user?.email ?
                <div>
                  <span className="navbar-text fw-bold text-white bg-warning p-2 rounded-pill">
                    {user?.displayName}
                  </span>
                  <button onClick={logOut} type="submit" className="btn btn-outline-success text-white fw-bold mx-1"> LOG OUT</button>
                </div>
                :
                <Link to="/login"><button type="submit" className="btn btn-outline-success text-white fw-bold mx-1"> LOG IN</button></Link>
            }

          </div>
        </div>
      </div>
    </nav>
  );
};

export default Heade;