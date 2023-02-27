import type { BaseEntity } from "@/models/BaseEntity";
import type { IButton } from "@/models/components/IButton";
import type { IMedia } from "@/models/components/media/IMedia";
import type { IProjectTab } from "@/models/tabs/IProjectTab";

export interface ISuggestApp extends BaseEntity {
    id: number
    heading: string
    description: string
    button: IButton[]
    logo: IMedia
    heroMockup: IMedia
    projectInsides: IProjectTab[]
}
