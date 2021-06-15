import React from "react";
import styled from "styled-components/native";
import PropTypes from "prop-types";
import Poster from "./Poster";
import Votes from "./Votes";
import {TouchableOpacity} from "react-native";
import {trimText} from "../utils";

const Container = styled.View`
    align-items: center;
    margin-right: 20px;
`;

const Title = styled.Text`
    color: white;
    font-weight: 500;
    margin: 10px 0px 5px 0px;
`;

const Vertical = ({id, poster, title, votes}) => (
    <TouchableOpacity>
        <Container>
            <Poster url={poster}/>
            <Title>{trimText(title, 10)}</Title>
            <Votes votes={votes}/>
        </Container>
    </TouchableOpacity>
);

Vertical.propTypes = {
    id: PropTypes.number.isRequired,
    title: PropTypes.string.isRequired,
    votes: PropTypes.number.isRequired,
    poster: PropTypes.string
}


export default Vertical;
