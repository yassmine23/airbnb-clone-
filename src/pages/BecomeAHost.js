import React from 'react'
import "./BecomeHostStyle.css";

export default function BecomeAHost() {
  return (
    <>
         <div className="container-fluid">
        <div className="d-flex">
          <nav class="navbar fixed-top">
            <div className="container-fluid">
              <a className="navbar-brand" href="#">
                <svg
                  viewBox="0 0 32 32"
                  xmlns="http://www.w3.org/2000/svg"
                  aria-label="Airbnb homepage"
                  role="img"
                  focusable="false"
                  width={34}
                  className="logo"
                  fill="white"
                >
                  <path d="M16 1c2.008 0 3.463.963 4.751 3.269l.533 1.025c1.954 3.83 6.114 12.54 7.1 14.836l.145.353c.667 1.591.91 2.472.96 3.396l.01.415.001.228c0 4.062-2.877 6.478-6.357 6.478-2.224 0-4.556-1.258-6.709-3.386l-.257-.26-.172-.179h-.011l-.176.185c-2.044 2.1-4.267 3.42-6.414 3.615l-.28.019-.267.006C5.377 31 2.5 28.584 2.5 24.522l.005-.469c.026-.928.23-1.768.83-3.244l.216-.524c.966-2.298 6.083-12.989 7.707-16.034C12.537 1.963 13.992 1 16 1zm0 2c-1.239 0-2.053.539-2.987 2.21l-.523 1.008c-1.926 3.776-6.06 12.43-7.031 14.692l-.345.836c-.427 1.071-.573 1.655-.605 2.24l-.009.33v.206C4.5 27.395 6.411 29 8.857 29c1.773 0 3.87-1.236 5.831-3.354-2.295-2.938-3.855-6.45-3.855-8.91 0-2.913 1.933-5.386 5.178-5.42 3.223.034 5.156 2.507 5.156 5.42 0 2.456-1.555 5.96-3.855 8.907C19.277 27.766 21.37 29 23.142 29c2.447 0 4.358-1.605 4.358-4.478l-.004-.411c-.019-.672-.17-1.296-.714-2.62l-.248-.6c-1.065-2.478-5.993-12.768-7.538-15.664C18.053 3.539 17.24 3 16 3zm.01 10.316c-2.01.021-3.177 1.514-3.177 3.42 0 1.797 1.18 4.58 2.955 7.044l.21.287.174-.234c1.73-2.385 2.898-5.066 2.989-6.875l.006-.221c0-1.906-1.167-3.4-3.156-3.421h-.001z"></path>
                </svg>
              </a>
            </div>
          </nav>
        </div> 
        <div className="row bgdark">
          <div className="col-6 d-flex flex-column align-items-center justify-content-center">
            <h1 className="text-white text-center my-5 titles p-2">
              Open your door to hosting
            </h1>
            <button
              type="button"
              className="btn btnhost my-5 px-4 py-2"
              data-bs-toggle="modal"
              data-bs-target="#exampleModal"
            >
              Try hosting
            </button>
            {/* modal */}
            <div
              class="modal fade"
              id="exampleModal"
              tabindex="-1"
              aria-labelledby="exampleModalLabel"
              aria-hidden="true"
            >
              <div class="modal-dialog">
                <div class="modal-content">
                  <div class="modal-header">
                    <h5 class="modal-title" id="exampleModalLabel">
                      Modal title
                    </h5>
                    <button
                      type="button"
                      class="btn-close"
                      data-bs-dismiss="modal"
                      aria-label="Close"
                    ></button>
                  </div>
                  <div class="modal-body">...</div>
                  <div class="modal-footer">
                    <button
                      type="button"
                      class="btn btn-secondary"
                      data-bs-dismiss="modal"
                    >
                      Close
                    </button>
                    <button type="button" class="btn btn-primary">
                      Save changes
                    </button>
                  </div>
                </div>
              </div>
            </div>
            <a href="#two" className="angledown my-4">
              <i className="fa fa-angle-down text-white fs-4"></i>
            </a>
          </div>
          <div className="col-6">
            <img src="images/headers.jpg" className="images" ></img>
          </div>
        </div>
      </div>
      {/* section two */}
      <div className="container-fluid"id="two">
        <div className="row p-5">
        <div className="d-flex flex-column align-items-center justify-content-evenly">
          <h1 className="titles text-center">You can host <br/>anything, anywhere</h1>
{/* 
<div id="carouselExampleDark" class="carousel carousel-dark slide" data-bs-ride="carousel">
    <div className="carousel-indicators d-none">
      <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
      <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="1" aria-label="Slide 2"></button>
      <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="2" aria-label="Slide 3"></button>
      <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="3" aria-label="Slide 4"></button>
      <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="4" aria-label="Slide 5"></button>
      <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="5" aria-label="Slide 6"></button>

    </div>
  <div className="carousel-inner">
    <div className="carousel-item active" data-bs-interval="10000">
      <img src="images/slid1.jpg" className="d-block w-50" alt="..."/>
      <div className="carousel-caption d-none d-md-block">
        <h5>First slide label</h5>
        <p>Some representative placeholder content for the first slide.</p>
      </div>
    </div>
    <div className="carousel-item" data-bs-interval="2000">
      <img src="images/slid2.jpg" className="d-block w-50" alt="..."/>
      <div className="carousel-caption d-none d-md-block">
        <h5>Second slide label</h5>
        <p>Some representative placeholder content for the second slide.</p>
      </div>
    </div>
    <div className="carousel-item" data-bs-interval="3000">
      <img src="images/slid3.jpg" className="d-block w-50" alt="..."/>
      <div className="carousel-caption d-none d-md-block">
        <h5>Second slide label</h5>
        <p>Some representative placeholder content for the second slide.</p>
      </div>
    </div>
    <div className="carousel-item" data-bs-interval="3000">
      <img src="images/slide4.jpg" className="d-block w-50" alt="..."/>
      <div className="carousel-caption d-none d-md-block">
        <h5>Third slide label</h5>
        <p>Some representative placeholder content for the third slide.</p>
      </div>
    </div>
    <div className="carousel-item" data-bs-interval="3000">
      <img src="images/slide5.jpg" className="d-block w-50" alt="..."/>
      <div className="carousel-caption d-none d-md-block">
        <h5>Hosting my bedouin tent has introduced me to people around the world.</h5>
        <p>Some representative placeholder content for the third slide.</p>
      </div>
    </div>
    <div className="carousel-item" data-bs-interval="3000">
      <img src="images/slide6.jpg" className="d-block w-50 shadow-lg" alt="..."/>
      <div className="carousel-caption d-none d-md-block">
        <h5>I love hosting my eco-home so people can connect with nature and their loved ones.</h5>
        <p>Some representative placeholder content for the third slide.</p>
      </div>
    </div>
  </div>
  <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleDark" data-bs-slide="prev">
    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
    <span className="visually-hidden">Previous</span>
  </button>
  <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleDark" data-bs-slide="next">
    <span className="carousel-control-next-icon" aria-hidden="true"></span>
    <span className="visually-hidden">Next</span>
  </button>
</div> */}

          </div>
        </div>
      </div>
      
    </>
  );
}
