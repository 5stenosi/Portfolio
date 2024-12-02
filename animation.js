// Add animation to the GitHub icon when the box is hovered over
document.addEventListener('DOMContentLoaded', () => {
    const box5 = document.getElementById('box5');
    const githubIcon = document.getElementById('github-icon');

    box5.addEventListener('mouseover', () => {
        githubIcon.classList.add('animate__animated', 'animate__flip');
    });

    box5.addEventListener('mouseout', () => {
        githubIcon.addEventListener('animationend', () => {
            githubIcon.classList.remove('animate__flip');
        });
    });
});