
function openPopup() {
    document.getElementById('popupModal').style.display = 'block';
}

function closePopup() {
    document.getElementById('popupModal').style.display = 'none';
}

window.onclick = function(event) {
    const modal = document.getElementById('popupModal');
    if (event.target === modal) {
        closePopup();
    }
};