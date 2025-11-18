// Article Detail Page JavaScript
// Loads article content dynamically based on URL parameter

document.addEventListener('DOMContentLoaded', () => {
    // Get article ID from URL parameter
    const urlParams = new URLSearchParams(window.location.search);
    const articleId = parseInt(urlParams.get('id'));

    if (!articleId || !articlesData) {
        // If no valid article ID, redirect to home
        window.location.href = 'index.html#articles';
        return;
    }

    // Find the article in the data
    const article = articlesData.find(a => a.id === articleId);

    if (!article) {
        // Article not found, redirect to home
        window.location.href = 'index.html#articles';
        return;
    }

    // Load article data into the page
    document.getElementById('articleTitle').textContent = article.title;
    document.getElementById('articleSubtitle').textContent = article.subtitle;
    
    const articleImage = document.getElementById('articleImage');
    articleImage.src = article.image;
    articleImage.alt = article.title;

    // Update page title
    document.title = `${article.title} - SustainHuman`;

    // Load article content
    const contentContainer = document.getElementById('articleContent');
    
    if (articleContents && articleContents[articleId]) {
        contentContainer.innerHTML = articleContents[articleId].content;
    } else {
        // Fallback content if specific article content not found
        contentContainer.innerHTML = `
            <h2>Article Content Coming Soon</h2>
            <p>We're currently developing detailed content for this article. Please check back soon for the full article.</p>
            <p>In the meantime, feel free to explore our other articles on human sustainability and environmental innovation.</p>
        `;
    }

    // Scroll to top when page loads
    window.scrollTo(0, 0);
});

