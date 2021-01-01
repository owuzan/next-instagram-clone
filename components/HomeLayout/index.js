import Head from 'next/head'
import Post from '../Post'
import React, { useState, useEffect } from 'react'
import Sidebar from '../Sidebar'
import StoriesBar from '../StoriesBar'
import styles from './styles.module.scss'

// import { db } from '../../firebase'

export default function Home() {
    const [posts, setPosts] = useState([])
    // useEffect(async () => {
    //     const snapshots = await db.collection('users')
    //         .doc('tHDfpY5B4jufeKSxmNdC')
    //         .collection('posts').get()
    //     setPosts(snapshots.docs)
    //     // console.log(snapshots.docs)
    // }, [])

    return (

        <>
            <div className={styles.homeLayout}>
                <div className={styles.mainLayout}>
                    <StoriesBar />
                    <div className={styles.posts}>
                        {
                            <>
                                <Post />
                                <Post
                                    username={"suleyman"}
                                    userSrc={"suleyman.jpg"}
                                    postSrc={"suleyman-example.jpg"}
                                    postDescription={"Uğraştırma"} />
                            </>
                        }

                        {
                            posts.map((post, id) => {
                                return <Post
                                    key={id}
                                    postDescription={post.data().caption}
                                    postSrc={post.data().images[0]}
                                />
                            })
                        }
                    </div>
                </div>
                <div className={styles.sidebar}>
                    <Sidebar />
                </div>
            </div>
        </>
    )
}
