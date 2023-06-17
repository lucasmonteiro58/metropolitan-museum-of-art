export interface IObject {
  GalleryNumber: string
  accessionNumber: string
  accessionYear: string
  additionalImages: any[]
  artistAlphaSort: string
  artistBeginDate: string
  artistDisplayBio: string
  artistDisplayName: string
  artistEndDate: string
  artistGender: string
  artistNationality: string
  artistPrefix: string
  artistRole: string
  artistSuffix: string
  artistULAN_URL: string
  artistWikidata_URL: string
  city: string
  classification: string
  constituents: Constituent[]
  country: string
  county: string
  creditLine: string
  culture: string
  department: string
  dimensions: string
  dynasty: string
  excavation: string
  geographyType: string
  isHighlight: boolean
  isPublicDomain: boolean
  isTimelineWork: boolean
  linkResource: string
  locale: string
  locus: string
  measurements: Measurement[]
  medium: string
  metadataDate?: Date
  objectBeginDate: number
  objectDate: string
  objectEndDate: number
  objectID: number
  objectName: string
  objectURL: string
  objectWikidata_URL: string
  period: string
  portfolio: string
  primaryImage: string
  primaryImageSmall: string
  region: string
  reign: string
  repository: string
  rightsAndReproduction: string
  river: string
  state: string
  subregion: string
  tags: null
  title: string
}

export interface Constituent {
  constituentID: number
  constituentULAN_URL: string
  constituentWikidata_URL: string
  gender: string
  name: string
  role: string
}

export interface Measurement {
  elementDescription: null
  elementMeasurements: ElementMeasurements
  elementName: string
}

export interface ElementMeasurements {
  Height: number
  Width: number
}
