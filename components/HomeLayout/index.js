import Head from 'next/head'
import UserPost from '../UserPost'
import React, { useState, useEffect } from 'react'
import AppSidebar from '../AppSidebar'
import styles from './styles.module.scss'
import StoriesBar from '../StoriesBar'
import firebase from '../../lib/firebase'
import { useAuth } from '../../lib/auth'
import { getUserData } from '../../lib/db'
import { ClipLoader } from 'react-spinners'
import { css } from '@emotion/core'

export default function Home() {
    const [posts, setPosts] = useState([])
    const [loading, setLoading] = useState(true)
    const firestore = firebase.firestore()
    const auth = useAuth()

    useEffect(async () => {
        let userPosts = []
        await firestore
            .collection(`users/${auth.user.id}/followings`)
            .get()
            .then((res) =>
                res.docs.forEach(async (user) => {
                    const username = await getUserData(user.id).then(
                        (res) => res.username
                    )
                    await firestore
                        .collection(`users/${user.id}/posts`)
                        .orderBy('time', 'desc')
                        .limit(10)
                        .get()
                        .then((res) => {
                            if (res.docs.length) {
                                res.docs.reverse()
                                res.docs.forEach((doc) => {
                                    userPosts = [
                                        ...userPosts,
                                        {
                                            userId: user.id,
                                            username,
                                            id: doc.id,
                                            ...doc.data(),
                                        },
                                    ]
                                    setPosts(userPosts)
                                    setLoading(false)
                                })
                            }
                        })
                })
            )

        // followings.forEach(async (user) => {
        //     await firestore
        //         .collection(`users/${user.id}/posts`)
        //         .orderBy('time', 'desc')
        //         .limit(10)
        //         .get()
        //         .then((res) => {
        //             res.docs.length && followingsPosts.push(res.docs)
        //         })
        // })
    }, [])

    return (
        <>
            <div className={styles.homeLayout}>
                <div className={styles.mainLayout}>
                    <StoriesBar />
                    <div className={styles.posts}>
                        {/* {
                            <>
                                <UserPost />
                                <UserPost
                                    username={'suleyman'}
                                    userSrc={'/suleyman.jpg'}
                                    postSrc={'/suleyman-example.jpg'}
                                    postDescription={'Uğraştırma'}
                                />
                            </>
                        } */}

                        {loading && (
                            <div style={{ textAlign: 'center' }}>
                                <ClipLoader
                                    css={css`
                                        margin: 40px auto 0 auto;
                                    `}
                                />
                            </div>
                        )}
                        {posts.map((post, id) => {
                            return (
                                <UserPost
                                    key={id}
                                    id={post.id}
                                    username={post.username}
                                    postDescription={post.caption}
                                    postSrc={post.image}
                                    userId={post.userId}
                                />
                            )
                        })}
                    </div>
                </div>
                <div className={styles.sidebar}>
                    <AppSidebar />
                </div>
            </div>
        </>
    )
}
