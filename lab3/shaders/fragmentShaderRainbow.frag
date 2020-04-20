varying vec3 vUv;

uniform sampler2D rainbow;
uniform vec3 direction;
uniform float scale;

void main() {
	float coord = scale * dot(direction, vUv);
	gl_FragColor = vec4(0.1) + texture2D(rainbow, vec2(mod(coord, 1.0), 0.0));
}
