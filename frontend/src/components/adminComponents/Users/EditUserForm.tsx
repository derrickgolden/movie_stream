// EditUserForm.tsx
import { useEffect, useState } from "react";
import { formFields } from './userInputs';
import { addUser } from '../apiCalls/postData';
import Swal from "sweetalert2";
import { useDispatch } from "react-redux";
import { setCallApi } from "../../../redux/callApi";
import { useSelector } from "react-redux";
import { RootState } from "../../../redux/store";

type Props = {
  userData: any;
  onClose: () => void;
  onSuccess?: () => void;
};

const EditUserForm: React.FC<Props> = ({ userData, onClose, onSuccess }) => {
  const dispatch = useDispatch();
  const callApi = useSelector((state: RootState) =>state.callApi);
  const [signupDetails, setSignupDetails] = useState({
    remember_me: true,
    password: "JAP_movies",
    phone: "",
    location: "Naivas",
    apartment: "",
    account2: "",
    mac: "",
    name: "",
    user_type: "viewer",
    edit: true,
    id: 0
  });

  useEffect(() => {
    if (userData) {
      const parts = userData.name.split(" ");
      setSignupDetails({ ...signupDetails, ...userData, id: userData.user_id, account2: parts[1] || "" });
    }
  }, [userData]);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const name = e.target.name;
    const value = e.target.value;

    if (name !== "name") {
      setSignupDetails((obj) => ({ ...obj, [name]: value }));
    } else {
      const parts = value.split(" ");
      setSignupDetails((obj) => ({ ...obj, name: value, account2: parts[1] || "" }));
    }
  };

  const handleFormSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const data = JSON.stringify({ ...signupDetails, auth_with: "app" });

    const res = await addUser(data);
    if (res.success) {
      Swal.fire("Updated!", res.msg, "success");
      dispatch(setCallApi(!callApi));
      if (onSuccess) onSuccess();
      onClose();
    } 
  };

  return (
    <form onSubmit={handleFormSubmit} className="p-3">
      <div className="row">
        {formFields.map((field, index) => (
          <div className="mb-3 col-12 col-md-6" key={index}>
            <label htmlFor={field.name} className="form-label">{field.label}</label>
            <div className={field.prefix ? "input-group" : ""}>
              {field.prefix && <span className="input-group-text">+</span>}
              <input
                onChange={handleInputChange}
                required={field.required}
                type={field.type}
                name={field.name}
                value={signupDetails[field.name]}
                id={field.name}
                className="form-control"
                placeholder={field.placeholder}
              />
            </div>
          </div>
        ))}
      </div>
      <div className="text-center">
        <button type="submit" className="btn btn-success me-2">Update</button>
        <button type="button" className="btn btn-secondary" onClick={onClose}>Cancel</button>
      </div>
    </form>
  );
};

export default EditUserForm;
