import React from "react";
import styled from "styled-components";

const MapLocation = () => {
  return (
    <Container>
      <div className="container-fluid">
        <h1>Find Our Location on the Map</h1>
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m23!1m12!1m3!1d117373.633327122!2d79.82657289991258!3d23.172899264233966!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!4m8!3e6!4m0!4m5!1s0x3981b19c33a27027%3A0xc48761de90ad6cc3!2sRameshwaram%20Colony%2C%20Jabalpur%2C%20Madhya%20Pradesh%20482002!3m2!1d23.1729207!2d79.9089745!5e0!3m2!1sen!2sin!4v1693064273486!5m2!1sen!2sin"
          width="100%"
          height="450"
          style={{ border: "0" }}
          allowfullscreen=""
          title="Wings of Joy"
          loading="lazy"
          referrerpolicy="no-referrer-when-downgrade"
        ></iframe>
      </div>
    </Container>
  );
};

export default MapLocation;

const Container = styled.div``;
