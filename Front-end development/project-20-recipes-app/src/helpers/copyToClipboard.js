const copyToClipboard = (type, foodId, element) => {
  const url = `${window.location.origin}/${type}/${foodId}`;
  navigator.clipboard.writeText(url);
  const messageElement = document.createElement('p');
  messageElement.innerHTML = 'Link copiado!';
  const parentElement = element.parentNode.parentNode;

  parentElement.insertBefore(messageElement, parentElement.childNodes[2]);
};

export default copyToClipboard;
