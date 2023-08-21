const loadingOverlay = document.createElement("div");
loadingOverlay.id = "loading-overlay";
loadingOverlay.innerHTML = '<div class="loading-spinner"></div>';

export function showLoading() {
    document.body.appendChild(loadingOverlay);
}

export function hideLoading() {
    document.body.removeChild(loadingOverlay);
}
