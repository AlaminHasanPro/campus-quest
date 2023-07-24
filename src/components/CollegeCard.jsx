import { Link } from "react-router-dom";

const CollegeCard = ({ college }) => {
  const {
    _id,
    college_name,
    collegeImage,
    admission_start,
    admission_end,
    rating,
    number_of_research,
  } = college;
  return (
    <div className="border p-4 rounded-md shadow-md">
      <img className="w-full h-[300px] rounded-md" src={collegeImage} alt="" />
      <div className="mt-4">
        <h1 className="text-xl font-bold ">{college_name}</h1>
        <p>Rating: {rating}</p>
        <p>
          Admission Date:
          <span className="font-semibold"> {admission_start}</span>
        </p>
        <p>
          Admission Date End:
          <span className="font-semibold"> {admission_end} </span>
        </p>
        <p>Research Center: {number_of_research}</p>
      </div>
      <button className="text-orange-500block mx-auto my-6 w-full p-3 rounded-md hover:bg-[#0b96ac] duration-300 text-white font-semibold">
        <Link to={`/colleges/${_id}`}>View Details</Link>
      </button>
    </div>
  );
};

export default CollegeCard;
