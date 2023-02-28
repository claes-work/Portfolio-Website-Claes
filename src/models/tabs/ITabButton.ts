import type { IMedia } from "@/models/components/media/IMedia";
import type { ProjectTabReferences } from "@/models/tabs/enums/ProjectTabReferences";

export interface ITabButton {
    id: number
    componentName: string
    strapiReference: ProjectTabReferences
    isActive: boolean
    component: string
    icon: IMedia
}
