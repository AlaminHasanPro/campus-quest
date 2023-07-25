const GraduatedPhotoCard = ({ photo }) => {
  const { collage_name, graduation_year, graduation_image } = photo;
  return (
    <div>
      <div>
        <img className="rounded-md h-[300px] " src={graduation_image} alt="" />
        <h1 className="mt-3 text-xl font-semibold">
          Institute: {collage_name}
        </h1>
        <p>Passing Year: {graduation_year}</p>
      </div>
    </div>
  );
};

export default GraduatedPhotoCard;
