// Wait for the DOM to load
document.addEventListener('DOMContentLoaded', function () {
    // Create the lunr index
    var idx = lunr(function () {
        this.field('title');
        this.field('content');
        this.ref('id');
    });

    // Add documents (your notes) to the index
    var documents = [
        {
            id: 'project-a',
            title: 'Project A Notes',
            content: 'Detailed information on Project A...'
        },
        {
            id: 'project-b',
            title: 'Project B Notes',
            content: 'Detailed information on Project B...'
        }
    ];

    // Populate the index
    documents.forEach(function (doc) {
        idx.add(doc);
    });

    // Create search functionality
    var searchInput = document.getElementById('search-input');
    searchInput.addEventListener('input', function () {
        var query = searchInput.value;
        var results = idx.search(query);

        var resultsDiv = document.getElementById('search-results');
        resultsDiv.innerHTML = '';
        results.forEach(function (result) {
            var resultItem = document.createElement('div');
            resultItem.textContent = 'Found: ' + documents.find(doc => doc.id === result.ref).title;
            resultsDiv.appendChild(resultItem);
        });
    });
});
