import { useState } from 'react';
import styled from 'styled-components';

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
            setValue('');
          }}
        >
          Add
        </button>
      </div>
    </Wrapper>
  );
};

export default List;
