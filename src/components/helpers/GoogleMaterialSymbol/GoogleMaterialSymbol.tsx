// Global
import Image from 'next/image';
import { useEffect, useState } from 'react';

type Variant = 'baseline' | 'outline' | 'round' | 'sharp' | 'twotone';

export type GoogleMaterialSymbolProps = {
  icon: string;
  variant: Variant;
};

const GoogleMaterialSymbol = ({ icon, variant = 'round' }: GoogleMaterialSymbolProps) => {
  const [fetchedIcon, setFetchedIcon] = useState('');

  useEffect(() => {
    if (!icon || !variant) return;

    async function fetchIcon() {
      const fetchedIcon = (await import(
        `@material-icons/svg/svg/${icon}/${variant}.svg`
      )) as unknown as string;

      setFetchedIcon(fetchedIcon);
    }
    fetchIcon();
  }, [icon, variant]);

  return <>{fetchedIcon !== '' && <Image alt="Google Material Symbol" src={fetchedIcon} />}</>;
};

export default GoogleMaterialSymbol;
