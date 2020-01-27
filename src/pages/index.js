import Layout from "../components/layout";
import Head from 'next/head';

function Home() {
  return (
    <Layout>
      <Head>
        <title>Frederick Chon</title>
      </Head>
      <div className="flex flex-col items-left justify-center">

        <h1 className="font-bold my-8 text-2xl md:text-4xl lg:text-6xl ">
          Hello, I'm <span className="font-extrabold text-red-600" >Frederick Chon</span>
        </h1>
        <p className="my-0 text-lg " >
          Front End Web Developer located in <span className="underline" >Los Angeles, CA</span> with a passion for learning the newest technologies.
        </p>
      </div>
    </Layout>
  );
}

export default Home;
