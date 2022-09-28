import React from "react";
import { useNavigate } from "react-router-dom";

const activities = [
  {
    id: "castle-of-gerald-the-devil",
    label: "Castle of Gerald The Devil",
  },
];

const Home = () => {
  const navigate = useNavigate();

  const handleOpenActivity = (activitySlug: string) => {
    navigate(`activity/${activitySlug}`);
  };

  return (
    <div>
      <h1 className="text-3xl font-bold underline">
        Hello this is a sample page
      </h1>
      <p>Here are some activities that you could check out:</p>
      {activities.map(({ id, label }) => {
        return (
          <button
            onClick={() => handleOpenActivity(id)}
            className="text-sm font-bold text-white uppercase bg-red py-1.5 px-5 rounded-2.5"
          >
            {label}
          </button>
        );
      })}
    </div>
  );
};

export default Home;
