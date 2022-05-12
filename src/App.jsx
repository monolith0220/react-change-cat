import { React, useState } from "react";

const gifIds = [
  "10dU7AN7xsi1I4",
  "tBxyh2hbwMiqc",
  "ICOgUNjpvO0PC",
  "33OrjzUFwkwEg",
  "MCfhrrNN1goH6",
  "rwCX06Y5XpbLG"
];

const getGifId = () => {
  const max = gifIds.length;
  const index = Math.floor(Math.random() * Math.floor(max));
  return gifIds[index];
};

const Gif = (props) => {
  const src = `https://media.giphy.com/media/${props.id}/giphy.gif`;
  console.log(props);
  return <img src={src} alt="" />;
};

export const App = () => {
  const [id, setId] = useState(gifIds[0]);

  const handleClick = () => {
    setId(getGifId());
  };

  return (
    <>
      <button onClick={handleClick}>Change!</button>
      <div>
        <Gif id={id} />
      </div>
    </>
  );
};
