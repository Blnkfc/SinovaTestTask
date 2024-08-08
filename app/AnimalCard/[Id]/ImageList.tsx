'use client'
import Image from 'next/image'
import React, { useEffect, useRef, useState } from 'react'

const ImageList = ({
  data,
}: {
  data: {
    url: string
  }[]
}) => {
  // State and Ref initialization
  const [currentImg, setCurrentImg] = useState(0)
  const [carouselSize, setCarouselSize] = useState({ width: 0, height: 0 })
  const carouselRef = useRef(null)
    console.log(`IMG DATA: ${JSON.stringify(data)}`)
  // useEffect to get the initial carousel size
  useEffect(() => {
    let elem = carouselRef.current as unknown as HTMLDivElement
    let { width, height } = elem.getBoundingClientRect()
    if (carouselRef.current) {
      setCarouselSize({
        width,
        height,
      })
    }
  }, [])
  data.map((v) => console.log(`DDDD: ${JSON.stringify(v)}`))

  return (
    <div className='flex flex-col items-center w-full' >
      {/* Carousel container */}
      <div className="relative w-[15em] h-[10em] overflow-hidden rounded-md 
      xl:w-[40em] xl:h-[30em] md:w-[25em] md:h-[18em]">
        {/* Image container */}
        <div
          ref={carouselRef}
          style={{
            left: -currentImg * carouselSize.width ,
          }}
          className="absolute flex h-full w-full transition-all duration-300"
        >
          {/* Map through data to render images */}
          {data.map((v, i) => (
            <div key={i} className="relative h-full w-full shrink-0">
              <Image
                className="pointer-events-none"
                alt={`carousel-image-${i}`}
                fill
                src={v.toString() || ''}
              />
            </div>
          ))}
        </div>
      </div>

      {/* Navigation buttons */}
      <div className="mt-3 flex justify-center">
        <button
          disabled={currentImg === 0}
          onClick={() => setCurrentImg((prev) => prev - 1)}
          className={`border px-4 py-2 font-bold ${currentImg === 0 && 'opacity-50'}`}
        >
          {'<'}
        </button>
        <button
          disabled={currentImg === data.length - 1}
          onClick={() => setCurrentImg((prev) => prev + 1)}
          className={`border px-4 py-2 font-bold ${currentImg === data.length - 1 && 'opacity-50'}`}
        >
          {'>'}
        </button>
      </div>
    </div>
  )
}

export default ImageList
