import type { IMedia } from "@/models/components/media/IMedia";

export interface IFooterLink {
    id: number
    text: string
    link: string
    titleTag: string
    openNewTab: boolean
    icon: IMedia | null
}
