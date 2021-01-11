import React from 'react'
import styles from './styles.module.scss'
import Link from 'next/link'
import { getUserPosts, getUserIdFromUsername } from '../../lib/db'
import { useAuth } from '../../lib/auth'
import { useRouter } from 'next/router'
import usePostsFormat from '../../hooks/usePostsFormat'

const UserPosts = () => {
    const router = useRouter()
    const { username } = router.query
    const [postsList, setPostsList] = React.useState([])

    React.useEffect(async () => {
        const getPosts = (username) => {
            return new Promise(async (resolve, reject) => {
                const id = await getUserIdFromUsername(username).then(
                    (res) => res
                )
                const userPosts = await getUserPosts(id)
                resolve(userPosts)
            })
        }
        const list = await getPosts(username).then((res) => res)

        setPostsList(usePostsFormat(list))
    }, [username])

    return (
        <div className={styles.userPosts}>
            {postsList.map((row, index) => {
                return (
                    <div className={styles.userPostsRow} key={index}>
                        {row.map((column, index) => {
                            return (
                                <div
                                    className={styles.userPostWrapper}
                                    key={index}
                                >
                                    <div className={styles.userPostColumn}>
                                        {Object.entries(column).length ? (
                                            <Link href={`/${username}`}>
                                                <a>
                                                    <div
                                                        className={
                                                            styles.userPost
                                                        }
                                                    >
                                                        <img
                                                            src={column.image}
                                                            alt=""
                                                        />
                                                    </div>
                                                </a>
                                            </Link>
                                        ) : (
                                            ''
                                        )}
                                    </div>
                                </div>
                            )
                        })}
                    </div>
                )
            })}
        </div>
    )

    // <div className={styles.userPosts}>
    //     <div className={styles.userPostsRow}>
    //         <div className={styles.userPostWrapper}>
    //             <div className={styles.userPostColumn}>
    //                 <Link href={`/${username}`}>
    //                     <a>
    //                         <div className={styles.userPost}>
    //                             <img src="/owuzan/1.jpg" alt="" />
    //                         </div>
    //                     </a>
    //                 </Link>
    //             </div>
    //         </div>
    //         <div className={styles.userPostWrapper}>
    //             <div className={styles.userPostColumn}>
    //                 <Link href={`/${username}`}>
    //                     <a>
    //                         <div className={styles.userPost}>
    //                             <img src="/owuzan/2.jpg" alt="" />
    //                         </div>
    //                     </a>
    //                 </Link>
    //             </div>
    //         </div>
    //         <div className={styles.userPostWrapper}>
    //             <div className={styles.userPostColumn}>
    //                 <Link href={`/${username}`}>
    //                     <a>
    //                         <div className={styles.userPost}>
    //                             <img src="/owuzan/3.jpg" alt="" />
    //                         </div>
    //                     </a>
    //                 </Link>
    //             </div>
    //         </div>
    //     </div>
    //     <div className={styles.userPostsRow}>
    //         <div className={styles.userPostWrapper}>
    //             <div className={styles.userPostColumn}>
    //                 <Link href={`/${username}`}>
    //                     <a>
    //                         <div className={styles.userPost}>
    //                             <img src="/owuzan/4.jpg" alt="" />
    //                         </div>
    //                     </a>
    //                 </Link>
    //             </div>
    //         </div>
    //         <div className={styles.userPostWrapper}>
    //             <div className={styles.userPostColumn}>
    //                 <Link href={`/${username}`}>
    //                     <a>
    //                         <div className={styles.userPost}>
    //                             <img src="/owuzan/5.jpg" alt="" />
    //                         </div>
    //                     </a>
    //                 </Link>
    //             </div>
    //         </div>
    //         <div className={styles.userPostWrapper}>
    //             <div className={styles.userPostColumn}>
    //                 <Link href={`/${username}`}>
    //                     <a>
    //                         <div className={styles.userPost}>
    //                             <img src="/owuzan/6.jpg" alt="" />
    //                         </div>
    //                     </a>
    //                 </Link>
    //             </div>
    //         </div>
    //     </div>
    //     <div className={styles.userPostsRow}>
    //         <div className={styles.userPostWrapper}>
    //             <div className={styles.userPostColumn}>
    //                 <Link href={`/${username}`}>
    //                     <a>
    //                         <div className={styles.userPost}>
    //                             <img src="/owuzan/7.jpg" alt="" />
    //                         </div>
    //                     </a>
    //                 </Link>
    //             </div>
    //         </div>
    //         <div className={styles.userPostWrapper}>
    //             <div className={styles.userPostColumn}>
    //                 <Link href={`/${username}`}>
    //                     <a>
    //                         <div className={styles.userPost}>
    //                             <img src="/owuzan/8.jpg" alt="" />
    //                         </div>
    //                     </a>
    //                 </Link>
    //             </div>
    //         </div>
    //         <div className={styles.userPostWrapper}>
    //             <div className={styles.userPostColumn}>
    //                 <Link href={`/${username}`}>
    //                     <a>
    //                         <div className={styles.userPost}>
    //                             <img src="/owuzan/9.jpg" alt="" />
    //                         </div>
    //                     </a>
    //                 </Link>
    //             </div>
    //         </div>
    //     </div>
    //     <div className={styles.userPostsRow}>
    //         <div className={styles.userPostWrapper}>
    //             <div className={styles.userPostColumn}>
    //                 <Link href={`/${username}`}>
    //                     <a>
    //                         <div className={styles.userPost}>
    //                             <img src="/owuzan/10.jpg" alt="" />
    //                         </div>
    //                     </a>
    //                 </Link>
    //             </div>
    //         </div>
    //         <div className={styles.userPostWrapper}>
    //             <div className={styles.userPostColumn}>
    //                 <Link href={`/${username}`}>
    //                     <a>
    //                         <div className={styles.userPost}>
    //                             <img src="/owuzan/11.jpg" alt="" />
    //                         </div>
    //                     </a>
    //                 </Link>
    //             </div>
    //         </div>
    //         <div className={styles.userPostWrapper}>
    //             <div className={styles.userPostColumn}>
    //             </div>
    //         </div>
    //     </div>
    // </div>
}
export default UserPosts
