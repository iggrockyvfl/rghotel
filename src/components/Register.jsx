import React, { useState } from "react";
import testlogo from './logo1.png';

function Register() {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

 const handleSubmit = (event) => {
  event.preventDefault();

  // Validation
  if (formData.fullName.length < 8) {
    alert("Full name must be 8 characters or more.");
    return;
  }

  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!formData.email || !emailRegex.test(formData.email)) {
    alert("Invalid email address.");
    return;
  }

  if (!formData.password || formData.password.length < 8) {
    alert("Password must be 8 characters or more.");
    return;
  }

  if (!formData.confirmPassword || formData.password !== formData.confirmPassword) {
    alert("Passwords do not match.");
    return;
  }

  // If all validations pass, show success alert
  alert("Registration complete!");

  // Additional logic for form submission can be added here
  console.log("Form Data:", formData);
};

  return (
    <section className="h-100 gradient-form">
      <div className="container py-5 h-100">
        <div className="row d-flex justify-content-center align-items-center h-100">
          <div className="col-xl-10">
            <div className="card rounded-3 text-black">
              <div className="row g-0">
                <div className="col-lg-6">
                  <div className="card-body p-md-5 mx-md-4">
                    <div className="text-center">
                      <img id="testlogo" src={testlogo} alt="Logo" />
                      <h4 className="mt-1 mb-5 pb-1">R.G. Hotel & Resort</h4>
                    </div>

                    <p className="text-center h3 fw-bold mb-5 mx-1 mx-md-4 mt-4">Sign up</p>

                    <form className="mx-1 mx-md-4" onSubmit={handleSubmit}>
                      <div className="d-flex flex-row align-items-center mb-4">
                        <i className="fas fa-user fa-lg me-3 fa-fw"></i>
                        <div className="form-outline flex-fill mb-0">
                          <input
                            type="text"
                            id="form3Example1c"
                            className="form-control"
                            name="fullName"
                            value={formData.fullName}
                            onChange={handleChange}
                            required
                          />
                          <label className="form-label" htmlFor="form3Example1c">
                            Full Name<span className="text-danger">*</span>
                          </label>
                        </div>
                      </div>

                      <div className="d-flex flex-row align-items-center mb-4">
                        <i className="fas fa-envelope fa-lg me-3 fa-fw"></i>
                        <div className="form-outline flex-fill mb-0">
                          <input
                            type="email"
                            id="form3Example3c"
                            className="form-control"
                            name="email"
                            value={formData.email}
                            onChange={handleChange}
                            required
                          />
                          <label className="form-label" htmlFor="form3Example3c">
                            Your Email<span className="text-danger">*</span>
                          </label>
                        </div>
                      </div>

                      <div className="d-flex flex-row align-items-center mb-4">
                        <i className="fas fa-lock fa-lg me-3 fa-fw"></i>
                        <div className="form-outline flex-fill mb-0">
                          <input
                            type="password"
                            id="form3Example4c"
                            className="form-control"
                            name="password"
                            value={formData.password}
                            onChange={handleChange}
                            required
                          />
                          <label className="form-label" htmlFor="form3Example4c">
                            Password<span className="text-danger">*</span>
                          </label>
                        </div>
                      </div>

                      <div className="d-flex flex-row align-items-center mb-4">
                        <i className="fas fa-key fa-lg me-3 fa-fw"></i>
                        <div className="form-outline flex-fill mb-0">
                          <input
                            type="password"
                            id="form3Example4cd"
                            className="form-control"
                            name="confirmPassword"
                            value={formData.confirmPassword}
                            onChange={handleChange}
                            required
                          />
                          <label className="form-label" htmlFor="form3Example4cd">
                            Repeat your password<span className="text-danger">*</span>
                          </label>
                        </div>
                      </div>

                      <div className="form-check d-flex justify-content-center mb-5">
                        <input
                          className="form-check-input me-2"
                          type="checkbox"
                          value=""
                          id="form2Example3c"
                          required
                        />
                        <label className="form-check-label" htmlFor="form2Example3c">
                          I agree all statements in <a href="#!">Terms of service</a>
                        </label>
                      </div>

                      <div className="d-flex justify-content-center mx-4 mb-3 mb-lg-4">
                        <button type="submit" className="btn btn-primary btn-lg">
                          Register
                        </button>
                      </div>
                    </form>
                  </div>
                </div>
                <div className="col-lg-6 d-flex align-items-center gradient-custom-2" id="login-image">
                  <div className="px-3 py-4 p-md-5 mx-md-4">
                    <h4 className="mb-4">We are more than just a hotel</h4>
                    <p className="small mb-0">
                      Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
                      tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
                      quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                    </p>
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

export default Register;






// import React, {useState} from "react";
// import '../Login.css';

// const FormValidation = () =>{
//     const [formData, setFormData] = useState({
//         username: '',
//         email: '',
//         password: '',
//         confirmPassword: '',
//         fullname: ''
//     })
//     const [errors, setErrors] = useState({});
//     const handleChange = (e) =>{
//         const {name, value} = e.target;
//         setFormData({
//             ...formData, [name] : value
//         })
//     }

//     const handleSubmit = (e) => {
//         e.preventDefault()
//         const validationErrors = {}
//         if(!formData.fullname.trim()) {
//             validationErrors.fullname = "Full name is required";
//         }

//         if(!formData.username.trim()) {
//             validationErrors.username = "username required";
//         }

//         if(!formData.email.trim()){
//             validationErrors.email = "email is required";
//         } else if (!/\S+@\S+\.\S+/.test(formData.email)){
//             validationErrors.email = "email is valid";
//         }

//         if(!formData.email.trim()){
//             validationErrors.password = "password is required";
//         } else if (formData.password.length <6){
//             validationErrors.password = "password should be atleast 6 Char";
//         }

//         if(formData.confirmPassword !== formData.password){
//             validationErrors.confirmPassword = "password not matched"
//         }
//         setErrors(validationErrors)
//         if(Object.keys(validationErrors).length === 0){
//             alert("Form Submitted successfully")
//         }
//     }
//     return(
        
//         <div className="loginPage">
//             <div className="loginImg "></div>
//         <form onSubmit={handleSubmit}>
//             <h1>Registration Form</h1>
//             <div>
//                 <label>Full Name:</label>
//                 <input 
//                 type="text" name="fullname" placeholder='full name' autoComplete='off' 
//                 onChange={handleChange}
//                 />
//                 {errors.fullname && <span>{errors.fullname}</span>}
//             </div>
//             <div>
//                 <label>Username:</label>
//                 <input 
//                 type="text" name="username" placeholder='username' autoComplete='off' 
//                 onChange={handleChange}
//                 />
//                 {errors.username && <span>{errors.username}</span>}
//             </div>
//             <div>
//                 <label>Email:</label>
//                 <input type="email" name="email" placeholder='example@gmail.com' autoComplete='off' 
//                 onChange={handleChange}
//                 />
//                 {errors.email && <span>{errors.email}</span>}
//             </div>
//             <div>
//                 <label>Password:</label>
//                 <input type="password" name="password" placeholder='******' 
//                 onChange={handleChange}
//                 />
//                 {errors.password && <span>{errors.password}</span>}
//             </div>
//             <div>
//                 <label>Confirm Password:</label>
//                 <input type="password" name="confirmPassword" placeholder='******' 
//                 onChange={handleChange}
//                 />
//                 {errors.confirmPassword && <span>{errors.confirmPassword}</span>}
//             </div>
//             <button type="submit">Submit</button>
//         </form>
        
//         </div>
//     );
// }

// export default FormValidation;
