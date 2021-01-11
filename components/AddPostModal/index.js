import React from 'react'
import styles from './styles.module.scss'

import UserImage from '../UserImage'
import * as Icons from '../../icons'

import { uploadPost } from '../../lib/db'
import { useAuth } from '../../lib/auth'

const AddPostModal = (props) => {
    const { file, setFile } = props
    const user = useAuth().user
    const [caption, setCaption] = React.useState('')

    const handleShare = async () => {
        uploadPost(user.id, {
            file,
            caption,
            time: new Date(),
        })
        setFile(null)
        setCaption('')
    }
    if (file) {
        return (
            <div className={styles.newPost}>
                <header className={styles.newPostHeader}>
                    <button
                        className={styles.closeIcon}
                        onClick={() => setFile(null)}
                    >
                        <Icons.Back />
                    </button>
                    <div className={styles.title}>Yeni Gönderi</div>
                    <button
                        className={styles.shareButton}
                        onClick={handleShare}
                    >
                        Paylaş
                    </button>
                </header>
                <div className={styles.postDescription}>
                    <div className={styles.user}>
                        <UserImage size={30} />
                    </div>
                    <div className={styles.caption}>
                        <textarea
                            onChange={(e) => setCaption(e.target.value)}
                            placeholder="Bir açıklama yaz..."
                        ></textarea>
                    </div>
                    <div className={styles.image}>
                        {file ? <img src={URL.createObjectURL(file)} /> : ''}
                    </div>
                </div>
                <style jsx global>{`
                    body {
                        overflow: hidden;
                    }
                `}</style>
            </div>
        )
    }
    return <div></div>
}

export default AddPostModal
