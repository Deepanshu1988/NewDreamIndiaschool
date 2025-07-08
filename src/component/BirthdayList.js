import React, { useState, useEffect } from "react";
import { styled } from "styled-components";

const BirthdayList = ({ items }) => {
  const maxVisibleItems = 3;
  const [showScroll, setShowScroll] = useState(false);

  useEffect(() => {
    setShowScroll(items.length > maxVisibleItems);
  }, [items]);

  return (
    <Container>
      <div
        className={`birthday-list-container${showScroll ? " scrollable" : ""}`}
      >
        <ul className="birthday-list">
          {items.map((item, index) => (
            <li key={index}>
              {item.firstname} {item.lastname}
            </li>
          ))}
        </ul>
      </div>
    </Container>
  );
};

export default BirthdayList;

const Container = styled.div`
  .birthday-list-container {
    max-height: 150px; /* Set the desired maximum height */
    overflow: hidden;
  }

  .birthday-list {
    list-style-type: none;
    padding: 0;
    margin: 0;
  }

  .birthday-list-container.scrollable {
    overflow-y: scroll;
  }
`;
