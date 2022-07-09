import p5 from "p5";
import SimplexNoise from "simplex-noise";

const noiseScale = 0.025;
const size = 25;

const sketch = function (p5: p5) {
  let offset = 0;
  let w: number;
  let h: number;

  const simplex = new SimplexNoise();

  // Setup
  p5.setup = () => {
    p5.createCanvas(800, 800);
    p5.smooth();

    w = p5.width / size;
    h = p5.height / size;
  };

  // Draw
  p5.draw = () => {
    p5.translate(size / 2, size / 2);
    p5.background(210);

    for (let x = 0; x < w + 1; x++) {
      for (let y = 0; y < h + 1; y++) {
        const xPos = x * size;
        const yPos = y * size;

        const value = simplex.noise3D(x * noiseScale, y * noiseScale, offset);
        const radius = p5.map(value, -1.0, 1.0, 10.0, 50.0);
        p5.circle(xPos, yPos, radius);
      }
    }

    offset += 0.015;
  };
};

new p5(sketch, window.document.body);
