import { useState } from "react";
import GraduatedPhotoCard from "../../components/GraduatedPhotoCard";

const GraduatedGallery = () => {
  const [gallery, setGallery] = useState([]);
  const options = {
    method: "GET",
    headers: {
      Authorization:
        'OAuth oauth_consumer_key="", oauth_nonce="Wevl1tWN9r2laU2IGECyBo15hSD2QAfD", oauth_signature="pmS%2BhJr2lxiwuZZoYbL7%2B%2BsWQeI%3D", oauth_signature_method="HMAC-SHA1", oauth_timestamp="1690217998", oauth_token="", oauth_version="1.0"',
    },
  };

  fetch(
    "https://campus-quest-server-kappa.vercel.app/graduatedGallery",
    options
  )
    .then((response) => response.json())
    .then((response) => setGallery(response))
    .catch((err) => console.error(err));
  return (
    <div>
      <div className="max-w-[1240px] mx-auto px-3 mt-20">
        <h1 className="text-center mt-8 text-orange-500 font-bold">
          {" "}
          --- Our Graduated Students ---
        </h1>
        <h1 className="text-center mb-8 text-orange-500 text-3xl font-bold">
          {" "}
          --- Photo Gallery ---
        </h1>
        <div className="grid md:grid-cols-3 gap-6">
          {gallery.map((photo, index) => (
            <GraduatedPhotoCard key={index} photo={photo} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default GraduatedGallery;
