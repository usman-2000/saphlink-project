import Particles from "react-tsparticles";
import { loadFull } from "tsparticles";
import { useCallback } from "react";

import React from "react";

export default function Particle() {
  const particlesInit = useCallback(async (engine) => {
    console.log(engine);
    // you can initiate the tsParticles instance (engine) here, adding custom shapes or presets
    // this loads the tsparticles package bundle, it's the easiest method for getting everything ready
    // starting from v2 you can add only the features you need reducing the bundle size
    await loadFull(engine);
  }, []);

  const particlesLoaded = useCallback(async (container) => {
    await console.log(container);
  }, []);
  return (
    <div>
      <Particles
        id="tsparticles"
        init={particlesInit}
        loaded={particlesLoaded}
        options={{
          // background: {
          //   color: {
          //     value: "#0d47a1",
          //   },
          // },
          fpsLimit: 120,
          interactivity: {
            events: {
              onClick: {
                enable: true,
                mode: "push",
              },
              onHover: {
                enable: true,
                mode: "repulse",
              },
              resize: true,
            },
            modes: {
              push: {
                quantity: 0,
              },
              repulse: {
                distance: 200,
                duration: 0.4,
              },
            },
          },
          particles: {
            color: {
              value: "#61dafb",
            },
            links: {
              color: "#61dafb",
              distance: 150,
              enable: true,
              opacity: 0.1,
              width: 1,
            },
            collisions: {
              enable: false,
            },
            move: {
              directions: "none",
              enable: true,
              outModes: {
                default: "bounce",
              },
              random: false,
              speed: 2,
              straight: false,
            },
            number: {
              density: {
                enable: true,
                area: 800,
              },
              value: 80,
            },
            opacity: {
              value: 0.1,
            },
            shape: {
              type: "circle",
            },
            size: {
              value: { min: 1, max: 7 },
            },
          },
          detectRetina: true,
        }}
      />
    </div>
  );
}
