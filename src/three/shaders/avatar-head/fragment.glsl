#include ../includes/avatar-progress/fragment.glsl;
#include ../includes/about-ambient.glsl;

uniform sampler2D uHeadTexture;
uniform vec2 uHeadTextureSize;

varying vec2 vUv;

void main() {
    vec4 tex = texture2D(uHeadTexture, vUv);
    float luminance = dot(tex.rgb, vec3(0.299, 0.587, 0.114));
    float hairMask = smoothstep(0.34, 0.16, luminance);
    vec3 scalpColor = mix(vec3(0.68, 0.42, 0.31), vec3(0.95, 0.68, 0.50), smoothstep(0.05, 0.34, luminance));
    tex.rgb = mix(tex.rgb, scalpColor, hairMask);

    float progress = getProgress();

    gl_FragColor = vec4(applyAmbient(tex.rgb), progress);
}
