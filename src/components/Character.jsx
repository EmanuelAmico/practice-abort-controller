import React, { useEffect, useMemo, useState } from "react";
import { wait } from "../utils/wait";

const Character = ({ name }) => {
  const [characterImg, setCharacterImg] = useState(null);
  const controller = useMemo(() => {
    if (name) return new AbortController();
  }, [name]);
  const [aborted, setAborted] = useState(controller.signal.aborted);
  const characterName = name[0].toUpperCase() + name.slice(1);

  const abortLoading = () => {
    controller.abort();
    setAborted(true);
  };

  useEffect(() => {
    setCharacterImg(null);
    setAborted(false);
    let pending = true;
    (async () => {
      try {
        const url =
          characterName === "Juri"
            ? "https://i.imgur.com/iCSmvqC.png"
            : "https://i.imgur.com/iNHY5If.png";
        await wait(1000);
        const res = await fetch(url, { signal: controller.signal });
        const imageBlob = await res.blob();
        const src = URL.createObjectURL(imageBlob);
        pending = false;
        setCharacterImg(src);
      } catch (error) {
        console.log(`Loading of ${characterName} has been cancelled 🚫`);
      }
    })();
    return () => {
      if (pending) controller.abort();
    };
  }, [characterName, controller, controller.signal]);

  if (aborted)
    return (
      <div className="container">
        <h1>
          Loading of {name[0].toUpperCase() + name.slice(1)} has been cancelled
          🚫
        </h1>
      </div>
    );

  if (!characterImg)
    return (
      <div className="container">
        <h1>Loading {name[0].toUpperCase() + name.slice(1)}...</h1>
        <button onClick={abortLoading}>Cancel</button>
      </div>
    );

  return (
    <div className="container">
      <h1>{name[0].toUpperCase() + name.slice(1)}</h1>
      {characterImg && (
        <img
          src={characterImg}
          alt="character"
          style={{ height: name === "juri" ? "750px" : "800px" }}
        />
      )}
    </div>
  );
};

export default Character;
