import styles from './styles.module.scss'
import { ClipLoader } from 'react-spinners'
import { css } from '@emotion/core'

const Loader = () => {
    return (
        <div className={styles.loader}>
            <ClipLoader
                css={css`
                    margin: 40px auto 0 auto;
                `}
            />
        </div>
    )
}

export default Loader
