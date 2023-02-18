import type { IButton } from "@/models/components/IButton";
import type { ILogo } from "@/models/components/ILogo";
import type { IVideo } from "@/models/components/IVideo";

export interface IRebalancingTool {
    id: number
    heading: string
    description: string
    published_at: string
    created_at: string
    updated_at: string
    button: IButton[]
    logo: ILogo
    video: IVideo
}
