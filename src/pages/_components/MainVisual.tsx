import DarkVeil from "@/components/DarkVeil";

export default function MainVisual({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div
      style={{
        width: "100%",
        height: "100%",
        position: "relative",
        overflow: "hidden",
      }}
    >
      <DarkVeil
        hueShift={20}
        noiseIntensity={0}
        scanlineIntensity={0}
        speed={1}
        scanlineFrequency={47}
        warpAmount={0.85}
        resolutionScale={1.25}
      />
      {children}
    </div>
  );
}
