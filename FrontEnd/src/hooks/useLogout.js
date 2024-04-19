import { useDispatch } from 'react-redux';
import { removeToken } from '../actions/login.actions';
import Cookies from 'js-cookie';

const useLogout = () => {
    const dispatch = useDispatch();

    const logout = () => {
        dispatch(removeToken());
        Cookies.remove('token');
        Cookies.remove('userProfile');
    };

    return logout;
};

export default useLogout;
