import "./App.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLinkedin, faTwitter } from "@fortawesome/free-brands-svg-icons";

let peopleArray = [
  {
    imgSrc: "src/assets/demo-photo.webp",
    name: "Toby Larone",
    title: "Chief Executive Officer",
  },
  {
    imgSrc: "src/assets/demo-photo-2.webp",
    name: "Courtney Henry",
    title: "Chief Operating Officer",
  },
  {
    imgSrc: "src/assets/demo-photo.webp",
    name: "Lindsay Wilson",
    title: "Chief Financial Officer",
  },
  {
    imgSrc: "src/assets/demo-photo-2.webp",
    name: "Leonard Krasner",
    title: "Chief Technology Officer",
  },
  {
    imgSrc: "src/assets/demo-photo.webp",
    name: "Floyd Miles",
    title: "Chief Information Officer",
  },
  {
    imgSrc: "src/assets/demo-photo-2.webp",
    name: "Whitney Francis",
    title: "Chief Marketing Officer",
  },
];

let footerStatsArray = [
  { value: "8000+", description: "Creators on the platform" },
  { value: "3%", description: "Platform fee" },
  { value: "99.9%", description: "Uptime guarantee" },
  { value: "£70m", description: "Paid out to creators" },
];

function App() {
  return (
    <>
      <main className="flex flex-col w-screen p-5 gap-5 items-center font-sans">
        <select className="flex w-full outline-solid outline-gray-300 rounded font-bold p-1">
          <option value="FAQ's">FAQ's</option>
        </select>
        <section className="grid w-stretch md:grid-cols-3 gap-x-20 gap-y-10 px-3">
          {peopleArray.map((person) => {
            return (
              <div key={person.name} className="flex flex-col gap-3">
                <div className="flex">
                  <img
                    src={person.imgSrc}
                    className="rounded-sm bg-contain md:w-300"
                  />
                </div>
                <div>
                  <p className="font-bold">{person.name}</p>
                  <p>{person.title}</p>
                </div>
                <div className="flex gap-2">
                  <FontAwesomeIcon icon={faLinkedin} className="w-3" />
                  <FontAwesomeIcon icon={faTwitter} className="w-3" />
                </div>
              </div>
            );
          })}
        </section>
        <section className="flex flex-col bg-gray-900 text-white justify-items-center p-5 rounded w-full text-center gap-5">
          <div className="flex flex-col gap-2">
            <h2 className="text-lg">Trusted by creators worldwide</h2>
            <h3>Lorem ipsum...</h3>
          </div>
          <div className="flex gap-1 overflow-scroll justify-center items-stretch">
            {footerStatsArray.map((stat) => {
              return (
                <div
                  key={stat.value}
                  className="flex flex-col bg-gray-800 rounded py-4 gap-1 w-full"
                >
                  <p>{stat.value}</p>
                  <p className="text-gray-300 text-md">{stat.description}</p>
                </div>
              );
            })}
          </div>
        </section>
      </main>
    </>
  );
}

export default App;
