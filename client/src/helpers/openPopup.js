export default function openPopupWindow({ url, width, height }) {
  const top = window.screen.height / 2 - height / 2;
  const left = window.screen.width / 2 - width / 2;

  return window.open(url, '_target', `width=${width}, height=${height}, top=${top}, left=${left}`);
}
