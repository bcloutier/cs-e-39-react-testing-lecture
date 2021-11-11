import { useState } from "react";
import styled from "styled-components";

const Wrapper = styled.div`
  border: 1px solid black;
  padding: 10px;
  font-size: 1.3rem;
`;

const Title = styled.h3``;

const Item = styled.li`
  padding: 5px;
`;

const List = ({ title }) => {
  const [items, setItems] = useState([]);
  const [value, setValue] = useState();

  const [showSaved, setShowSaved] = useState(false);

  const handleSave = () => {
    fetch("/items", {
      method: "POST",
      body: JSON.stringify({ items }),
    }).then((res) => {
      if (res.status === 201) {
        setShowSaved(true);
      }
    });
  };

  return (
    <Wrapper>
      <Title>My List</Title>
      <ul>
        {items.map((item, i) => {
          return <Item key={i}>{item}</Item>;
        })}
      </ul>
      <div>
        <input
          id="new-item"
          value={value}
          onChange={(e) => setValue(e.target.value)}
        />
        <button
          onClick={() => {
            setItems([...items, value]);
            setValue("");
          }}
        >
          Add
        </button>
      </div>
      <button onClick={handleSave}>Save</button>
      {showSaved && <p>Saved List!</p>}
    </Wrapper>
  );
};

export default List;
