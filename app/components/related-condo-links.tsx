import Link from 'next/link'

interface RelatedCondoLinksProps {
  currentBuilding?: string
  category?: 'luxury' | 'mid-rise' | 'loft' | 'condo-hotel' | 'strip' | 'summerlin' | 'henderson'
}

export default function RelatedCondoLinks({ currentBuilding, category }: RelatedCondoLinksProps) {
  const luxuryBuildings = [
    { name: 'Cosmopolitan', path: '/condos/cosmopolitan' },
    { name: 'Vdara', path: '/condos/vdara' },
    { name: 'Veer Towers', path: '/condos/veer-towers' },
    { name: 'Turnberry Place', path: '/condos/turnberry-place' },
    { name: 'Panorama Towers', path: '/condos/panorama-towers' },
    { name: 'Trump International', path: '/condos/trump-international' },
    { name: 'Waldorf Astoria', path: '/condos/waldorf-astoria' },
    { name: 'One Las Vegas', path: '/condos/one-las-vegas' },
  ]

  const midRiseBuildings = [
    { name: 'Altair at Green Valley', path: '/condos/altair' },
    { name: 'Terra Bella at Anthem', path: '/condos/terra-bella' },
    { name: 'The District at Green Valley', path: '/condos/the-district' },
    { name: 'Viera', path: '/condos/viera' },
    { name: 'Tramonto', path: '/condos/tramonto' },
    { name: 'Wimbledon Tennis Club', path: '/condos/wimbledon' },
  ]

  const loftBuildings = [
    { name: 'Juhl Lofts', path: '/condos/juhl-lofts' },
    { name: 'Newport Lofts', path: '/condos/newport-lofts' },
    { name: 'Soho Lofts', path: '/condos/soho-lofts' },
    { name: 'Fremont Street Lofts', path: '/condos/fremont-street-lofts' },
    { name: 'Eleventh Street Lofts', path: '/condos/eleventh-street-lofts' },
    { name: 'Summerlin Lofts', path: '/condos/summerlin-lofts' },
    { name: 'Loft 5', path: '/condos/loft-5' },
  ]

  const condoHotels = [
    { name: 'MGM Signature', path: '/condos/mgm-signature' },
    { name: 'Palms Place', path: '/condos/palms-place' },
  ]

  let relatedBuildings: { name: string; path: string }[] = []
  let categoryLink = '/condos'

  if (category === 'luxury' || category === 'strip') {
    relatedBuildings = luxuryBuildings.filter(b => b.path !== currentBuilding)
    categoryLink = '/condos/luxury'
  } else if (category === 'mid-rise' || category === 'summerlin' || category === 'henderson') {
    relatedBuildings = midRiseBuildings.filter(b => b.path !== currentBuilding)
    categoryLink = category === 'summerlin' ? '/condos/summerlin' : category === 'henderson' ? '/condos/henderson' : '/condos/mid-rise'
  } else if (category === 'loft') {
    relatedBuildings = loftBuildings.filter(b => b.path !== currentBuilding)
    categoryLink = '/condos/mid-rise'
  } else if (category === 'condo-hotel') {
    relatedBuildings = condoHotels.filter(b => b.path !== currentBuilding)
    categoryLink = '/condos/condo-hotels'
  }

  if (relatedBuildings.length === 0) {
    return null
  }

  return (
    <div className="bg-gray-100 p-8 rounded-lg mb-12">
      <h2 className="text-2xl font-black mb-4">Related Condo Buildings</h2>
      <p className="text-lg text-gray-700 mb-4">
        Explore other Las Vegas condos I specialize in selling:
      </p>
      <ul className="grid md:grid-cols-2 gap-3 mb-4">
        {relatedBuildings.slice(0, 6).map((building) => (
          <li key={building.path}>
            <Link
              href={building.path}
              className="text-primary hover:underline font-semibold"
            >
              {building.name}
            </Link>
          </li>
        ))}
      </ul>
      <p className="text-sm text-gray-600">
        <Link href={categoryLink} className="text-primary hover:underline font-semibold">
          View all {category === 'luxury' ? 'luxury' : category === 'mid-rise' ? 'mid-rise' : category === 'loft' ? 'loft' : category === 'condo-hotel' ? 'condo hotel' : category === 'strip' ? 'Strip' : category === 'summerlin' ? 'Summerlin' : category === 'henderson' ? 'Henderson' : ''} condos →
        </Link>
      </p>
    </div>
  )
}

