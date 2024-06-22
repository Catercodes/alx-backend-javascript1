const keyIncome = 'income';
const keyGdp = 'gdp';
const keyCapita = 'capita';

export default function getBudgetObject(income, gdp, capita) {
  const budget = {
    [keyIncome]: income,
    [keyGdp]: gdp,
    [keyCapita]: capita,
  };

  return budget;
}
