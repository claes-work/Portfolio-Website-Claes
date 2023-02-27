import type { IMedia } from "@/models/components/media/IMedia";

export interface ILink {
    id: number
    text: string
    link: string
    titleTag: string
    openNewTab: boolean
    icon: IMedia
    file: IMedia
}
