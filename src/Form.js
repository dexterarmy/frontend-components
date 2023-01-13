import { useForm } from "react-hook-form";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { postPhoto } from "./features/photo/photoSlice";
import { useSelector } from "react-redux";

function Form() {
  const navigate = useNavigate();
  const photo = useSelector((state) => state.photo.photo);
  const dispatch = useDispatch();
  const {
    register,
    handleSubmit,

    formState: { errors },
  } = useForm();
  const onSubmit = (data) => {
    dispatch(postPhoto(data));
  };

  return (
    <div>
      <form onSubmit={handleSubmit(onSubmit)}>
        <input type="file" {...register("photo")} />

        <input type="submit" />
      </form>
      {photo ? (
        <img
          src={`http://localhost:1111/uploads/${photo}`}
          alt="jgjg"
          style={{ height: "100px", width: "100px" }}
        />
      ) : null}
      <button onClick={() => navigate("/upload-multiple-images")}>
        upload multiple images
      </button>
    </div>
  );
}

export default Form;
