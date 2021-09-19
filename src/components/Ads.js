import React from "react";
import Card from "./Card";

const Ads = () => {
  return (
    <div className="mt-12">
      <h1 className="uppercase text-red text-2xl font-semibold">
        FEATURED ADS
      </h1>
      <div className="grid gap-x-2 mt-24 2xl:grid-cols-8 xl:grid-cols-6 lg-grid-cols:4 md:grid-cols-3 sm:grid-cols-1">
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
      </div>
    </div>
  );
};
export default Ads;
