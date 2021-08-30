import "../App.css";
// import { useState, useEffect } from "react";
const BreakingNews = () => {
//   const [text, setText] = useState('Loading');
//   useEffect(() => {
//     fetch("http://tldroftheinternet.herokuapp.com/songsIndian")
//     .then((response) => response.json()
//     .then((response) => console.log(response))
//     );
//   }, []);
  return (
    <div className="breakingnews">
      <p className="breakingnewsbtn">Breaking News</p>
      <p className="breakingnewsnews">
        Kanye West says he's running for president in 2020.
      </p>
    </div>
  );
};

export default BreakingNews;
