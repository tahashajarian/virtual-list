import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import ListContainer from "../../components/list-item/list-virtual";
import { getVendorList } from "../../redux/actions/actions";

const heightListItem = 120;
const elementHeigh = window.innerHeight;

const VendorList = () => {
  const lat = 35.754;
  const long = 51.328;
  const page_size = 20;
  const [page, setPage] = useState(0);
  const [loading, setLoading] = useState(false);
  const [scrollTopState, setScrollTopState] = useState(0);

  const dispatch = useDispatch();
  const list = useSelector((state) => state.vendor_list);

  useEffect(() => {
    setLoading(false);
  }, [list]);

  useEffect(() => {
    getList();
  }, [page]);

  const getList = () => {
    setLoading(true);
    dispatch(
      getVendorList({
        page,
        page_size,
        lat,
        long,
      })
    );
  };

  const handleScroll = (e) => {
    // console.log("on scroll called => ");
    const target = e.target;
    const scrolltop = target.scrollTop;
    const innerHeight = target.clientHeight;
    const scrollHeight = target.scrollHeight;
    setScrollTopState(scrolltop);
    if (scrolltop + innerHeight >= scrollHeight - 300) {
      if (!loading) setPage((prevPage) => prevPage + 1);
    }
  };
  return (
    <div
      onScroll={handleScroll}
      className="vendor-list-page-container"
      style={{ height: elementHeigh + "px" }}
    >
      <ListContainer
        list={list || []}
        heightListItem={heightListItem}
        scrollTopState={scrollTopState}
        veiwPortSize={elementHeigh}
      />
    </div>
  );
};

export default VendorList;
