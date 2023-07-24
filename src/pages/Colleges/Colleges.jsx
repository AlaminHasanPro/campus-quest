import { useState } from "react";
import CollegeCard from "../../components/CollegeCard";

const Colleges = () => {
  const [colleges, setColleges] = useState([]);
  const options = {
    method: "GET",
    headers: {
      Authorization:
        'OAuth oauth_consumer_key="", oauth_nonce="rgLKf0yCQhINqNvt8b8lmRQP7YDU9E33", oauth_signature="zYu2FcIEeIVA6pqXljoTADZ6lKg%3D", oauth_signature_method="HMAC-SHA1", oauth_timestamp="1690145030", oauth_token="", oauth_version="1.0"',
    },
  };

  fetch("https://campus-quest-six.vercel.app/colleges", options)
    .then((response) => response.json())
    .then((response) => setColleges(response))
    .catch((err) => console.error(err));
  return (
    <div className="max-w-6xl mx-auto">
      <h1 className="text-center my-6 text-4xl font-bold text-orange-500">
        Colleges
      </h1>
      <div className="grid grid-cols-3 gap-4 my-4">
        {colleges.map((college, i) => (
          <CollegeCard key={i} college={college} />
        ))}
      </div>
    </div>
  );
};

export default Colleges;
