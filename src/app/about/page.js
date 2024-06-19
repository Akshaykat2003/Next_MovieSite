import React from 'react';
import Herosection from "@/app/components/Herosection";
import Testimonials from "@/app/components/Testimonials";
import Team from "@/app/components/Team";

import styles from "@/app/styles/about.module.css";

const About = () => {
    return (
        <div >
            <Herosection title={"Our Story"} imageUrl={"/banner.jpg"} />
            <div className={styles.aboutPage}>
            <section className={styles.contentSection}>
                <h2>About Us</h2>
                <p>We are committed to delivering the best service to our customers. Our journey started with a vision to provide top-notch solutions and has grown into a global enterprise serving clients worldwide.</p>
            </section>
            </div>
           
            <Team />
            <Testimonials />
        </div>
    );
};

export default About;
