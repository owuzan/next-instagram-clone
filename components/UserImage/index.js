import styles from './styles.module.scss'

export default function UserImage(props) {
    const src = props.src ?? '/user.jpg'

    if (props?.type === 'story') {
        return (
            <div className={styles.userImage + ' ' + styles.story}>
                <div className={styles.imageWrapper}>
                    <img src={src} alt="" />
                </div>
                <style jsx>{`
                    .${styles.userImage} {
                        font-size: ${props?.size}px !important;
                    }
                `}</style>
            </div>
        )
    } else if (props?.type === 'active') {
        return (
            <div className={styles.userImage + ' ' + styles.active}>
                <div className={styles.imageWrapper}>
                    <img src={src} alt="" />
                </div>
                <style jsx>{`
                    .${styles.userImage} {
                        font-size: ${props?.size}px !important;
                    }
                `}</style>
            </div>
        )
    } else {
        return (
            <div className={styles.userImage}>
                <div className={styles.imageWrapper}>
                    <img src={src} alt="" />
                </div>
                <style jsx>{`
                    .${styles.userImage} {
                        font-size: ${props?.size}px !important;
                    }
                `}</style>
            </div>
        )
    }
}
