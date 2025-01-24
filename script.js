document.addEventListener('scroll', () => {
  const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
  const docHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;
  const scrollPercent = scrollTop / docHeight;

  const startColor = { r: 255, g: 0, b: 0 }; // Red
  const endColor = { r: 85, g: 2, b: 2 }; // Dark Red

  const newColor = {
      r: Math.round(startColor.r + (endColor.r - startColor.r) * scrollPercent),
      g: Math.round(startColor.g + (endColor.g - startColor.g) * scrollPercent),
      b: Math.round(startColor.b + (endColor.b - startColor.b) * scrollPercent)
  };

  document.body.style.backgroundColor = `rgb(${newColor.r}, ${newColor.g}, ${newColor.b})`;
});