import type { IButton } from "@/models/components/IButton";
import type { IMedia } from "@/models/components/media/IMedia";
import type { IThreeGridBanner } from "@/models/components/banners/IThreeGridBanner";

export interface IPureAir {
    id: number
    heading: string
    description: string
    button: IButton,
    threeGridBanner: IThreeGridBanner
    label: IMedia
    image: IMedia[]
}
