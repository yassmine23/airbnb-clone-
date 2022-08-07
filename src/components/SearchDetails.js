import React from 'react';
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';



// import Sonnet from '../../components/Sonnet';

export default function searchDetails() {

  return (
   <>
   <div className="container  info-sec  " >
      <div className="row">
        <ul
          className="nav nav-tabs d-flex justify-content-center"
          id="myTab"
          role="tablist"
        >
          <li className="nav-item" role="presentation">
            <button
              className="nav-link active text-black fw-bold"
              id="home-tab"
              data-bs-toggle="tab"
              data-bs-target="#home-tab-pane"
              type="button"
              role="tab"
              aria-controls="home-tab-pane"
              aria-selected="true"
            >
              Where
            </button>
          </li>
          <li className="nav-item" role="presentation">
            <button
              className="nav-link text-black fw-bold"
              id="profile-tab"
              data-bs-toggle="tab"
              data-bs-target="#profile-tab-pane"
              type="button"
              role="tab"
              aria-controls="profile-tab-pane"
              aria-selected="false"
            >
              Chick in            </button>
          </li>
          <li className="nav-item" role="presentation">
            <button
              className="nav-link text-black fw-bold"
              id="profile-tab"
              data-bs-toggle="tab"
              data-bs-target="#profile-tab-pane"
              type="button"
              role="tab"
              aria-controls="profile-tab-pane"
              aria-selected="false"
            >
              Chick out          </button>
          </li>
          <li className="nav-item" role="presentation">
            <button
              className="nav-link text-black fw-bold"
              id="profile-tab"
              data-bs-toggle="tab"
              data-bs-target="#profile-tab-pane"
              type="button"
              role="tab"
              aria-controls="profile-tab-pane"
              aria-selected="false"
            >
              Who           </button>
          </li>

        </ul>
        <div className="tab-content" id="myTabContent">

          <div
            className="tab-pane fade show active py-5"
            id="home-tab-pane"
            role="tabpanel"
            aria-labelledby="home-tab"
            tabindex="0"
          >
            <div className="about-me container py-3 text-center">
              
            </div>
          </div>
          <div
            className="tab-pane fade py-5"
            id="profile-tab-pane"
            role="tabpanel"
            aria-labelledby="profile-tab"
            tabindex="0"
          >
            <div className="personal-info container py-3">
              
            </div>
          </div>
        </div>
        </div>
        </div>
   
   </>
  )
}
