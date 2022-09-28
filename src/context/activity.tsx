import React, { createContext, useEffect, useState } from "react";
import { ActivityContextType } from "../types/activity";

export const ActivityContext = createContext<ActivityContextType>({});

export const ActivityProvider = ({ children }: any) => {
  return (
    <ActivityContext.Provider value={{}}>{children}</ActivityContext.Provider>
  );
};
