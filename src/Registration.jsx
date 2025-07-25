import React from 'react'

const Registration = () => {
  return (
    

<div class="Container">
          <div class="PageContent PageContent--fitScreen PageContent--extraNarrow">
              {/* <form method="post" action="/account" id="create_customer" accept-charset="UTF-8" data-login-with-shop-sign-up="true" name="create_customer" class="Form Form--spacingTight"> */}
              <input type="hidden" name="form_type" value="create_customer"></input>
              <input type="hidden" name="utf8" value="✓"></input>
              <header class="Form__Header">
                  <h1 class="Form__Title Heading u-h1">Register</h1>
                  <p class="Form__Legend">Please fill in the information below:</p>
              </header><div class="Form__Item">
                      <input type="text" class="Form__Input" name="customer[first_name]" aria-label="First name" placeholder="First name" autofocus=""></input>
                          <label class="Form__FloatingLabel">First name</label>
                  </div>

                  <div class="Form__Item">
                      <input type="text" class="Form__Input" name="customer[last_name]" aria-label="Last name" placeholder="Last name"></input>
                          <label class="Form__FloatingLabel">Last name</label>
                  </div><div class="Form__Item">
                      <input type="email" class="Form__Input" name="customer[email]" aria-label="Email" placeholder="Email" required="required"></input>
                          <label class="Form__FloatingLabel">Email</label>
                  </div>

                  <div class="Form__Item">
                      <input type="password" class="Form__Input" name="customer[password]" aria-label="Password" placeholder="Password" required="required">
                      </input>
                          <label class="Form__FloatingLabel">Password</label>
                  </div>

                  <button type="submit" class="Form__Submit Button Button--primary Button--full">Create my account</button>
             
              <div>
              
          </div>
          </div>
          </div>
    
  )
}

export default Registration
