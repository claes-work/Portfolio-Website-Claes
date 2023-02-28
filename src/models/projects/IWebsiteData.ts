import type { IPureAir } from "@/models/websites/pure-air/IPureAir";
import type { IDiewellWebsite } from "@/models/websites/diewell-website/IDiewellWebsite";
import type { IBroadyPictures } from "@/models/websites/broady-pictures/IBroadyPictures";

export interface IWebsiteData {
    pureAir: IPureAir
    diewellWebsite: IDiewellWebsite
    broadyPictures:  IBroadyPictures
}
