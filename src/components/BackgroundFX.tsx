export default function BackgroundFX() {
  return (
    <div aria-hidden="true">
      <div className="cy-grid-texture" />
      <div className="cy-grid-accent" />
      <div className="cy-radial-glow" />
      <div className="cy-radial-hotspots" />
      <div className="cy-scanline" />
      <div className="cy-scanline-fine" />
      <svg
        className="cy-grain"
        xmlns="http://www.w3.org/2000/svg"
        focusable="false"
      >
        <filter id="grain-filter">
          <feTurbulence
            type="fractalNoise"
            baseFrequency="0.9"
            numOctaves="2"
            stitchTiles="stitch"
          />
        </filter>
        <rect width="100%" height="100%" filter="url(#grain-filter)" />
      </svg>
    </div>
  );
}
