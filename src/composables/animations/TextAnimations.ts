import gsap from "gsap";
import type { FloatDirection as FloatDirectionType } from "@/models/animations/FloatDirection";
import { FloatDirection } from "@/models/animations/FloatDirection";

/**
 * Char float up animation
 *
 * @param timeline
 * @param chars
 * @param charDuration duration each char takes (max 1s)
 *
 * @return GSAPTimeline
 */
export function charFloatUp(timeline: GSAPTimeline, chars: HTMLElement[], charDuration: number = 0.8): GSAPTimeline {
    // Animation config for each char
    const charConfig = {
        duration: 0.55,
        y: 150,
        autoAlpha: 0,
        ease: 'Circ.easeOut',
    }

    // Calculate the duration, that should be added based on the index that is getting increased
    let convertedDuration = 1 - charDuration

    // Iterate each char and add the animation to the gsap timeline
    timeline = gsap.timeline();
    chars.forEach((el: HTMLElement, index: number) => {
        let decimal: string = (index - (convertedDuration * index)).toString().replace('.', '')
        timeline.from(el, charConfig, '1.' + decimal)
    })

    return timeline
}

/**
 * Complete word float down animation
 *
 * @param timeline
 * @param chars
 *
 * @return GSAPTimeline
 */
export function wordFloatDown(
    timeline: GSAPTimeline,
    chars: HTMLElement[]
): GSAPTimeline {

    // Animation config for each char
    const charConfig = {
        duration: 4,
        y: 150,
        autoAlpha: 0,
        opacity: 1,
        ease: 'Circ.easeOut'
    }

    // Iterate each char and add the animation to the gsap timeline
    chars.forEach((el: HTMLElement) => {
        timeline.to(el, charConfig, 3.5)
    })

    return timeline
}


/**
 * Complete word float down animation
 *
 * @param timeline GSAPTimeline
 * @param headingArray HTMLElement[][]
 * @param wait time each heading line should wait
 *
 * @return GSAPTimeline
 */
export function wordFloatUp(
    timeline: GSAPTimeline,
    headingArray: HTMLElement[][],
    wait: number = 0.15
): GSAPTimeline {

    // Animation config for each char
    const charConfig = {
        duration: 0.6,
        y: 150,
        autoAlpha: 0,
        ease: 'Circ.easeOut'
    }

    // Iterate each heading line
    headingArray.forEach((array: HTMLElement[], arrayIndex: number) => {
        // Iterate each char and add the animation to the gsap timeline
        array.forEach((el: HTMLElement) => {
            timeline.from(el, charConfig, (wait * arrayIndex))
        })
    })



    return timeline
}
