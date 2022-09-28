import React from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { responsive } from "../constants";

type NearbyActivityCarouselProps = {
  heading: string;
  className?: string;
  nearbyActivities: NearbyActivity[];
  handleSaveNearbyActivity: (id: number) => void;
  nearbySavedActivities: any;
};

type NearbyActivity = {
  anecdotes?: any;
  description_short: string;
  id: number;
  images: Images[];
  name: string;
  slug: string;
};

type Images = {
  alternativeText: string;
  height: number;
  id: number;
  name: string;
  small: string;
  sourceText: string;
  thumbnail: string;
  url: string;
  width: number;
};

const NearbyActivityCarousel = ({
  heading,
  className = "",
  nearbyActivities,
  handleSaveNearbyActivity,
  nearbySavedActivities,
}: NearbyActivityCarouselProps) => {
  return (
    <div className={className}>
      <h1 className="font-extrabold text-xl text-blue">{heading}</h1>
      <div className="overflow-hidden max-h-full w-full mt-3">
        <Carousel
          responsive={responsive}
          shouldResetAutoplay={false}
          arrows={false}
        >
          {nearbyActivities &&
            nearbyActivities.map(({ id, name, images, description_short }) => {
              return (
                <div key={id} className="flex flex-col mr-3.5">
                  <div
                    className="h-62.5 rounded-2.5"
                    style={{
                      backgroundImage: `url(${images[0].url})`,
                      backgroundOrigin: "center",
                      backgroundSize: "cover",
                    }}
                  >
                    <button
                      onClick={() => handleSaveNearbyActivity(id)}
                      className="absolute right-5 top-1 z-10 text-sm font-bold text-white uppercase bg-red py-1.5 px-5 rounded-2.5"
                    >
                      {nearbySavedActivities.includes(id) ? "Saved" : "Save"}
                    </button>
                  </div>
                  <h2 className="font-bold text-xl text-dark-blue mt-2">
                    {name}
                  </h2>
                  <p className="text-base mt-1">
                    <span className="font-normal text-gray line-clamp-5">
                      {description_short}
                    </span>
                    <a
                      href="#"
                      className="font-bold text-red hover:text-blue leading-6"
                    >
                      READ MORE
                    </a>
                  </p>
                </div>
              );
            })}
        </Carousel>
      </div>
    </div>
  );
};

export default NearbyActivityCarousel;
