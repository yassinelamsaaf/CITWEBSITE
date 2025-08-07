// Utility functions for common operations

// Format date to readable string
export const formatDate = (dateString) => {
  const date = new Date(dateString);
  return date.toLocaleDateString('en-US', { 
    year: 'numeric', 
    month: 'long', 
    day: 'numeric' 
  });
};

// Format time to readable string
export const formatTime = (timeString) => {
  const [hours, minutes] = timeString.split(':');
  const hour12 = ((parseInt(hours) + 11) % 12) + 1;
  const ampm = parseInt(hours) >= 12 ? 'PM' : 'AM';
  return `${hour12}:${minutes} ${ampm}`;
};

// Truncate text to specified length
export const truncateText = (text, maxLength) => {
  if (text.length <= maxLength) return text;
  return text.substring(0, maxLength) + '...';
};

// Generate initials from name
export const getInitials = (name) => {
  return name
    .split(' ')
    .map(word => word.charAt(0).toUpperCase())
    .join('')
    .substring(0, 2);
};

// Generate avatar URL with initials
export const generateAvatarUrl = (name, size = 256, bgColor = '3b82f6', textColor = 'fff') => {
  const initials = encodeURIComponent(getInitials(name));
  return `https://ui-avatars.com/api/?name=${initials}&background=${bgColor}&color=${textColor}&size=${size}`;
};

// Validate email format
export const isValidEmail = (email) => {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
};

// Debounce function for search and input optimization
export const debounce = (func, wait) => {
  let timeout;
  return function executedFunction(...args) {
    const later = () => {
      clearTimeout(timeout);
      func(...args);
    };
    clearTimeout(timeout);
    timeout = setTimeout(later, wait);
  };
};

// Scroll to element smoothly
export const scrollToElement = (elementId, offset = 0) => {
  const element = document.getElementById(elementId);
  if (element) {
    const targetPosition = element.offsetTop - offset;
    window.scrollTo({
      top: targetPosition,
      behavior: 'smooth'
    });
  }
};

// Get contrasting text color for background
export const getContrastingColor = (hexColor) => {
  const r = parseInt(hexColor.slice(1, 3), 16);
  const g = parseInt(hexColor.slice(3, 5), 16);
  const b = parseInt(hexColor.slice(5, 7), 16);
  const brightness = (r * 299 + g * 587 + b * 114) / 1000;
  return brightness > 128 ? '#000000' : '#FFFFFF';
};

// Copy text to clipboard
export const copyToClipboard = async (text) => {
  try {
    await navigator.clipboard.writeText(text);
    return true;
  } catch (err) {
    console.error('Failed to copy text: ', err);
    return false;
  }
};

// Check if device is mobile
export const isMobile = () => {
  return window.innerWidth <= 768;
};

// Get random color from predefined palette
export const getRandomColor = () => {
  const colors = [
    '#3B82F6', '#10B981', '#8B5CF6', '#F59E0B', 
    '#EF4444', '#06B6D4', '#84CC16', '#F97316'
  ];
  return colors[Math.floor(Math.random() * colors.length)];
};
