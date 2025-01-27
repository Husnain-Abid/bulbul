import React, { useState, useRef, useEffect } from "react"
import DroneCard from "./DroneCard"
import { ArrowLeft, ArrowRight } from "lucide-react"
import { useSelector } from "react-redux"

const DroneCarousel = () => {
  const [scrollPosition, setScrollPosition] = useState(0)
  const [isEndReached, setIsEndReached] = useState(false)
  const darkMode = useSelector((state) => state.theme.darkMode);

  const carouselRef = useRef(null)

  // Sample drone data
  const drones = [{ id: 1 }, { id: 2 }, { id: 3 }, { id: 4 }, { id: 5 }]

  const scroll = (direction) => {
    const container = carouselRef.current
    if (container) {
      const scrollAmount = 420 // card width + gap
      const newPosition =
        direction === "left"
          ? Math.max(scrollPosition - scrollAmount, 0)
          : Math.min(scrollPosition + scrollAmount, container.scrollWidth - container.clientWidth)

      container.scrollTo({
        left: newPosition,
        behavior: "smooth",
      })
      setScrollPosition(newPosition)
    }
  }

  useEffect(() => {
    const container = carouselRef.current
    if (container) {
      const maxScrollPosition = container.scrollWidth - container.clientWidth
      setIsEndReached(scrollPosition >= maxScrollPosition)
    }
  }, [scrollPosition])

  return (
    <div className="relative w-full">
      {/* Scroll Buttons */}
      {scrollPosition > 0 && (
        <button
          onClick={() => scroll("left")}
          className={`absolute left-0 top-1/2 -translate-y-1/2 z-10 p-2  ${darkMode ? "bg-black hover:bg-gray-70" : "bg-customWhite hover:bg-gray-50" }  rounded-full shadow-md `}
        >
          <ArrowLeft />
        </button>
      )}

      {/* Carousel Container */}
      <div ref={carouselRef} className="flex gap-4 overflow-x-hidden scroll-smooth py-4">
        {drones.map((drone) => (
          <div key={drone.id} className="flex-none">
            <DroneCard drone={drone} />
          </div>
        ))}
      </div>

      {/* Right scroll button - shown if there's more content to scroll */}
      {!isEndReached && (
        <button
          onClick={() => scroll("right")}
          className={`absolute right-0 top-1/2 -translate-y-1/2 z-10 p-2 ${darkMode ? "bg-black hover:bg-gray-70" : "bg-customWhite hover:bg-gray-50" }  rounded-full shadow-md `}
        >
          <ArrowRight />
        </button>
      )}
    </div>
  )
}

export default DroneCarousel
