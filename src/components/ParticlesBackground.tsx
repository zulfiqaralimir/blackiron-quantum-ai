"use client";

import { useCallback } from "react";
import Particles from "react-tsparticles";
import { Engine } from "tsparticles-engine";
import { loadBasic } from "tsparticles-basic";

export default function ParticlesBackground() {
  const particlesInit = useCallback(async (engine: Engine) => {
    await loadBasic(engine);
  }, []);

  return (
    <Particles
      id="tsparticles"
      className="absolute inset-0 -z-10"
      init={particlesInit}
      options={{
        background: { color: "transparent" },
        particles: {
          number: { value: 80 },
          size: { value: 3 },
          color: { value: "#22d3ee" }, // softer cyan
          opacity: { value: 0.35 }, // reduced brightness
          move: {
            enable: true,
            speed: 0.6,
            direction: "none",
            random: true,
          },
        },
      }}
    />
  );
}
