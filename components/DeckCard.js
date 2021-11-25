import React, { Fragment } from "react";
import DeckItem from "./DeckItem";


const DeckCard = ({ item, selectedDeckId, setSelectedDeckId }) => {
    const backgroundColor = item.id === selectedDeckId ? "#b3a125" : "#ffde00";
    const color = item.id === selectedDeckId ? '#000000' : '#3b4cca';

    return (
        <Fragment>
            <DeckItem
                item={item}
                backgroundColor={{ backgroundColor }}
                textColor={{ color }}
            />
        </Fragment>
      
    );
};

export default DeckCard