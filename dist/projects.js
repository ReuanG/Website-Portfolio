const highlightButtons = document.querySelectorAll('button[data-start]');
highlightButtons.forEach(button => {
  button.addEventListener('click', () => {
    const playerId = button.dataset.player || 'chrlee-player';
    const player = document.getElementById(playerId);
    if (!player) return;
    const params = new URLSearchParams({start: button.dataset.start, autoplay: '1', rel: '0'});
    if (button.dataset.end) params.set('end', button.dataset.end);
    player.src = 'https://www.youtube-nocookie.com/embed/' + (button.dataset.video || '853lHLT2zTM') + '?' + params.toString();
    highlightButtons.forEach(item => {
      if ((item.dataset.player || 'chrlee-player') === playerId) item.setAttribute('aria-pressed', String(item === button));
    });
    document.getElementById(button.dataset.status || 'chrlee-playback').textContent = button.dataset.start !== '0'
      ? 'Selected: ' + button.textContent.replace('Play ', '').trim() + '. Press play in the video if it does not start automatically.'
      : 'Full video selected. Press play in the video if it does not start automatically.';
  });
});

const chaosVersions = {
  official: {id: '5ztMJPqH9D4', label: 'Official Music Video', note: 'Official release · Premiere Pro editing and After Effects VFX.'},
  original: {id: 'f3SMJcri9SY', label: 'Original Music Video', note: 'Original cut · Includes Premiere Pro sound design and Blender CG, alongside editing and After Effects VFX.'}
};
document.querySelectorAll('input[name="chaos-version"]').forEach(input => {
  input.addEventListener('change', () => {
    if (!input.checked) return;
    const version = chaosVersions[input.value];
    if (!version) return;
    const player = document.getElementById('chaos-player');
    player.src = 'https://www.youtube-nocookie.com/embed/' + version.id + '?rel=0';
    player.title = 'CHAOS MV — ' + version.label;
    document.getElementById('chaos-version-label').textContent = version.label;
    document.getElementById('chaos-youtube-link').href = 'https://www.youtube.com/watch?v=' + version.id;
    document.getElementById('chaos-version-note').textContent = version.note;
  });
});

// Project links from the overview can select the intended CHAOS cut.
const requestedChaosVersion = new URLSearchParams(window.location.search).get('chaos');
if (requestedChaosVersion === 'official' || requestedChaosVersion === 'original') {
  const choice = document.querySelector(`input[name="chaos-version"][value="${requestedChaosVersion}"]`);
  if (choice) {
    choice.checked = true;
    choice.dispatchEvent(new Event('change'));
  }
}

const gallery = document.getElementById('gallery-track');
if (gallery) {
  const cards = Array.from(gallery.querySelectorAll('.gallery-card'));
  const previous = document.getElementById('gallery-prev');
  const next = document.getElementById('gallery-next');
  const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)');
  const updateControls = () => {
    previous.disabled = gallery.scrollLeft <= 2;
    next.disabled = gallery.scrollLeft >= gallery.scrollWidth - gallery.clientWidth - 2;
  };
  const move = direction => {
    const step = cards.length > 1 ? cards[1].offsetLeft - cards[0].offsetLeft : gallery.clientWidth;
    gallery.scrollBy({left: direction * step, behavior: reducedMotion.matches ? 'instant' : 'smooth'});
  };
  previous.addEventListener('click', () => move(-1));
  next.addEventListener('click', () => move(1));
  gallery.addEventListener('keydown', event => {
    if (event.target !== gallery || !['ArrowLeft', 'ArrowRight'].includes(event.key)) return;
    event.preventDefault();
    move(event.key === 'ArrowRight' ? 1 : -1);
  });
  gallery.addEventListener('scroll', updateControls, {passive: true});
  new ResizeObserver(updateControls).observe(gallery);
  updateControls();
}
