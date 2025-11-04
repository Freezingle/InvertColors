document.getElementById('toggle').addEventListener('click', async () => {
  try {
    // Get the current active tab
    const [tab] = await chrome.tabs.query({ active: true, currentWindow: true });
    if (!tab?.id) return;

    // Inject an anonymous function into the page
    await chrome.scripting.executeScript({
      target: { tabId: tab.id },
      func: () => {
        const html = document.documentElement;
        const isInverted = html.style.filter.includes('invert(1)');
        html.style.filter = isInverted ? '' : 'invert(1) hue-rotate(180deg)';
        // Optional: also fix <img> and <video> elements
        document.querySelectorAll('img, video').forEach(el => {
          el.style.filter = isInverted ? '' : 'invert(1) hue-rotate(180deg)';
        });
      }
    });
  } catch (err) {
    console.error('Error toggling inversion:', err);
  }
});
