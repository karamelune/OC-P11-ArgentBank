import { useDispatch, useSelector } from 'react-redux';
import { useState } from 'react';
import { setUsername, setNewUsername } from '../../actions/user.action.js';
import axios from 'axios';
import './User.scss';

const User = () => {
    const dispatch = useDispatch();
    const { userName, newUsername, firstName, lastName } = useSelector(
        (state) => state.userReducer
    );
    const token = useSelector((state) => state.loginReducer.token);
    const [isEditing, setIsEditing] = useState(false);

    const handleNewUsernameChange = (e) =>
        dispatch(setNewUsername(e.target.value));

    const handleEditButtonClick = async () => {
        dispatch(setNewUsername(userName));
        if (isEditing) {
            try {
                const profileOptions = {
                    method: 'PUT',
                    url: 'http://localhost:3001/api/v1/user/profile',
                    headers: {
                        'Content-Type': 'application/json',
                        Authorization: `Bearer ${token}`,
                    },
                    data: {
                        userName: newUsername,
                    },
                };

                const response = await axios(profileOptions);

                if (response.status === 200) {
                    dispatch(setUsername(newUsername));
                    localStorage.setItem(
                        'userProfile',
                        JSON.stringify(response.data.body)
                    );
                } else {
                    console.error('Failed to update username');
                }
            } catch (error) {
                console.error('Failed to update username', error);
            }
        }
        setIsEditing(!isEditing);
    };

    const handleCancelButtonClick = () => {
        setIsEditing(false);
        dispatch(setNewUsername(userName));
    };

    return (
        <main className="main bg-dark">
            <div className="header">
                {isEditing ? (
                    <div className="header-edit">
                        <h1>Edit user info</h1>
                        <div>
                            <label htmlFor="username">User name:</label>
                            <input
                                type="text"
                                title="username"
                                value={newUsername}
                                onChange={handleNewUsernameChange}
                            />
                        </div>
                        <div>
                            <label htmlFor="firstName">First name:</label>
                            <input
                                type="text"
                                title="firstName"
                                value={firstName}
                                disabled
                            />
                        </div>
                        <div>
                            <label htmlFor="lastName">Last name:</label>
                            <input
                                type="text"
                                title="lastNamee"
                                value={lastName}
                                disabled
                            />
                        </div>
                    </div>
                ) : (
                    <h1>
                        Welcome back
                        <br />
                        {userName}
                    </h1>
                )}
                <div className="header-buttons">
                    <button
                        className="edit-button"
                        onClick={handleEditButtonClick}>
                        {isEditing ? 'Save' : 'Edit Name'}
                    </button>
                    {isEditing && (
                        <button
                            className="cancel-button"
                            onClick={handleCancelButtonClick}>
                            Cancel
                        </button>
                    )}
                </div>
            </div>
            <h2 className="sr-only">Accounts</h2>
            <section className="account">
                <div className="account-content-wrapper">
                    <h3 className="account-title">
                        Argent Bank Checking (x8349)
                    </h3>
                    <p className="account-amount">$2,082.79</p>
                    <p className="account-amount-description">
                        Available Balance
                    </p>
                </div>
                <div className="account-content-wrapper cta">
                    <button className="transaction-button">
                        View transactions
                    </button>
                </div>
            </section>
            <section className="account">
                <div className="account-content-wrapper">
                    <h3 className="account-title">
                        Argent Bank Savings (x6712)
                    </h3>
                    <p className="account-amount">$10,928.42</p>
                    <p className="account-amount-description">
                        Available Balance
                    </p>
                </div>
                <div className="account-content-wrapper cta">
                    <button className="transaction-button">
                        View transactions
                    </button>
                </div>
            </section>
            <section className="account">
                <div className="account-content-wrapper">
                    <h3 className="account-title">
                        Argent Bank Credit Card (x8349)
                    </h3>
                    <p className="account-amount">$184.30</p>
                    <p className="account-amount-description">
                        Current Balance
                    </p>
                </div>
                <div className="account-content-wrapper cta">
                    <button className="transaction-button">
                        View transactions
                    </button>
                </div>
            </section>
        </main>
    );
};

export default User;
