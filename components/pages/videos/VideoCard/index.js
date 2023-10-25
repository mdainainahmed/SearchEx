import styles from "./videoCard.module.scss";

const formatTimeStamp = (timeStamp) => {
    const date = new Date(timeStamp);

    const monthNames = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];

    let year = date.getFullYear();
    let month = date.getMonth();
    let day = date.getDate();

    month = monthNames[month];
    day = day < 10 ? `0${day}` : day;

    return `${day} ${month} ${year}`;
};


const VideoCard = ({ results }) => {
    const { title, description, thumbnail, publishedBy, publishedAt, link } = results;

    return (
        <a className={styles.videoCard} href={link}>
            <img className={styles.thumbnail} src={thumbnail} alt="thumbnail" />
            <div className={styles.content}>
                <h2 className={styles.title}>{title}</h2>
                <p className={styles.publishedAt}>{formatTimeStamp(publishedAt)}</p>
                <p className={styles.publishedBy}>Published by {publishedBy}</p>
                <p className={styles.description}>{description.substring(0, 600)}</p>
            </div>
        </a>
    )
};

export default VideoCard;