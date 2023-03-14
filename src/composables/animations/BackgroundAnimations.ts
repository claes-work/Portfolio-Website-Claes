import gsap from "gsap";

/**
 * Char float up animation
 *
 * @param timeline
 * @param blinders
 *
 * @return GSAPTimeline
 */
export function blinderTransition(timeline: GSAPTimeline, blinders: HTMLElement[]): GSAPTimeline {

    // Animation config for each char
    const blinderConfig = {
        duration: 0.8,
        scaleY: 0,
        ease: 'Power4.easeOut',
        opacity: 0.6,
        backgroundColor: '#3f3f3f'
    }

    // Iterate each char and add the animation to the gsap timeline
    timeline = gsap.timeline();
    blinders.forEach((el: HTMLElement, index: number) => {
        timeline.to(el, blinderConfig, 3.5 + (index / 14))
    })

    return timeline
}
