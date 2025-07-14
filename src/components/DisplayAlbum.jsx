import React, { useContext } from "react";
import Navbar from "./Navbar";
import { useParams } from "react-router-dom";
import { albumsData, assets, songsData } from "../assets/assets";
import { PlayerContext } from "../context/PlayerContext";

const DisplayAlbum = () => {
  const { id } = useParams();
  const albumData = albumsData[id];
  const { playWithID } = useContext(PlayerContext);
  return (
    <>
      <Navbar />
      <div className="mt-10 flex gap-8 flex-col md:flex-row md:items-end">
        <img className="w-48 rounded" src={albumData.image} alt="" />
        <div className="flex flex-col">
          <p>Playlist</p>
          <h2 className="text-5xl font-bold mb-4 md:text-7xl">
            {albumData.name}
          </h2>
          <h4>{albumData.desc}</h4>
          <p
            className="mt-1 flex items-center text-sm text-[#b3b3b3] font-medium"
            style={{
              letterSpacing: "0.5px",
              lineHeight: "1.5",
            }}
          >
            <img
              className="inline-block w-5 h-5 mx-1 align-middle"
              src={assets.spotify_logo}
              alt=""
            />
            <span className="font-bold text-white mx-1">Spotify</span>
            <span className="mx-1">•</span>
            <span className="mx-1">1,782,434 likes</span>
            <span className="mx-1">•</span>
            <span className="font-bold text-white mx-1">50 songs</span>
            <span className="mx-1">about 2hr 30 min</span>
          </p>
        </div>
      </div>

      <div className="grid grid-cols-3 sm:grid-cols-4 mt-10 mb-4 pl-2 text-[#a7a7a7]">
        <p>
          <b className="mr-4">#</b>Title
        </p>
        <p>Album</p>
        <p className="hidden sm:block">Date Added</p>
        <img className="m-auto w-4" src={assets.clock_icon} alt="" />
      </div>
      <hr />
      {songsData.map((song, index) => (
        <div
          onClick={() => playWithID(song.id)}
          key={index}
          className="grid grid-cols-3 sm:grid-cols-4 gap-2 p-2 items-center text-[#a7a7a7] hover:bg-[#ffffff26] cursor-pointer"
        >
          <p className="text-white">
            <b className="mr-4 text-[#A7A7A7]">{index + 1}</b>

            <img className="inline w-10 mr-5" src={song.image} alt="" />
            {song.name}
          </p>
          <p className="text-[15px]">{albumData.name}</p>
          <p className="text-[15px] hidden sm:block">5 days ago</p>
          <p className="text-[15px] text-center">{song.duration}</p>
        </div>
      ))}
    </>
  );
};

export default DisplayAlbum;
