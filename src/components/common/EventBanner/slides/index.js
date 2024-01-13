import React from 'react';
import Link from 'next/link';

function index({
  bgImage,
  image1,
  image2,
  image3,
  event1,
  event2,
  event3,
  fees1,
  fees2,
}) {
  return (
    <Link href="#" className="w-full h-full">
      <div
        style={{
          backgroundImage: `url(${bgImage})`,
          backgroundRepeat: 'no-repeat',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
        className="w-full h-full p-3"
      >
        <div className="bg-white bg-opacity-[0.1] w-full h-full rounded-lg flex border border-white">
          <div className="h-full w-auto md:flex hidden items-center">
            <div
              style={{
                backgroundImage: `url(${image1})`,
                backgroundRepeat: 'no-repeat',
                backgroundSize: 'contain',
                backgroundPosition: 'left',
              }}
              className="h-[90%] w-[15vw] ml-3"
            />
            <div
              style={{
                backgroundImage: `url(${image2})`,
                backgroundRepeat: 'no-repeat',
                backgroundSize: 'contain',
                backgroundPosition: 'left',
              }}
              className="h-[90%] w-[15vw]"
            />
            {image3 ? (
              <div
                style={{
                  backgroundImage: `url(${image3})`,
                  backgroundRepeat: 'no-repeat',
                  backgroundSize: 'contain',
                  backgroundPosition: 'left',
                }}
                className="h-[90%] w-[15vw]"
              />
            ) : (
              ''
            )}
          </div>
          <div className="h-full w-full flex flex-col justify-center items-center">
            <h1 className="text-white md:text-4xl text-3xl font-extrabold">
              Spacial Offer
            </h1>
            <div className="text-[#FFE500] md:text-3xl text-2xl mt-5">
              {event3 ? (
                <p>
                  {`${event1} + ${event2}`} + <br /> {event3}
                </p>
              ) : (
                <p>{`${event1} + ${event2}`} </p>
              )}
            </div>
            <div className="text-white text-2xl font-young mt-4">
              {fees2 ? (
                <p>
                  {`Single Person - ${fees1}/- only`}
                  <br /> {`Two Person - ${fees2}/- only`}
                </p>
              ) : (
                <p>Participation fees - {fees1}/- only</p>
              )}
            </div>
            <div />
          </div>
        </div>
      </div>
    </Link>
  );
}

export default index;
