import React, { useState } from 'react'
import styles from './styles.module.scss'
import Link from 'next/link'
import { useAuth } from '../../lib/auth'

export default function SignInScreen() {
    const auth = useAuth()
    const refPassword = React.useRef()

    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [error, setError] = useState('')
    const handlePasswordInputType = (e) => {
        e.preventDefault()
        if (refPassword.current.type === 'password') {
            refPassword.current.type = 'text'
            e.target.innerText = 'Gizle'
        } else {
            refPassword.current.type = 'password'
            e.target.innerText = 'Göster'
        }
    }

    const handleSignIn = async (e) => {
        e.preventDefault()
        let isError = await auth.signIn(email, password)
        if (isError) {
            setError(isError.message)
        }
    }

    return (
        <div className={styles.signInPage}>
            <div className={styles.mockups}>
                <img src="/sign-up.png" alt="" />
            </div>
            <div className={styles.signUpWrapper}>
                <form className={styles.section}>
                    <div className={styles.brand}>
                        <Link href="/">
                            <a>
                                <img src="/instagram.png" alt="" />
                            </a>
                        </Link>
                    </div>
                    <div className={styles.field}>
                        <input
                            type="text"
                            onChange={(e) => setEmail(e.target.value)}
                            placeholder="E-posta"
                            value={email}
                            tabIndex="1"
                            autoFocus={true}
                        />
                    </div>
                    <div className={styles.field}>
                        <input
                            type="password"
                            placeholder="Şifre"
                            ref={refPassword}
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            tabIndex="1"
                            className={styles.passwordInput}
                        />
                        <div
                            role="button"
                            onClick={(e) => handlePasswordInputType(e)}
                            className={styles.showOrHide}
                        >
                            Göster
                        </div>
                    </div>
                    <div className={styles.field}>
                        <button
                            onClick={(e) => handleSignIn(e)}
                            className={styles.loginBtn}
                            tabIndex="1"
                        >
                            Giriş Yap
                        </button>
                    </div>
                    <div className={styles.horizantalLine}>
                        <div className={styles.text}>ya da</div>
                        <div className={styles.line}></div>
                    </div>
                    <div className={styles.facebookLogin}>
                        <img src="/facebook-logo.png" alt="" />
                        <a href="#">Facebook ile Giriş Yap</a>
                    </div>
                    {error ? (
                        <div className={styles.errorMessage}>{error}</div>
                    ) : (
                        ''
                    )}
                    <div className={styles.forgotPassword}>
                        <a href="#">Şifreni mi unuttun?</a>
                    </div>
                </form>
                <div className={styles.notHaveAccounts}>
                    <span>
                        {'Hesabın yok mu? '}
                        <Link href="/accounts/emailsignup">
                            <a>Kaydol</a>
                        </Link>
                    </span>
                </div>
            </div>
            <div className="container">
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
                    <a href="#">Güzellik</a>
                    <a href="#">Dans ve Gösteri</a>
                    <a href="#">Fitness</a>
                    <a href="#">Yiyecek ve İçecek</a>
                    <a href="#">Ev ve Bahçe</a>
                    <a href="#">Müzik</a>
                    <a href="#">Görsel Sanatlar</a>
                    <p className={styles.footerText}>
                        &copy; 2020 Instagram from Facebook
                    </p>
                </footer>
                {auth?.user?.uid}
            </div>
        </div>
    )
}
