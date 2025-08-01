export const isValidURL = (url) => {
  const pattern = new RegExp('^(https?:\\/\\/)?' + 
    '((([a-z\\d]([a-z\\d-]*[a-z\\d])*))\\.)+' + 
    '[a-z]{2,}' + 
    '(\\:\\d+)?(\\/[-a-z\\d%_.~+]*)*$', 'i');
  return pattern.test(url);
};

export const isValidShortcode = (code) => /^[a-zA-Z0-9]{3,10}$/.test(code);

export const isValidMinutes = (value) => Number.isInteger(+value) && +value > 0;
