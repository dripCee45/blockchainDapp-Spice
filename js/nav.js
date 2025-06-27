function _close(event) {
    try {
        const d = document.getElementById('docs');
        const m = document.getElementById('migrate');
        const r = document.getElementById('resolve');

        // Only hide if clicking the background
        if (
            !event || 
            (event.target.classList && 
             (event.target.classList.contains("popup") || event.target.classList.contains("popuprd")))
        ) {
            d.style.display = "none";m.style.display = "none";r.style.display = "none";
        }
    } catch (e) {
        console.error(e);
    }
}
function _readDocs(){
    const popuprd = document.getElementById('docs');
    popuprd.style.display="flex";
}
function _migration(){
    const popuprd = document.getElementById('migrate');
    popuprd.style.display="flex";
}
function _resolve(){
    const popuprd = document.getElementById('resolve');
    popuprd.style.display="flex";
}
function _notFound() {
    const popup = document.getElementsByClassName('popup')[0];
    popup.style.display="flex";
}