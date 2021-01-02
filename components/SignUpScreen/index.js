import React, { useState } from 'react'
import styles from './styles.module.scss'
import Link from 'next/link'


export default function SignUpScreen() {

    const [email, setEmail] = useState("ooguzhanyilmazz41@gmail.com")
    const [fullName, setFullName] = useState("Oğuzhan Yılmaz")
    const [username, setUsername] = useState("owuzan")
    const [password, setPassword] = useState("")

    const handleSubmitForm = (e) => {
        e.preventDefault()

        // db.collection("users").where("username", "==", username)
        //     .get()
        //     .then((users) => {
        //         if (users.docs.length === 0) {
        //             auth.createUserWithEmailAndPassword(email, password)
        //                 .then(response => {
        //                     auth.signInWithEmailAndPassword(email, password)
        //                     const uid = auth.currentUser.uid
        //                     db.doc(`users/${uid}`).set({
        //                         name: fullName,
        //                         username,
        //                         email: auth.currentUser.email,
        //                         privacy: false,
        //                         time: new Date(auth.currentUser.metadata.creationTime)
        //                     })
        //                 })
        //         }
        //         // response.forEach((doc) => {
        //         //     // doc.data() is never undefined for query doc snapshots
        //         //     console.log(doc.id, " => ", doc.data())
        //         // })
        //     })
        //     .catch((error) => {
        //         console.log("Error getting documents: ", error)
        //     })
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
                            Arkadaşlarının fotoğraf ve videolarını görmek için kaydol.
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
                                onChange={(e) => setPassword(e.target.value)}
                            />
                        </div>
                        <div className={styles.field}>
                            <button
                                type="submit"
                                className={styles.signUpBtn}
                                onClick={(e) => handleSubmitForm(e)}
                            >Kaydol</button>
                        </div>
                        <div className={styles.terms}>
                            Kaydolarak, <a href="#">Koşullar</a>'ı, <a href="#">Veri İlkesi</a>'ni ve <a href="#">Çerezler İlkesi</a>'ni kabul etmiş olursun.
                        </div>
                    </form>
                    <div className={styles.doYouHaveAnAccount}>
                        <span>Hesabın var mı? <Link href="/sign-in"><a>Giriş yap</a></Link></span>
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
                        <p className={styles.footerText}>&copy; 2020 Instagram from Facebook</p>
                    </footer>
                </div>
            </div>
        </div>
    )
}
