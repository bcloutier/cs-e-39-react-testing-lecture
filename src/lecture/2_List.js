import styled from "styled-components";

const Wrapper = styled.div`
  border: 1px solid black;
  padding: 10px;
`;

const Title = styled.h3``;

const Item = styled.li`
  padding: 5px;
`;

const List = ({ title = "My List", items = [] }) => {
  return (
    <Wrapper>
      <Title>{title}</Title>
      <ul>
        {items.map((item, i) => {
          return <Item key={i}>{item}</Item>;
        })}
      </ul>
    </Wrapper>
  );
};

export default List;
