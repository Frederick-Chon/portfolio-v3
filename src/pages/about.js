import Layout from "../components/layout";

function About() {
  return (
    <Layout>
      <div className="flex flex-col md:flex-row">
        <div className="md:w-1/2">
          {[
            {
              heading: `About Me`,
              body: `Hi there, nice to meet you! My name is Frederick Chon and I'm an aspiring front end developer. I'm a driven, family oriented person who enjoys solving puzzles. If I'm not coding, you'll find me working on my golf swing, discovering new music and playing some FPS games. `
            },
            {
              heading: `Skills`,
              body: `I currently have experience with HTML, CSS, JavaScript(ES6), React, Node, Express, PostgreSQL and most recently Next.js but I can't wait to learn more!`
            }
          ].map(section => (
            <>
              <h2 className="font-bold mb-3 text-xl underline">{section.heading}</h2>
              <p className="mb-6">{section.body}</p>
            </>
          ))}
        </div>
        
      </div>
    </Layout>
  );
}

export default About;
