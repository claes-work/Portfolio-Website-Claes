import type { ISublink } from "@/models/components/navbar/ISublink";

export interface INavLink {
    id: number
    title: string
    reference: string | null
    subLink: ISublink[]
}
