import { Geometry } from 'three/core/Geometry';
import { Object3D } from 'three/core/Object3D';
import { Vector3 } from 'three/math/Vector3';
import { PointsMaterial } from 'three/materials/PointsMaterial';
import { Points } from 'three/objects/Points';

const radius = 6371;

export function createStars() {
  const stars = new Object3D();
  const geometry = [createGeometry(250), createGeometry(1500)];
  const materials = createMaterials();

  for (let i = 10; i < 30; i += 1) {
    const chunk = new Points(geometry[i % 2], materials[i % 6]);

    chunk.rotation.x = Math.random() * 6;
    chunk.rotation.y = Math.random() * 6;
    chunk.rotation.z = Math.random() * 6;

    const s = i * 10;
    chunk.scale.set(s, s, s);

    chunk.matrixAutoUpdate = false;
    chunk.updateMatrix();

    stars.add(chunk);
  }
  return stars;
}

function createGeometry(numberOfStars) {
  const geometry = new Geometry();
  const vertices = geometry.vertices;
  for (let i = 0; i < numberOfStars; i += 1) {
    const vertex = new Vector3();
    vertex.x = (Math.random() * 2) - 1;
    vertex.y = (Math.random() * 2) - 1;
    vertex.z = (Math.random() * 2) - 1;
    vertex.multiplyScalar(radius);
    vertices.push(vertex);
  }
  return geometry;
}

function createMaterials() {
  return [
    new PointsMaterial({ color: 0x555555, size: 2, sizeAttenuation: false, fog: false }),
    new PointsMaterial({ color: 0x555555, size: 1, sizeAttenuation: false, fog: false }),
    new PointsMaterial({ color: 0x333333, size: 2, sizeAttenuation: false, fog: false }),
    new PointsMaterial({ color: 0x3a3a3a, size: 1, sizeAttenuation: false, fog: false }),
    new PointsMaterial({ color: 0x1a1a1a, size: 2, sizeAttenuation: false, fog: false }),
    new PointsMaterial({ color: 0x1a1a1a, size: 1, sizeAttenuation: false, fog: false }),
  ];
}
