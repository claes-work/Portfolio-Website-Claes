import type { IMedia } from "@/models/components/media/IMedia";

export interface IGitHubProfile {
    id: number
    shortTag: string
    fullName: string
    profileImage: IMedia
}
