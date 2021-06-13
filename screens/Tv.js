import React, {useEffect, useState} from "react";
import {Text, View} from "react-native";
import {tvApi} from "../api";

export default () => {
    const [shows, setShows] = useState({
        today: [],
        thisWeek: [],
        topRated: [],
        popular: [],
        todayError: null,
        thisWeekError: null,
        topRatedError: null,
        popularError: null
    });
    const getData = async () => {
        const [today, todayError] = await tvApi.today();
        const [thisWeek, thisWeekError] = await tvApi.thisWeek();
        const [topRated, topRatedError] = await tvApi.topRated();
        const [popular, popularError] = await tvApi.popular();
        setShows({
            today,
            thisWeek,
            topRated,
            popular,
            todayError,
            thisWeekError,
            topRatedError,
            popularError
        });

        console.log(shows);
    };
    useEffect(() => {
        getData();
    }, []);
    return (
        <View style={{flex:1, backgroundColor: "black"}}>
            <Text style={{color: "white"}}>{shows.popular?.length}</Text>
        </View>
    );
};