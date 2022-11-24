import React, { useEffect, useRef, useMemo, useLayoutEffect} from "react";
import { Canvas, useFrame , useThree} from "@react-three/fiber";
import elevationarray from "/Elevation_data/Elevation";
import * as THREE from 'three';
import CameraControls from "camera-controls";
import { Container} from "@chakra-ui/react";
import { Suspense } from "react";
import { extend } from '@react-three/fiber'
import { FontLoader } from 'three/examples/jsm/loaders/FontLoader'
import { TextGeometry } from 'three/examples/jsm/geometries/TextGeometry'

extend({ TextGeometry })

const color_scheme=['#3BBA9C','#2E3047','#43455C','#3C3F58','#707793', '#89a0e0']
CameraControls.install({ THREE })

function Threejs() {
  return (
      <>
        <Container display={{base:"none", lg:"block"}} h='calc(100vh)' 
                  w='calc(100vw)' margin={'0'} padding='0'>
          <Canvas style={{ height: "120vh", width: "100vw" }}
            camera = {{position: [0.0,6.1,0.0]}}>
              <Suspense fallback={null}>
                  {/* <MultipleBoxes/>
                  <MultipleAchievement />
                  <directionalLight
                    color='#FFFF'
                    intensity={0.7}
                    position={[8, -4, 1]}
                  /> */}
                  <Box position={[0,0,0]} height={1} />
              </Suspense>
              <Controls_D />
              {/* <OrbitControls target={[-0.2,1,0]} maxDistance={5} /> */}
          </Canvas>
        </Container>
        <Container display={{base:"block", lg:"none"}} margin='0' h='calc(100vh)' 
                  w='calc(100vw)' left='0' padding='0'>
          <Canvas style={{ height: "120vh", width: "100vw" }}>
            <Suspense fallback={null}>
              {/* <MultipleBoxes/>
              <MultipleAchievement />
              <directionalLight
                color='#FFFF'
                intensity={0.7}
                position={[8, -2, 1]}
              /> */}
              <Box position={[0,0,0]} height={1} />
            </Suspense>
            <Controls_M />
          </Canvas>
        </Container>
      </>
  );
}

export default Threejs;

function Controls_M() {
  const camera = useThree((state) => state.camera)
  const gl = useThree((state) => state.gl)
  const controls = useMemo(() => new CameraControls(camera, gl.domElement), [])
  controls.enabled = false
  let t = 0
  return useFrame((state, delta) => {
    if(t<1000000)
    {
      t+=10
      state.camera.position.z = -1.6
      state.camera.position.y = 5.1 + 4 *  Math.exp(-t/4000)
      state.camera.position.x = 0.1 + 12 * Math.exp(t/3000)/ (1+Math.exp(t/3000)) - 6
      controls.setLookAt(state.camera.position.x, state.camera.position.y, state.camera.position.z, 0, 1, -1.7, true)
    }
    return controls.update(delta)
  })
}

function Controls_D() {
  const camera = useThree((state) => state.camera)
  const gl = useThree((state) => state.gl)
  const controls = useMemo(() => new CameraControls(camera, gl.domElement), [])
  controls.enabled = false
  let t = 0
  return useFrame((state, delta) => {
    if(t<10000000)
    {
      t+=10
      state.camera.position.z = -0.3
      state.camera.position.y = 5.1 + 2 * Math.exp(-t/2000)
      state.camera.position.x = 0.1 + 3 * Math.exp(t/1000)/(1+Math.exp(t/1000))
      controls.setLookAt(state.camera.position.x, state.camera.position.y, state.camera.position.z, -0.2, 1, -0.3, true)
    }
        return controls.update(delta)
  })
}

function Box(props){
    const ref = useRef()
  return (
    <mesh
      position={props.position}>
      <boxGeometry args={[0.08, props.height, 0.08]} ref={ref} />
      <meshStandardMaterial color={HeightGradientMapper(props.height)}  roughness={0.9}
        metalness={0.0}/>
    </mesh>
  );
}

function HeightGradientMapper(height){

  if(height>0.8){
    return color_scheme[1]
  }
  else if(height>0.5){
    return color_scheme[2]
  }
  else if(height>0.4){
    return color_scheme[2]
  }
  else if(height>0.3){
    return color_scheme[3]
  }
  else if(height>0.2){
    return color_scheme[3]
  }
  else if(height>0.15){
    return color_scheme[4]
  }
  else if (height>0.1){
    return color_scheme[4]
  }
  else{
    return color_scheme[4]
  }
}

function MultipleBoxes() {
 return (
   <group>
      {elevationarray.map((latitude, index) => {
       return (
          <group>
            {latitude.map((altitude, lindex) => {
             return <>{altitude>12.01 ? <Box position = {[-2.0 +index/10, (altitude-12)/300 +1, -7.7 + 12 - lindex/10]} height = {(altitude-12)/150}/> : <></>}</>;
           })}
         </group>
        );
      })}
   </group>
  );
}

const MultipleAchievement = () => {
  const myFont = require('../utils/Gentilis.json');
  const font = new FontLoader().parse(myFont);
  
  return(
    <>
    {achievement.map((array, index) => {
      return(
        <group>
          <mesh position={[-2.0 +array.location[0]/10, 2.1+array.location[2], -7.7 + 12 - array.location[1]/10]} rotation={[0,Math.PI/2,0]}>
            <textGeometry args={[array.name, {font, size:0.2, height: 0.1}]}/>
            <meshLambertMaterial attach='material' color={color_scheme[0]}/>
          </mesh>
          {array.description && <mesh position={[-2.0 +array.location[0]/10, 1.95+array.location[2], -7.7 + 12 - array.location[1]/10]} rotation={[0,Math.PI/2,0]}>
            <textGeometry args={[array.description, {font, size: 0.1, height: 0.1}]}/>
            <meshLambertMaterial attach='material' color={color_scheme[5]} metalness={0.3}/>
          </mesh>}
          {array.country && <mesh position={[-2.0 +array.location[0]/10, 1.62+array.location[2], -7.7 + 12 - array.location[1]/10]} rotation={[0,Math.PI/2,0]}>
            <textGeometry args={[array.country, {font, size: 0.08, height: 0.1}]}/>
            <meshLambertMaterial attach='material' color={color_scheme[5]} metalness={0.3}/>
          </mesh>}
          {array.year && <mesh position={[-2.0 +array.location[0]/10, 1.72+array.location[2], -7.7 + 12 - array.location[1]/10]} rotation={[0,Math.PI/2,0]}>
            <textGeometry args={[array.year, {font, size: 0.08, height: 0.1}]}/>
            <meshLambertMaterial attach='material' color={color_scheme[5]} metalness={0.3}/>
          </mesh>}
          {array.about && <mesh position={[-2.0 +array.location[0]/10, 1.83+array.location[2], -7.7 + 12 - array.location[1]/10]} rotation={[0,Math.PI/2,0]}>
            <textGeometry args={[array.about, {font, size: 0.08, height: 0.1}]}/>
            <meshLambertMaterial attach='material' color={color_scheme[5]} metalness={0.3}/>
          </mesh>}
          <Point location = {array.location}/>
          <mesh rotation={[0,0,0]} position={[-1.95 +array.location[0]/10, 1.95+array.location[2], -7.65 + 12 - array.location[1]/10]}>
              <boxGeometry args={[0.08, 0.75, 0.025]} />
              <meshStandardMaterial color={color_scheme[0]} roughness={0.9}
            metalness={0.0}/>
          </mesh>
        </group>
      )
      })}
    </>
    )
}

const Point = (props) => {
  const radius = 0.15;
  const octahedron = new THREE.OctahedronGeometry(radius);
  return(
    <mesh rotation={[0,-Math.PI*60/180,0]} position={[-2.0 +props.location[0]/10, 1.4+props.location[2], -7.98 + 12 - props.location[1]/10]}>
      <lineSegments>
        <edgesGeometry attach="geometry" args={[octahedron]}/>
        <lineBasicMaterial color={color_scheme[0]} />
      </lineSegments>
    </mesh>
  )
}

const achievement = 
  [
    {
      location: [10,40, 0],
      country: 'Virtual, Switzerland',
      name: 'IPhO',
      description: 'Silver Medal',
      about: "International Physics Olympiad",
      year: 'July, 2022',
    },
    {
      location: [16,56, 0.7],
      country: 'Virtual, India',
      name: 'APhO',
      description: 'Bronze Medal',
      about: "Asian Physics Olympiad",
      year: 'May, 2022',
    },
    {
      location: [23,65, -0.1],
      country: 'Singapore',
      name: 'NTU',
      description: 'Undergraduate',
      about: "ASEAN Scholar",
      year: '2022 - 2026',
    },
    {
      location: [20,65, 0.55],
      country: 'Thailand',
      name: 'KVIS',
      description: 'High School',
      about: "Kamnoetvidya Science Academy",
      year: '2019 - 2022',
    },
  ]