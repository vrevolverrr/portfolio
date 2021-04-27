export default function showToast(text) {
    document.querySelector(".toast-text").innerHTML = `🎉 ${text}`;
    document.querySelector(".toast-box").className = "toast-box show-toast";

    setTimeout(() => hideToast(), 3000);

    return true;
}

export function hideToast() {
    document.querySelector(".toast-box").className = "toast-box hide-toast";

    return true
}