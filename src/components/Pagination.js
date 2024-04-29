import React, { useState, useContext } from "react";
import ResponsivePagination from "react-responsive-pagination";
import "react-responsive-pagination/themes/classic.css";

export default function Pagination(props) {
  const totalPages = props.size;

  return (
    <ResponsivePagination
      current={props.page}
      total={totalPages}
      onPageChange={props.set}
    />
  );
}
