import { useDispatch } from 'react-redux';
import { removeToken } from '../slices/login.slice';
import Cookies from 'js-cookie';

const useLogout = () => {
    const dispatch = useDispatch();

    const logout = () => {
        dispatch(removeToken());
        Cookies.remove('token');
    };

    return logout;
};

export default useLogout;
