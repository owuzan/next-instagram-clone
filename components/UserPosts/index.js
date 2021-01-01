import styles from './styles.module.scss'
import Link from 'next/link'

export default function UserPosts() {

    const username = "owuzan"
    return (
        <div className={styles.userPosts}>
            <div className={styles.userPostsRow}>
                <div className={styles.userPostWrapper}>
                    <div className={styles.userPostColumn}>
                        <Link href={`/${username}`}>
                            <a>
                                <div className={styles.userPost}>
                                    <img src="/owuzan/1.jpg" alt="" />
                                </div>
                            </a>
                        </Link>
                    </div>
                </div>
                <div className={styles.userPostWrapper}>
                    <div className={styles.userPostColumn}>
                        <Link href={`/${username}`}>
                            <a>
                                <div className={styles.userPost}>
                                    <img src="/owuzan/2.jpg" alt="" />
                                </div>
                            </a>
                        </Link>
                    </div>
                </div>
                <div className={styles.userPostWrapper}>
                    <div className={styles.userPostColumn}>
                        <Link href={`/${username}`}>
                            <a>
                                <div className={styles.userPost}>
                                    <img src="/owuzan/3.jpg" alt="" />
                                </div>
                            </a>
                        </Link>
                    </div>
                </div>
            </div>
            <div className={styles.userPostsRow}>
                <div className={styles.userPostWrapper}>
                    <div className={styles.userPostColumn}>
                        <Link href={`/${username}`}>
                            <a>
                                <div className={styles.userPost}>
                                    <img src="/owuzan/4.jpg" alt="" />
                                </div>
                            </a>
                        </Link>
                    </div>
                </div>
                <div className={styles.userPostWrapper}>
                    <div className={styles.userPostColumn}>
                        <Link href={`/${username}`}>
                            <a>
                                <div className={styles.userPost}>
                                    <img src="/owuzan/5.jpg" alt="" />
                                </div>
                            </a>
                        </Link>
                    </div>
                </div>
                <div className={styles.userPostWrapper}>
                    <div className={styles.userPostColumn}>
                        <Link href={`/${username}`}>
                            <a>
                                <div className={styles.userPost}>
                                    <img src="/owuzan/6.jpg" alt="" />
                                </div>
                            </a>
                        </Link>
                    </div>
                </div>
            </div>
            <div className={styles.userPostsRow}>
                <div className={styles.userPostWrapper}>
                    <div className={styles.userPostColumn}>
                        <Link href={`/${username}`}>
                            <a>
                                <div className={styles.userPost}>
                                    <img src="/owuzan/7.jpg" alt="" />
                                </div>
                            </a>
                        </Link>
                    </div>
                </div>
                <div className={styles.userPostWrapper}>
                    <div className={styles.userPostColumn}>
                        <Link href={`/${username}`}>
                            <a>
                                <div className={styles.userPost}>
                                    <img src="/owuzan/8.jpg" alt="" />
                                </div>
                            </a>
                        </Link>
                    </div>
                </div>
                <div className={styles.userPostWrapper}>
                    <div className={styles.userPostColumn}>
                        <Link href={`/${username}`}>
                            <a>
                                <div className={styles.userPost}>
                                    <img src="/owuzan/9.jpg" alt="" />
                                </div>
                            </a>
                        </Link>
                    </div>
                </div>
            </div>
            <div className={styles.userPostsRow}>
                <div className={styles.userPostWrapper}>
                    <div className={styles.userPostColumn}>
                        <Link href={`/${username}`}>
                            <a>
                                <div className={styles.userPost}>
                                    <img src="/owuzan/10.jpg" alt="" />
                                </div>
                            </a>
                        </Link>
                    </div>
                </div>
                <div className={styles.userPostWrapper}>
                    <div className={styles.userPostColumn}>
                        <Link href={`/${username}`}>
                            <a>
                                <div className={styles.userPost}>
                                    <img src="/owuzan/11.jpg" alt="" />
                                </div>
                            </a>
                        </Link>
                    </div>
                </div>
                <div className={styles.userPostWrapper}>
                    <div className={styles.userPostColumn}>
                    </div>
                </div>
            </div>
        </div>
    )
}
