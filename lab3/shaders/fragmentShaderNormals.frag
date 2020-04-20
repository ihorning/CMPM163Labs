varying vec3 vUv;
varying vec3 vNormal;

uniform vec3 colorX;
uniform vec3 colorY;
uniform vec3 colorZ;

void main() {
	vec3 color = (vNormal.x * colorX) + (vNormal.y * colorY) + (vNormal.z * colorZ);
	gl_FragColor = vec4(color, 1.0); // Interpolate between colorA and colorB based on z value
}
