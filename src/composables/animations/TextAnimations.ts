import gsap from "gsap";

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
export function wordFloatDown(timeline: GSAPTimeline, chars: HTMLElement[]): GSAPTimeline {
    // Animation config for each char
    const charConfig = {
        duration: 4,
        y: 150,
        autoAlpha: 0,
        opacity: 0,
        ease: 'Circ.easeOut'
    }

    chars.forEach((el: HTMLElement) => {
        timeline.to(el, charConfig, 3.5)
    })

    return timeline
}
