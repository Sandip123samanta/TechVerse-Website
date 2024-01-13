import React, { Suspense } from 'react';
import { Model } from './Tshirtmjb3d';
import { Canvas } from '@react-three/fiber';
import { OrbitControls } from '@react-three/drei';
import './style.css';
import Link from 'next/link';

function index() {
  return (
    <div className="flex flex-col justify-center items-center text-white">
      <div>
        <h1 className="text-4xl md:text-8xl font-extrabold">OUR MERCHANDISE</h1>
      </div>
      <div className="main md:p-10 md:ml-10 ml-0 overflow-hidden">
        <div className="textContainer flex flex-col justify-center md:w-[60vw] w-[100vw]">
          <p className="md:text-3xl text-xl md:mb-24 mb-10 md:mt-10 mt-5 md:p-0 p-5">
            Stand out from the crowd and show your support for the Techverse
            community with our exclusive merchandise. Don't miss out on this
            unique opportunity to own an official Techverse T-shirt that is not
            only fashionable but also a great way to connect with like-minded
            individuals who share your passion for this iconic brand. <br />
            <br />
            So,upgrade your wardrobe today and join the Techverse community with
            our official merchandise T-shirt!
          </p>
          <div className="flex justify-center items-center">
            <Link href="#">
              <div className="buynow">Buy Now</div>
            </Link>
          </div>
        </div>
        <div className="canvasContainer">
          <Canvas camera={{ position: [0, 1, 3], fov: 60 }}>
            <OrbitControls
              enablePan={false}
              enableZoom={false}
              minPolarAngle={Math.PI / 2.2}
              maxPolarAngle={Math.PI / 2.2}
            />
            <directionalLight position={[0, 5, 0]} intensity={5} />
            <directionalLight position={[-5, 0, 0]} intensity={2} />
            <directionalLight position={[5, 0, 0]} intensity={2} />

            <ambientLight intensity={5} />
            <group position={[0, -1.2, 0]}>
              <Suspense fallback={<Loading />}>
                <Model />
              </Suspense>
            </group>
          </Canvas>
        </div>
      </div>
    </div>
  );
}

export default index;

function Loading() {
  return <h4 className="text-white text-xl">Merch is Loading</h4>;
}
