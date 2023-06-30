import * as THREE from 'three';

// Création de la scène
var scene = new THREE.Scene();

// Création de la caméra
var camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
camera.position.z = 5;

// Création du rendu
var renderer = new THREE.WebGLRenderer();
renderer.setSize(window.innerWidth, window.innerHeight);
document.body.appendChild(renderer.domElement);

// Création d'un cube
var geometry = new THREE.BoxGeometry(1, 1, 5);
var geometry2 = new THREE.BoxGeometry(1, 1, 5);
var material = new THREE.MeshBasicMaterial({ color: 0x00ff00 });
var material2 = new THREE.MeshBasicMaterial({ color: 0xff0000 });
var cube = new THREE.Mesh(geometry, material);
var cube2 = new THREE.Mesh(geometry2, material2);
cube2.position.z = -2;

// Ajout du cube à la scène
scene.add(cube);
scene.add(cube2);

function animate() {
    requestAnimationFrame(animate);
  
    // Rotation du cube sur les axes x et y
    cube.rotation.x += 0.01;
    cube.rotation.y += 0.01;
  
    // Rendu de la scène avec la caméra
    renderer.render(scene, camera);
  }
  
  // Appel de la fonction animate pour lancer l'animation
  animate();