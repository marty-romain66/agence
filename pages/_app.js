import Layout from '../components/Layout'
import '../styles/index.scss'
import "../styles/header.scss"
import "../styles/footer.scss"
import "../styles/services.scss"
function MyApp({ Component, pageProps }) {
  return (
    <Layout  >
  <Component {...pageProps} />
  </Layout>

  )
}

export default MyApp
