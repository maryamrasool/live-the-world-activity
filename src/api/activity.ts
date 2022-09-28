import axios from "axios";
import { BASE_URL } from "../constants";
import {
  EditActivityParams,
  FetchActivityParams,
  FetchNearbyActivitiesParams,
} from "../types/activity";

const fetchActivity = async ({ activitySlug }: FetchActivityParams) => {
  const res = await axios
    .get(`${BASE_URL}/frontend/activities/slug/${activitySlug}`)
    .catch((error) => {
      return error.response;
    });
  return res.data;
};

const fetchNearbyActivities = async ({
  activityId,
}: FetchNearbyActivitiesParams) => {
  const res = await axios
    .get(`${BASE_URL}/frontend/activities/nearby/${activityId}`)
    .catch((error) => {
      return error.response;
    });
  return res.data;
};

const fetchSavedActivities = async () => {
  // !Remove hardcoded token here
  const res = await axios
    .get(`${BASE_URL}/frontend/trips`, {
      headers: {
        Authorization:
          "Bearer " +
          "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MjU5MywiaWF0IjoxNjY0MzcwODg3LCJleHAiOjE2NjgyNTg4ODd9.5NxNsY4lMYZ5Um3eByWFk0TKTqy6JQjDAFx9Wg6LoF8",
      },
    })
    .catch((error) => {
      return error.response;
    });
  return res.data;
};

const addActivity = async ({ activityId }: EditActivityParams) => {
  // !Remove hardcoded token here
  const data = {
    activityId: activityId,
    tripType: "favorite",
  };
  const res = await axios
    .put(`${BASE_URL}/frontend/trips/add_activity`, data, {
      headers: {
        Authorization:
          "Bearer " +
          "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MjU5MywiaWF0IjoxNjY0MzcwODg3LCJleHAiOjE2NjgyNTg4ODd9.5NxNsY4lMYZ5Um3eByWFk0TKTqy6JQjDAFx9Wg6LoF8",
      },
    })
    .catch((error) => {
      return error.response;
    });
  return res.data;
};

const removeActivity = async ({ activityId }: EditActivityParams) => {
  const data = {
    activityId: activityId,
    tripType: "favorite",
  };
  // !Remove hardcoded token here
  const res = await axios
    .put(`${BASE_URL}/frontend/trips/remove_activity`, data, {
      headers: {
        Authorization:
          "Bearer " +
          "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MjU5MywiaWF0IjoxNjY0MzcwODg3LCJleHAiOjE2NjgyNTg4ODd9.5NxNsY4lMYZ5Um3eByWFk0TKTqy6JQjDAFx9Wg6LoF8",
      },
    })
    .catch((error) => {
      return error.response;
    });
  return res.data;
};

export {
  fetchActivity,
  fetchNearbyActivities,
  fetchSavedActivities,
  addActivity,
  removeActivity,
};
