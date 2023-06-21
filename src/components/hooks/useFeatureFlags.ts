// Global
import { useCallback, useEffect, useState } from 'react';

// Local
import type { FeatureFlags } from 'lib/feature-flags';

export function useFeatureFlags() {
  const [featureFlags, setFeatureFlags] = useState<FeatureFlags>({});

  useEffect(() => {
    (async () => {
      const res = await fetch('/api/feature-flags?flag=buttonIcons');
      const resData = await res.json();

      setFeatureFlags(resData);
    })();
  }, []);

  const getFeatureFlag = useCallback(
    (flag: keyof FeatureFlags) => (!!featureFlags ? featureFlags[flag] : undefined),
    [featureFlags]
  );

  return {
    featureFlags,
    getFeatureFlag,
  };
}
