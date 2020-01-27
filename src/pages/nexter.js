import Layout from "../components/layout";

function Nexter() {
  return (
    <Layout>
      <div className="flex flex-col md:flex-row">
        <div className="md:w-1/2">
          <h2 className="font-extrabold mb-3 text-xl">Nexter</h2>
          <p className="mb-6">Nexter is a mockup landing page for a real estate startup built with HTML and CSS/SCSS. The goal of this project was to get practice with creating grid layouts with CSS Grid.</p>

          <h2 className="font-extrabold mb-3 text-xl">Links</h2>
          <ul>
            <li>
              <a href="https://frederick-chon.github.io/Nexter/" target="_blank" className="font-semibold hover:underline">Live Demo</a>
            </li>
            <li>
              <a href="https://github.com/Frederick-Chon/Nexter" target="_blank" className="font-semibold hover:underline">GitHub</a>
            </li>
          </ul>
        </div>
      
      </div>
    </Layout>
  );
}

export default Nexter;
