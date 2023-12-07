export const emailRule = (email: string, msg?: string) => {
  if (/^[a-z.-]+@[a-z.-]+\.[a-z]+$/i.test(email)) {
    return true;
  }

  return msg || 'Must be a valid e-mail.';
};

export const passwordRule = (password: string, msg?: string) => {
  if (password?.length >= 5) return true;

  return msg || 'Password needs to be at least 5 characters.';
};

export const fullNameRule = (fullName: string, msg?: string) => {
  if (fullName?.length >= 2) return true;

  return msg || 'Name needs to be at least 2 characters.';
};

export const phoneRule = (phone: string, msg?: string) => {
  if (!phone) return true;

  if (phone?.length > 9 && /[0-9-]+/.test(phone)) return true;

  return msg || 'Phone number needs to be at least 9 digits.';
};

export const selectDropdownRule = (value: any, msg?: string) => {
  if (value) return true;

  return msg || 'Select an item.';
};

export const urlRule = (url: string, msg?: string) => {
  if (
    /https?:\/\/(www\.)?[-a-zA-Z0-9@:%._\+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b([-a-zA-Z0-9()@:%_\+.~#?&//=]*)/.test(url)
  ) {
    return true;
  }

  return msg || 'Must be a valid url link. example (https://google.com)';
};

export const stocksRule = (stocks: number, msg?: string) => {
  if (stocks > 0) return true;

  return msg || 'Must be a valid stocks number.';
};

export const priceRule = (price: number, msg?: string) => {
  if (price > 0) return true;

  return msg || 'Must be a valid price.';
};

export const discountRule = (discount: number, msg?: string) => {
  if (!discount) return true;

  if (discount > 0) return true;

  return msg || 'Must be a valid discount.';
};

export const imageRule = (image: File) => {
  if (!image) {
    return 'Must provider image.';
  }

  const fileType = image['type'];
  const validImageTypes = /image\/\w*/;

  if (!validImageTypes.test(fileType)) {
    return 'Should be image file.';
  }

  return !image || image.size < 2000000 || 'Image size should be less than 2 MB!';
};
