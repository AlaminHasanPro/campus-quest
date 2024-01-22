import { useState } from "react";
import { useContext } from "react";
import MyCollegeList from "../../components/MyCollegeList";
import { AuthContext } from "../../Context/AuthProvider";

const MyColleges = () => {
  const { user } = useContext(AuthContext);
  const [myColleges, setMyColleges] = useState([]);
  // const {email} = myColleges;
  console.log(myColleges);
  const options = { method: "GET" };
  fetch(`http://localhost:3000/admission?email=${user?.email}`, options)
    .then((response) => response.json())
    .then((response) => setMyColleges(response))
    .catch((err) => console.log(err));
  return (
    <div>
      <h2 className="text-2xl font-bold text-black pt-20">
        {myColleges.map((college, i) => (
          <MyCollegeList key={i} college={college} />
        ))}
      </h2>
    </div>
  );
};

export default MyColleges;
