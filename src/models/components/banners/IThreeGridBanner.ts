import type { IColumn } from "@/models/components/banners/IColumn";

export interface IThreeGridBanner {
    id: number
    heading: string
    columns: IColumn[]
}
