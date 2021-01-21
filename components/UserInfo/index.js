import React from 'react'
import styles from './styles.module.scss'
import linkedText from '../../utility/linkedText'
import Link from 'next/link'

export default function UserInfo({ userData }) {
    return (
        <div className={styles.userProfileInfo}>
            <h1 className={styles.userFullname}>{userData.name}</h1>
            <div className={styles.userBiography}>
                <p>
                    {linkedText(userData?.biography ? userData.biography : '')}
                </p>
                <div className="deleteThis">
                    <br />
                    <p>Burası test amaçlı yazılmıştır.</p>
                    <p>{linkedText('Var olan @owuzan hesabına git.')}</p>
                    <p>{linkedText('Var olan @ssezer hesabına git.')}</p>
                    <p>
                        {linkedText(
                            'Var olmayan @boylebirhesapyok hesabına git.'
                        )}
                    </p>
                    <p>
                        {linkedText(
                            'Route olan @direct linkine hesap olarak gitmeye çalış.'
                        )}
                    </p>
                </div>
            </div>
        </div>
    )
}
