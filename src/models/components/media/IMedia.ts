import type { BaseMedia } from "@/models/components/media/BaseMedia";
import type { IFormats } from "@/models/components/media/IFormats";

export interface IMedia extends BaseMedia {
    id: number
    alternativeText: string
    caption: string
    formats: IFormats | null
    previewUrl: string | null
    provider: string,
    provider_metadata: object | null
}
