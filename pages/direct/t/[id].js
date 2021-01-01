import { useRouter } from 'next/router'
import Head from 'next/head'

export default function id() {
    const router = useRouter()
    // const messageId = router.query.id
    return (
        <div>
            <Head>
                <title>Instagram · Sohbetler</title>
            </Head>
            {router.query.id} numaralı kişi ile olan mesajlar
        </div>
    )
}
