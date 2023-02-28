import type { BaseEntity } from "@/models/BaseEntity";
import type { IButton } from "@/models/components/buttons/IButton";
import type { IMedia } from "@/models/components/media/IMedia";
import type { IProjectInsides } from "@/models/components/tabs/IProjectInsides";

export interface IRebalancingTool extends BaseEntity, IProjectInsides {
    id: number
    heading: string
    description: string
    button: IButton[]
    logo: IMedia
    video: IMedia
    heroMockup: IMedia

}
