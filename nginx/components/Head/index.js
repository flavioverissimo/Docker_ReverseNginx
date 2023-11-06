import Head from "next/head"
export default function HeadDefault({ title }) {
  return (
    <Head>
      <title>{title}</title>
      <meta name="description" content="Nginx reverse with node and mysql" />
      <meta name="viewport" content="width=device-width, initial-scale=1" />
    </Head>
  )
}
