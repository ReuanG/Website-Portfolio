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
