import React, { useState } from 'react'
import styles from './styles.module.scss'
import Link from 'next/link'
import { signUp } from '../../lib/db'

export default function SignUpScreen() {
    const [email, setEmail] = useState('')
    const [fullName, setFullName] = useState('')
    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')
    const [error, setError] = useState('')

    const handleSubmitForm = async (e) => {
        e.preventDefault()
        signUp(email, password, username, fullName).then((res) => {
            setError(res.message)
        })
    }

    return (
        <div className={styles.container}>
            <div className={styles.signUpPage}>
                <div className={styles.signUpWrapper}>
                    <form onSubmit={(e) => handleSubmitForm(e)}>
                        <div className={styles.brand}>
                            <Link href="/">
                                <a>
                                    <img src="/instagram.png" alt="" />
                                </a>
                            </Link>
                        </div>
                        <div className={styles.description}>
                            Arkadaşlarının fotoğraf ve videolarını görmek için
                            kaydol.
                        </div>
                        <div className={styles.facebookLoginBtnWrapper}>
                            <button>Facebook ile Giriş Yap</button>
                        </div>
                        <div className={styles.horizantalLine}>
                            <div className={styles.text}>ya da</div>
                            <div className={styles.line}></div>
                        </div>
                        <div className={styles.field}>
                            <input
                                type="text"
                                placeholder="E-posta"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                            />
                        </div>
                        <div className={styles.field}>
                            <input
                                type="text"
                                placeholder="Adı Soyadı"
                                value={fullName}
                                required
                                onChange={(e) => setFullName(e.target.value)}
                            />
                        </div>
                        <div className={styles.field}>
                            <input
                                type="text"
                                placeholder="Kullanıcı adı"
                                value={username}
                                required
                                onChange={(e) => setUsername(e.target.value)}
                            />
                        </div>
                        <div className={styles.field}>
                            <input
                                type="password"
                                placeholder="Şifre"
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                            />
                        </div>
                        <div className={styles.field}>
                            <button
                                type="submit"
                                className={styles.signUpBtn}
                                onClick={(e) => handleSubmitForm(e)}
                            >
                                Kaydol
                            </button>
                        </div>
                        {error ? (
                            <div className={styles.errorMessage}>{error}</div>
                        ) : (
                            ''
                        )}
                        <div className={styles.terms}>
                            Kaydolarak, <a href="#">Koşullar</a>'ı,{' '}
                            <a href="#">Veri İlkesi</a>'ni ve{' '}
                            <a href="#">Çerezler İlkesi</a>'ni kabul etmiş
                            olursun.
                        </div>
                    </form>
                    <div className={styles.doYouHaveAnAccount}>
                        <span>
                            Hesabın var mı?{' '}
                            <Link href="/">
                                <a>Giriş yap</a>
                            </Link>
                        </span>
                    </div>
                </div>
                <div className={styles.container}>
                    <footer className={styles.signUpFooter}>
                        <a href="#">Hakkında</a>
                        <a href="#">Blog</a>
                        <a href="#">İş Fırsatları</a>
                        <a href="#">Yardım</a>
                        <a href="#">API</a>
                        <a href="#">Gizlilik</a>
                        <a href="#">Koşullar</a>
                        <a href="#">Başlıca Hesaplar</a>
                        <a href="#">Konu Etiketleri</a>
                        <a href="#">Konumlar</a>
                        <p className={styles.footerText}>
                            &copy; 2020 Instagram from Facebook
                        </p>
                    </footer>
                </div>
            </div>
        </div>
    )
}
