import type { IObject } from '@/types/IObject'
import { defineStore } from 'pinia'

export const useModalStore = defineStore('modal', () => {
  const obj = ref<IObject>({
    objectID: 11932,
    isHighlight: false,
    accessionNumber: '95.14.112',
    accessionYear: '1895',
    isPublicDomain: true,
    primaryImage: 'https://images.metmuseum.org/CRDImages/ad/original/ap95.14.112.jpg',
    primaryImageSmall: 'https://images.metmuseum.org/CRDImages/ad/web-large/ap95.14.112.jpg',
    additionalImages: [
      'https://images.metmuseum.org/CRDImages/es/original/DP-18258-039.jpg',
      'https://images.metmuseum.org/CRDImages/es/original/DP-18258-037.jpg',
      'https://images.metmuseum.org/CRDImages/es/original/DP-18258-038.jpg'
    ],
    constituents: [
      {
        constituentID: 162319,
        role: 'Artist',
        name: 'Walter Robertson',
        constituentULAN_URL: 'http://vocab.getty.edu/page/ulan/500008048',
        constituentWikidata_URL: 'https://www.wikidata.org/wiki/Q20855654',
        gender: ''
      }
    ],
    department: 'The American Wing',
    objectName: 'Painting, miniature',
    title: 'Portrait of a Lady',
    culture: 'American',
    period: '',
    dynasty: '',
    reign: '',
    portfolio: '',
    artistRole: 'Artist',
    artistPrefix: '',
    artistDisplayName: 'Walter Robertson',
    artistDisplayBio: 'Irish, Dublin ca. 1750–1802 Fatehpur, India',
    artistSuffix: '',
    artistAlphaSort: 'Robertson, Walter',
    artistNationality: 'Irish',
    artistBeginDate: '1750',
    artistEndDate: '1802',
    artistGender: '',
    artistWikidata_URL: 'https://www.wikidata.org/wiki/Q20855654',
    artistULAN_URL: 'http://vocab.getty.edu/page/ulan/500008048',
    objectDate: 'ca. 1795',
    objectBeginDate: 1795,
    objectEndDate: 1795,
    medium: 'Watercolor on ivory',
    dimensions: '2 7/8 x 2 1/4 in. (7.3 x 5.7 cm)',
    measurements: [
      {
        elementName: 'Overall',
        elementDescription: null,
        elementMeasurements: { Height: 7.3, Width: 5.715 }
      }
    ],
    creditLine:
      'The Moses Lazarus Collection, Gift of Josephine and Sarah Lazarus, in memory of their father, 1888-95',
    geographyType: '',
    city: '',
    state: '',
    county: '',
    country: '',
    region: '',
    subregion: '',
    locale: '',
    locus: '',
    excavation: '',
    river: '',
    classification: '',
    rightsAndReproduction: '',
    linkResource: '',

    repository: 'Metropolitan Museum of Art, New York, NY',
    objectURL: 'https://www.metmuseum.org/art/collection/search/11932',
    tags: null,
    objectWikidata_URL: 'https://www.wikidata.org/wiki/Q20177752',
    isTimelineWork: false,
    GalleryNumber: ''
  })
  const showing = ref(false)

  function showModal(object: IObject) {
    obj.value = object
    showing.value = true
  }

  function hideModal() {
    showing.value = false
  }

  return {
    obj,
    showing,
    showModal,
    hideModal
  }
})
