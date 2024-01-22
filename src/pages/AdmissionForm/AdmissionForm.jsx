import { useState } from "react";
import { useContext } from "react";
import { useEffect } from "react";
import { useForm } from "react-hook-form";
import { useParams } from "react-router-dom";
import { AuthContext } from "../../Context/AuthProvider";
const AdmissionForm = () => {
  const { user } = useContext(AuthContext);
  const [admissionData, setAdmissionData] = useState({});
  const { college_name, admission_start, admission_end } = admissionData;
  const { id } = useParams();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    fetch("http://localhost:3000/admission", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(data),
    })
      .then((response) => response.json())
      .then((response) => console.log(response))
      .catch((err) => console.error(err));
    console.log(data);
  };

  useEffect(() => {
    fetch(`https://campus-quest-server-kappa.vercel.app/colleges/${id}`)
      .then((res) => res.json())
      .then((data) => setAdmissionData(data));
  }, []);

  return (
    <div>
      <h1>{college_name}</h1>
      <h1>{admission_start}</h1>
      <h1>{admission_end}</h1>

      <form
        className="max-w-3xl mx-auto my-4"
        onSubmit={handleSubmit(onSubmit)}
      >
        <div className="border">
          <label className="font-semibold ">College Name</label>
          <input
            className="border-2 w-full px-4 py-4 my-2 bg-black text-white rounded-lg"
            {...register("collegeName", { required: true })}
            defaultValue={admissionData?.college_name}
          />
        </div>
        <div className=" flex">
          <div className="w-1/2">
            <label className="font-semibold ">Name</label>
            <input
              className="border-2 w-full px-4 py-4 my-2 bg-black text-white rounded-lg"
              {...register("Name", { required: true })}
              value={user?.displayName}
            />
          </div>
          <div className="w-1/2">
            <label className="font-semibold ">Subject</label>
            <input
              className="border-2 w-full px-4 py-4 my-2 bg-black text-white rounded-lg"
              {...register("Subject", { required: true })}
            />
          </div>
        </div>

        <div className=" flex">
          <div className="w-1/2">
            <label className="font-semibold ">Email</label>
            <input
              className="border-2 w-full px-4 py-4 my-2 bg-black text-white rounded-lg"
              {...register("email", { required: true })}
              value={user?.email}
            />
          </div>
          <div className="w-1/2">
            <label className="font-semibold ">Phone+</label>
            <input
              className="border-2 w-full px-4 py-4 my-2 bg-black text-white rounded-lg"
              {...register("phoneNumber", { required: true })}
            />
          </div>
        </div>

        <div className=" flex">
          <div className="w-2/3">
            <label className="font-semibold ">Address</label>
            <input
              className="border-2 w-full px-4 py-4 my-2 bg-black text-white rounded-lg"
              {...register("Address", { required: true })}
            />
          </div>
          <div className="w-1/3">
            <label className="font-semibold ">Date Of Birth</label>
            <input
              className="border-2 w-full px-4 py-4 my-2 bg-black text-white rounded-lg"
              {...register("dateOfBirth", { required: true })}
            />
          </div>
        </div>

        <div className="border">
          <label className="font-semibold ">Img Url</label>
          <input
            className="border-2 w-full px-4 py-4 my-2 bg-black text-white rounded-lg"
            {...register("Image url", { required: true })}
          />
        </div>

        {errors.exampleRequired && <span>This field is required</span>}

        <input className="btn btn-primary w-full my-3" type="submit" />
      </form>
    </div>
  );
};

export default AdmissionForm;
