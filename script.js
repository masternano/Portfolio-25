// Project data
const projectCards = [
    {
        id: 1,
        title: "Title",
        imageSrc: "/img/project.png",
        subtractSrc: "/subtract-2.svg",
        rotation: "rotate-left"
    },
    {
        id: 2,
        title: "Title",
        imageSrc: "/img/project.png",
        subtractSrc: "/subtract-1.svg",
        rotation: "rotate-right"
    },
    {
        id: 3,
        title: "Title",
        imageSrc: "/img/project.png",
        subtractSrc: "/subtract.svg",
        rotation: "rotate-left"
    }
];

// Function to create project cards
function createProjectCards() {
    const projectsContainer = document.getElementById('projects-container');

    if (!projectsContainer) return; // Ensure the container exists

    projectCards.forEach(card => {
        const projectCard = document.createElement('div');
        projectCard.className = `project-card ${card.rotation}`;

        projectCard.innerHTML = `
            <div class="card">
                <div class="card-content">
                    <img class="project-image" src="${card.imageSrc}" alt="${card.title} image">
                    <img class="project-overlay" src="${card.subtractSrc}" alt="${card.title} overlay">
                </div>
            </div>
            <div class="project-title">${card.title}</div>
        `;

        projectsContainer.appendChild(projectCard);
    });
}

// Initialize the page
document.addEventListener('DOMContentLoaded', () => {
    createProjectCards();
});