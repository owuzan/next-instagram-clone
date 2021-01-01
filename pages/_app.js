import '../styles/globals.scss'
import Header from '../components/Header/index'
import Head from 'next/head'
import Container from '../components/Container'

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Header />
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1.0, user-scalable=no" />
        <title>Instagram Clone App</title>
      </Head>
      <Container>
        <Component {...pageProps} />
      </Container>
    </>
  )
}

export default MyApp
