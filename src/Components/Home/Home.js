import React, { Component } from "react";
import piz from "../../images/piz.png";
import "./Home.css";
export class Home extends Component {
  render() {
    return (
      <div>
        <div className="wrap-container my-4">
          <div className="container">
            <div className="wrap-card">
              <div className="row">
                <div className="col-6 offset-3">
                  <div className="card myCard shadow p-4">
                    <div className="firstBox">
                      <div className="row">
                        <div className="col-12">
                          <h2>Pizza ABC</h2>
                          <p>
                            We are currently serving one pizza only. Please
                            taste and Review
                          </p>
                        </div>
                        <div className="col-12">
                          <div className="row">
                            <div className="col-6">
                              <div className="wrap-content">
                                <h4 className="my-2">Add Quantity</h4>
                                <div className="wrap-btns my-2">
                                  <button className="mx-2">-</button>
                                  <p className="fw-bold">0</p>
                                  <button className="mx-2">+</button>
                                </div>
                                <div className="form-check my-pad my-2">
                                  <input
                                    className="form-check-input"
                                    type="checkbox"
                                    value=""
                                    id="flexCheckDefault"
                                  />
                                  <label
                                    className="form-check-label"
                                    for="flexCheckDefault"
                                  >
                                    Add ons
                                  </label>
                                </div>
                              </div>
                            </div>
                            <div className="col-6">
                              <div className="wrap-img">
                                <img
                                  src={piz}
                                  alt="piz"
                                  className="img-fluid"
                                />
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="secondBox">
                      <div className="wrap-total">
                        <p className="fw-bold">Total: $150.0</p>
                        <div className="wrap-discount">
                          <p className="fw-bold">Discount</p>
                          <div className="form-check mx-2">
                            <input
                              className="form-check-input"
                              type="checkbox"
                              value=""
                              id="flexCheckDefault"
                            />
                          </div>
                        </div>
                        <p className="fw-bold">To Pay $135.0</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Home;
