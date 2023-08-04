import Link from 'next/link'
import Head from 'next/head'
import Header from './Header'

export const Layout = (props) => {
  return (
    <div>
      <Head>
        <title>WXYC</title>
        <meta name="description" content="WXYC's website" />
        <link rel="icon" href="/10144964.png" />
        <link rel="stylesheet" href="https://use.typekit.net/gjm2mim.css"></link>
      </Head>
      <header className='header'>
        <Header/>
      </header>
     
      <main >{props.children}</main>
    </div>
  )
}
