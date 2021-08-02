import React from 'react';
import axios from 'axios';
import { useForm } from 'react-hook-form';


const Form = () => {

  const { register, formState: { errors }, handleSubmit } = useForm();
  const onSubmit  = async data  => await axios.post('https://jordan.ashton.fashion/api/goods/30/comments', {
    ...data
  })
  .then(function (response) {
    console.log(response);
  })
  .catch(function (error) {
    console.log(error);
  });

  return (

    <form className="form" onSubmit={handleSubmit(onSubmit)}>
      <h1>Comment form</h1>

      <div className="wrap-inp">
        <input placeholder="Enter name" className="form-children" {...register("name", {required: true})}/>
        {errors.name?.type === 'required' && <span className="input-error">First name is required</span>}
      </div>

      <div className="wrap-inp">
        <textarea placeholder="Enter comment" className="form-children" {...register("text", {required: true})}></textarea>
        {errors.text?.type === 'required' && <span className="input-error">Enter comment</span>}
      </div>

      <button type="submit">submit</button>
  </form>
  )
}

export default Form;