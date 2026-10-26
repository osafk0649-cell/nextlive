const jsonData = `[
    {
        "number": 1,
        "title": "Introduction to HTML",
        "body": "HTML is used to create the structure of web pages."
    },
    {
        "number": 2,
        "title": "Learning CSS",
        "body": "CSS is used to style web pages with colors, layouts and designs."
    },
    {
        "number": 3,
        "title": "JavaScript Basics",
        "body": "JavaScript makes web pages interactive and dynamic."
    },
    {
        "number": 4,
        "title": "Working with JSON",
        "body": "JSON is a format used to store and exchange data."
    },
    {
        "number": 5,
        "title": "DOM Manipulation",
        "body": "JavaScript can create, modify and remove HTML elements."
    },
    {
        "number": 6,
        "title": "Responsive Web Design",
        "body": "Responsive design helps websites work on mobile and desktop screens."
    }
]`;

const postsContainer = document.getElementById("postsContainer");
const searchInput = document.getElementById("search");
const reloadButton = document.getElementById("reloadButton");
const statusMessage = document.getElementById("statusMessage");

let posts = [];

// Create one blog card
function createPostCard(post) {
    const postCard = document.createElement("article");
    postCard.className = "post-card";

    const postNumber = document.createElement("span");
    postNumber.className = "post-number";
    postNumber.textContent = `POST #${post.number}`;

    const postTitle = document.createElement("h2");
    postTitle.textContent = post.title;

    const postDescription = document.createElement("p");
    postDescription.textContent = post.body;

    postCard.append(postNumber, postTitle, postDescription);

    return postCard;
}

// Display blog posts
function displayPosts(postsToDisplay) {
    postsContainer.replaceChildren();

    if (postsToDisplay.length === 0) {
        statusMessage.textContent = "No blog posts found.";
        return;
    }

    const fragment = document.createDocumentFragment();

    postsToDisplay.forEach(function (post) {
        fragment.appendChild(createPostCard(post));
    });

    postsContainer.appendChild(fragment);

    statusMessage.textContent =
        `Showing ${postsToDisplay.length} blog post(s).`;
}

// Search by title
function searchPosts() {
    const searchTerm = searchInput.value.trim().toLowerCase();

    const filteredPosts = posts.filter(function (post) {
        return post.title.toLowerCase().includes(searchTerm);
    });

    displayPosts(filteredPosts);
}

// Reload all local posts
function reloadPosts() {
    try {
        reloadButton.disabled = true;
        statusMessage.classList.remove("error");
        statusMessage.textContent = "Reloading posts...";

        posts = JSON.parse(jsonData);

        searchInput.value = "";
        displayPosts(posts);
    } catch (error) {
        showError(error);
    } finally {
        reloadButton.disabled = false;
    }
}

// Show error
function showError(error) {
    postsContainer.replaceChildren();
    statusMessage.textContent = "Unable to load blog posts.";
    statusMessage.classList.add("error");

    console.error("Blog error:", error);
}

// Initialize blog
function initBlog() {
    try {
        statusMessage.classList.remove("error");
        statusMessage.textContent = "Loading posts...";

        posts = JSON.parse(jsonData);

        if (!Array.isArray(posts)) {
            throw new Error("Blog data must be an array.");
        }

        displayPosts(posts);
    } catch (error) {
        showError(error);
    }
}

// Search as user types
searchInput.addEventListener("input", searchPosts);

// Reload button
reloadButton.addEventListener("click", reloadPosts);

// Start the blog
initBlog();