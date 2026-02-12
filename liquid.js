// Liquid overlay for your cube and CG
// Uses threejs-components LiquidBackground
import LiquidBackground from 'https://cdn.jsdelivr.net/npm/threejs-components@0.0.27/build/backgrounds/liquid1.min.js';

const app = LiquidBackground(document.getElementById('liquid-canvas'));

// Gebruik een transparante afbeelding zodat alleen het liquid effect zichtbaar is
const transparentPixel =
	'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR4nGNgYAAAAAMAASsJTYQAAAAASUVORK5CYII=';
app.loadImage(transparentPixel);
app.liquidPlane.material.metalness = 0.75;
app.liquidPlane.material.roughness = 0.25;
app.liquidPlane.uniforms.displacementScale.value = 5;
app.setRain(false);
