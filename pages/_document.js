import { Html, Head, Main, NextScript } from 'next/document'
import Hero from '../components/Hero'
import Navbar from '../components/Navbar'

export default function Document() {
  return (
    <Html lang="en">
      <Head />
      <body>
        <Navbar />
        <Hero />
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}
