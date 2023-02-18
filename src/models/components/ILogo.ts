import type { IThumbnail } from "@/models/components/IThumbnail";

export interface ILogo {
    id: number
    name: string
    alternativeText: string
    caption: string,
    width: number,
    height: number,
    formats: {
        thumbnail: IThumbnail
    },
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
