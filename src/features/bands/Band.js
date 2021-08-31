import React from "react";
import { useDispatch } from "react-redux";
import { bandRemoved } from "./bandsSlice";
function Band({ band: { id, name } }) {
  const dispatch = useDispatch();
  function handleDeleteClick() {
    dispatch(bandRemoved(id));
  }

  return (
    <div>
      <span>{name}</span>
      <button onClick={handleDeleteClick}>Delete Band</button>
    </div>
  );
}

export default Band;
