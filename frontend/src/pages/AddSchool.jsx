import React from "react";
import { useForm } from "react-hook-form";
import { addSchool } from "../api/schoolApi";
import "../styles/AddSchool.css";


const AddSchool = () => {
  const { register, handleSubmit, reset, formState: { errors } } = useForm();

  const onSubmit = async (data) => {
    try {
      const formData = new FormData();
      formData.append("name", data.name);
      formData.append("address", data.address);
      formData.append("city", data.city);
      formData.append("state", data.state);
      formData.append("contact", data.contact);
      formData.append("email_id", data.email);
      formData.append("image", data.image[0]);

      await addSchool(formData);
      alert("School added successfully");
      reset();
    } catch (err) {
      console.error(err);
      alert("Error adding school");
    }
  };

  return (
    <div className="form-container">
  <h2>Add School</h2>

  <form onSubmit={handleSubmit(onSubmit)}>
    <div className="form-group">
      <label>School Name</label>
      <input {...register("name", { required: true })} />
    </div>

    <div className="form-group">
      <label>Address</label>
      <input {...register("address", { required: true })} />
    </div>

    <div className="form-group">
      <label>City</label>
      <input {...register("city", { required: true })} />
    </div>

    <div className="form-group">
      <label>State</label>
      <input {...register("state", { required: true })} />
    </div>

    <div className="form-group">
      <label>Image</label>
      <input type="file" {...register("image")} />
    </div>

    <div className="form-group">
  <label>Contact</label>
  <input
    type="number"
    {...register("contact", { required: true })}
  />
</div>

<div className="form-group">
  <label>Email</label>
  <input
    type="email"
    {...register("email", {
      required: true,
      pattern: /^\S+@\S+$/i
    })}
  />
</div>


    <button className="submit-btn">Add School</button>
  </form>
</div>

  );
};

export default AddSchool;
