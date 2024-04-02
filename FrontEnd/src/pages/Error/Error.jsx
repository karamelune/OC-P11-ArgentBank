import { Link } from 'react-router-dom';

import './Error.scss';

const Error = () => {
    return (
        <main className="main bg-dark error">
            <h1>Error 404</h1>
            <h2>Page not found</h2>
            <Link to="/">Go back to home page</Link>
        </main>
    );
};

export default Error;
