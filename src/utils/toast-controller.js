var timeout;

export default function showToast(text) {
    clearTimeout(timeout);
    hideToast();

    document.querySelector(".toast-text").innerHTML = `🎉 ${text}`;
    document.querySelector(".toast-box").className = "toast-box show-toast";

    timeout = setTimeout(() => hideToast(), 5000);

    return true;
}

export function hideToast() {
    document.querySelector(".toast-box").className = "toast-box hide-toast";

    return true;
}