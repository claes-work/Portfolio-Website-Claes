import type {IMedia} from "@/models/components/media/IMedia";
import type {BaseEntity} from "@/models/BaseEntity";

export interface IAboutPage extends BaseEntity {
    id:           number;
    heading:      string;
    subHeading:   string;
    text:         string;
    heroImage:    IMedia;
}
