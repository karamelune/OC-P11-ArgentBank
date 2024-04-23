import { useSelector, useDispatch } from 'react-redux';
import {
    loginUser,
    setEmail,
    setPassword,
    setRememberMe,
} from '../../slices/login.slice';
import { getUser } from '../../slices/user.slice';
// import useLogin from '../../hooks/useLogin';
import './SignIn.scss';
import { useNavigate } from 'react-router-dom';
import { unwrapResult } from '@reduxjs/toolkit';

const SignIn = () => {
    const dispatch = useDispatch();
    // const login = useLogin();
    const navigate = useNavigate();
    const loginError = useSelector((state) => state.loginReducer.error);
    const { email, password, rememberMe } = useSelector(
        (state) => state.loginReducer
    );

    const login = async () => {
        dispatch(loginUser({ email: email, password: password }))
            .then(unwrapResult)
            .then((result) => {
                return dispatch(getUser(result)).then(unwrapResult);
            })
            .then((userDetails) => {
                if (userDetails.id) {
                    navigate(`/user/${userDetails.id}`);
                }
            });
    };

    const handleUsernameChange = (e) => dispatch(setEmail(e.target.value));
    const handlePasswordChange = (e) => dispatch(setPassword(e.target.value));
    const handleRememberMeChange = (e) =>
        dispatch(setRememberMe(e.target.checked));

    return (
        <main className="main bg-dark">
            <section className="sign-in-content">
                <i className="fa fa-user-circle sign-in-icon"></i>
                <h1>Sign In</h1>
                <form
                    onSubmit={(e) => {
                        e.preventDefault();
                        login();
                    }}>
                    {' '}
                    <div className="input-wrapper">
                        <label htmlFor="username">Username</label>
                        <input
                            type="text"
                            id="username"
                            value={email}
                            onChange={handleUsernameChange}
                        />
                    </div>
                    <div className="input-wrapper">
                        <label htmlFor="password">Password</label>
                        <input
                            type="password"
                            id="password"
                            value={password}
                            onChange={handlePasswordChange}
                        />
                    </div>
                    {loginError && (
                        <div className="error">
                            Error in username or password
                        </div>
                    )}
                    <div className="input-remember">
                        <input
                            type="checkbox"
                            id="remember-me"
                            checked={rememberMe}
                            onChange={handleRememberMeChange}
                        />
                        <label htmlFor="remember-me">Remember me</label>
                    </div>
                    <button className="sign-in-button" type="submit">
                        Sign In
                    </button>
                </form>
            </section>
        </main>
    );
};

export default SignIn;
