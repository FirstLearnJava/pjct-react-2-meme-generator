import './App.css';
import React, { onClick, useEffect, useState } from 'react';

export default function App() {
  const [memes, setMemes] = useState(null);
  const handleChange = (e) => {
    async function LoadMemesJson() {
      const response = await fetch('https://api.memegen.link/templates/');
      const memesData = await response.json();
      const randomMeme = await memesData[
        Math.floor(Math.random() * memesData.length)
      ];
      setMemes(randomMeme);
    }
    LoadMemesJson();
  };

  async function LoadMemesJson() {
    const response = await fetch('https://api.memegen.link/templates/');
    const memesData = await response.json();
    const randomMeme = await memesData[
      Math.floor(Math.random() * memesData.length)
    ];
    setMemes(randomMeme);
  }

  if (!memes) {
    LoadMemesJson();
    return <div>Loading...</div>;
  }

  return (
    <div className="main">
      <div className="image" key={memes.id}>
        <img src={memes.blank} alt={memes.name} />
      </div>
      <button onClick={handleChange}>Load a random meme</button>
    </div>
  );
}
//   const [memes, setMemes] = useState(null);

//   useEffect(() => {
//   async function loadMemeUrls() {
//     const response = await fetch('https://api.memegen.link/templates/');
//     const memes = await response.json();
//     setMemes(memes);
//   }
//     loadMemeUrls();
//   }, []}
//   );

//   if (!memes){
//     return <div>Loading...</div>
// }
// return (
//   <div>
//     {memes.map((meme) => (
//       <div key={meme.id}>
//         <h2>{meme.name}</h2>
//         <img src={meme.example} alt={meme.name} />
//       </div>
//     ))}
//   </div>
// );
// }
// const randomMeme = memes[Math.floor(Math.random() * memes.length)];

// async function LoadRandomMemeObject() {
//   const randomMeme = await memes[Math.floor(Math.random() * memes.length)];
// }
{
  /* {memes.map((meme) => (
        <div key={meme.id}>
          <img src={meme.blank} alt={meme.name} />
          <button>Generate a random meme</button>
        </div>
      ))} */
}

// useEffect(() => {
//   async function LoadMemesJson() {
//     const response = await fetch('https://api.memegen.link/templates/');
//     const memesData = await response.json();
//     const randomMeme = await memesData[
//       Math.floor(Math.random() * memesData.length)
//     ];
//     setMemes(randomMeme);
//   }
//   LoadMemesJson();
// }, []);
