function showDetails(title, description) {
    document.getElementById('project-title').innerText = title;
    document.getElementById('project-description').innerText = description;
    document.getElementById('overlay').style.display = 'flex';
}

function hideDetails() {
    document.getElementById('overlay').style.display = 'none';
}
