import { useState } from "react";
import TopCollegeCard from "./TopCollegeCard";

const TopCollege = () => {
  const [colleges, setColleges] = useState([]);
  const options = {
    method: "GET",
    headers: {
      Authorization:
        'OAuth oauth_consumer_key="", oauth_nonce="uDIQ18UhU5amh5YOc7afJruRODYreR3U", oauth_signature="PvJfwOvuudEAqmcdXymeB2TjtEw%3D", oauth_signature_method="HMAC-SHA1", oauth_timestamp="1690213821", oauth_token="", oauth_version="1.0"',
    },
  };

  fetch("https://campus-quest-six.vercel.app/colleges2", options)
    .then((response) => response.json())
    .then((response) => setColleges(response))
    .catch((err) => console.error(err));
  return (
    <div>
      <h1 className="text-center my-6 text-4xl font-bold text-orange-500">
        Top Colleges
      </h1>
      <div className="grid grid-cols-3 gap-4 my-4 ">
        {colleges.map((college, i) => (
          <TopCollegeCard key={i} college={college} />
        ))}
      </div>
    </div>
  );
};

export default TopCollege;
