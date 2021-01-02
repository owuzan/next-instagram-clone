import React from 'react'
import styles from './styles.module.scss'
import useWindowSize from '../../hooks/useWindowSize'
import useRouter from 'next/router'
import Link from 'next/link'
import * as Icons from '../../icons'
import Container from '../Container'
import UserImage from '../UserImage'

export default function AppHeader() {
    const windowSize = useWindowSize()
    const ww = windowSize.width
    const router = useRouter.router
    const [route, setRoute] = React.useState("/")

    React.useEffect(() => {
        setRoute(router.route)
        dropdown?.current?.classList?.remove(styles.show)
    }, [router?.route])

    const dropdown = React.useRef(null)
    const handleProfileDropdown = (e) => {
        dropdown?.current?.classList?.toggle(styles.show)
    }

    return (
        <header className={styles.header}>
            <Container>
                <div className={styles.headerInner}>
                    <div className={styles.brand}>
                        {
                            ww < 600 ?
                                <Link href="/">
                                    <a>
                                        <Icons.Camera size={28} />
                                        <style jsx>{`
                                        font-size: 24px;
                                        `}</style>
                                    </a>
                                </Link> : ""
                        }
                        <Link href="/">
                            <a>
                                <img src="/instagram.png" alt="Instagram" />
                            </a>
                        </Link>
                        {
                            ww < 600 ?
                                <Link href="/direct/inbox">
                                    <a>
                                        {

                                            route === '/direct/inbox' ?
                                                <Icons.MessageFill size={28} /> :
                                                <Icons.Message size={28} />
                                        }
                                        <style jsx>{`
                                        font-size: 24px;
                                        `}</style>
                                    </a>
                                </Link> : ""
                        }
                    </div>
                    {
                        ww >= 600 ?
                            <div className={styles.searchArea}>
                                <form method="GET">
                                    <input type="text" name="search" autoComplete="off" placeholder="Ara" />
                                </form>
                            </div> : ""
                    }
                    <div className={ww < 600 ? styles.navbar + " " + styles.mobile : styles.navbar}>
                        <nav>
                            <Link href="/">
                                <a>
                                    {

                                        route === '/' ?
                                            <Icons.HomeFill /> :
                                            <Icons.Home />
                                    }
                                </a>
                            </Link>
                            {
                                ww < 600 ?
                                    <>
                                        <Link href="/?search">
                                            <a>
                                                <Icons.Search />
                                            </a>
                                        </Link>
                                        <Link href="/?addPost">
                                            <a>
                                                <Icons.AddPost />
                                            </a>
                                        </Link>
                                    </> :
                                    <>
                                        <Link href="/direct/inbox">
                                            <a>
                                                {

                                                    route === "/direct/inbox" || route === "/direct/t/[id]" ?
                                                        <Icons.MessageFill /> :
                                                        <Icons.Message />
                                                }
                                            </a>
                                        </Link>
                                        <Link href="/?explore">
                                            <a>
                                                <Icons.Explore />
                                            </a>
                                        </Link>
                                    </>
                            }

                            <Link href="/?like">
                                <a>
                                    {
                                        route === "/like" ?
                                            <Icons.LikeFill /> :
                                            <Icons.Like />
                                    }
                                </a>
                            </Link>

                            {
                                ww < 600 ?
                                    <Link href="/owuzan">
                                        <a>
                                            <UserImage type="story" size={22} />
                                        </a>
                                    </Link> :
                                    <div
                                        onClick={(e) => handleProfileDropdown(e)}
                                        style={{
                                            "cursor": "pointer"
                                        }}
                                    >
                                        <UserImage type="story" size={22} />
                                        <div className={styles.profileDropdown} ref={dropdown}>
                                            <Link href="/owuzan">
                                                <a>
                                                    <div><Icons.User /></div>
                                                    <span>Profil</span>
                                                </a>
                                            </Link>
                                            <Link href="/owuzan/saved">
                                            <a>
                                                <div><Icons.Bookmark /></div>
                                                <span>Kaydedildi</span>
                                            </a>
                                            </Link>
                                            <Link href="/">
                                                <a className={styles.logoutLink}>
                                                    <span>Çıkış Yap</span>
                                                </a>
                                            </Link>
                                        </div>
                                    </div>
                            }
                        </nav>
                    </div>
                </div>
            </Container>
        </header>
    )
}
