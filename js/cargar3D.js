

cargarObj(concha3d, '../Modelos/','seashell_obj',0,400,1200);
cargarObj(delfin, '../Modelos/','10014_dolphin_v2_max2011_it2',-800,-90,800);
cargarObj(azul3d, '../Modelos/','10054_Whale_v2_L3',-400,0,1200);
cargarObj(pez2, '../Modelos/','GOLDFISH',1100,200,1100);
cargarObj(ave3d, '../Modelos/','10043_Seagull_v1_L3',-300,300,1200);

function cargarObj(lienzo, ruta, archivo, camx, camy, camz){
var scene = new THREE.Scene();
var camera = new THREE.PerspectiveCamera( 35, lienzo.offsetWidth/lienzo.offsetHeight, 0.1, 8000 );
 
var renderer = new THREE.WebGLRenderer({ canvas: lienzo,alpha: true,antialias: true});
renderer.setClearColor( 0x000000, 0 );
renderer.setSize( lienzo.offsetWidth, lienzo.offsetHeight);
//document.body.appendChild( renderer.domElement );
 
camera.position.x = camx;
camera.position.y = camy;
camera.position.z = camz;
camera.lookAt(scene.position);

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
var mesh= new THREE.Object3D();
var mtlLoader = new THREE.MTLLoader();
//mtlLoader.setTexturePath('/examples/3d-obj-loader/assets/');
mtlLoader.setPath(ruta);
mtlLoader.load(archivo+'.mtl', function (materials) {
 
    materials.preload();
 
    var objLoader = new THREE.OBJLoader();
    objLoader.setMaterials(materials);
    objLoader.setPath(ruta);
    objLoader.load(archivo+'.obj', function (object) {
      object.position.y -= 60;
      mesh.add(object);
        scene.add(mesh);
        
        //mesh = new THREE.Mesh(object,materials)
    });
    //mesh = objLoader;
});
//
var Hover = false;
lienzo.onmouseover = function(){
  Hover = true;
    
    tRotate(mesh, {x:0,y:2*Math.PI,z:0}, 500, 0 );

    new TWEEN.Tween(camera.position)
          .delay(0)
          .to( {
                  x: camx/1.4,            
                  y: camy,
                  z: camz/1.4,            
              }, 500 )
          .easing(TWEEN.Easing.Quadratic.Out)
          .start();
};
lienzo.onmouseout = function(){
  Hover = false;
  
  mesh.rotation.x = 0;
  mesh.rotation.y = 0;
  mesh.rotation.z = 0;
    
    new TWEEN.Tween(camera.position)
          .delay(0)
          .to( {
                  x: camx,            
                  y: camy,
                  z: camz,            
              }, 1000 )
          .easing(TWEEN.Easing.Quadratic.Out)
          .start();
};

function tRotate( obj, angles, delay, pause ) {
  new TWEEN.Tween(mesh.rotation)
          .delay(pause)
          .to( {
                  x: angles.x,            
                  y: angles.y,
                  z: angles.z,            
              }, delay )
          .easing(TWEEN.Easing.Quadratic.Out)
          .start();
          
  }
  
 var tiempo = 0;
var animate = function () {
  requestAnimationFrame( animate );
  TWEEN.update();
  renderer.render(scene, camera);
  if(Hover){
  scene.rotation.x = 0.1 * Math.sin(tiempo*Math.PI/180);
  scene.rotation.y = 0.1 * Math.sin(1.2*tiempo*Math.PI/180);
  scene.rotation.z = 0.1 * Math.sin(1.4*tiempo*Math.PI/180);
  tiempo++;}
  else{
    tiempo = 0;
    scene.rotation.x /= 1.6;
    scene.rotation.y /= 1.6;
    scene.rotation.z /= 1.6;
  }
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
var animacion = [], animacion2 = [], modelito;

function init(contenedorDOM, animated, path, camx, camy, camz, loop0, loop1) {

  let container;
  let camera;
  let renderer;
  let scene;
  var Multiplicador = 0.5;

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
      const animation = gltf.animations[ loop0 ];

      const mixer = new THREE.AnimationMixer( model );
      mixers.push( mixer );

      const action = mixer.clipAction( animation );
      const action2 = mixer.clipAction( gltf.animations[ loop1 ] );
      action.setDuration(0.5);
      if(contenedorDOM == '#caneca3d' || contenedorDOM == '#caneca3d2'){
        camera.lookAt(scene.position);
        camera.position.y+=1;
        camera.position.z-=1;
        action2.play();
        action.play();
        action.clampWhenFinished = true;
        action.loop = THREE.LoopOnce;
        action2.clampWhenFinished = true;
        action2.loop = THREE.LoopOnce;
        animacion.push(action);
        animacion2.push(action2);
        
      }else{
      action2.play();
      action.play();
      action.clampWhenFinished = true;
      action.loop = THREE.LoopOnce;
      animacion.push(action);
      animacion2.push(action2);
      }
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
  /*
  container.onmouseenter = function(){
    //animacion.reset();
    //MovimientoScena = scene;
    animacion[MovimientoScena].reset();
    //animacion2[0].crossFadeTo(animacion[0], 0);
    
  }*/
  $( "#bolsa3d" ).mouseenter(function() {
    Multiplicador = 0.1;
    animacion[0].reset();
    animacion2[0].crossFadeTo(animacion[0], 0.1);
  })
  .mouseout(function() {
    Multiplicador = 0.5;
    animacion2[0].reset();
    animacion[0].crossFadeTo(animacion2[0], 1);
  });
  $( "#bolsa3d2" ).mouseenter(function() {
    Multiplicador = 0.1;
    animacion[1].reset();
    animacion2[1].crossFadeTo(animacion[1], 0.1);
  })
  .mouseout(function() {
    Multiplicador = 0.5;
    animacion2[1].reset();
    animacion[1].crossFadeTo(animacion2[1], 1);
  });
  $( "#lata3d" ).mouseenter(function() {
    Multiplicador = 0.05;
    animacion[4].reset();
    animacion2[4].crossFadeTo(animacion[4], 0.1);
  })
  .mouseout(function() {
    Multiplicador = 0.5;
    animacion2[4].reset();
    animacion[4].crossFadeTo(animacion2[4], 3);
  });
  $( "#botella3d" ).mouseenter(function() {
    animacion[5].reset();
    animacion2[5].crossFadeTo(animacion[5], 0.1);
  })
  .mouseout(function() {
    animacion2[5].reset();
    animacion[5].crossFadeTo(animacion2[5], 1);
  });
  $( "#banana3d" ).mouseenter(function() {
    animacion[6].reset();
    animacion2[6].crossFadeTo(animacion[6], 0.1);
  })
  .mouseout(function() {
    animacion2[6].reset();
    animacion[6].crossFadeTo(animacion2[6], 4);
  });


  
  container.onmouseover = function(){
    if(contenedorDOM != '#caneca3d' && contenedorDOM != '#caneca3d2'){
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
            camera.position.z -=0.05;
            //camera.lookAt(scene.position);
          }
          pos++;
    }
  }
};
container.onmouseout = function(){
  if(contenedorDOM != '#caneca3d' && contenedorDOM != '#caneca3d2'){
    var id = setInterval(frame, 1);
    var pos = 0;
    
    MoverScena = false;
    function frame() {
        if (pos > 30) {
          camera.position.x = camx;
          camera.position.y = camy;
          camera.position.z = camz;
          scene.rotation.x = 0;
          scene.rotation.y = 0;
          scene.rotation.z = 0;
            clearInterval(id);
          } else {
            pos++;
            camera.position.z +=0.05;
            //camera.position.y -= (camera.position.y/30) + camy;
            //camera.position.x -= (camera.position.x/30) + camx; 
            scene.rotation.x -= scene.rotation.x/30;
            scene.rotation.y -= scene.rotation.y/30;
            //camera.lookAt(scene.position);
          }
    
    }
  }
};

  container.appendChild( renderer.domElement );
  renderer.setAnimationLoop( () => {

    if(MoverScena){
      MovimientoScena.rotation.x = Multiplicador * Math.sin(10*tiempoTranscurrido*Math.PI/180);
      MovimientoScena.rotation.y = Multiplicador * Math.sin(50 + 100*tiempoTranscurrido*Math.PI/180);
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

init('#banana3d', true, '../Modelos/banana.glb', 0, 3, 30,1, 0);
init('#bolsa3d', true, '../Modelos/bolsa.glb',0, .5, 15,1, 0);

init('#botella3d', true, '../Modelos/botella.glb',0, 1.2, 6.1,0, 1);
init('#lata3d', true, '../Modelos/lata.glb',0,.6, 10,0, 3);
init('#bolsa3d2', true, '../Modelos/bolsa.glb',0, .5, 15,1, 0);
init('#caneca3d', true, '../Modelos/caneca.glb',-4, 3, 7,0, 1);
init('#caneca3d2', true, '../Modelos/caneca2.glb',4, 3, 7,0, 1);

function rarar(){
  animacion[2].reset();
  animacion2[2].reset();
}
function rarar2(){
  animacion[3].reset();
  animacion2[3].reset();
}
//init('#tortuga3d', false, '../Modelos/tortuga.glb',0, 1, 7,0, 0);
//init('#banana3d','../Modelos/banana.glb', 2, 20);
//init('#caneca3d','../Modelos/caneca.glb', 2, 20);