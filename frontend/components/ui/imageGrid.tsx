import Image from "next/image"

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
    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 md:gap-8 items-center justify-items-center">
      {images.map((image) => (
        <div
          key={image.url}
          className="w-full max-w-[200px] aspect-[3/2] relative group"
        >
          <a 
            href={image.url} 
            target="_blank"
            rel="noopener noreferrer"
            className="block w-full h-full"
          >
            <Image
              src={image.src}
              alt={image.alt}
              fill
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
              className="object-contain p-2 transition-all duration-300 group-hover:scale-105"
            />
          </a>
        </div>
      ))}
    </div>
  )
}

