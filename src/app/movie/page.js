import React from 'react';
import Link from "next/link";
import MovieCard from "@/app/components/MovieCard";
import styles from "@/app/styles/common.module.css"

const Movie = async () => {

    await new Promise(resolve=>setTimeout(resolve,2000));

    const url = process.env.RAPID_KEY;
    const options = {
        method: 'GET',
        headers: {
            'x-rapidapi-key': 'ecaaaf494bmshee3d5f93f9a537ep12bd4ajsn86bf384d4d59',
            'x-rapidapi-host': 'netflix54.p.rapidapi.com'
        }
    };


    const res = await fetch(url, options);
    const data = await res.json();
    const main_data = data.titles;


    return (
        <>
            <section className={styles.movieSection}>
                <div className={styles.container}>
                    <h1>Series & Movie</h1>
                    <div className={styles.card_section}>
                        {
                            main_data.map((curElem) => {
                                return <MovieCard key={curElem.id} {...curElem} />
                            })
                        }
                    </div>
                </div>
            </section>
        </>
    );
};

export default Movie;