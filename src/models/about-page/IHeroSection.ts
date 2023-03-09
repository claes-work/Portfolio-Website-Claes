import type { IMedia } from "@/models/components/media/IMedia";

export interface IHeroSection {
    id:         number;
    heading:    string;
    text:       string;
    subHeading: string;
    heroImage:  IMedia;
}
