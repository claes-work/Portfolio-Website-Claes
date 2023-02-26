import type { IMedia } from "@/models/components/media/IMedia";
import type { ILink } from "@/models/tabs/ILink";

export interface ILinkBox {
    id: number
    heading: string
    icon: IMedia
    link: ILink[]
}
