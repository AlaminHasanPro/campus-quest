import { useState } from "react";
import { Link } from "react-router-dom";

const Admission = () => {
  const [colleges, setColleges] = useState([]);

  fetch("https://campus-quest-server-kappa.vercel.app/colleges")
    .then((response) => response.json())
    .then((response) => setColleges(response))
    .catch((err) => console.error(err));
  return (
    <div className="max-w-6xl mx-auto">
      <h1 className="text-center my-6 text-4xl font-bold text-orange-500">
        Colleges
      </h1>
      <div className="grid grid-cols-2 gap-4 my-4 ">
        {colleges.map((college, i) => (
          <div key={i}>
            <div className="border w-full py-2 bg-orange-500 font-semibold px-4 flex justify-center">
              <h1 className="text-xl font-bold "> {college.college_name}</h1>
              <p>Admission Start : {college.admission_start}</p>
              <p>Admission End : {college.admission_end}</p>
              <Link to={`/admissionForm/${college._id}`}>
                <button className="btn btn-primary">Admission Now</button>
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Admission;
