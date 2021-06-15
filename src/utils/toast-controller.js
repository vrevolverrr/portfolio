var timeout;
let lastToastType = 0;

export function showToast(text) {
    clearTimeout(timeout);

    if (lastToastType === 1) {
        hideErrorToast();
    } else {
        hideToast();
    }

    document.querySelector(".toast-text").innerHTML = `🎉 ${text}`;
    document.querySelector(".toast-box").className = "toast-box show-toast";

    lastToastType = 0;

    timeout = setTimeout(() => hideToast(), 5000);

    return true;
}

export function hideToast() {
    document.querySelector(".toast-box").className = "toast-box hide-toast";

    return true;
}

export function showErrorToast(text) {
    clearTimeout(timeout);

    if (lastToastType === 1) {
        hideErrorToast();
    } else {
        hideToast();
    }

    document.querySelector(".toast-text").innerHTML = `🎉 ${text}`;
    document.querySelector(".toast-box").className = "toast-box error show-toast";

    lastToastType = 1;

    timeout = setTimeout(() => hideToast(), 5000);

    return true;
}

export function hideErrorToast() {
    document.querySelector(".toast-box").className = "toast-box error hide-toast";

    return true;
}
