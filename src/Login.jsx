import React from 'react'
import { Link } from 'react-router-dom'

function Login() {
  return (
    <div>
    <div>Login</div>
    <div class="Container">
    <div class="PageContent PageContent--fitScreen PageContent--extraNarrow">
        
        <input type="hidden" name="form_type" value="recover_customer_password"></input>
        <input type="hidden" name="utf8" value="✓"></input>
       
       
            <input type="hidden" name="form_type" value="customer_login"></input>
            <input type="hidden" name="utf8" value="✓"></input>
            <header class="Form__Header">
          <h1 class="Form__Title Heading u-h1">Login</h1>
          <p class="Form__Legend">Please enter your e-mail and password:</p>
        </header><div class="Form__Item">
          <input type="email" class="Form__Input" name="customer[email]" required="required" placeholder="Email" aria-label="Email" autofocus=""></input>
          <label class="Form__FloatingLabel">Email</label>
        </div>

        <div class="Form__Item">
          <input type="password" class="Form__Input" name="customer[password]" required="required" placeholder="Password" aria-label="Password"></input>
          <label class="Form__FloatingLabel">Password</label>
          <button type="button" class="Form__ItemHelp Link Link--primary" data-action="toggle-recover-form">Forgot password?</button>
        </div>

        <button type="submit" class="Form__Submit Button Button--primary Button--full">Login</button>

        <div class="Form__Hint Form__Hint--center">
          <span class="Text--subdued">Don't have an account?
         <Link to="/Registration"> <button>Create one</button></Link></span>
        </div><input type="hidden" name="return_url" value="/account"></input>
        {/* </form> */}
        {/* <form method="post" action="/account/recover" id="recover_customer_password" accept-charset="UTF-8" 
        name="recover" class="Form Form--spacingTight" style="display: none"> */}
            {/* <input type="hidden" name="form_type" value="recover_customer_password"></input>
            <input type="hidden" name="utf8" value="✓"></input>
            <header class="Form__Header">
          <h1 class="Form__Title Heading u-h1">Recover password</h1><p class="Form__Legend">Please enter your email:</p></header><div class="Form__Item">
          <input type="email" class="Form__Input" name="email" required="required" placeholder="Email" aria-label="Email" autofocus=""></input>
          <label class="Form__FloatingLabel">Email</label>
        </div>

        <button type="submit" class="Form__Submit Button Button--primary Button--full">Recover</button>

        <div class="Form__Hint Form__Hint--center">
          <span class="Text--subdued">Remember your password?</span>
          <button type="button" class="Link Link--secondary" data-action="toggle-recover-form">Back to login</button>
        </div> */}
       
        
</div>
    </div>
    </div>
  )
}

export default Login