"use client";
import Image from 'next/image'
import styles from './page.module.css'
import Login from './_components/login/login';

export default function Home() {
  return (
    <main className={styles.main}>
      <div >
        <Login />
      </div>
    </main>
  )
}