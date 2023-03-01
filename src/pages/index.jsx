import styles from '../app/page.module.css'
import Header from '../components/header'
import Link from 'next/link'

export default function Layout({ children }) {
  return (
    <>
      {/* <Header /> */}
      <main className={styles.wrapper}>
        <h1>Staff Divergent</h1>
        <p className={styles.body}>
        What does it take to work at the highest levels of your craft while living with a range of mental health disorders or other disabilities, from minor inconveniences to debilitating illnesses?
        </p>
        <p className={styles.body}>
        An article-based interview series launching Summer, 2023 by&nbsp;
        <Link href='https://twitter.com/matthewctraul' target="_blank">
          <span>Matthew Traul</span>
        </Link>
        </p>
      </main>
    </>
  )
}
