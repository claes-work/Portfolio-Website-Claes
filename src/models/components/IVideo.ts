export interface IVideo {
    id: number,
    name: string
    alternativeText: string
    caption: string
    width: number | null
    height: number | null
    formats: object | null
    hash: string
    ext: string
    mime: string
    size: number
    url: string
    previewUrl: string | null
    provider: string,
    provider_metadata: object | null
    created_at: string
    updated_at: string
}
