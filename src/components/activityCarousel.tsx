import { useContext } from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { responsive } from "../constants";
import { AuthContext } from "../context/auth";
import { AuthContextType } from "../types/auth";

type ActivityCarouselProps = {
  className?: string;
  images: Images[];
  isActivitySaved: boolean | null;
  handleSaveActivity: () => void;
};

type Images = {
  alternativeText: string;
  height: number;
  id: number;
  name: string;
  sourceText: string;
  thumbnail: string;
  url: string;
  width: number;
};

const ActivityCarousel = ({
  className = "",
  images,
  isActivitySaved,
  handleSaveActivity,
}: ActivityCarouselProps) => {
  const { isLoggedIn } = useContext(AuthContext) as AuthContextType;

  return (
    <div className={className}>
      <div className="overflow-hidden relative max-h-full w-full mt-3">
        <button
          onClick={() => handleSaveActivity()}
          className={`absolute right-1 top-1 text-sm font-bold text-white uppercase bg-red py-1.5 px-5 rounded-2.5 ${
            isLoggedIn ? "z-10" : null
          }`}
        >
          {isActivitySaved ? "Saved" : "Save"}
        </button>
        <Carousel
          responsive={responsive}
          shouldResetAutoplay={false}
          arrows={false}
          infinite={true}
          partialVisible={true}
        >
          {images &&
            images.map(({ id, url, sourceText }) => {
              return (
                <div key={id} className="flex flex-col mr-3.5">
                  <div
                    className="h-62.5 rounded-2.5"
                    style={{
                      backgroundImage: `url(${url})`,
                      backgroundOrigin: "center",
                      backgroundSize: "cover",
                    }}
                  ></div>
                  <p className="text-xs mt-1s">
                    <span className="font-normal text-gray line-clamp-5">
                      {sourceText}
                    </span>
                  </p>
                </div>
              );
            })}
        </Carousel>
      </div>
    </div>
  );
};

export default ActivityCarousel;
