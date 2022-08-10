import React from "react";
import styled from "styled-components";
import CardSlider from "./CardSlider";
export default function Slider({ movies }) {
  const getMoviesFromRange = (from, to) => {
    return movies.slice(from, to);
  };
  return (
    <Container>
      <CardSlider data={getMoviesFromRange(0, 10)} title="Tendencias" />
      <CardSlider data={getMoviesFromRange(10, 20)} title="Nuevos Lanzamientos" />
      <CardSlider
        data={getMoviesFromRange(20, 30)}
        title="Dramas Internacionales"
      />
      <CardSlider
        data={getMoviesFromRange(30, 40)}
        title="Populares en Netflix"
      />
      <CardSlider data={getMoviesFromRange(40, 50)} title="Acción y Aventura" />
      <CardSlider data={getMoviesFromRange(50, 60)} title="Series premiadas" />
    </Container>
  );
}

const Container = styled.div``;
