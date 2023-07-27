const videoLinks = document.querySelectorAll('.video-link');
const videoContainer = document.getElementById('video-container');

videoLinks.forEach((link) => {
    link.addEventListener('click', () => {
        event.preventDefault();

        const videoUrl = link.getAttribute('data-video');

        const videoIframe = document.createElement('iframe');
        videoIframe.src = videoUrl;
        videoIframe.width = '660';
        videoIframe.height = '315';
        videoIframe.frameborder = '0';

        videoContainer.innerHTML = '';

        while (videoContainer.firstChild) {
            videoContainer.removeChild(videoContainer.firstChild);
        }

        videoContainer.appendChild(videoIframe);
    });
});