import styles from "@/app/contact/contact.module.css"
import { MdEmail,MdVoiceChat,MdForum } from "react-icons/md";
import Link from "next/link";

const ContactCard = () => {
    return (
        <div className={styles.section}>
            <div className={styles.container}>
                <div className={styles.grid}>
                    <div className={styles.grid_card}>
                        <i><MdEmail/></i>
                        <h1>Email</h1>
                        <p>Monday to friday Expected</p>
                        <p className={styles.last_para}>response time:72 hours</p>
                        <Link href={"/"}> Send Email <span>-&gt;</span></Link>
                    </div>


                    <div className={styles.grid_card}>
                        <i><MdVoiceChat/></i>
                        <h1>Live chat</h1>
                        <p>Weekdays:9 AM - 6 PM ET</p>
                        <p className={styles.last_para}>Weekdays:9 AM -5 AM ET</p>
                        <Link href={"/"}> Chat Now <span>-&gt;</span></Link>
                    </div>


                    <div className={styles.grid_card}>
                        <i><MdForum/></i>
                        <h1>Email</h1>
                        <p>Monday to friday Expected</p>
                        <p className={styles.last_para}>response time:72 hours</p>
                        <Link href={"/"}> Send Email <span>-&gt;</span></Link>
                    </div>

                </div>

            </div>

        </div>
    );
};

export default ContactCard;