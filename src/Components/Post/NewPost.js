import React, { useState } from "react";
import Modal from "react-modal";
import { MDBInput, MDBModalFooter } from "mdbreact";
import { useForm } from "react-hook-form";

function NewPost(props) {
  const { modalIsOpen, setModalIsOpen, onSubmit } = props;

  console.log("data ");

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();



  return (
    <div>
      <Modal
        isOpen={modalIsOpen}
        onRequestClose={() => setModalIsOpen(false)}
        className="center"
      >
        <h3>  New Post</h3>
        <form
          onSubmit={handleSubmit((data) => {
            console.log(" data", data);
            onSubmit(data)
          })}
        >
          <MDBInput
            label="Your Title"
            type="text"
            {...register("name", { required: true })}
          />
          {errors?.name?.type === "required" && <p style={{color:"red"}}>Name is Required</p>}
          <MDBInput
            label="Your Description"
            type="text"
            {...register("designation", { required: true })}
          />
          {errors?.designation?.type === "required" && (
            <p style={{color:"red"}}>Description is Required</p>
          )}

          <MDBModalFooter>
            <button
              className="route"
              type="submit"
              onClick={() => setModalIsOpen(false)}
            >
              Close
            </button>
            <button className="route" type="submit">
              Add Post
            </button>
          </MDBModalFooter>
        </form>
      </Modal>
    </div>
  );
}

export default NewPost;
