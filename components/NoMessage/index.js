import React from 'react'
import styles from './styles.module.scss'

import * as Icons from '../../icons'

export default function NoMessage() {
    return (
        <div className={styles.noMessageWrapper}>
            <div className={styles.noMessage}>
                <div className={styles.messageIcon}>
                    <Icons.Message />
                </div>
                <div className={styles.pageTitle}>Mesajların</div>
                <p className={styles.pageDescription}>Bir arkadaşına veya gruba gizli fotoğraflar ve mesajlar gönder.</p>
                <div className={styles.noMeesageFooter}>
                    <button>Mesaj Gönder</button>
                </div>
            </div>
        </div>
    )
}
