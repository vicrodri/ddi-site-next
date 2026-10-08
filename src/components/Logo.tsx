import Image from "next/image";

/**
 * Logo component props, size receives the display height in pixels (wdth follows the aspect ratio)
 */
type LogoProps = {
  className?: string;
  size?: number;
};

const Logo = ({ className = "", size = 48 }: LogoProps) => {
  const width = Math.round(size * (1365 / 2048));

  return (
    <Image
      src='/ddi-logo-nobg.png'
      alt='Dagger Defense Industries'
      width={width}
      height={size}
      className={className}
      priority
    ></Image>
  );
};

export default Logo;
