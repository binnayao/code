console.log(navigator.onLine);
window.addEventListener("online", function () {
    console.log(1);
});
window.addEventListener("offline", function () {
    console.log(2);
});
