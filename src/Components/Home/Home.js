import React, { Component } from "react";
import piz from "../../images/piz.png";
import "./Home.css";
export class Home extends Component {
  constructor(props) {
    super(props)

    this.state = {
      pizza: 0,
      dis: 0,
      total: 0,
      initial: 0,
      addOn: false
    }
    this.increment = this.increment.bind(this);
    this.decrement = this.decrement.bind(this);
    this.total = this.total.bind(this);
  }
  async increment() {
    debugger
    await this.setState({
      pizza: this.state.pizza + 1,
      dis: this.state.dis < 60 ? this.state.dis + 10 : this.state.dis
    })
    this.total()
  }
  async decrement() {
    debugger
    await this.setState({
      pizza: this.state.pizza > 0 ? this.state.pizza - 1 : this.state.pizza,
      dis: this.state.dis > 0 ? this.state.dis - 10 : this.state.dis
    })
    this.total()
  }
  checked() {
    debugger
    this.setState({
      addOn: true,
      total: this.state.total + 5
    })
  }
  total() {
    debugger
    console.log('this.state.pizza', this.state.pizza)
    let a = (this.state.pizza * 50)
    let b = (a * this.state.dis / 100);
    this.setState({
      initial: this.state.pizza * 50,
      total: b
    })
  }

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
                                  <button className="mx-2" onClick={this.decrement}>-</button>
                                  <p className="fw-bold">{this.state.pizza}</p>
                                  <button className="mx-2" onClick={this.increment}>+</button>
                                </div>
                                <div className="form-check my-pad my-2">
                                  <input
                                    className="form-check-input"
                                    type="checkbox"
                                    disabled={this.state.pizza === 0 ? true : false}
                                    value={this.state.addOn}
                                    onClick={async () => {
                                      await this.setState(prevState => ({
                                        addOn: !prevState.addOn
                                      }))
                                      await this.setState({
                                        total: this.state.addOn ? this.state.total + 5 : this.state.total - 5
                                      })
                                    }
                                      // this.checked

                                    }
                                    checked={this.state.addOn}

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
                        <p className="fw-bold">Total: ${this.state.initial}</p>
                        <div className="wrap-discount">
                          <p className="fw-bold">Discount : {this.state.dis}</p>
                          {/* <div className="form-check mx-2">
                            <input
                              className="form-check-input"
                              type="checkbox"
                              value={this.state.dis}
                              id="flexCheckDefault"
                            />
                          </div> */}

                        </div>
                        <p className="fw-bold">To Pay ${this.state.total}</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div >
    );
  }
}

export default Home;
