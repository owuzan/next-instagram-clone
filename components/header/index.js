import React from 'react'
import { Link, Redirect, useLocation, useParams } from 'react-router-dom'
import './style.scss'
import Home from '../../icons/Home'
import HomeFill from '../../icons/HomeFill'
import Search from '../../icons/Search'
import Message from '../../icons/Message'
import MessageFill from '../../icons/MessageFill'
import Explore from '../../icons/Explore'
import Like from '../../icons/Like'
import Camera from '../../icons/Camera'
import AddPost from '../../icons/AddPost'
import UserImage from '../user-image'
import useWindowSize from '../../hooks/useWindowSize'
import { auth } from '../../firebase'

export default function Header() {
    const windowSize = useWindowSize()
    const ww = windowSize.width
    const path = useLocation().pathname

    const dropdown = React.useRef(null)
    const handleProfileDropdown = (e) => {
        console.log(dropdown.current.classList.toggle("show"))
    }

    const logout = (e) => {
        auth.signOut()
        return <Redirect to="/dashboard" />
    }

    return (
        <header className="header">
            <div className="container">
                <div className="header-inner">
                    <div className="brand">
                        {
                            ww < 600 ?
                                <Link to="/">
                                    <Camera size={28} />
                                </Link> : ""
                        }
                        <Link to="/" className="brand-link">
                            <img src="/instagram.png" alt="Instagram" />
                        </Link>
                        {
                            ww < 600 ?
                                <Link to="/messages">
                                    {
                                        path === '/messages' ?
                                            <MessageFill size={28} /> :
                                            <Message size={28} />
                                    }
                                </Link> : ""
                        }
                    </div>
                    {
                        ww >= 600 ?
                            <div className="search-area">
                                <form method="GET">
                                    <input type="text" name="search" autoComplete="off" placeholder="Ara" />
                                </form>
                            </div> : ""
                    }
                    <div className={ww < 600 ? 'navbar mobile' : 'navbar'}>
                        <nav>
                            <Link to="/">
                                {
                                    path === '/' ?
                                        <HomeFill /> :
                                        <Home />
                                }
                            </Link>
                            {
                                ww < 600 ?
                                    <>
                                        <Link to="/">
                                            <Search />
                                        </Link>
                                        <Link to="/">
                                            <AddPost />
                                        </Link>
                                    </> :
                                    <>
                                        <Link to="/messages">
                                            {
                                                path === '/messages' ?
                                                    <MessageFill /> :
                                                    <Message />
                                            }
                                        </Link>
                                        <Link to="/">
                                            <Explore />
                                        </Link>
                                    </>
                            }

                            <Link to="/">
                                <Like />
                            </Link>

                            {
                                ww < 600 ?
                                    <Link to="/owuzan">
                                        <UserImage status size={28} src="owuzan.jpg"  />
                                    </Link> :
                                    <div
                                        onClick={(e) => handleProfileDropdown(e)}
                                        style={{
                                            "cursor": "pointer"
                                        }}
                                    >
                                        <UserImage size="24" src={"/owuzan.jpg"} status />
                                        <div className="profile-dropdown" ref={dropdown}>
                                            <Link to="/owuzan">
                                                <div className="list-item-icon"><Explore /></div>
                                                <span>Profil</span>
                                            </Link>
                                            <Link onClick={() => logout()}>
                                                <div className="list-item-icon"><Explore /></div>
                                                <span>Çıkış Yap</span>
                                            </Link>
                                        </div>
                                    </div>
                            }
                        </nav>
                    </div>
                </div>
            </div>
        </header>
    )
}
