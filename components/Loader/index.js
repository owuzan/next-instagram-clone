import styles from './styles.module.scss'
import * as Icons from '../../icons/'
const Loader = () => {
    return (
        <div className={styles.loader}>
            <Icons.Loader width={50} height={50} />
        </div>
    )
}

export default Loader
