const frontendStatus = document.getElementById('frontend-status');
const backendStatus = document.getElementById('backend-status');
const frontendLog = document.getElementById('frontend-log');
const backendLog = document.getElementById('backend-log');

const startFrontendBtn = document.getElementById('start-frontend');
const stopFrontendBtn = document.getElementById('stop-frontend');
const startBackendBtn = document.getElementById('start-backend');
const stopBackendBtn = document.getElementById('stop-backend');

function updateButtons(service, state) {
    if (service === 'frontend') {
        startFrontendBtn.disabled = state === 'running' || state === 'starting';
        stopFrontendBtn.disabled = state === 'stopped';
    }

    if (service === 'backend') {
        startBackendBtn.disabled = state === 'running' || state === 'starting';
        stopBackendBtn.disabled = state === 'stopped';
    }
}

startFrontendBtn.addEventListener('click', () => {
    frontendLog.textContent = '';
    window.desktopAPI.startService('frontend');
});

stopFrontendBtn.addEventListener('click', () => {
    window.desktopAPI.stopService('frontend');
});

startBackendBtn.addEventListener('click', () => {
    backendLog.textContent = '';
    window.desktopAPI.startService('backend');
});

stopBackendBtn.addEventListener('click', () => {
    window.desktopAPI.stopService('backend');
});

window.desktopAPI.onServiceUpdate((data) => {
    const { service, state, message } = data;

    if (service === 'frontend') {
        frontendStatus.textContent = state;
        frontendLog.textContent += message;
        frontendLog.scrollTop = frontendLog.scrollHeight;
        updateButtons(service, state);
    }

    if (service === 'backend') {
        backendStatus.textContent = state;
        backendLog.textContent += message;
        backendLog.scrollTop = backendLog.scrollHeight;
        updateButtons(service, state);
    }
});

updateButtons('frontend', 'stopped');
updateButtons('backend', 'stopped');