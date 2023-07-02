import Head from "next/head";
import { fetchTeam } from "../../utils/FetchTeam";
import Homepage from "./homepage";
import { ToastContainer } from "react-toastify";
// import 'tw-elements';

export default function Home({ teams }) {
  return (
    <>
      <Head>
        <title>SUPPORTIFLY</title>
        <meta
          name="description"
          content="Supportifly Humanitarian Foundation"
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <Homepage teamData={teams} />
        {/* <ToastContainer /> */}
      </main>
    </>
  );
}

export async function getStaticProps() {
  const teams = await fetchTeam();

  return {
    props: {
      teams: teams || [], // Provide a default empty array if teams data is undefined
    },
  };
}
