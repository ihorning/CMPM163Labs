# CMPM163Labs

## Lab 2
https://drive.google.com/file/d/1bGyNadr0rwgjOGOviXEX98w_YDtNyvJW/view?usp=sharing

![](lab2/rabbit_scene.PNG)


## Lab 3
https://drive.google.com/file/d/1hypx7C1F3pt6iiIhd0DwOwo-dYjgK3Cw/view?usp=sharing

Cubes from left to right:
1. The original cube. It has the phong material with green specular.
2. I used THREE.MeshPhysicalMaterial() instead of THREE.MeshPhongMaterial. The cube has an emission value of 0x361134, a clearcoat (1.0), high reflectivity (0.9), and 60% opacity.
3. I used THREE.MeshPhongMaterial() like the given example. It has albedo 0xea3788, specular 0xff7f51, and shininess 100 instead of 30.
4. This is the cube that uses the custom color interpolation shader. It interpolates between the two colors specified in its material on the z axis. It uses colorA:0x260d42 and colorB:0x086375.
5. This cube uses a custom shader. It does flat shading, where the color of each face is determined by the face normal. The face color is the sum of the x, y and z colors multiplied by the dot of the face normal and each respective axis. The axis colors are specified in the material. I used 0xff0000, 0x00ff00, and 0x0000ff for x, y, and z for this cube.
6. This cube uses another custom shader. The color of each fragment is taken from a texture (I'm using a rainbow gradient). The u coordinate for each fragment is determined by the dot product of its position and a given "direction." (The v coordinate is always 0). So if you set direction to (0, 0, 1), it would be picking colors based on the z position of each fragment. There is also a "scale" uniform that multiplies the dot product. I update the direction and scale values in my animate function.
7. This sphere uses the same custom shader as the previous cube. I just added it to see how it would look on something more round.

## Lab 4
https://drive.google.com/file/d/1KD9fNM1WVTzZRCSLSRVHViGSguA5zPFW/view?usp=sharing

a. x = min(floor(u * 8), 7)

b. y = min(floor((1 - v) * 8), 7)

c. white


Cubes from left to right:

TOP ROW:
1. (ii) Cube shaded with a texture (163.jpg) and a normal map (163_norm.jpg) using THREE.MeshPhongMaterial material
2. (i) Cube shaded with only the texture (163.jpg) using THREE.MeshPhongMaterial material
3. (iii) Another cube with a texture (161.jpg) and a normal map (176_norm.jpg) using THREE.MeshPhongMaterial material
4. (iv) Unlit cube shaded with a texture (161.jpg) using custom shaders

BOTTOM ROW:
1. (v) Unlit cube shaded with a texture (176.jpg) tiled 2x2 using custom shaders (the ones in the HTML)
2. (v) Unlit cube shaded with a texture (176.jpg) tiled 5x5 using custom shaders (the ones in the HTML)

I solved the cube 5 problem by multiplying the uv coordinates by a scale (textureScale 2 gives you 2x2, 5 gives you 5x5, etc.) and using mod() so it repeats.

## Lab 5
Part 2 a: https://drive.google.com/file/d/1-H-aNcodNrsRdhrgTUB-8j1eAPIC0PnK/view?usp=sharing
Part 2 b explosion: https://drive.google.com/file/d/1pC2sxC6xGIbNhl-Y7ljK7y6ExpU6DqPM/view?usp=sharing
Part 2 b custom: https://drive.google.com/file/d/1P2imYPTNeCddY9r33z5tP6kkPvzSQfoM/view?usp=sharing

For my custom particle effect, I have each particle assigned another particle to follow. Its acceleration is adjusted every frame so it moves towards this other particle. The velocity of the particles is clamped, but the limit increases over time. Each particle's color is determined by its direction of motion.
