import React from "react";
import OtherCard from "./OtherCard";

const LastAds = () => {
  return (
    <div className="mt-12">
      <div className="flex">
        <h1 className="uppercase text-red text-2xl font-semibold">Last ADS</h1>
        <p className="font-light text-grey py-2 px-4">
          Discover the latest ads published by our advertisers
        </p>
      </div>

      <div className="grid gap-x-2 mt-24 2xl:grid-cols-8 xl:grid-cols-5 lg-grid-cols:4 md:grid-cols-3 sm:grid-cols-1">
        <OtherCard />
        <OtherCard />
        <OtherCard />
        <OtherCard />
        <OtherCard />
        <OtherCard />
        <OtherCard />
        <OtherCard />
        <OtherCard />
        <OtherCard />
        <OtherCard />
        <OtherCard />
        <OtherCard />
        <OtherCard />
        <OtherCard />
      </div>
    </div>
  );
};
export default LastAds;
