import { useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import SignIn from '../pages/SignIn/SignIn';
import User from '../pages/User/User';
import Error from '../pages/Error/Error';

const UserRoute = () => {
    const { id } = useParams();
    const token =
        useSelector((state) => state.loginReducer.token) ||
        localStorage.getItem('token');
    const storedId = useSelector((state) => state.userReducer.id);

    // Vérifiez si l'ID de l'utilisateur existe et correspond à l'ID stocké
    if (!id || id !== storedId) {
        return <Error />;
    }

    return token ? <User /> : <SignIn />;
};

export default UserRoute;
