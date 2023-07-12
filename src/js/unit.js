export default function extractingProperties({ special }) {
  const resultArr = [];

  special.forEach((item) => {
    const {
      description = 'Описание недоступно', ...rest
    } = item;
    resultArr.push({
      ...rest, description,
    });
  });

  return resultArr;
}
