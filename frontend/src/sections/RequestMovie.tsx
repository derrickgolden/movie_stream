import React, { useState, FormEvent, ChangeEvent } from "react";
import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import { requestMovieApi } from "../components/apiCalls/postData";

interface MovieRequestForm {
  movieName: string;
  movieType: "movie" | "series" | null;
  description: string;
  notify: boolean;
}

const RequestMovie = () => {
  const navigate = useNavigate();

  // State to manage form data
  const [formData, setFormData] = useState<MovieRequestForm>({
    movieName: "",
    movieType: null,
    description: "",
    notify: false,
  });

  // Handle input changes
  const handleInputChange = (
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { id, value, type } = e.target;
    const isChecked = type === "checkbox" ? (e.target as HTMLInputElement).checked : undefined;
    setFormData((prev) => ({
      ...prev,
      [id]: type === "checkbox" ? isChecked : value,
    }));
  };

  const handleRadioChange = (e: ChangeEvent<HTMLInputElement>) => {
    setFormData((prev) => ({
      ...prev,
      movieType: e.target.id as "movie" | "series",
    }));
  };

  // Handle form submission
  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const data = JSON.stringify(formData);
    requestMovieApi(data, navigate).then((data) =>{
        if(data.success){
            Swal.fire("We have received your request. We are working on it.")
            setFormData({
              movieName: "",
              movieType: null,
              description: "",
              notify: false,
            });
        }
    });
    // Process form data (e.g., send to API, validate, etc.)
    // Reset form if needed
  };

  return (
    <div
      className="d-flex justify-content-center align-items-center text-light col-12 bg-black text-start"
      style={{ height: "100vh" }}
    >
      <div className="col-11 col-sm-8 col-md-7 col-lg-5 bg-dark px-4 pt-3 pb-5 rounded">
        <div>
          <h1 className="display-4 text-info">Request a Movie</h1>
          <p>Your Request is our demand</p>
        </div>
        <form onSubmit={handleSubmit}>
          <div className="mb-3">
            <label htmlFor="movieName" className="form-label fs-5">
              Movie Name
            </label>
            <input
              type="text"
              className="form-control"
              id="movieName"
              value={formData.movieName}
              onChange={handleInputChange}
              required
            />
          </div>
          <div className="mb-3">
            <p className="fs-5 mb-0 pb-0">Movie Type</p>
            <div className="form-check">
              <input
                className="form-check-input"
                type="radio"
                name="movie_type"
                id="movie"
                checked={formData.movieType === "movie"}
                onChange={handleRadioChange}
                required
              />
              <label className="form-check-label" htmlFor="movie">
                Single Movie
              </label>
            </div>
            <div className="form-check">
              <input
                className="form-check-input"
                type="radio"
                name="movie_type"
                id="series"
                checked={formData.movieType === "series"}
                onChange={handleRadioChange}
                required
              />
              <label className="form-check-label" htmlFor="series">
                Series (Tv Show)
              </label>
            </div>
          </div>
          <div className="mb-3">
            <label htmlFor="description" className="form-label fs-5">
              Description (Optional)
            </label>
            <textarea
              className="form-control"
              id="description"
              rows={3}
              value={formData.description}
              onChange={handleInputChange}
            ></textarea>
          </div>
          <div className="mb-5 form-check">
            <input
              type="checkbox"
              className="form-check-input"
              id="notify"
              checked={formData.notify}
              onChange={handleInputChange}
            />
            <label className="form-check-label" htmlFor="notify">
              Notify me when the movie is uploaded
            </label>
          </div>
          <div className="d-flex justify-content-between">
            <button type="submit" className="btn btn-primary">
              Request
            </button>
            <button
              type="button"
              onClick={() => navigate(-1)}
              className="btn btn-warning"
            >
              Back
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default RequestMovie;
