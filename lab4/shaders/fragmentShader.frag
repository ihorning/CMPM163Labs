varying vec3 vUv;

uniform vec3 colorA;
uniform vec3 colorB;

void main() {
	gl_FragColor = vec4(mix(colorA, colorB, vUv.z), 1.0); // Interpolate between colorA and colorB based on z value
}
