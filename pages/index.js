import Head from 'next/head'
import Image from 'next/image'
import { Inter } from '@next/font/google'
import styles from '../styles/Home.module.css'
import React from 'react'

const inter = Inter({ subsets: ['latin'] })

export default function Home({data}) {
  return (
    <>
      <Head>
        <title>Blog App</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <div>
          <h2 className={styles.h2}>Blog Page</h2>
          <div className={styles.container}>
              {data.map((post, i) => {
              return (
              <div className={styles.box1} key={i}>
                <a className={styles.dec} href="/blogs">
                  <h3>Author: Rafid Mehda</h3>
                  <p>Mon, 12:38pm 3min</p>
                  <h4>{post.title}</h4>
                  <p>{post.body}</p> <hr /></a>
              </div>
          )
        })}
      </div>
        </div>
      </main>
    </>
  )
}

export async function getStaticProps(){
  const res = await fetch("https://jsonplaceholder.typicode.com/posts?_limit=10")
  const data = await res.json()
  return{
    props: {
      data
    }
  }
}