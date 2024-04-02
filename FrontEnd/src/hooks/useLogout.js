import { useDispatch } from 'react-redux';
import { removeToken } from '../actions/login.action';

const useLogout = () => {
    const dispatch = useDispatch();

    const logout = () => {
        dispatch(removeToken());
        localStorage.removeItem('token');
    };

    return logout;
};

export default useLogout;
