const API_BASE = (() => {
  const host = window.location.hostname;
  if (host === 'localhost' || host === '127.0.0.1' || host === '') return '';
  // Ganti dengan URL backend Anda di Render/Railway setelah deploy
  return 'https://ruang-gaji-backend.onrender.com';
})();

const api = async (path, options = {}) => {
  const response = await fetch(`${API_BASE}/api/${path}`, {
    ...options,
    headers: { 'Content-Type': 'application/json', ...options.headers },
    ...(options.body ? { body: JSON.stringify(options.body) } : {}),
  });
  const result = await response.json().catch(() => ({}));
  if (!response.ok) throw new Error(result.error || 'Permintaan tidak dapat diproses.');
  return result;
};
