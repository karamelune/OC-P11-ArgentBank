import { useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import SignIn from '../pages/SignIn/SignIn';
import User from '../pages/User/User';
import Error from '../pages/Error/Error';
import Cookies from 'js-cookie';

const UserRoute = () => {
    const { id } = useParams();
    const storedId = useSelector((state) => state.userReducer.id);
    const token =
        useSelector((state) => state.loginReducer.token) ||
        Cookies.get('token');

    // Vérifiez si l'ID de l'utilisateur existe et correspond à l'ID stocké
    if (!id || id !== storedId) {
        return <Error />;
    }

    return token ? <User /> : <SignIn />;
};

export default UserRoute;
