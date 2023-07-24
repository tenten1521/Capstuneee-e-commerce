"use client";
import React from "react";
import { FacebookProvider, CustomChat } from "react-facebook";

const FacebookMsg = () => {
  return (
    <FacebookProvider appId="1247896899249276" chatSupport>
      <CustomChat pageId="552077551601477" minimized={true} />
    </FacebookProvider>
  );
};

export default FacebookMsg;
