import React, { Fragment } from "react";
import { useSelector, useDispatch } from 'react-redux';
import { addCard } from "../redux/deckSlice";
import { StyleSheet, Text, TouchableOpacity, Image, View } from 'react-native';
import SingleItem from "./SingleItem";
const SingleCard = ({ item, selectedId, setSelectedId, swipeLeftFunction }) => {
    const backgroundColor = item.id === selectedId ? "#b3a125" : "#ffde00";
    const color = item.id === selectedId ? '#000000' : '#3b4cca';

    return (
        <Fragment>
            <SingleItem
                item={item}
                backgroundColor={{ backgroundColor }}
                textColor={{ color }}
                setSelectedDeckId={setSelectedId}
                swipeLeftFunction={swipeLeftFunction}
            />
        </Fragment>
      
    );
};

export default SingleCard