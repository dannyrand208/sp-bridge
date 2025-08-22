"use client";

import { useEffect } from "react";

export default function DeepLinkBridge() {
  useEffect(() => {
    setTimeout(() => {
      const deepLinkUrl = process.env.NEXT_PUBLIC_DEEP_LINK_URL || "";
      window.location.href = deepLinkUrl;
    }, 500);
  }, []);

  return (
    <div className="flex justify-center items-center mt-20">
      <div className="text-center">
        {/* Spinner */}
        <div className="mb-4 flex justify-center">
          <div className="w-12 h-12 border-4 border-blue-500 border-t-transparent rounded-full animate-spin" />
        </div>

        {/* Text */}
        <p className="text-lg mb-2">Redirecting to Space Penguin app...</p>
        <p className="text-sm text-gray-600">
          Please wait while we open your app...
        </p>
      </div>
    </div>
  );
}
