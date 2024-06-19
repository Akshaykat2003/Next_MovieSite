import React from 'react';
import Image from 'next/image';
import styles from "@/app/styles/team.module.css";

const Team = () => {
    const teamMembers = [
        { name: "John Doe", role: "CEO", imageUrl: "/user1.jpg" },
        { name: "Jane Smith", role: "CTO", imageUrl: "/user2.jpg" },
        { name: "Sam Wilson", role: "COO", imageUrl: "/user4.jpg" },
        { name: "Sara Lee", role: "CFO", imageUrl: "/user3.jpg" }
    ];

    return (
        <section className={styles.teamSection}>
            <h2>Meet Our Team</h2>
            <div className={styles.teamGrid}>
                {teamMembers.map((member, index) => (
                    <div key={index} className={styles.teamMember}>
                        <Image 
                            src={member.imageUrl} 
                            alt={`${member.name}'s picture`} 
                            width={150} // specify the width of the image
                            height={150} // specify the height of the image
                            className={styles.teamImage} // optional: add a class for styling
                        />
                        <h3>{member.name}</h3>
                        <p>{member.role}</p>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default Team;
