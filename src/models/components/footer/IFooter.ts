import type { BaseEntity } from "@/models/BaseEntity";
import type { IFooterColumn } from "@/models/components/footer/IFooterColumn";

export interface IFooter extends BaseEntity {
    id: number
    locale: string
    copyrightHolder: string
    designedBy: string
    columns: IFooterColumn[]
}
