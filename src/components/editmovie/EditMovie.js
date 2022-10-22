import React, { useState } from "react";
import "./editMovie.css";
import Modal from "react-modal";
import { useDispatch } from "react-redux";
import { edit } from "../../JS/Actions/MovieActions";
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

const EditMovie = ({ el }) => {
  const [modalIsOpen, setIsOpen] = useState(false);
  const [title, setTitle] = useState(el.name);
  const [image, setImage] = useState(el.image);
  const [rating, setRating] = useState(el.rating);
  const [trailer, setTrailer] = useState(el.video);

  const dispatch = useDispatch();
  function openModal() {
    setIsOpen(true);
  }

  function closeModal() {
    setIsOpen(false);
  }
  const edditmovie = () => {
    dispatch(
      edit({
        name: title,
        image: image,
        rate: rating,
        video: trailer,
        id: el.id,
      })
    );
  };

  const goEdit = () => {
    edditmovie();
    closeModal();
  };
  return (
    <div>
      <button className="editbtn" onClick={openModal}>
        EDIT
      </button>
      <>
        <Modal
          isOpen={modalIsOpen}
          onRequestClose={closeModal}
          style={customStyles}
        >
          <h2>EDIT Movie</h2>
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
          <button onClick={goEdit} className="addbutton">
            EDIT
          </button>
        </Modal>
      </>
    </div>
  );
};

export default EditMovie;
