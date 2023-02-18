import type { BaseEntity } from "@/models/BaseEntity";
import type { IButton } from "@/models/components/IButton";
import type { IMedia } from "@/models/components/media/IMedia";

export interface IRebalancingTool extends BaseEntity {
    id: number
    heading: string
    description: string
    button: IButton[]
    logo: IMedia
    video: IMedia
    heroMockup: IMedia
}
