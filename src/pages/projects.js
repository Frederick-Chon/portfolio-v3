import Layout from "../components/layout";
import Link from 'next/link';

function Projects() {
  return (
    <Layout>
        <h1 className="text-6xl font-extrabold mb-4 hover:underline">Projects</h1>
        
        <div className="flex flex-wrap -mx-5 overflow-hidden sm:-mx-3 md:-mx-4 lg:-mx-4 xl:-mx-5">
            <div className="my-5 px-5 w-full overflow-hidden sm:my-3 sm:px-3 sm:w-auto md:my-4 md:px-4 md:w-1/2 lg:my-4 lg:px-4 lg:w-1/2 xl:my-5 xl:px-5 xl:w-1/2 h-48 border">
                <Link href="/smartbrain">
                    <p className="font-bold text-lg p-2 mt-4 hover:underline cursor-pointer">SmartBrain</p>
                </Link>
                <p className="p-2">Face recognition application that uses Clarifai's API to draw a box on a face after users submit a picture.</p>
                <div className="p-2">
                    <span className="bg-gray-200 rounded-full px-3 py-1 text-sm font-sm font-semibold mr-2">React</span>
                    <span className="bg-gray-200 rounded-full px-3 py-1 text-sm font-sm font-semibold mr-2">Express</span>
                    <span className="bg-gray-200 rounded-full px-3 py-1 text-sm font-sm font-semibold">PostgreSQL</span>
                </div>
            </div>

            <div className="my-5 px-5 w-full overflow-hidden sm:my-3 sm:px-3 sm:w-auto md:my-4 md:px-4 md:w-1/2 lg:my-4 lg:px-4 lg:w-1/2 xl:my-5 xl:px-5 xl:w-1/2 h-48 border">
                <Link href="/nexter">
                    <p className="font-bold text-lg p-2 mt-4 hover:underline cursor-pointer">Nexter</p>
                </Link>
                <p className="p-2">Real estate agency landing page showcasing many beautiful dream homes.</p>

                <div className="p-2">
                    <span className="bg-gray-200 rounded-full px-3 py-1 text-sm font-sm font-semibold mr-2">HTML</span>
                    <span className="bg-gray-200 rounded-full px-3 py-1 text-sm font-sm font-semibold mr-2">CSS</span>
                    <span className="bg-gray-200 rounded-full px-3 py-1 text-sm font-sm font-semibold mr-2">SCSS</span>
                </div>
            </div>

            <div className="my-5 px-5 w-full overflow-hidden sm:my-3 sm:px-3 sm:w-auto md:my-4 md:px-4 md:w-1/2 lg:my-4 lg:px-4 lg:w-1/2 xl:my-5 xl:px-5 xl:w-1/2 h-48 border">
                <Link href="/trillo">
                    <p className="font-bold text-lg p-2 mt-4 hover:underline cursor-pointer">Trillo</p>
                </Link>
                <p className="p-2">All in one travel booking agency landing page where users are able to plan out their dream vacations.</p>

                <div className="p-2">
                    <span className="bg-gray-200 rounded-full px-3 py-1 text-sm font-sm font-semibold mr-2">HTML</span>
                    <span className="bg-gray-200 rounded-full px-3 py-1 text-sm font-sm font-semibold mr-2">CSS</span>
                    <span className="bg-gray-200 rounded-full px-3 py-1 text-sm font-sm font-semibold">SCSS</span>
                </div>
            </div>

            <div className="my-5 px-5 w-full overflow-hidden sm:my-3 sm:px-3 sm:w-auto md:my-4 md:px-4 md:w-1/2 lg:my-4 lg:px-4 lg:w-1/2 xl:my-5 xl:px-5 xl:w-1/2 h-48 border">
                <Link href="/natours">
                    <p className="font-bold text-lg p-2 mt-4 hover:underline cursor-pointer">Natours</p>
                </Link>
                <p className="p-2">Tour guide landing page where users can book one of 3 popular tours.</p>

                <div className="p-2">
                    <span className="bg-gray-200 rounded-full px-3 py-1 text-sm font-sm font-semibold mr-2">HTML</span>
                    <span className="bg-gray-200 rounded-full px-3 py-1 text-sm font-sm font-semibold mr-2">CSS</span>
                    <span className="bg-gray-200 rounded-full px-3 py-1 text-sm font-sm font-semibold">SCSS</span>
                </div>
            </div>
        </div>

    </Layout>
  );
}

export default Projects;

{/* <div className="px-8">
<div className="flex -mx-8">
    <div className="w-1/2 px-8 py-8 overflow-hidden border">
        <div className="h-40">
            <p className="font-bold text-lg p-2 hover:underline">SmartBrain</p>
            <p className="p-2">Full stack face recognition application using Clarifai's face detection API.</p>
            <div className="p-2">
                <span className="bg-gray-200 rounded-full px-3 py-1 text-sm font-sm font-semibold texct-gray-700">JavaScript</span>
                <span className="bg-gray-200 rounded-full px-3 py-1 text-sm font-sm font-semibold texct-gray-700">React</span>
                <span className="bg-gray-200 rounded-full px-3 py-1 text-sm font-sm font-semibold texct-gray-700">Express</span>
            </div>
        </div>
    </div>
    <div className="w-1/2 px-8 py-8 overflow-hidden border">
        <div className=" h-40">
            <p className="font-bold text-lg p-2 hover:underline">Nexter</p>
            <p className="p-2">Landing page for a startup real estate agency.</p>

            <div className="p-2">
                <span className="bg-gray-200 rounded-full px-3 py-1 text-sm font-sm font-semibold texct-gray-700">HTML</span>
                <span className="bg-gray-200 rounded-full px-3 py-1 text-sm font-sm font-semibold texct-gray-700">CSS</span>
                <span className="bg-gray-200 rounded-full px-3 py-1 text-sm font-sm font-semibold texct-gray-700">SCSS</span>
            </div>
        </div>
    </div>
</div>
</div>
<div className="px-8">
<div className="flex -mx-8">
    <div className="w-1/2 px-8 py-8 overflow-hidden border">
        <div className="h-40">
            <p className="font-bold text-lg p-2 hover:underline">Trillo</p>
            <p className="p-2">Landing page for a travel booking app.</p>

            <div className="p-2">
                <span className="bg-gray-200 rounded-full px-3 py-1 text-sm font-sm font-semibold texct-gray-700">JavaScript</span>
                <span className="bg-gray-200 rounded-full px-3 py-1 text-sm font-sm font-semibold texct-gray-700">React</span>
                <span className="bg-gray-200 rounded-full px-3 py-1 text-sm font-sm font-semibold texct-gray-700">Express</span>
            </div>
        </div>
    </div>
    <div className="w-1/2 px-8 py-8 overflow-hidden border">
        <div className="h-40">
            <p className="font-bold text-lg p-2 hover:underline">Natours</p>
            <p className="p-2">Landing page for a travel agency startup.</p>

            <div className="p-2">
                <span className="bg-gray-200 rounded-full px-3 py-1 text-sm font-sm font-semibold texct-gray-700">JavaScript</span>
                <span className="bg-gray-200 rounded-full px-3 py-1 text-sm font-sm font-semibold texct-gray-700">React</span>
                <span className="bg-gray-200 rounded-full px-3 py-1 text-sm font-sm font-semibold texct-gray-700">Express</span>
            </div>
        </div>
    </div>
</div>
</div> */}
