import Mustache from 'mustache';

const TEMPLATE_STRING_DETERMINANT = '{{';

function addBooleanProperties(data: any) {
  return Object.keys(data).reduce((acc, key) => {
    if (data[key] instanceof Object) return acc;

    const newKey = `is${data[key].charAt(0).toUpperCase() + data[key].slice(1)}`;

    return { ...acc, [newKey]: true };
  }, data);
}

export const renderTemplateText = (text: string, data: any) => {
  const isTemplateString = text.includes(TEMPLATE_STRING_DETERMINANT);

  if (!isTemplateString) return text;

  const dataWithBooleanProperties = addBooleanProperties(data);
  return Mustache.render(text, dataWithBooleanProperties);
};
