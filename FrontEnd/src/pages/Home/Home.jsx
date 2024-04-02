import Hero from '../../components/Hero/Hero';
import Feature from '../../components/Feature/Feature';

import featuresData from './Home.json';
import './Home.scss';

const Home = () => {
    return (
        <main>
            <Hero />
            <section className="features">
                {featuresData.map((feature) => (
                    <Feature
                        key={feature.title}
                        image={feature.image}
                        title={feature.title}
                        description={feature.description}
                    />
                ))}
            </section>
        </main>
    );
};

export default Home;
