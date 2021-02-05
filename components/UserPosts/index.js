import React from 'react'
import styles from './styles.module.scss'
import Link from 'next/link'
import { getUserPosts, getUserIdFromUsername } from '../../lib/db'
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
}
export default UserPosts
