document.querySelectorAll('.action-btn').forEach(btn => {
    btn.addEventListener('click', () => {
        alert('Add transaction form will open here!');
    });
});

// Animate progress bars on load
window.addEventListener('load', () => {
    document.querySelectorAll('.progress-fill').forEach(bar => {
        const width = bar.style.width;
        bar.style.width = '0%';
        setTimeout(() => {
            bar.style.width = width;
        }, 100);
    });
});