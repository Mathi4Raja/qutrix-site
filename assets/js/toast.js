// Palette's Toast Notification System
// Adds a touch of delight to notifications

// Create toast container if it doesn't exist
function ensureToastContainer() {
  let container = document.getElementById('toast-container');
  if (!container) {
    container = document.createElement('div');
    container.id = 'toast-container';
    container.className = 'fixed top-4 left-1/2 transform -translate-x-1/2 z-[60] flex flex-col items-center gap-2 w-full max-w-sm px-4 pointer-events-none';
    document.body.appendChild(container);
  }
  return container;
}

/**
 * Show a toast notification
 * @param {string} message - The message to display
 * @param {string} type - 'success' or 'error' (default: 'success')
 */
function showToast(message, type = 'success') {
  const container = ensureToastContainer();

  // Create toast element
  const toast = document.createElement('div');

  // Base classes
  let classes = 'pointer-events-auto flex items-center gap-3 px-4 py-3 rounded-lg shadow-lg text-white text-sm font-medium transform transition-all duration-300 ease-out translate-y-[-20px] opacity-0';

  // Type-specific classes
  if (type === 'error') {
    classes += ' bg-red-500';
  } else {
    classes += ' bg-green-500';
  }

  toast.className = classes;

  // Icon based on type
  const icon = type === 'error'
    ? '<svg class="w-5 h-5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>'
    : '<svg class="w-5 h-5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path></svg>';

  toast.innerHTML = `${icon}<span>${message}</span>`;

  // Add to container
  container.appendChild(toast);

  // Trigger animation (next frame)
  requestAnimationFrame(() => {
    toast.classList.remove('translate-y-[-20px]', 'opacity-0');
  });

  // Auto remove after 3 seconds
  setTimeout(() => {
    toast.classList.add('opacity-0', 'translate-y-[-20px]');
    setTimeout(() => {
      if (toast.parentNode) {
        toast.parentNode.removeChild(toast);
      }
    }, 300); // Wait for transition to finish
  }, 3000);
}

// Make it available globally
window.showToast = showToast;
