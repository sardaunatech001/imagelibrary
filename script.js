// Get elements
const mediaInput = document.getElementById('mediaInput');
const addMediaBtn = document.getElementById('addMediaBtn');
const mediaList = document.getElementById('mediaList');

// Add event listener for adding media
addMediaBtn.addEventListener('click', () => {
    const file = mediaInput.files[0];
    
    if (file) {
        const mediaItem = document.createElement('div');
        mediaItem.classList.add('media-item');

        // Handle images
        if (file.type.startsWith('image/')) {
            const img = document.createElement('img');
            img.src = URL.createObjectURL(file);
            mediaItem.appendChild(img);
        }
        // Handle videos
        else if (file.type.startsWith('video/')) {
            const video = document.createElement('video');
            video.src = URL.createObjectURL(file);
            video.controls = true;
            mediaItem.appendChild(video);
        }

        // Add delete button
        const deleteBtn = document.createElement('button');
        deleteBtn.textContent = 'Delete';
        deleteBtn.addEventListener('click', () => {
            mediaItem.classList.add('fade-out');
            setTimeout(() => {
                mediaItem.remove();
            }, 300);
        });
        mediaItem.appendChild(deleteBtn);

        // Append media item to the library
        mediaList.appendChild(mediaItem);

        // Clear the input after adding media
        mediaInput.value = '';
    }
});
