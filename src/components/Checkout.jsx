import React, { useState } from "react";
import testlogo from './logo1.png';


function Checkout() {


    return(
    <section class="h-100 gradient-form">
    <div class="container py-5 h-100">
      <div class="row d-flex justify-content-center align-items-center h-100">
        <div class="col-xl-10">
          <div class="card rounded-3 text-black">
            <div class="row g-0">
              <div class="col-lg-6">
                <div class="card-body p-md-5 mx-md-4">
  
                  <div class="text-center">
                  <img id="testlogo" src={testlogo} alt="Logo" />
                    <h4 class="mt-1 mb-5 pb-1">R.G. Hotel & Resort</h4>
                  </div>
  
                  <form className="form text-center">
                    <p>Please select your payment method:</p>
  
                    <div class="d-flex flex-row pb-3">
                  <div class="d-flex align-items-center pe-2">
                    <input class="form-check-input" type="radio" name="radioNoLabel" id="radioNoLabel1"
                      value="" aria-label="..." checked />
                  </div>
                  <div class="rounded border d-flex w-100 p-3 align-items-center">
                    <p class="mb-0">
                      <i class="fab fa-cc-visa fa-lg text-primary pe-2"></i><img className="card1" src={require('./visa.png')}/>
                    </p>
                    <div class="ms-auto">************3456</div>
                  </div>
                </div>
  
                <div class="d-flex flex-row pb-3">
                  <div class="d-flex align-items-center pe-2">
                    <input class="form-check-input" type="radio" name="radioNoLabel" id="radioNoLabel2"
                      value="" aria-label="..." />
                  </div>
                  <div class="rounded border d-flex w-100 p-3 align-items-center">
                    <p class="mb-0">
                      <i class="fab fa-cc-mastercard fa-lg text-dark pe-2"></i><img className="card1" src={require('./mastercard.png')}/>
                    </p>
                    <div class="ms-auto">************1038</div>
                  </div>
                </div>

                <input type="button" value="Proceed to payment" class="btn btn-primary btn-block btn-lg " />
                </form>
  
                    
  
                </div>
              </div>
              <div class="col-lg-6 d-flex align-items-center gradient-custom-2" id="login-image">
                <div class="px-3 py-4 p-md-5 mx-md-4">
                  <h4 class="mb-4">Order Recap:</h4>
                  <p>Room: {}</p>
                  <p>Check-in Date:</p>
                  <p>Adult:{}</p>
                  <p>Children:</p>
                  <p>Number of Rooms:</p>
                  <h3>Total:</h3>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>

  );
}

export default Checkout;