import Head from "next/head";
import styles from "./blogLayout.module.css";
import utilStyles from "../styles/utils.module.css";
import Link from "next/link";

export const siteTitle = "Next.js Sample Website";

export default function Layout({ children, home, docs }) {
  return (
    <>
      <div className={styles.container}>
        <Head>
          <link rel="icon" href="/favicon.ico" />
          <meta
            name="description"
            content="Learn how to build a personal website using Next.js"
          />
          <meta
            property="og:image"
            content={`https://og-image.now.sh/${encodeURI(
              siteTitle
            )}.png?theme=light&md=0&fontSize=75px&images=https%3A%2F%2Fassets.vercel.com%2Fimage%2Fupload%2Ffront%2Fassets%2Fdesign%2Fnextjs-black-logo.svg`}
          />
          <meta name="og:title" content={siteTitle} />
          <meta name="twitter:card" content="summary_large_image" />
        </Head>

        <header className={styles.header}>
          {home && (
            <>
              <h1 className={utilStyles.heading2Xl}>Blog</h1>
              <h3
                className={utilStyles.headingMd}
                style={{
                  paddingBottom: "4rem",
                  color: "#696969",
                  fontWeight: "400",
                  padding: "0 2rem",
                }}
              >
                The latest news about Fig from the Fig team
              </h3>
              <div className={styles.separator} />
            </>
          )}
        </header>
        <main>{children}</main>
        {!home && (
          <div className={utilStyles.navigation}>
            <Link href="/blog">
              <a>← Back to Blog Home</a>
            </Link>
          </div>
        )}
      </div>
    </>
  );
}
