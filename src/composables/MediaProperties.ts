import { inject } from 'vue'
import type { IMedia } from "@/models/components/media/IMedia";
import type { AllMediaSrcset } from "@/models/components/media/AllMediaSrcset";



/**
 * Get an object that contains all srcset of an image for the different media device widths
 *
 * @param image IMedia
 *
 * @return AllMediaSrcset
 */
export function getAllMediaSrcset(image: IMedia): AllMediaSrcset {
    // Return empty media srcset object if image formats are not defined
    if (!image.formats) return {} as AllMediaSrcset

    const urlPrefix = inject('URL_PATH')
    return {
        originalSrc:  urlPrefix + image.url,
        mediumSrc:    urlPrefix + image.formats.medium.url,
        smallSrc:     urlPrefix + image.formats.small.url,
        thumbnailSrc: urlPrefix + image.formats.thumbnail.url
    }
}
