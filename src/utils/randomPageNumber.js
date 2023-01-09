const RANGE = 100
const randomPageNumber = (range = RANGE) => {
  const firstPageNumber = 1;

  return Math.floor(Math.random() * range) + firstPageNumber;
};

export default randomPageNumber;

// const emptyStringRegExp = /^\s+$/;


// const str = "   " 
// console.log(emptyStringRegExp.test(str))