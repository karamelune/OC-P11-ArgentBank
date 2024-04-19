import { useSelector, useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { loginUser } from '../thunks/login.thunks';

const useLogin = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const { email, password, rememberMe } = useSelector(
        (state) => state.loginReducer
    );

    const login = async () => {
        const userId = await dispatch(loginUser(email, password, rememberMe));
        if (userId) {
            navigate(`/user/${userId}`);
        }
    };

    return login;
};

export default useLogin;
