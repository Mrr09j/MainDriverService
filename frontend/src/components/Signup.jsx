import React from "react";
import { Link } from "react-router-dom";
import Login from './Login';
import { useForm } from "react-hook-form";

function Signup() {
    const {
        register,
        handleSubmit,
        formState: { errors },
      } = useForm();
    
      const onSubmit = (data) => {
        console.log(data);
    };
  return (
    <>
      <div className="flex h-screen items-center justify-center">
        <div className="w-[600px]">
          <div className="modal-box ">
            <form method="dialog" onSubmit={handleSubmit(onSubmit)}>
              {/* if there is a button in form, it will close the modal */}
              <Link to="/" className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">
                ✕
              </Link>
            <h3 className="font-bold text-lg">Sign Up!</h3>
            {/* name */}
            <div className="mt-4 space-y-2">
              <span>Name: </span> <br></br>
              <input
                type="text"
                placeholder="Enter Name.."
                required
                className="w-80 py-1 px-3 border rounded-md outline-none w-full"
                {...register("name", { required: true })} 
              /> <br />
              {errors.email && <span className="text-sm text-red-500">This field is required</span>}
            </div>
            {/* email */}
            <div className="mt-4 space-y-2">
              <span>Email: </span> <br></br>
              <input
                type="email"
                placeholder="Enter Email.."
                required
                className="w-80 py-1 px-3 border rounded-md outline-none  w-full"
                {...register("email", { required: true })} 
              /> <br />
              {errors.email && <span className="text-sm text-red-500">This field is required</span>}
            </div>
            {/* national insurance */}
            <div className="mt-4 space-y-2">
              <span>National Insurance: </span> <br></br>
              <input
                type="text"
                placeholder="Enter ni number.."
                required
                className="w-80 py-1 px-3 border rounded-md outline-none  w-full"
                {...register("insurance", { required: true })} 
              /> <br />
              {errors.email && <span className="text-sm text-red-500">This field is required</span>}
            </div>
            {/* password */}
            <div className="mt-4 space-y-2">
              <span>Password: </span> <br></br>
              <input
                type="password"
                placeholder="Create Password"
                required
                className="w-80 py-1 px-3 border rounded-md outline-none  w-full"
                {...register("password", { required: true })} 
              /> <br />
              {errors.email && <span className="text-sm text-red-500">This field is required</span>}
            </div>
            {/* address */}
            <div className="mt-4 space-y-2">
              <span>Address: </span> <br></br>
              <textarea
                placeholder="Enter Address.."
                required
                className="w-80 py-1 px-3 border rounded-md outline-none resize w-full"
                {...register("address", { required: true })} 
              /> <br />
              {errors.email && <span className="text-sm text-red-500">This field is required</span>}
            </div>
            {/* driving license */}
            <div className="mt-4 space-y-2">
              <span>Driving License: </span> <br></br>
              <input type="file"
                placeholder="Upload Driving License.."
                required
                className="w-80 py-1 px-3 border rounded-md outline-none  w-full"
                {...register("driving license", { required: true })} 
              /> <br />
              {errors.email && <span className="text-sm text-red-500">This field is required</span>}
            </div>

            {/* button */}
            <div className="flex justify-around mt-4">
              <button className="bg-pink-500 text-white rounded-md px-3 py-1 hover:bg-pink-700 duration-200 ">
                Sign Up
              </button>

              {/* checking  */}
              <p className="text-xl ">
                 registered?{" "}
                <button
                  
                  className="underline text-blue-500 cursor-pointer "onClick={()=> document.getElementById("my_modal_3").showModal()}
                >
                  {" "}
                  Login{" "}
                </button>{" "}
                <Login/>
              </p>
            </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
}

export default Signup;
