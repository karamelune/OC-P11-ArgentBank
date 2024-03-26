import Hero from '../../components/Hero/Hero';
import Feature from '../../components/Feature/Feature';

import iconChat from '../../assets/img/icon-chat.png';
import iconMoney from '../../assets/img/icon-money.png';
import iconSecurity from '../../assets/img/icon-security.png';
import featuresData from './Home.json';
import './Home.scss';

const Home = () => {
    return (
        <main>
            <Hero />
            <section className="features">
                <Feature
                    image={iconChat}
                    title={featuresData[0].title}
                    description={featuresData[0].description}
                />
                <Feature
                    image={iconMoney}
                    title={featuresData[1].title}
                    description={featuresData[1].description}
                />
                <Feature
                    image={iconSecurity}
                    title={featuresData[2].title}
                    description={featuresData[2].description}
                />
            </section>
        </main>
    );
};

export default Home;
