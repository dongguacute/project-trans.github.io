const Canvas = document.getElementById("particlesCanvas");
const FxParam = {
  width: [40, 100],
  height: [20, 50],
  density: 0.1,
  speed: [60, 80],
  cursorMode: null,
  rotationMode: RotationMode.Random,
  velocityAngle: [180 + 40, 180 + 50],
  rotationSpeed: [30, 100],
  tints: [
    new Tint("#F5C0F3", 1),
    new Tint("#C3F5FD", 1),
    new Tint("#FEF79F", 1),
  ],
};
new ParticleSystem(Canvas, PartileAssets.pattern1, FxParam),
  new ParticleSystem(Canvas, PartileAssets.pattern2, FxParam),
  new ParticleSystem(Canvas, PartileAssets.pattern3, {
    ...FxParam,
    width: [150, 200],
    height: [75, 100],
    tints: [
      new Tint("#F5C0F3", 0.5),
      new Tint("#C3F5FD", 0.5),
      new Tint("#FEF79F", 0.5),
      new Tint("#F5C0F3", 0.25),
      new Tint("#C3F5FD", 0.25),
      new Tint("#FEF79F", 0.25),
    ],
  });
