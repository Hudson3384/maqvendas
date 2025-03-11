import Image from "next/image"
import styles from "./ImageGrid.module.css"

const images = [
  {
    url: 'https://www.wirtgen-group.com/pt-br/empresa/ciber/',
    alt: 'Ciber',
    src: '/brands/image1.png',
  },
  {
    url: 'https://equipmentsales.dllgroup.com/',
    alt: 'DLL Equipment Showroom',
    src: '/brands/image2.png',
  },
  {
    url: 'https://www.bradescoseguros.com.br/clientes',
    alt: 'Bradesco Seguros',
    src: '/brands/image3.png',
  },
  {
    url: 'https://www.wirtgen-group.com/ocs/pt-br/voegele/produtos-voegele-94-c/',
    alt: 'VOGELE',
    src: '/brands/image4.png',
  },
  {
    url: 'https://www.wirtgen-group.com/pt-br/empresa/hamm/',
    alt: 'HAMM',
    src: '/brands/image5.png',
  },
  {
    url: 'https://www.wirtgen-group.com/pt-br/',
    alt: 'WIRTGEN GROUP',
    src: '/brands/image6.png',
  },
  {
    url: 'https://www.terex.com/pt-br',
    alt: 'TEREX',
    src: '/brands/image7.png',
  },
  {
    url: 'https://www.komatsu.com.br/',
    alt: 'TEREX',
    src: '/brands/image8.png',
  },
  {
    url: 'https://www.caterpillar.com/pt.html',
    alt: 'Catterpillar',
    src: '/brands/image9.png',
  },
  {
    url: 'https://www.newholland.com.br/',
    alt: 'New Holland',
    src: '/brands/image10.png',
  },
  {
    url: 'https://dynapac.com/br-pt',
    alt: 'Dynapac',
    src: '/brands/image11.png',
  },
]

export default function ImageGrid() {


  return (
    <div className={styles.grid}>
      {images.map((src) => (
        <div
          key={src.url}
          className={`${styles.imageWrapper}`}
        >
          <a href={src.url} target="_blank">
            <Image
              src={src.src || "/placeholder.svg"}
              alt={src.alt}
              fill
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
              className={styles.image}
            />
          </a>
        </div>
      ))}
    </div>
  )
}

