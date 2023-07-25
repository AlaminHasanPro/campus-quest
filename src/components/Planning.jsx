import { MdOutlineSportsBaseball } from "react-icons/md";
import { GiMusicalScore } from "react-icons/gi";
import { RiDraftLine } from "react-icons/ri";
import { MdEmojiTransportation } from "react-icons/md";
import { MdFastfood } from "react-icons/md";
import { GiSchoolBag } from "react-icons/gi";

const Planning = () => {
  return (
    <div className="max-w-[1240px] mx-auto mt-10 mb-20">
      <h1 className="text-center my-6 text-4xl font-bold text-orange-500">
        Planning for the students
      </h1>
      <div className="grid md:grid-cols-3 gap-6 px-3">
        <div className="flex gap-4 items-center border p-4 shadow-md rounded-md">
          <MdOutlineSportsBaseball className="text-9xl" />
          <div>
            <h1 className="text-xl font-semibold mb-3">Play Ground</h1>
            <p className="text-base font-normal">
              Record-breaking performance propels team to championship glory,
              team to championship glory, leaving rivals leaving rivals in awe
              and fans in a frenzy of celebration and admiration.
            </p>
          </div>
        </div>
        <div className="flex gap-4 items-center border p-4 shadow-md rounded-md">
          <GiMusicalScore className="text-9xl" />
          <div>
            <h1 className="text-xl font-semibold mb-3">Music and Dance</h1>
            <p>
              Sure, I can help you with that. Here is a poem about uniting
              melodies and moves: The music swells and the dancers move, Their
              bodies flowing to the rhythm. The melodies intertwine, Creating a
              beautiful tapestry of sound.
            </p>
          </div>
        </div>
        <div className="flex gap-4 items-center border p-4 shadow-md rounded-md">
          <RiDraftLine className="text-9xl" />
          <div>
            <h1 className="text-xl font-semibold mb-3">Arts and Crafts</h1>
            <p>
              here are also a number of other factors that have contributed to
              the growth of the arts and crafts scene. One factor is the
              increasing availability of materials and tools. It is now easier
              than ever to find the supplies you need to create your own
              projects.
            </p>
          </div>
        </div>
        <div className="flex gap-4 items-center border p-4 shadow-md rounded-md">
          <MdEmojiTransportation className="text-9xl" />
          <div>
            <h1 className="text-xl font-semibold mb-3">Safe Transportation</h1>
            <p>
              Yes, the latest advancements in transportation technology,
              rigorous safety protocols, and public awareness campaigns are all
              contributing to reducing accidents and promoting safe journeys.
              Here are some examples of how these advancements are making
              transportation safer:
            </p>
          </div>
        </div>
        <div className="flex gap-4 items-center border p-4 shadow-md rounded-md">
          <MdFastfood className="text-9xl" />

          <div>
            <h1 className="text-xl font-semibold mb-3">Healthy food</h1>
            <p>
              Fruits and vegetables are packed with nutrients and low in
              calories. They are a great way to get your daily dose of vitamins,
              minerals, and fiber. Fruits and vegetablesOpens in a new window
              www.health.harvard.edu Fruits and vegetables Whole grains. Whole
              grains are a good source of fiber and complex carbohydrates.
            </p>
          </div>
        </div>
        <div className="flex gap-4 items-center border p-4 shadow-md rounded-md">
          <GiSchoolBag className="text-9xl" />
          <div>
            <h1 className="text-xl font-semibold mb-3">Educational Tour</h1>
            <p>
              Educational tours provide students with the opportunity to learn
              through direct experience. This is in contrast to traditional
              learning methods, which often focus on lectures and textbooks.
              When students travel, they are able to see, hear, smell, taste,
              and touch new things.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Planning;
