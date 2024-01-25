import { useForm } from "react-hook-form";
import { useContext } from "react";
import { Context } from "../context/context";

function SearchBox() {
  const { dispatch } = useContext(Context);
  const {
    register,
    formState: { errors },
    handleSubmit,
    getValues,
  } = useForm();

  const myHandleSubmit = () => {
    const { ip } = getValues();
    dispatch({ type: "ip", payload: ip });
  };

  return (
    <form className="searchbox" onSubmit={handleSubmit(myHandleSubmit)}>
      <input
        className={`form-control searchbox__input${
          errors.ip ? " is-invalid" : ""
        }`}
        placeholder="Search for any IP address or domain"
        {...register("ip", {
          required: "This field is required",
          pattern: {
            value:
              /(?:(?:25[0-5]|2[0-4]\d|[01]?\d?\d{1})\.){3}(?:25[0-5]|2[0-4]\d|[01]?\d?\d{1})/g,
            message: "Please provide a valid ip address",
          },
        })}
      />
      {
        <span className="invalid-feedback searchbox__error-message">
          {errors?.ip?.message}
        </span>
      }

      <button type="submit" className="searchbox__icon-container">
        <img className="searchbox__icon" src="/icon-arrow.svg" />
      </button>
    </form>
  );
}

export default SearchBox;
