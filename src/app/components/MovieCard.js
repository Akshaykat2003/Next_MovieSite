import styles from "@/app/styles/common.module.css";
import Image from "next/image";
import Link from "next/link";
import poster from "/public/poster.jpg";

const MovieCard = (curElem) => {
    const { id, type, title, synopsis, backgroundImage } = curElem.jawSummary;
    const imageUrl = backgroundImage?.url;

    return (
        <>
            <div className={styles.card}>
                <div className={styles.card_image}>
                    {imageUrl ? (
                        <Image src={imageUrl} alt={title} width={260} height={200} />
                    ) : (
                        <Image src={poster} alt="Default Image" width={260} height={200} />
                    )}
                </div>
                <div className={styles.card_data}>
                    <h2>{title.substring(0, 18)}</h2>
                    <p>
                        {`${synopsis.substring(0, 66)} ...`}
                    </p>
                    <Link href={`/movie/${id}`}>
                        <button>
                            Read More
                        </button>
                    </Link>
                </div>
            </div>
        </>
    );
};

export default MovieCard;
