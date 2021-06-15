import React from "react";
import ScrollContainer from "../../components/ScrollContainer";
import Vertical from "../../components/Vertical";
import HorizontalSlider from "../../components/HorizontalSlider";
import styled from "styled-components/native";
import List from "../../components/List";
import Horizontal from "../../components/Horizontal";

const Container = styled.View`
    margin-top: 30px;
`;


export default ({isLoading, popular, topRated, today}) => (
    <ScrollContainer isLoading={isLoading}>
        <Container>

            <HorizontalSlider title={"Popular Shows"}>
                {popular.map(show => (
                    <Vertical
                        id={show.id}
                        key={show.id}
                        title={show.name}
                        votes={show.vote_average}
                        poster={show.poster_path}
                    />
                ))}
            </HorizontalSlider>
            <HorizontalSlider title={"Top Rated"}>
                {topRated.map(show => (
                    <Vertical
                        id={show.id}
                        key={show.id}
                        title={show.name}
                        votes={show.vote_average}
                        poster={show.poster_path}
                    />
                ))}
            </HorizontalSlider>
            <List title={"Airing Today"} >
                {today.map(show => (
                    <Horizontal
                        id={show.id}
                        key={show.id}
                        title={show.name}
                        votes={show.vote_average}
                        poster={show.poster_path}
                        overview={show.overview}
                    />
                ))}
            </List>
        </Container>
    </ScrollContainer>
)
