import styles from './styles.module.scss'
import UserImage from '../UserImage'
import SuggessionUser from '../SugessionUser'
import { getUserData } from '../../lib/db'
import { useAuth } from '../../lib/auth'
import React from 'react'

export default function AppSidebar() {
    const { user } = useAuth()
    const [userData, setUserData] = React.useState('')

    React.useEffect(async () => {
        setUserData(await getUserData(await user?.id))
    }, [user])
    return (
        <div className={styles.sidebarInner}>
            <div className={styles.changeBar}>
                <UserImage type="story" size={56} />
                <div className={styles.userMeta}>
                    <p>{userData.username}</p>
                    <span>{userData.name}</span>
                </div>
                <button>Geçiş Yap</button>
            </div>
            <div className={styles.suggested}>
                <div className={styles.suggestedHeader}>
                    <p>Senin İçin Öneriler</p>
                    <button>Tümünü Gör</button>
                </div>
                <ul>
                    <li>
                        <SuggessionUser
                            username={'elonmusk'}
                            name={'Elon Musk'}
                            src={'/elon.jpg'}
                        />
                    </li>
                    <li>
                        <SuggessionUser
                            username={'ivanasert'}
                            name={'Ivana'}
                            src={'/ivana.jpg'}
                        />
                    </li>
                    <li>
                        <SuggessionUser
                            username={'mserdark'}
                            name={'M. Serdar Kuzuloglu'}
                            src={'/serdar.jpg'}
                        />
                    </li>
                    <li>
                        <SuggessionUser
                            username={'thisisbillgates'}
                            name={'Bill Gates'}
                            src={'/bill.jpg'}
                        />
                    </li>
                    <li>
                        <SuggessionUser
                            username={'betulhoca'}
                            name={'Betül Ay'}
                            src={'/betul.jpg'}
                        />
                    </li>
                </ul>
            </div>
            <footer className={styles.instagramFooter}>
                <ul>
                    <li>
                        <a href="#">Hakkında</a>
                    </li>
                    <li>
                        <a href="#">Yardım</a>
                    </li>
                    <li>
                        <a href="#">Basın</a>
                    </li>
                    <li>
                        <a href="#">API</a>
                    </li>
                    <li>
                        <a href="#">İş Fırsatları</a>
                    </li>
                    <li>
                        <a href="#">Gizlilik</a>
                    </li>
                    <li>
                        <a href="#">Koşullar</a>
                    </li>
                    <li>
                        <a href="#">Konumlar</a>
                    </li>
                    <li>
                        <a href="#">Başlıca Hesaplar</a>
                    </li>
                    <li>
                        <a href="#">Konu Etiketleri</a>
                    </li>
                    <li>
                        <a href="#">Dil</a>
                    </li>
                </ul>
                <p className={styles.footerText}>
                    © 2020 INSTAGRAM FROM FACEBOOK
                </p>
            </footer>
        </div>
    )
}
