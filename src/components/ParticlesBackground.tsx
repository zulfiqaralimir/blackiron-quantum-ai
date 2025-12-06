"use client";

import Particles from "react-tsparticles";
import { useCallback } from "react";
import type { Engine } from "tsparticles-engine";
import { loadSlim } from "tsparticles-slim";

export default function ParticlesBackground() {
  const particlesInit = useCallback(async (engine: Engine) => {
    await loadSlim(engine);
  }, []);

  return (
    <Particles
      id="tsparticles"
      init={particlesInit}
      options={{
        background: { color: "transparent" },
        fullScreen: { enable: false }, // Important for app router
        particles: {
          number: { value: 60 },
          size: { value: 2 },
          move: { enable: true, speed: 0.8 },
          color: { value: "#0AE2FF" },
          opacity: { value: 0.6 }
        }
      }}
      className="absolute inset-0"
    />
  );
}
