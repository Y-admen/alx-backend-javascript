function getCurrentYear() {
  const date = new Date();
  return date.getFullYear();
}
// ES6 computed property names
export default function getBudgetForCurrentYear(income, gdp, capita) {
  const budget = {
    [`income-${getCurrentYear()}`]: income,
    [`gdp-${getCurrentYear()}`]: gdp,
    [`capita-${getCurrentYear()}`]: capita,
  };
  return budget;
}
