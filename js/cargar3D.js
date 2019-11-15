

cargarObj(concha3d, '../Modelos/','seashell_obj',600);
cargarObj(delfin, '../Modelos/','10014_dolphin_v2_max2011_it2',600);
cargarObj(azul3d, '../Modelos/','10054_Whale_v2_L3',600);
cargarObj(pez2, '../Modelos/','GOLDFISH',600);
cargarObj(ave3d, '../Modelos/','10043_Seagull_v1_L3',400);

function cargarObj(lienzo, ruta, archivo, pos_camara){
var scene = new THREE.Scene();
var camera = new THREE.PerspectiveCamera( 75, lienzo.offsetWidth/lienzo.offsetHeight, 0.1, 8000 );
 
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
var MovimientoScena;
var MoverScena = false;
var tiempoTranscurrido = 0;
const mixers = [];
const clock = new THREE.Clock();
var animacion, animacion2, modelito;

function init(contenedorDOM, animated, path, camx, camy, camz) {

  let container;
  let camera;
  let renderer;
  let scene;

  container = document.querySelector( contenedorDOM );

  scene = new THREE.Scene();
  //scene.background = new THREE.Color( 0x8FBCD4 );

  //Camara
  camera = new THREE.PerspectiveCamera( 35, container.clientWidth / container.clientHeight, 1, 100 );
  camera.position.set( camx, camy, camz);
  //Luces
  const ambientLight = new THREE.HemisphereLight( 0xddeeff, 0x0f0e0d, 5 );

  const mainLight = new THREE.DirectionalLight( 0xffffff, 5 );
  mainLight.position.set( 10, 10, 10 );

  scene.add( ambientLight, mainLight );
  //Modelos
  const loader = new THREE.GLTFLoader();

  // A reusable function to set up the models. We're passing in a position parameter
  // so that they can be individually placed around the scene
  const onLoad = ( gltf, position ) => {

    const model = gltf.scene.children[ 0 ];
    model.position.copy( position );
    if(animated){
      const animation = gltf.animations[ 0 ];

      const mixer = new THREE.AnimationMixer( model );
      mixers.push( mixer );

      const action = mixer.clipAction( animation );
      const action2 = mixer.clipAction( gltf.animations[ 1 ] );
      
      action.play();
      action2.play();
      //action.clampWhenFinished = true;
      //action.loop = THREE.LoopOnce;
      animacion = action;
      animacion2 = action2;
    }
    scene.add( model );

  };

  const parrotPosition = new THREE.Vector3( 0, 0, 2.5 );
  loader.load( path, gltf => onLoad( gltf, parrotPosition ));

  //Render
  renderer = new THREE.WebGLRenderer( { antialias: true, alpha: true } );
  renderer.setSize( container.clientWidth, container.clientHeight );

  renderer.setPixelRatio( window.devicePixelRatio );

  renderer.gammaFactor = 2.2;
  renderer.gammaOutput = true;

  renderer.physicallyCorrectLights = true;

  container.onmouseenter = function(){
    //animacion.reset();
    animacion.crossFadeTo(animacion2, 1);
  }
  
  container.onmouseover = function(){
    /*
    var id = setInterval(frame, 1);
    MovimientoScena = scene;
    MoverScena = true;
    var pos = 0;
    function frame() {
        if (pos > 30) {
          //scene.rotation.x = 0.5;
          //console.log(Math.sin(pos*0.02));
            clearInterval(id);
          } else {
            pos++;
            //camera.position.z -=1;
            camera.lookAt(scene.position);
          }
          pos++;
    }
*/
};
container.onmouseout = function(){
    animacion2.crossFadeTo(animacion1, 1);
    var id = setInterval(frame, 1);
    var pos = 0;
    
    MoverScena = false;
    function frame() {
        if (pos > 30) {
          //camera.position.x = camx;
          //camera.position.y = camy;
          //camera.position.z = -camz;
          scene.rotation.x = 0;
          scene.rotation.y = 0;
          scene.rotation.z = 0;
            clearInterval(id);
          } else {
            pos++;
            //camera.position.z +=1;
            //camera.position.y -= (camera.position.y/30) + camy;
            //camera.position.x -= (camera.position.x/30) + camx; 
            scene.rotation.x -= scene.rotation.x/30;
            scene.rotation.y -= scene.rotation.y/30;
            camera.lookAt(scene.position);
          }
    
    }
};

  container.appendChild( renderer.domElement );
  renderer.setAnimationLoop( () => {

    if(MoverScena){
      MovimientoScena.rotation.x = 0.5 * Math.sin(1000*tiempoTranscurrido*Math.PI/180);
    }

    update();
    renderer.render( scene, camera );

  } );

}


function update() {

  const delta = clock.getDelta();
  tiempoTranscurrido += delta;
  for ( const mixer of mixers ) {

    mixer.update( delta );

  }

}

function onWindowResize() {

  camera.aspect = container.clientWidth / container.clientHeight;

  // update the camera's frustum
  camera.updateProjectionMatrix();

  renderer.setSize( container.clientWidth, container.clientHeight );

}

//window.addEventListener( 'resize', onWindowResize );

init('#banana3d', true, '../Modelos/banana.glb', 0, 3, 35);
init('#bolsa3d', false, '../Modelos/bolsa.glb',0, 1, 15);
init('#botella3d', false, '../Modelos/botella.glb',0, 1, 10);
init('#lata3d', true, '../Modelos/lata2.glb',0,1.5, 10);
init('#caneca3d', false, '../Modelos/caneca.glb',0, 4, 15);

//init('#banana3d','../Modelos/banana.glb', 2, 20);
//init('#caneca3d','../Modelos/caneca.glb', 2, 20);