import type { IButton } from "@/models/components/IButton";
import type { IMedia } from "@/models/components/media/IMedia";


export interface IProjectIdeaTab {
    heading: string
    text: string
    button: IButton
    image: IMedia
}
