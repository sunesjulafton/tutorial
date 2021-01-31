import React from "react";

const Book = ({ img, title, author }) => {
  const clickHandler = () => {
    alert("hello");
  };
  const complexExample = (title) => {
    alert(title);
  };
  return (
    <article
      className='book'
      onMouseOver={() => {
        console.log(title);
      }}
    >
      <img src={img} alt='' />
      <h1>{title}</h1>
      <h4>{author}</h4>
      <button type='button' onClick={clickHandler}>
        Buy
      </button>
      <button type='button' onClick={() => complexExample(title)}>
        show title
      </button>
    </article>
  );
};

export default Book;
