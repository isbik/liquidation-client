export const messageResponseToErrorsArray = (message: any[]) => {
  if (message.length === 0) return [];

  return message.map(({ constraints }) => {
    return constraints.matches;
  });
};
