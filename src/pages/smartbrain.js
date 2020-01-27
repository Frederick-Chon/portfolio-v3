import Layout from "../components/layout";

function SmartBrain() {
  return (
    <Layout>
      <div className="flex flex-col md:flex-row">
        <div className="md:w-1/2">
          <h2 className="font-extrabold mb-3 text-xl">SmartBrain</h2>
          <p className="mb-6">SmartBrain is a full stack application where users can submit images to Clarifai's machine learning API to draw a border around the detected face. The server handles authenthication, authorization, encryption along with querying a PostgreSQL database using async/await and promises.</p>

          <h2 className="font-extrabold mb-3 text-xl">Links</h2>
          <p className="mb-4">Use demo@demo.com/demo to avoid creating an account :)</p>
          <ul>
            <li>
              <a href="http://smartbrain-face-reg.herokuapp.com/" target="_blank" className="font-semibold hover:underline">Live Demo</a>
            </li>
            <li>
              <a href="https://github.com/Frederick-Chon/smartbrain-face-recognition" target="_blank" className="font-semibold hover:underline">GitHub</a>
            </li>
          </ul>
        </div>
      
      </div>
    </Layout>
  );
}

export default SmartBrain;
