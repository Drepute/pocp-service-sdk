// function generateLevelCategory(levels: [number], categories: [number]) {
//   let levelCategoryArray = [];
//   for (let i = 0; i < levels.length; i++) {
//     const levelCategory = (levels[i] << 8) | categories[i];
//     levelCategoryArray.push(levelCategory);
//   }
//   return levelCategoryArray;
// }
export const generateData = (
  levels: string | any[],
  categories: string | any[]
) => {
  if (levels.length != categories.length) {
    return [];
  }
  let levelCategoryArray = [];
  for (let i = 0; i < levels.length; i++) {
    const levelCategory = (levels[i] << 8) | categories[i];
    levelCategoryArray.push(levelCategory);
  }
  return levelCategoryArray;
};

export const createVoucher = (
  levels: [number],
  categories: [number],
  end: any,
  to: [string],
  tokenUris: string,
  signType: string
) => {
  if (signType === 'signTypedDatav2.0') {
    const data = generateData(levels, categories);
    const voucher = { data, end, to, tokenUris };
    return voucher;
  } else if (signType === 'signTypedDatav1.0') {
    const levelCategory = generateData(levels, categories);
    const voucher = { levelCategory, end, to, tokenUris };
    return voucher;
  } else {
    return false;
  }
};
