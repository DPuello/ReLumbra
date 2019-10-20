
cargarObj(delfin, '../Modelos/','10014_dolphin_v2_max2011_it2',400);
cargarObj(azul3d, '../Modelos/','10054_Whale_v2_L3',400);
cargarObj(pez2, '../Modelos/','GOLDFISH',400);
cargarObj(ave3d, '../Modelos/','10043_Seagull_v1_L3',400);
cargarObj(concha3d, '../Modelos/','seashell_obj',400);

function cargarObj(lienzo, ruta, archivo, pos_camara){
var scene = new THREE.Scene();
var camera = new THREE.PerspectiveCamera( 75, lienzo.offsetWidth/lienzo.offsetHeight, 0.1, 1000 );
 
var renderer = new THREE.WebGLRenderer({ canvas: lienzo,alpha: true});
renderer.setClearColor( 0x000000, 0 );
renderer.setSize( lienzo.offsetWidth, lienzo.offsetHeight);
//document.body.appendChild( renderer.domElement );
 
camera.position.z = pos_camara;

var controls = new THREE.OrbitControls(camera, renderer.domElement);
controls.enableDamping = true;
controls.dampingFactor = 0.25;
controls.enableZoom = true;

var keyLight = new THREE.DirectionalLight(new THREE.Color('hsl(30, 100%, 75%)'), 1.0);
keyLight.position.set(-100, 0, 100);
 
var fillLight = new THREE.DirectionalLight(new THREE.Color('hsl(240, 100%, 75%)'), 0.75);
fillLight.position.set(100, 0, 100);
 
var backLight = new THREE.DirectionalLight(0xffffff, 1.0);
backLight.position.set(100, 0, -100).normalize();

var light = new THREE.AmbientLight(0xffffff, 0.5);
    scene.add(light);
 
scene.add(keyLight);
scene.add(fillLight);
scene.add(backLight);
var mesh;
//
var mtlLoader = new THREE.MTLLoader();
//mtlLoader.setTexturePath('/examples/3d-obj-loader/assets/');
mtlLoader.setPath(ruta);
mtlLoader.load(archivo+'.mtl', function (materials) {
 
    materials.preload();
 
    var objLoader = new THREE.OBJLoader();
    objLoader.setMaterials(materials);
    objLoader.setPath(ruta);
    objLoader.load(archivo+'.obj', function (object) {
 
        scene.add(object);
        object.position.y -= 60;
        //mesh = new THREE.Mesh(object,materials)
    });
 
});
//
 
var animate = function () {
  requestAnimationFrame( animate );
  renderer.render(scene, camera);

  //scene.rotation.x+=0.01;
}

    animate();
};