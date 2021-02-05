import classNames from 'classnames'
import styles from './styles.module.scss'

export default function UserImage(props) {
    const src = props.src ?? '/user.jpg'
    const classes = classNames({
        [styles.userImage]: true,
        [styles.story]: props?.type === 'story' ? true : false,
        [styles.active]: props?.type === 'active' ? true : false,
    })
    return (
        <div className={classes}>
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
