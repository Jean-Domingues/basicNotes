const formataData = sp => {
  const data = new Date();

  const day = data.getDate();
  const month = data.getMonth()+1;
  const year = data.getFullYear()

  return day+sp+month+sp+year
}

console.log(formataData(''));