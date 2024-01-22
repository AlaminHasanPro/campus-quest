import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const CollegeDetails = () => {
  const [collegeInfo, setCollegeInfo] = useState({});
  const {
    college_name,
    collegeImage,
    admission_start,
    admission_end,
    rating,
    number_of_research,
    admissionProcess,
  } = collegeInfo;

  const { id } = useParams();

  useEffect(() => {
    fetch(`https://campus-quest-server-kappa.vercel.app/colleges/${id}`)
      .then((res) => res.json())
      .then((data) => setCollegeInfo(data));
  }, []);
  return (
    <div>
      <div className="flex border p-4 rounded-md shadow-md items-center gap-4">
        <img
          className="w-1/2 h-cover rounded-md w-full"
          src={collegeImage}
          alt=""
        />
        <div className="mt-4">
          <h1 className="text-4xl font-bold ">{college_name}</h1>
          <p className="text-xl font-bold my-2">Rating: {rating}</p>
          <p className="text-xl font-bold my-2">
            Admission Start Date:
            <span className="font-semibold">{admission_start}</span>
          </p>
          <p className="text-xl font-bold my-2">
            Admission End Date:
            <span className="font-semibold">{admission_end}</span>
          </p>
          <p className="text-xl font-bold my-2">
            Research No: {number_of_research}
          </p>
          <p className="text-lg  my-2">
            <span className="font-bold">Admission Process:</span> <br />
            {admissionProcess}
          </p>
          
        </div>
      </div>
    </div>
  );
};

export default CollegeDetails;
