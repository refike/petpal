import React, { useEffect } from 'react';

const Register = ({ requestRegister, setRegisterError, registerErrorMsg }) => {
  useEffect(() => () => {
    setRegisterError('');
  }, []);

  const handlesubmit = (event) => {
    event.preventDefault();
    const { registername, registerpass, regtarget } = event.target;
    if (registername.value.trim().length > 0 && registerpass.value.trim().length > 0) {
      requestRegister({ username: registername.value, password: registerpass.value });
      setRegisterError('');
      event.target.reset();
    } else {
      setRegisterError('Fill out all fields please!');
    }
  };

  return (
    <form className="registerform" onSubmit={handlesubmit}>
      <h2>sign up for free</h2>
      {registerErrorMsg ? <h3>{registerErrorMsg}</h3> : null}
      <div>
        <input className="input" name="registername" type="text" id="registername" />
        <label htmlFor="registername">username</label>
      </div>
      <div>
        <input name="registerpass" type="password" id="registerpass" />
        <label htmlFor="registerpass">password</label>
      </div>
      {/* <p>
        <input type="radio" name="regtarget" id="regmember" value="member" defaultChecked />
        <label htmlFor="regmember">member</label>
        <input type="radio" name="regtarget" id="regshelter" value="shelter" />
        <label htmlFor="regshelter">shelter</label>
      </p> */}
      <button className="button" type="submit"><span>register</span></button>
    </form>
  );
};

export default Register;
