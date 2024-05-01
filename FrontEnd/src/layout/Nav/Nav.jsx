import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import Cookies from 'js-cookie';

import logo from '../../assets/img/argentBankLogo.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUserCircle, faSignOut } from '@fortawesome/free-solid-svg-icons';
import './Nav.scss';

const Nav = () => {
    const token = Cookies.get('token');
    const userId = useSelector((state) => state.userReducer.id);
    const userName = useSelector((state) => state.userReducer.userName);

    const logout = () => {
        Cookies.remove('token');
    };

    return (
        <nav className="main-nav">
            <a className="main-nav-logo" href="/">
                <img
                    className="main-nav-logo-image"
                    src={logo}
                    alt="Argent Bank Logo"
                />
                <h1 className="sr-only">Argent Bank</h1>
            </a>
            {!token && (
                <div>
                    <a className="main-nav-item" href="/signin">
                        <FontAwesomeIcon icon={faUserCircle} />
                        Sign In
                    </a>
                </div>
            )}

            {token && (
                <div>
                    <Link className="main-nav-item" to={`/user/${userId}`}>
                        <FontAwesomeIcon icon={faUserCircle} />
                        {userName}
                    </Link>
                    <a
                        className="main-nav-item"
                        href="/signin"
                        onClick={logout}>
                        <FontAwesomeIcon icon={faSignOut} />
                        Sign Out
                    </a>
                </div>
            )}
        </nav>
    );
};

export default Nav;
