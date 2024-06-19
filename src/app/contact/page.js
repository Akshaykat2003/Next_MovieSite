
import React from 'react';

import ContactCard from "@/app/components/ContactCard";
import styles from "@/app/contact/contact.module.css"
import ContactForm from "@/app/components/ContactForm";

const Contact = () => {
    return (
        <>
            <div className={styles.container}>
                <h1>
                    Contact page
                </h1>
                <ContactCard/>

                <section className={styles.contact_section}>
                    <h2>We love to hear <span>from you</span></h2>
                    <ContactForm/>
                </section>
                <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d26997.521732075795!2d77.16652017808705!3d32.23950667845578!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39048708163fd03f%3A0x8129a80ebe5076cd!2sManali%2C%20Himachal%20Pradesh!5e0!3m2!1sen!2sin!4v1717520603974!5m2!1sen!2sin"
                    width={100} height={450} style={{border:0}} allowFullScreen="" loading="lazy" className={styles.mapping}
                    referrerPolicy="no-referrer-when-downgrade"></iframe>

            </div>
        </>

    );
};

export default Contact;