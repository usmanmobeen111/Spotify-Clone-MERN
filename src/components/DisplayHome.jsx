import React from "react";
import Navbar from "./Navbar";
import { albumsData, songsData } from "../assets/assets";
import AlbumItem from "./AlbumItem";

const DisplayHome = () => {
  return (
    <>
      <Navbar />
      <div className="mb-4 ">
        <h1 className="my-5 font-bold text-2xl">Featured Charts</h1>
        <div className="flex overflow-auto  [scrollbar-width:none] [-ms-overflow-style:none] [&::-webkit-scrollbar]:w-0 [&::-webkit-scrollbar]:bg-transparent">
          {albumsData.map((album, index) => (
            <AlbumItem
              key={index}
              name={album.name}
              image={album.image}
              desc={album.desc}
              id={album.id}
            />
          ))}
        </div>
      </div>
      <div className="mb-4">
        <h1 className="my-5 font-bold text-2xl">Today's Biggest Hits</h1>
        <div className="flex overflow-auto  [scrollbar-width:none] [-ms-overflow-style:none] [&::-webkit-scrollbar]:w-0 [&::-webkit-scrollbar]:bg-transparent">
          {songsData.map((album, index) => (
            <AlbumItem
              key={index}
              name={album.name}
              image={album.image}
              desc={album.desc}
              id={album.id}
            />
          ))}
        </div>
      </div>
    </>
  );
};

export default DisplayHome;
