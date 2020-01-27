import Layout from "../components/layout";

function Natours() {
  return (
    <Layout>
      <div className="flex flex-col md:flex-row">
        <div className="md:w-1/2">
          <h2 className="font-extrabold mb-3 text-xl">Natours</h2>
          <p className="mb-6">Natours is a landing page for a tour booking agency built with only HTML, CSS and SCSS. The goal of Natours was to dive deep into CSS to style a webpage taking advantage of many pseduo-classes to create beautiful pages.</p>

          <h2 className="font-extrabold mb-3 text-xl">Links</h2>
          <ul>
            <li>
              <a href="https://frederick-chon.github.io/Natours/" target="_blank" className="font-semibold hover:underline">Live Demo</a>
            </li>
            <li>
              <a href="https://github.com/Frederick-Chon/Natours" target="_blank" className="font-semibold hover:underline">GitHub</a>
            </li>
          </ul>
        </div>
      
      </div>
    </Layout>
  );
}

export default Natours;
