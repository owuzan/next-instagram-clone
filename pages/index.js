import HomeLayout from '../components/HomeLayout'
import linkedText from '../utility/linkedText'

export default function Home() {
    return (
        <>
            <p>{linkedText("Buraya artık ben @owuzan veya bir #hashtag yazınca artık otomatik olarak link oluşuyor 😎")}</p>
            <HomeLayout />
        </>
    )
}
