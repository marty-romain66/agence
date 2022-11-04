import Layout from '../components/Layout'
import '../styles/globals.css'
import "../styles/index.scss"
import Script from 'next/script'
import dynamic from 'next/dynamic'
function MyApp({ Component, pageProps }) {
  const AnimatedCursor = dynamic(() => import('react-animated-cursor'), {
    ssr: false
  });
  return(

  <>
    <AnimatedCursor
        innerSize={8}
        outerSize={50}
        color="193, 11, 111"
        outerAlpha={0.2}
        innerScale={0.7}
        outerScale={1.8}
        clickables={[
          "a",
          'input[type="text"]',
          'input[type="email"]',
          'input[type="number"]',
          'input[type="submit"]',
          'input[type="image"]',
          "label[for]",
          "select",
          "textarea",
          "button",
          ".link",
          "h2",
          "p",
        ]}
      />
  
  
  <Layout>

      <Component {...pageProps} />

    </Layout></>
  )
}

export default MyApp
