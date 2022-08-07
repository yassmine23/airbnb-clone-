import React from "react";
import "../BecomeHostStyle.css";

export default function SectionThree() {
  return (
    <>
     {/* three section */}
     <div className="container">
        <div className="row text-center p-5 my-5">
          <h1 className="profits">
            Host your
            <select
              className="text-decoration-underline border-0"
              aria-label="Default select example"
            >
              <option
                value={"enterplace"}
                className="text-decoration-underline optionss fs-1 "
              >
                enter place
              </option>
              <option
              selected
                value={"privateroom"}
                className="text-decoration-underline fs-1  optionss"
              >
                private room
              </option>
              <option
                value={"sharedroom"}
                className="text-decoration-underline fs-1  optionss"
              >
                shared room
              </option>
            </select>
            for
            <select
              className="text-decoration-underline border-0"
              aria-label="Default select example"
            >
              <option className="text-decoration-underline fs-1 px-5 optionss">
                1 guests
              </option>
              <option
                value="1"
                className="text-decoration-underline  fs-1 mx-5 optionss"
              >
                2 guests
              </option>
              <option value="2" className="text-decoration-underline fs-1 mx-5 optionss">
                3 guests
              </option>
              <option
                value="3"
                selected
                        className="text-decoration-underline fs-1 mx-5 optionss"
              >
                4 guests
              </option>
            </select><br/>
            in
            <select
              className="text-decoration-underline border-0"
              aria-label="Default select example"
            >
              <option
                
                className="text-decoration-underline border-0 fs-1 optionss"
              >
                Alexandria
              </option>
              <option
              selected
                value="1"
                className="text-decoration-underline border-0 fs-1 optionss "
              >
                Alexandria
              </option>
              <option
                value="2"
                className="text-decoration-underline border-0 fs-1 optionss"
              >
                Alexandria
              </option>
            </select><br/>
            and earn up to ${390}/month
          </h1>
          {/* modal */}
          {/* <!-- Button trigger modal --> */}
          <button
            type="button"
            className="anco btn btn-link my-5"
            data-bs-toggle="modal"
            data-bs-target="#exampleModal2"
          >
            How we estimate your earnings potential{" "}
          </button>

          {/* <!-- Modal --> */}
          <div
            class="modal fade"
            id="exampleModal2"
            tabIndex={-1}
            aria-labelledby="exampleModalLabel2"
            aria-hidden="true"
          >
            <div class="modal-dialog">
              <div class="modal-content">
                <div class="modal-header">
                  <button
                    type="button"
                    class="btn-close"
                    data-bs-dismiss="modal"
                    aria-label="Close"
                  ></button>
                </div>
                <div class="modal-body">
                  <h1>How we estimate your earning potential</h1>
                  <p>
                    We make a few simple assumptions and calculations to
                    determine your earnings:
                  </p>
                  <ul>
                    <li>
                      If you have an entire place, we assume you can host four
                      guests. If you’re listing a private room, we count that as
                      two guests, and for a shared room, just one guest. You can
                      change your selections in the drop-down menu any time.
                    </li>
                    <li>
                      We take the median nightly price (before expenses, fees
                      and taxes) based on booking data in your area from the
                      last 12 months.
                    </li>

                    <li>
                      We then multiply that price by the total number of
                      occupied nights to get the monthly earnings estimate. To
                      estimate the number of nights that you might host, we look
                      at how often others in your area are hosting.
                    </li>
                  </ul>
                  <p>
                    Keep in mind, these are just estimates. How much you
                    actually earn depends on a number of other factors such as
                    your availability, price, acceptance and cancellation rates,
                    any legal restrictions, and demand in your area. Also, your
                    ability to host may depend on the local laws in your area.{" "}
                    <a href="anco">Learn more.</a>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )}