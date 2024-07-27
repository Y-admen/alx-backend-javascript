export default function getBudgetObject(income, gdp, capita) {
  // using the key names as property names
  const budget = {
    income,
    gdp,
    capita,
  };

  return budget;
}
