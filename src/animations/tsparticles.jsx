import Particles from 'react-tsparticles';
import { loadFull } from '@tsparticles/react';

const ParticlesComponent = () => {
  const particlesInit = async (main) => {
    await loadFull(main);
  };

  return (
    <div>
      <Particles 
        id="tsparticles"
        init={particlesInit}
        options={{
          "autoPlay": true,
          "background": {
            "color": {
              "value": "#000"
            },
            "opacity": 1
          },
          "fpsLimit": 120,
          "particles": {
            "color": {
              "value": "#0b08aa",
              "animation": {
                "enable": true,
                "speed": 10
              }
            },
            "move": {
              "enable": true,
              "speed": 3,
              "trail": {
                "enable": true,
                "length": 20,
                "fill": {
                  "color": "#000"
                }
              }
            },
            "number": {
              "value": 0
            },
            "size": {
              "value": 2
            }
          },
          "fullScreen": {
            "enable": true,
            "zIndex": -1
          }
        }}
      />
    </div>
  );
};

export default ParticlesComponent;
