import React, { useEffect, useRef, useState } from "react";

export default function UseRef() {
  const focusing = useRef();

  const handleClick = () => {
    focusing.current.focus();
  };

  const [sec, setSec] = useState(0);
  const refVar = useRef();

  useEffect(() => {
    refVar.current = setInterval(() => {
      setSec((prev) => prev + 1);
    }, 1000);
    return () => clearInterval(refVar.current);
  }, []);


  const [show, setshow] = useState(true);
  const inputRef = useRef(0);
  const [imageURL, setImageURL] = useState("");

  const handleimage = (event) => {
    const file = event.target.files[0];
    if (file) {
      const previous = URL.createObjectURL(file);
      setImageURL(previous);
      setshow(false);
    }
  };


  return (
    <div>
      <input type="text" id="inputId" />
      <label htmlFor="inputId">Name</label>
      <br />
      <br />
      <input type="text" ref={focusing} placeholder="Enter your text" /> <br />
      <button onClick={handleClick}>Touch here to focus on input</button>
      <br />
      <br />
      <p>Timer: {sec}</p>
      <button
        onClick={() => {
          clearInterval(refVar.current);
        }}
      >
        Stop
      </button>

      <div className="container">
        <input
          type="file"
          accept="images/*"
          ref={inputRef}
          hidden
          onChange={handleimage}
        />
        {show ? (
          <div className="img-box" onClick={() => inputRef.current.click()}>
            up load image
          </div>
        ) : (
          <img
            src={imageURL}
            alt="image"
            onClick={() => inputRef.current.click()}
          />
        )}
      </div>
    </div>
  );
}
