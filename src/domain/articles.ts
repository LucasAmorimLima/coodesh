export interface Articles {
    id: number
    featured: boolean
    title: string
    url: string
    imageUrl: string
    newsSite: string
    summary: string
    publishedAt: string
    launches: launches[]
    events: events[]
}
type launches = {
    id: string
    provider: string
}
type events = {
    id: string
    provider: string
}
