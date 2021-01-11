import React from 'react'
import UserImage from '../UserImage'
import styles from './styles.module.scss'
import Link from 'next/link'

const SearchResults = (props) => {
    const { result, setSearchInput } = props
    const clickHandle = (e) => {
        setSearchInput('')
    }

    return (
        <div className={styles.searchResults}>
            <ul className={styles.list}>
                {result.map((user, index) => {
                    return (
                        <li className={styles.user}>
                            <Link href={`/${user.username}`}>
                                <a onClick={clickHandle} tabIndex={index}>
                                    <div className={styles.image}>
                                        <UserImage size={32} />
                                    </div>
                                    <div className={styles.about}>
                                        <div className={styles.username}>
                                            {user.username}
                                        </div>
                                        <div className={styles.name}>
                                            {user.name}
                                        </div>
                                    </div>
                                </a>
                            </Link>
                        </li>
                    )
                })}
            </ul>
        </div>
    )
}

export default SearchResults
