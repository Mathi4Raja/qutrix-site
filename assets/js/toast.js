/**
 * Displays a toast notification.
 * @param {string} message - The message to display.
 * @param {string} type - 'success' or 'error' (default: 'success').
 */
function showToast(message, type = 'success') {
  // Create container if it doesn't exist
  let container = document.getElementById('toast-container');
  if (!container) {
    container = document.createElement('div');
    container.id = 'toast-container';
    container.className = 'fixed bottom-5 right-5 z-[60] flex flex-col gap-3 pointer-events-none';
    document.body.appendChild(container);
  }

  // Create toast element
  const toast = document.createElement('div');
  const bgColor = type === 'error' ? 'bg-red-500' : 'bg-green-600'; // Darker green for better contrast
  const icon = type === 'error'
    ? '<svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>'
    : '<svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path></svg>';

  toast.className = `${bgColor} text-white px-4 py-3 rounded shadow-lg flex items-center gap-3 transform transition-all duration-300 translate-y-10 opacity-0 pointer-events-auto max-w-sm`;

  // Accessibility: Announce toast content to screen readers
  if (type === 'error') {
    toast.setAttribute('role', 'alert');
  } else {
    toast.setAttribute('role', 'status');
  }

  // Using innerHTML safely since message is textContent usually, but to be safe I'll use text node for message

  const iconContainer = document.createElement('div');
  iconContainer.innerHTML = icon;
  toast.appendChild(iconContainer);

  const textContainer = document.createElement('p');
  textContainer.className = 'font-medium text-sm leading-snug';
  textContainer.textContent = message;
  toast.appendChild(textContainer);

  container.appendChild(toast);

  // Animate in
  // Use setTimeout to ensure DOM is updated and transition triggers
  setTimeout(() => {
    toast.classList.remove('translate-y-10', 'opacity-0');
  }, 10);

  // Remove after 3 seconds
  setTimeout(() => {
    toast.classList.add('translate-y-10', 'opacity-0');
    setTimeout(() => {
      if (toast.parentElement) {
        toast.parentElement.removeChild(toast);
      }
    }, 300); // Wait for transition
  }, 4000);
}
