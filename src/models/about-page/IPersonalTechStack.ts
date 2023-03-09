import type { IMedia } from "@/models/components/media/IMedia";
import type { IButton } from "@/models/components/buttons/IButton";

export interface IPersonalTechStack {
    id:         number;
    subheading: string;
    heading:    string;
    text:       string;
    button:     IButton;
    image:      IMedia;
}
