import type { IFooterLink } from "@/models/components/footer/IFooterLink";

export interface IFooterColumn {
    __component: string
    id: number
    heading: string
    links: IFooterLink[] | null
    text: string | null
}
