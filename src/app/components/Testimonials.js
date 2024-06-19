import React from 'react';
import styles from "@/app/styles/testimonials.module.css";

const Testimonials = () => {
    const testimonials = [
        {
            quote: "This company exceeded my expectations. Their service is impeccable!",
            name: "Alice Johnson",
            position: "Client"
        },
        {
            quote: "Innovative solutions and top-notch support. Highly recommend!",
            name: "Michael Brown",
            position: "Client"
        },
        {
            quote: "Professional and reliable. A great partner in our business journey.",
            name: "Emma Davis",
            position: "Client"
        }
    ];

    return (
        <section className={styles.testimonialsSection}>
            <h2>What Our Clients Say</h2>
            <div className={styles.testimonialsGrid}>
                {testimonials.map((testimonial, index) => (
                    <div key={index} className={styles.testimonial}>
                        <p>"{testimonial.quote}"</p>
                        <h3>{testimonial.name}</h3>
                        <p>{testimonial.position}</p>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default Testimonials;
