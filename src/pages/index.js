import Styles from '../styles/Home.module.css'
import Head from 'next/head'

export default function Home() {
  return (
   <>
    <Head>
      <title>navbar-footer-sample</title>
    </Head>
    <div id={Styles.content}>
      <h1>Isto é um exemplo 🤔</h1>
      <a>😎</a>
    </div>
   </>
  )
}
