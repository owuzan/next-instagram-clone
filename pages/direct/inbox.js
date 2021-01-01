import { useRouter } from 'next/router'
import Link from 'next/link'
import Head from 'next/head'

export default function inbox() {
    const router = useRouter()
    return (
        <div>
            <Head>
                <title>Gelen Kutusu · Sohbetler</title>
            </Head>
            Inbox Page
            <Link href="/direct/t/81721283246">
                <a>Go to Message</a>
            </Link>
        </div>
    )
}
