import './Feature.scss';

import PropTypes from 'prop-types';

const Feature = ({ image, title, description }) => {
    return (
        <div className="feature-item">
            <img src={image} alt="Icon" className="feature-icon" />
            <h3 className="feature-item-title">{title}</h3>
            <p>{description}</p>
        </div>
    );
};

export default Feature;

Feature.propTypes = {
    image: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
};
