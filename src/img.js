export function hoverZoom() {
    // Apply zoom effect to all images with the 'image-zoom' attribute
    document.querySelectorAll('img[image-zoom]').forEach(img => {
        const container = img.parentElement;

        container.addEventListener('mousemove', (e) => {
            const rect = container.getBoundingClientRect();
            const x = (e.clientX - rect.left) / rect.width;
            const y = (e.clientY - rect.top) / rect.height;
            img.style.transformOrigin = `${x * 100}% ${y * 100}%`;
        });

        container.addEventListener('mouseover', () => {
            img.style.transform = 'scale(4)';
        });

        container.addEventListener('mouseout', () => {
            img.style.transform = 'scale(1)';
            img.style.transformOrigin = 'center';
        });
    });

}