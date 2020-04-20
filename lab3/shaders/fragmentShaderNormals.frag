varying vec3 vUv;
varying vec3 vNormal;

uniform vec3 colorX;
uniform vec3 colorY;
uniform vec3 colorZ;

void main() {
	// Sum of all the colors scaled by dot product of normal and respective axis
	vec3 color = (vNormal.x * colorX) + (vNormal.y * colorY) + (vNormal.z * colorZ);
	gl_FragColor = vec4(color, 1.0);
}
