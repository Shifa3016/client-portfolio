"use client";
import { useEffect, useState } from "react";
import Image from "next/image";
import Heading from "../components/Heading";

export default function AftabGallery() {
  const [images, setImages] = useState([]);

  useEffect(() => {
    fetch("/api/aftab")
      .then((res) => res.json())
      .then((data) => setImages(data))
      .catch((err) => console.error("Error fetching images:", err));
  }, []);

  return (
    <div className="pt-[56px] min-h-[100vh]">
        <div className="mx-8 my-3">
      <Heading title="Gallery" />
      </div>
      <div className="mx-12 my-3 grid grid-cols-1 sm:grid-cols-2 gap-6">
        {images.map((src, index) => (
          <div key={index} className="relative w-full h-[350px] overflow-hidden rounded-lg shadow-lg">
            <Image 
              src={`/photos/${src}`} 
              alt={`Image ${index + 1}`} 
              fill 
              className="object-contain" // Keeps aspect ratio for all images
            />
          </div>
        ))}
      </div>
    </div>
  );
}




