
cargarObj(delfin, '../Modelos/','10014_dolphin_v2_max2011_it2',400);
cargarObj(azul3d, '../Modelos/','10054_Whale_v2_L3',400);
cargarObj(pez2, '../Modelos/','GOLDFISH',400);
cargarObj(ave3d, '../Modelos/','10043_Seagull_v1_L3',400);
cargarObj(concha3d, '../Modelos/','seashell_obj',400);

function cargarObj(lienzo, ruta, archivo, pos_camara){
var scene = new THREE.Scene();
var camera = new THREE.PerspectiveCamera( 75, lienzo.offsetWidth/lienzo.offsetHeight, 0.1, 1000 );
 
var renderer = new THREE.WebGLRenderer({ canvas: lienzo,alpha: true,antialias: true});
renderer.setClearColor( 0x000000, 0 );
renderer.setSize( lienzo.offsetWidth, lienzo.offsetHeight);
//document.body.appendChild( renderer.domElement );
 
camera.position.z = pos_camara;

//var controls = new THREE.OrbitControls(camera, renderer.domElement);
//controls.enableDamping = true;
//controls.dampingFactor = 0.25;
//controls.enableZoom = true;

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
    mesh = objLoader;
});
//
lienzo.addEventListener('mousemove', onMouseMove, false);
function onMouseMove(event) {

    mouseX = (event.clientX) - window.innerWidth/2;
    mouseY = event.clientY - window.innerHeight/2;
    //mouseX = $(window).$(window).scrollTop();
    //alert(mouseX);
    camera.position.x += (mouseX - camera.position.x) * 0.05;
    camera.position.y += (mouseY - camera.position.y) * 0.05;
    camera.lookAt(scene.position);
};
lienzo.onmouseover = function(){
    var id = setInterval(frame, 1);
    var pos = 0;
    function frame() {
        if (pos == 30) {
            clearInterval(id);
          } else {
            pos++;
            camera.position.z -=3;
            camera.lookAt(scene.position);
          }
    
    }
};
lienzo.onmouseout = function(){
    var id = setInterval(frame, 1);
    var pos = 0;
    function frame() {
        if (pos == 30) {
            clearInterval(id);
          } else {
            pos++;
            camera.position.z +=3;
            camera.position.y -= camera.position.y/30
            camera.position.x -= camera.position.x/30
            camera.lookAt(scene.position);
          }
    
    }
};
 
var animate = function () {
  requestAnimationFrame( animate );
  renderer.render(scene, camera);
   // render();
  //scene.rotation.x+=0.01;
}

    animate();
};
//////////////////////////////Cargar gltf
var mixers = [];
var clock = new THREE.Clock();

function init(lienzo, ruta, camaraY, camaraZ) {

  container = document.querySelector( lienzo );

  scene = new THREE.Scene();

  createCamera(camaraY, camaraZ);
  //createControls();
  createLights();
  loadModels(ruta);
  createRenderer();

  renderer.setAnimationLoop( () => {

    update();
    render();

  } );

}

function createCamera(camaraY, camaraZ) {

  camera = new THREE.PerspectiveCamera( 35, container.clientWidth / container.clientHeight, 1, 100 );
  camera.position.set( 0, camaraY, camaraZ );

}

function createLights() {

  var ambientLight = new THREE.HemisphereLight( 0xddeeff, 0x0f0e0d, 5 );

  var mainLight = new THREE.DirectionalLight( 0xffffff, 5 );
  mainLight.position.set( 10, 10, 10 );

  scene.add( ambientLight, mainLight );

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

}

function loadModels(ruta) {

  var loader = new THREE.GLTFLoader();

  // A reusable function to set up the models. We're passing in a position parameter
  // so that they can be individually placed around the scene
  var onLoad = ( gltf, position ) => {

    var model = gltf.scene.children[ 0 ];
    model.position.copy( position );

    var animation = gltf.animations[ 0 ];

    var mixer = new THREE.AnimationMixer( model );
    mixers.push( mixer );

    var action = mixer.clipAction( animation );
    action.play();

    scene.add( model );

  };

  var parrotPosition = new THREE.Vector3( 0, 0, 2.5 );
  loader.load( ruta, gltf => onLoad( gltf, parrotPosition ) );

}

function createRenderer() {

  renderer = new THREE.WebGLRenderer( {alpha: true, antialias: true } );
  renderer.setSize( container.clientWidth, container.clientHeight );

  renderer.setPixelRatio( window.devicePixelRatio );

  renderer.gammaFactor = 2.2;
  renderer.gammaOutput = true;

  renderer.physicallyCorrectLights = true;

  container.appendChild( renderer.domElement );

}

function update() {

  const delta = clock.getDelta();

  for ( const mixer of mixers ) {

    mixer.update( delta );

  }

}

function render() {

  renderer.render( scene, camera );

}

function onWindowResize() {

  camera.aspect = container.clientWidth / container.clientHeight;

  // update the camera's frustum
  camera.updateProjectionMatrix();

  renderer.setSize( container.clientWidth, container.clientHeight );

}

window.addEventListener( 'resize', onWindowResize );

init('#banana3d','../Modelos/banana.glb', 2, 20);
//init('#caneca3d','../Modelos/caneca.glb', 2, 20);