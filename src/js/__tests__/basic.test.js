import isHealthy from '../basic';

test.each([
  ["маг",90, "healthy"],
  ["маг",40, "wounded"],
  ["маг",10, "critical"],
])("testing health fucn for %s with %i HP", (name, health, expected)=>{
  const result = isHealthy({name, health});
  expect(result).toBe(name + expected);
});
