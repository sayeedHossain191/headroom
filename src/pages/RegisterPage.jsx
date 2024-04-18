import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import { useContext, useState } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../providers/AuthProvider';
import { Helmet } from 'react-helmet-async';



const RegisterPage = () => {

    const { createUser } = useContext(AuthContext);
    const [registerError, setRegisterError] = useState('')

    const handleRegister = (e) => {

        e.preventDefault();
        console.log(e.currentTarget)
        const form = new FormData(e.currentTarget)

        const name = form.get('name');
        const photo = form.get('photo');
        const email = form.get('email');
        const password = form.get('password');
        console.log(name, photo, email, password)

        setRegisterError('')

        if (password.length < 6) {
            setRegisterError('Password should be at least 6 characters or longer');
            return;
        }
        else if (!/[A-Z]/.test(password)) {
            setRegisterError('Password should contain atleast one upper case')
            return;
        }
        else if (!/[a-z]/.test(password)) {
            setRegisterError('Password should contain atleast one lower case')
            return;
        }
        else {
            toast("Password is not valid");

        }

        //Create User
        createUser(email, password)
            .then(result => {
                console.log(result.user)
            })
            .catch(error => {
                console.error(error)
                setRegisterError(error.message)
            })
    }

    return (
        <div>
            <Helmet>
                <title>
                    HeadRoom | Register Page
                </title>
            </Helmet>
            <div>
                <h2 className='text-4xl my-8 text-center font-merriweather'>Please Register</h2>

                <form onSubmit={handleRegister} className="card-body md:w-3/4 lg:w-1/2 mx-auto font-lato">

                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Your Name</span>
                        </label>
                        <input type="text" name='name' placeholder="name" className="input input-bordered" required />
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Photo URL</span>
                        </label>
                        <input type="text" name='photo' placeholder="photo URL" className="input input-bordered" required />
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Email</span>
                        </label>
                        <input type="email" name='email' placeholder="email" className="input input-bordered" required />
                    </div>

                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Password</span>
                        </label>
                        <input type="password" name='password' placeholder="password" className="input input-bordered" required />
                        <label className="label">
                            <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                        </label>
                    </div>
                    <div className="form-control mt-6">
                        <button className="btn btn-primary">Create Account</button>
                    </div>
                </form>
                {
                    registerError && <p className='text-red-600 text-center'>{registerError}</p>
                }

                <p className='text-center mt-4'>Already have an account? <Link className='text-blue-600 font-bold' to='/login'>Login</Link></p>
            </div>
            <ToastContainer />
        </div>
    );
};

export default RegisterPage;