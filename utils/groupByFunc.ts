export const groupByFunc = <
  RetType extends PropertyKey,
  T,
  Func extends (arg: T) => RetType
>(arr: T[], mapper: Func): Record<RetType, T[]> => {
  return arr.reduce((accumulator, val) => {
    const groupedKey = mapper(val);
    if (!accumulator[groupedKey]) {
      accumulator[groupedKey] = [];
    }
    accumulator[groupedKey].push(val);
    return accumulator;
  }, {} as Record<RetType, T[]>);
}
