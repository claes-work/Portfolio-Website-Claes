import type { IButton } from "@/models/components/buttons/IButton";
import type { IMedia } from "@/models/components/media/IMedia";
import type { IThreeGridBanner } from "@/models/components/banners/IThreeGridBanner";

export interface IPureAir {
    id: number
    heading: string
    description: string
    buttons: IButton[]
    threeGridBanner: IThreeGridBanner
    label: IMedia
    image: IMedia[]
}
