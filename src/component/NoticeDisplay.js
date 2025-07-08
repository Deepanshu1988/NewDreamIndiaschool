import React, { useState, useEffect } from "react";
import { styled } from "styled-components";

const NoticeDisplay = ({ items }) => {
  const maxVisibleItems = 4;
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
              <a href={item.link_url} target="_blank" rel="noopener noreferrer">
                {item.notice} <span>*</span>
              </a>
            </li>
          ))}
        </ul>
      </div>
    </Container>
  );
};

export default NoticeDisplay;

const Container = styled.div`
  .birthday-list-container {
    max-height: 150px; /* Set the desired maximum height */
    overflow: hidden;
  }

  .birthday-list {
    list-style-type: circle;
    padding: 0;
    margin: 0;
  }

  .birthday-list-container.scrollable {
    overflow-y: scroll;
  }
  a {
    text-decoration: none;
    color: red;
  }
`;
