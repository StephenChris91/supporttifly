import Head from "next/head";
import HomePage from "./HomePage";
import { fetchTeam } from "../../utils/FetchTeam";

export default function Home( { teams } ) {
  return (
    <>
      <Head>
        <title>Supportifly</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <HomePage teamData={teams}/>
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