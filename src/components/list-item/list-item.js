import React from "react";
const ListItem = ({
  logo,
  title,
  description,
  area,
  heightListItem,
  index,
  veiwPortSize,
  scrollTop,
}) => {
  const chcekVisibility = () => {
    const elementPosition = heightListItem * index;
    if (scrollTop > elementPosition) return false;
    if (elementPosition - heightListItem * 2 > scrollTop + veiwPortSize)
      return false;
    return true;
  };
  return (
    chcekVisibility() && (
      <div
        className="list-item"
        style={{
          height: heightListItem + "px",
          top: (index - 1) * heightListItem + "px",
        }}
      >
        <div>
          <div className="list-item__logo">
            <img src={logo} />
          </div>
          <div className="list-item__details">
            <span className="list-item__details__title">{title}</span>
            <span className="list-item__details__title--description">
              {description}
            </span>
            <span className="list-item__details__title--area">{area}</span>
          </div>
        </div>
      </div>
    )
  );
};

export default ListItem;
