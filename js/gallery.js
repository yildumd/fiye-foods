// Gallery filtering functionality
console.log('Gallery JS loaded successfully!');

document.addEventListener('DOMContentLoaded', function() {
    console.log('DOM loaded, initializing gallery...');
    
    const filterButtons = document.querySelectorAll('.filter-btn');
    const galleryItems = document.querySelectorAll('.gallery-item');

    console.log('Found filter buttons:', filterButtons.length);
    console.log('Found gallery items:', galleryItems.length);

    // Filter gallery items
    filterButtons.forEach(button => {
        button.addEventListener('click', function() {
            console.log('Filter button clicked:', this.textContent);
            
            // Remove active class from all buttons
            filterButtons.forEach(btn => btn.classList.remove('active'));
            
            // Add active class to clicked button
            this.classList.add('active');
            
            const filterValue = this.getAttribute('data-filter');
            console.log('Filter value:', filterValue);
            
            // Filter items
            galleryItems.forEach(item => {
                if (filterValue === 'all') {
                    item.style.display = 'block';
                    console.log('Showing all items');
                } else {
                    const itemCategories = item.getAttribute('data-category').split(' ');
                    if (itemCategories.includes(filterValue)) {
                        item.style.display = 'block';
                        console.log('Showing item:', item.querySelector('h4').textContent);
                    } else {
                        item.style.display = 'none';
                    }
                }
            });

            // Smooth scroll to gallery
            const mainGallery = document.querySelector('.main-gallery');
            if (mainGallery) {
                mainGallery.scrollIntoView({ 
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });

    // Add click animation to gallery items
    galleryItems.forEach(item => {
        item.addEventListener('click', function() {
            this.style.transform = 'scale(0.98)';
            setTimeout(() => {
                this.style.transform = 'scale(1)';
            }, 150);
        });
    });

    console.log('Fiye Foods Gallery initialized successfully');
});