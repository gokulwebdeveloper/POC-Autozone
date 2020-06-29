import React from "react";
import BreadcrumbArea from "../BreadcrumbArea/BreadcrumbArea";
import InputWithLabel from "../../utlis/formComponents/InputWithLabel";
import Button from "../../utlis/button/Button";
import "./CheckoutPage.css";
import $ from 'jquery';

export default function CheckoutPage() {
  $(document).ready(function(){
    $('#checkoutBtn').on('click', function(){
      $('input[required]').each(function(element) {
        let val = $(this).val();
        if(val === ''){
          $('.checkout_area .formErrorMsg').text("please provide some input");
          $('.checkout_area .formErrorMsg:first').text("please fill all the fields");
          $('.checkout_area .formErrorMsg').show();
        }
      });
    })
  });
  return (
    <>
      <BreadcrumbArea title="Checkout" />

      <div className="checkout_area section-padding-80">
        <div className="container">
          <form action="#" method="post" className="row">
            <div className="col-12 col-md-6">
              <div className="checkout_details_area mt-50 clearfix">
                <div className="cart-page-heading mb-30">
                  <h5>Billing Address</h5>
                </div>
                <p className="formErrorMsg">Please fill all required fields</p>
                <div className="row">
                  <div className="col-md-6 mb-3">
                    <InputWithLabel
                      labelText="First Name"
                      inputId="first_name"
                      inputType="text"
                      isRequired={true}
                    />
                  </div>
                  <div className="col-md-6 mb-3">
                    <InputWithLabel
                      labelText="Last Name"
                      inputId="last_name"
                      inputType="text"
                      isRequired={true}
                    />
                  </div>
                  <div className="col-12 mb-3">
                    <InputWithLabel
                      labelText="Company Name"
                      inputId="company"
                      inputType="text"
                      isRequired={false}
                    />
                  </div>
                  <div className="col-12 mb-3">
                    <label htmlFor="country">
                      Country <span>*</span>
                    </label>
                    <select className="nice-select w-100" id="country">
                      <option value="usa">United States</option>
                      <option value="uk">United Kingdom</option>
                      <option value="ger">Germany</option>
                      <option value="fra">France</option>
                      <option value="ind">India</option>
                      <option value="aus">Australia</option>
                      <option value="bra">Brazil</option>
                      <option value="cana">Canada</option>
                    </select>
                  </div>
                  <div className="col-12 mb-3">
                    <InputWithLabel
                      labelText="Address"
                      inputId="street_address"
                      inputType="text"
                      isRequired={true}
                    />
                    <input
                      type="text"
                      className="form-control mt-3"
                      id="street_address2"
                    ></input>
                  </div>
                  <div className="col-12 mb-3">
                    <InputWithLabel
                      labelText="Postcode"
                      inputId="postcode"
                      inputType="text"
                      isRequired={true}
                    />
                  </div>
                  <div className="col-12 mb-3">
                    <InputWithLabel
                      labelText="Town/City"
                      inputId="city"
                      inputType="text"
                      isRequired={true}
                    />
                  </div>
                  <div className="col-12 mb-3">
                    <InputWithLabel
                      labelText="Province"
                      inputId="state"
                      inputType="text"
                      isRequired={true}
                    />
                  </div>
                  <div className="col-12 mb-3">
                    <InputWithLabel
                      labelText="Phone No"
                      inputId="phone_number"
                      inputType="text"
                      isRequired={true}
                      min="0"
                    />
                  </div>
                  <div className="col-12 mb-4">
                    <InputWithLabel
                      labelText="Email Address"
                      inputId="email_address"
                      inputType="email"
                      isRequired={true}
                    />
                  </div>

                  <div className="col-12">
                    <InputWithLabel
                      labelText="Terms and conitions"
                      inputId="customCheck1"
                      inputType="checkbox"
                      isRequired={false}
                    />
                    <InputWithLabel
                      labelText="Create an accout"
                      inputId="customCheck2"
                      inputType="checkbox"
                      isRequired={false}
                    />
                    <InputWithLabel
                      labelText="Subscribe to our newsletter"
                      inputId="customCheck3"
                      inputType="checkbox"
                      isRequired={false}
                    />
                  </div>
                </div>
              </div>
            </div>

            <div className="col-12 col-md-6 col-lg-5 ml-lg-auto">
              <div className="order-details-confirmation">
                <div className="cart-page-heading">
                  <h5>Your Order</h5>
                  <p>The Details</p>
                </div>

                <ul className="order-details-form mb-4">
                  <li>
                    <span>Product</span> <span>Total</span>
                  </li>
                  <li>
                    <span>Cocktail Yellow dress</span> <span>$59.90</span>
                  </li>
                  <li>
                    <span>Subtotal</span> <span>$59.90</span>
                  </li>
                  <li>
                    <span>Shipping</span> <span>Free</span>
                  </li>
                  <li>
                    <span>Total</span> <span>$59.90</span>
                  </li>
                </ul>

                <div id="accordion" role="tablist" className="mb-4">
                  <div className="card">
                    <div className="card-header" role="tab" id="headingOne">
                      <h6 className="mb-0">
                        <InputWithLabel
                          labelText="Paypal"
                          inputId="paymentRadio1"
                          inputType="radio"
                          isRequired={false}
                          name="paymentRadio"
                          defaultChecked
                        />
                        <a
                          className="collapsed"
                          data-toggle="collapse"
                          href="#collapseOne"
                          aria-expanded="false"
                          aria-controls="collapseOne"
                        >
                          <i className="fa fa-info-circle ml-2"></i>
                        </a>
                      </h6>
                    </div>

                    <div
                      id="collapseOne"
                      className="collapse"
                      role="tabpanel"
                      aria-labelledby="headingOne"
                      data-parent="#accordion"
                    >
                      <div className="card-body">
                        <p>
                          Lorem ipsum dolor sit amet, consectetur adipiscing
                          elit. Proin pharetra tempor so dales. Phasellus
                          sagittis auctor gravida. Integ er bibendum sodales
                          arcu id te mpus. Ut consectetur lacus.
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="card">
                    <div className="card-header" role="tab" id="headingTwo">
                      <h6 className="mb-0">
                        <InputWithLabel
                          labelText="cash on delievery"
                          inputId="paymentRadio2"
                          inputType="radio"
                          isRequired={false}
                          name="paymentRadio"
                        />
                        <a
                          className="collapsed"
                          data-toggle="collapse"
                          href="#collapseTwo"
                          aria-expanded="false"
                          aria-controls="collapseTwo"
                        >
                          <i className="fa fa-info-circle ml-2"></i>
                        </a>
                      </h6>
                    </div>
                    <div
                      id="collapseTwo"
                      className="collapse"
                      role="tabpanel"
                      aria-labelledby="headingTwo"
                      data-parent="#accordion"
                    >
                      <div className="card-body">
                        <p>
                          Lorem ipsum dolor sit amet, consectetur adipisicing
                          elit. Explicabo quis in veritatis officia inventore,
                          tempore provident dignissimos.
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="card">
                    <div className="card-header" role="tab" id="headingThree">
                      <h6 className="mb-0">
                        <InputWithLabel
                          labelText="credit card"
                          inputId="paymentRadio3"
                          inputType="radio"
                          isRequired={false}
                          name="paymentRadio"
                        />
                        <a
                          className="collapsed"
                          data-toggle="collapse"
                          href="#collapseThree"
                          aria-expanded="false"
                          aria-controls="collapseThree"
                        >
                          <i className="fa fa-info-circle ml-2"></i>
                        </a>
                      </h6>
                    </div>
                    <div
                      id="collapseThree"
                      className="collapse"
                      role="tabpanel"
                      aria-labelledby="headingThree"
                      data-parent="#accordion"
                    >
                      <div className="card-body">
                        <p>
                          Lorem ipsum dolor sit amet, consectetur adipisicing
                          elit. Esse quo sint repudiandae suscipit ab soluta
                          delectus voluptate, vero vitae
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="card">
                    <div className="card-header" role="tab" id="headingFour">
                      <h6 className="mb-0">
                        <InputWithLabel
                          labelText="direct bank transfer"
                          inputId="paymentRadio4"
                          inputType="radio"
                          isRequired={false}
                          name="paymentRadio"
                        />
                        <a
                          className="collapsed"
                          data-toggle="collapse"
                          href="#collapseFour"
                          aria-expanded="true"
                          aria-controls="collapseFour"
                        >
                          <i className="fa fa-info-circle ml-2"></i>
                        </a>
                      </h6>
                    </div>
                    <div
                      id="collapseFour"
                      className="collapse show"
                      role="tabpanel"
                      aria-labelledby="headingThree"
                      data-parent="#accordion"
                    >
                      <div className="card-body">
                        <p>
                          Lorem ipsum dolor sit amet, consectetur adipisicing
                          elit. Est cum autem eveniet saepe fugit, impedit
                          magni.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
                <Button btnText="Place Order" id="checkoutBtn"/>
              </div>
            </div>
          </form>
        </div>
      </div>
    </>
  );
}
