import Swup from 'swup';
import SwupSlideTheme from '@swup/slide-theme';

const swup = new Swup({
    containers: ['#swup'],
    plugins: [new SwupSlideTheme()],
    animateHistoryBrowsing: true,
    cache: true,
    preloadOnHover: true,
    // Ignore speculationrules and other non-reinitializable scripts
    scriptSelector: 'script:not([type="speculationrules"]):not([type="application/ld+json"])',
});

// Event BEFORE page change - cleanup
swup.hooks.on('animation:out:start', () => {
    window.dispatchEvent(new CustomEvent('swup:beforeChange'));
});

// Event AFTER page change - reinitialize
swup.hooks.on('content:replace', () => {
    // Dispatch event for custom re-initialization
    // Scripts are already re-executed by Swup
    window.dispatchEvent(new CustomEvent('swup:updated'));
});