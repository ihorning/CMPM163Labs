varying vec3 vUv;

uniform sampler2D rainbow;

void main() {
	gl_FragColor = vec4(0.1) + texture2D(rainbow, vec2(mod(vUv.z, 1.0), 0.0));
}
