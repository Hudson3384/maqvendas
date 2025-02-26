"use client"

import { useState } from "react"
import Image from "next/image"
import styles from "./ImageGrid.module.css"

const images = Array.from({ length: 11 }, (_, i) => `/brands/image${i + 1}.png`)

export default function ImageGrid() {
  const [zoomedIndex, setZoomedIndex] = useState<number | null>(null)

  const handleImageClick = (index: number) => {
    setZoomedIndex(zoomedIndex === index ? null : index)
  }

  return (
    <div className={styles.grid}>
      {images.map((src, index) => (
        <div
          key={src}
          className={`${styles.imageWrapper} ${zoomedIndex === index ? styles.zoomed : ""}`}
          onClick={() => handleImageClick(index)}
        >
          <Image
            src={src || "/placeholder.svg"}
            alt={`Image ${index + 1}`}
            fill
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            className={styles.image}
          />
        </div>
      ))}
    </div>
  )
}

