import Layout from "../components/layout";

function Trillo() {
  return (
    <Layout>
      <div className="flex flex-col md:flex-row">
        <div className="md:w-1/2">
          <h2 className="font-extrabold mb-3 text-xl">Trillo</h2>
          <p className="mb-6">Trillo is an all in one travel booking app where users can plan their whole vacation. Trillo was built with HTML, CSS and SCSS. The goal of Trillo was to practice using FlexBox and take advantage of how quickly FlexBox can create beautiful layouts without floats.</p>

          <h2 className="font-extrabold mb-3 text-xl">Links</h2>
          <ul>
            <li>
              <a href="https://frederick-chon.github.io/Trillo-App/" target="_blank" className="font-semibold hover:underline">Live Demo</a>
            </li>
            <li>
              <a href="https://github.com/Frederick-Chon/Trillo-App" target="_blank" className="font-semibold hover:underline">GitHub</a>
            </li>
          </ul>
        </div>
      
      </div>
    </Layout>
  );
}

export default Trillo;
