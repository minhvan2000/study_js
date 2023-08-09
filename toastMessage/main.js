const successBtn = document.querySelector('.btn--success');

successBtn.onclick = function () {
    toast({
        title: 'Success',
        message: 'Toast Success',
        type: 'success',
        duration: 1000,
    });
};

const errorBtn = document.querySelector('.btn--danger');

errorBtn.onclick = function () {
    toast({
        title: 'Error',
        message: 'Toast Error',
        type: 'error',
        duration: 3000,
    });
};

const warnBtn = document.querySelector('.btn--warn');

warnBtn.onclick = function () {
    toast({
        title: 'Warning',
        message: 'Toast Warning',
        type: 'warning',
        duration: 3000,
    });
};

const infoBtn = document.querySelector('.btn--info');

infoBtn.onclick = function () {
    toast({
        title: 'Info',
        message: 'Toast Info',
        type: 'info',
        duration: 3000,
    });
};

//Toast function
function toast({ title = '', message = '', type = 'info', duration = 3000 }) {
    const main = document.getElementById('toast');
    if (main) {
        const toast = document.createElement('div');

        // Auto remove toast
        const autoRemoveId = setTimeout(() => {
            main.removeChild(toast);
        }, duration + 1000);

        // Remove toast when clicked
        toast.onclick = function (e) {
            if (e.target.closest('.toast__close')) {
                main.removeChild(toast);
                clearInterval(autoRemoveId);
            }
        };

        const icons = {
            success: 'fas fa-check-circle',
            info: 'fas fa-info-circle',
            warning: 'fas fa-exclamation-circle',
            error: 'fas fa-exclamation-circle',
        };

        const icon = icons[type];
        const delay = (duration / 1000).toFixed(2);

        toast.classList.add('toast', `toast--${type}`);
        toast.style.animation = `slideInLeft ease 0.3s, fadeOut linear 1s ${delay}s forwards`;
        toast.innerHTML = `
                    <div class="toast__icon">
                        <i class="${icon}"></i>
                    </div>
                    <div class="toast__body">
                        <h3 class="toast__title">${title}</h3>
                        <p class="toast__msg">${message}</p>
                    </div>
                    <div class="toast__close">
                        <i class="fas fa-times"></i>
                    </div>`;
        main.appendChild(toast);
    }
}
