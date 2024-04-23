import { useSelector, useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { loginUser, getUser, setRememberMe } from '../slices/login.slice';

const useLogin = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const { email, password, rememberMe } = useSelector(
        (state) => state.loginReducer
    );

    const login = async () => {
        const token = await dispatch(
            loginUser({ email: email, password: password })
        );
        console.log(token);
        const userProfile = await dispatch(getUser(token));
        const userId = userProfile.id;

        if (rememberMe) {
            dispatch(setRememberMe(true));
        }

        if (userId) {
            navigate(`/user/${userId}`);
        }
    };

    return login;
};

export default useLogin;
