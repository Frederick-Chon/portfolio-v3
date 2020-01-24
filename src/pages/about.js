import Layout from "../components/layout";

function About() {
  return (
    <Layout>
      <div className="flex flex-col md:flex-row">
        <div className="md:w-1/2">
          {[
            {
              heading: `About Me`,
              body: `Test content`
            },
            {
              heading: `Sample Heading`,
              body: `TailwindCSS & Next.js are awesome!`
            }
          ].map(section => (
            <>
              <h2 className="font-bold mb-3 text-xl">{section.heading}</h2>
              <p className="mb-6">{section.body}</p>
            </>
          ))}
        </div>
        
      </div>
    </Layout>
  );
}

export default About;
