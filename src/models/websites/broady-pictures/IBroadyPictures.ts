import type { IButton } from "@/models/components/buttons/IButton";
import type { IMedia } from "@/models/components/media/IMedia";
import type { IThreeGridBanner } from "@/models/components/banners/IThreeGridBanner";

export interface IBroadyPictures {
    id: number
    heading: string
    description: string
    button: IButton
    label: IMedia
    image: IMedia[]
}
