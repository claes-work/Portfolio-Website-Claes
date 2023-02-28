import type { BaseEntity } from "@/models/BaseEntity";
import type { IButton } from "@/models/components/IButton";
import type { IMedia } from "@/models/components/media/IMedia";
import type { IProjectInsides } from "@/models/IProjectInsides";

export interface ISuggestApp extends BaseEntity, IProjectInsides {
    id: number
    heading: string
    description: string
    button: IButton[]
    logo: IMedia
    heroMockup: IMedia
}
