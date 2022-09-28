import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import LoadingSpin from "react-loading-spin";

import Article from "../components/article";
import ActivityCarousel from "../components/activityCarousel";
import NearbyActivityCarousel from "../components/nearbyActivityCarousel";

import {
  fetchActivity,
  fetchNearbyActivities,
  fetchSavedActivities,
  removeActivity,
  addActivity,
} from "../api/activity";

const Activity = () => {
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [activity, setActivity] = useState<any>(null);
  const [nearbyActivities, setNearbyActivities] = useState<any>(false);
  const [savedActivities, setSavedActivities] = useState<any>(null);
  const [isActivitySaved, setIsActivitySaved] = useState<boolean | null>(null);
  const [nearbySavedActivities, setNearbySavedActivities] = useState<any>(null);

  const { activitySlug } = useParams();
  const currentActivitySlug = activitySlug as string;

  useEffect(() => {
    setIsLoading(true);
    getActivities();
  }, []);

  useEffect(() => {
    if (activity && nearbyActivities) {
      setIsLoading(false);
    }

    if (activity && nearbyActivities && savedActivities) {
      checkIsSaved();
      checkIsNearbyActivitySaved();
    }
  }, [activity, nearbyActivities, savedActivities]);

  const getActivities = async () => {
    const activitySlug = currentActivitySlug;
    const currentActivity = await fetchActivity({ activitySlug });
    const activityId = currentActivity.id;
    const nearbyActivities = await fetchNearbyActivities({ activityId });
    const savedActivities = await fetchSavedActivities();

    setActivity(currentActivity);
    setNearbyActivities(nearbyActivities);
    setSavedActivities(savedActivities);
  };

  const checkIsSaved = () => {
    savedActivities[0].activities.map((savedActivity: any) => {
      if (savedActivity.id === activity.id) {
        setIsActivitySaved(true);
      }
    });
  };

  const checkIsNearbyActivitySaved = () => {
    const savedNearbyActivities: any = [];
    nearbyActivities.map((nearbyActivity: any) => {
      savedActivities[0]?.activities.map((savedActivity: any) => {
        if (savedActivity.id === nearbyActivity.id) {
          savedNearbyActivities.push(nearbyActivity.id);
        }
      });
    });

    setNearbySavedActivities(savedNearbyActivities);
  };

  const handleSaveActivity = async () => {
    const activityId = activity.id;
    if (isActivitySaved) {
      const res = await removeActivity({ activityId });
      if (res) {
        setIsActivitySaved(false);
      }
    } else {
      const res = await addActivity({ activityId });
      if (res) {
        setIsActivitySaved(true);
      }
    }
  };

  const handleSaveNearbyActivity = async (activityId: number) => {
    if (nearbySavedActivities.includes(activityId)) {
      await removeActivity({ activityId });
    } else {
      await addActivity({ activityId });
    }
    const savedActivities = await fetchSavedActivities();
    setSavedActivities(savedActivities);
  };

  return isLoading ? (
    <div className="flex justify-center	items-center h-screen">
      <LoadingSpin />
    </div>
  ) : (
    <div className="py-6.25">
      {activity && (
        <ActivityCarousel
          images={activity?.images}
          isActivitySaved={isActivitySaved}
          handleSaveActivity={handleSaveActivity}
        />
      )}
      <div className="px-25">
        <Article
          name={activity?.name}
          labels={activity?.labels}
          descriptionShort={activity?.description_short}
          descriptionLong={activity?.description_long}
          updatedAt={activity?.updated_at}
        />
        <NearbyActivityCarousel
          className="mt-6"
          heading="Recommended Activities Nearby"
          nearbyActivities={nearbyActivities}
          handleSaveNearbyActivity={handleSaveNearbyActivity}
          nearbySavedActivities={nearbySavedActivities}
        />
      </div>
    </div>
  );
};

export default Activity;
