import React from "react";
import ListItem from "./list-item";
import "./list-style.scss";
const ListContainer = ({
  list,
  heightListItem,
  scrollTopState,
  veiwPortSize,
}) => {
  return (
    <div
      className="vendor-list-page"
      style={{ height: list.length * heightListItem + "px" }}
    >
      {list.map(
        (item, index) =>
          item.type === "VENDOR" && (
            <ListItem
              key={index}
              {...item.data}
              index={index}
              heightListItem={heightListItem}
              scrollTop={scrollTopState}
              veiwPortSize={veiwPortSize}
            />
          )
      )}
    </div>
  );
};
export default ListContainer;
