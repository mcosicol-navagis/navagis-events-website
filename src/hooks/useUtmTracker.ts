"use client";

import { useEffect, useState } from "react";

export interface UtmParams {
  utmSource: string;
  utmMedium: string;
  utmCampaign: string;
}

const DEFAULTS: UtmParams = {
  utmSource: "Direct",
  utmMedium: "None",
  utmCampaign: "None",
};

const SESSION_KEY = "mtw_utm";

export function useUtmTracker(): UtmParams {
  const [utms, setUtms] = useState<UtmParams>(DEFAULTS);

  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    const source = params.get("utm_source");
    const medium = params.get("utm_medium");
    const campaign = params.get("utm_campaign");

    if (source || medium || campaign) {
      const resolved: UtmParams = {
        utmSource: source ?? DEFAULTS.utmSource,
        utmMedium: medium ?? DEFAULTS.utmMedium,
        utmCampaign: campaign ?? DEFAULTS.utmCampaign,
      };
      sessionStorage.setItem(SESSION_KEY, JSON.stringify(resolved));
      setUtms(resolved);
    } else {
      const stored = sessionStorage.getItem(SESSION_KEY);
      if (stored) {
        try {
          setUtms(JSON.parse(stored));
        } catch {
          setUtms(DEFAULTS);
        }
      }
    }
  }, []);

  return utms;
}
