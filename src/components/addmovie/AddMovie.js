import React, { useState } from "react";
import "./addmovie.css";
import Modal from "react-modal";
import { useDispatch } from "react-redux";
import { add } from "../../JS/Actions/MovieActions";
Modal.setAppElement("#root");
const customStyles = {
  content: {
    top: "50%",
    left: "50%",
    right: "auto",
    bottom: "auto",
    marginRight: "-50%",
    transform: "translate(-50%, -50%)",
    width: "16%",
    borderRadius: "27px",
  },
};
const AddMovie = () => {
  const [modalIsOpen, setIsOpen] = useState(false);
  const [title, setTitle] = useState("");
  const [image, setImage] = useState("");
  const [rating, setRating] = useState("");
  const [trailer, setTrailer] = useState("");

  function openModal() {
    setIsOpen(true);
  }

  function closeModal() {
    setIsOpen(false);
  }
  const dispatch = useDispatch();

  const addmovie = () => {
    dispatch(
      add({
        id: Math.random(),
        name: title,
        image: image,
        rating: rating,
        video: trailer,
      })
    );
  };
  const hello = () => {
    addmovie();
    closeModal();
  };
  return (
    <div>
      <button className="addbtn" onClick={openModal}>
        +
      </button>
      <>
        <Modal
          isOpen={modalIsOpen}
          onRequestClose={closeModal}
          style={customStyles}
        >
          <h2>ADD Movie</h2>
          <form>
            <input
              type="text"
              placeholder="Write the Title of the movie"
              className="addinput"
              onChange={(e) => setTitle(e.target.value)}
              value={title}
            />{" "}
            <br />
            <input
              type="text"
              placeholder="Put the URL of the movie's image"
              className="addinput"
              onChange={(e) => setImage(e.target.value)}
              value={image}
            />{" "}
            <br />
            <input
              type="text"
              placeholder="Put the URL of the movie's Trailer"
              className="addinput"
              onChange={(e) => setTrailer(e.target.value)}
              value={trailer}
            />{" "}
            <br />
            <input
              type="text"
              placeholder="Write the Rate of the movie"
              className="addinput"
              onChange={(e) => setRating(e.target.value)}
              value={rating}
            />
          </form>
          <button onClick={hello} className="addbutton">
            ADD
          </button>
        </Modal>
      </>
    </div>
  );
};

export default AddMovie;
