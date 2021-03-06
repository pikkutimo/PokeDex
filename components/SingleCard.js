import React, { Fragment } from "react";
import SingleItem from "./SingleItem";
const SingleCard = ({ item, selectedId, setSelectedId, swipeLeftFunction, rowRefs, navigation }) => {
    
    const backgroundColor = item.id === selectedId ? "#b3a125" : "#ffde00";
    const color = item.id === selectedId ? '#cc0000' : '#3b4cca';

    return (
        <Fragment>
            <SingleItem
                item={item}
                backgroundColor={{ backgroundColor }}
                textColor={{ color }}
                setSelectedDeckId={setSelectedId}
                swipeLeftFunction={swipeLeftFunction}
                rowRefs={rowRefs}
                navigation={navigation}
            />
        </Fragment>
      
    );
};

export default SingleCard