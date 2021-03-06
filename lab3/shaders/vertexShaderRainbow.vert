varying vec3 vUv;

uniform sampler2D rainbow;
uniform vec3 direction;
uniform float scale;

void main() {
	vUv = position;

	vec4 modelViewPosition = modelViewMatrix * vec4(position, 1.0);
	gl_Position = projectionMatrix * modelViewPosition;
}
