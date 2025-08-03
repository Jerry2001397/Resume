// Prompt user for their email before proceeding
window.addEventListener('DOMContentLoaded', function() {
    setTimeout(function() {
        // Create overlay
        var overlay = document.createElement('div');
        overlay.style.position = 'fixed';
        overlay.style.top = 0;
        overlay.style.left = 0;
        overlay.style.width = '100vw';
        overlay.style.height = '100vh';
        overlay.style.background = 'rgba(42,77,143,0.15)';
        overlay.style.display = 'flex';
        overlay.style.alignItems = 'center';
        overlay.style.justifyContent = 'center';
        overlay.style.zIndex = 9999;

        // Create modal
        var modal = document.createElement('div');
        modal.style.background = '#fff';
        modal.style.borderRadius = '16px';
        modal.style.boxShadow = '0 8px 32px rgba(42,77,143,0.18)';
        modal.style.padding = '32px 24px';
        modal.style.maxWidth = '350px';
        modal.style.textAlign = 'center';
        modal.style.fontFamily = 'Segoe UI, Arial, sans-serif';
        modal.style.color = '#2a4d8f';

        // Modal content
        modal.innerHTML = `
            <h2 style="margin-bottom:16px;">Welcome!</h2>
            <p style="margin-bottom:18px;font-size:1.1em;">Please enter your email to proceed:</p>
            <input type="email" id="userEmailInput" placeholder="your@email.com" style="width:90%;padding:10px 8px;margin-bottom:18px;border-radius:6px;border:1px solid #ccc;font-size:1em;" required>
            <br>
            <button id="submitEmailModal" style="background:#2a4d8f;color:#fff;border:none;padding:10px 24px;border-radius:8px;font-size:1em;cursor:pointer;box-shadow:0 2px 8px rgba(42,77,143,0.08);">Proceed</button>
            <p id="emailError" style="color:#c00;margin-top:10px;display:none;font-size:0.95em;">Please enter a valid email address.</p>
        `;

        overlay.appendChild(modal);
        document.body.appendChild(overlay);

        document.getElementById('submitEmailModal').onclick = function() {
            var emailInput = document.getElementById('userEmailInput').value.trim();
            var errorMsg = document.getElementById('emailError');
            var emailPattern = /^[^@\s]+@[^@\s]+\.[^@\s]+$/;
            if (emailPattern.test(emailInput)) {
                overlay.remove();
            } else {
                errorMsg.style.display = 'block';
            }
        };
    }, 600); // Show after 0.6s
});
