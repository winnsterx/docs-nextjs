import Head from "next/head";
import styles from "../../styles/docs.module.css";
import { getAllDocsIds, getDocData } from "../../lib/docs";

import DocsLayout from "../../components/docsLayout";

function DocPage({ data }) {
  return (
    <DocsLayout>
      <Head>
        <title>Docs | Fig</title>
      </Head>
      <article>
        <div
          className={styles.doc}
          dangerouslySetInnerHTML={{ __html: data.contentHtml }}
        />
      </article>
    </DocsLayout>
  );
}

// first call --> via manifest.json
export async function getStaticPaths() {
  const paths = getAllDocsIds();
  return {
    paths,
    fallback: false,
  };
}

// second call
export async function getStaticProps({ params }) {
  const key = params.slug.join("/");

  let docData = await getDocData(key);
  const data = docData ? docData : null;
  return {
    props: {
      data,
    },
  };
}

export default DocPage;
