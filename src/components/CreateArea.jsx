import React, { useState } from "react";

function CreateArea(props) {
  const [notee, setNotee] = React.useState({ Title: "", Content: "" });

  function handleChange(event) {
    const what = event.target.value;
    const where = event.target.name;

    if (where === "title") {
      setNotee((p) => {
        return { Title: what, Content: p.Content };
      });
    }
    if (where === "content") {
      setNotee((p) => {
        return { Title: p.title, Content: what };
      });
    }
  }

  return (
    <div>
      <form>
        <input
          value={notee.Title}
          onChange={handleChange}
          name="title"
          placeholder="Title"
        />

        <textarea
          value={notee.Content}
          onChange={handleChange}
          name="content"
          placeholder="Take a note..."
          rows="3"
        />
        <button
          onClick={(event) => {
            event.preventDefault();
            props.addItem(notee);
            setNotee({ Title: "", Content: "" });
          }}
        >
          Add
        </button>
      </form>
    </div>
  );
}

export default CreateArea;
