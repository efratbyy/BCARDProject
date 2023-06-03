export const getTime = () => {
  const date = new Date();
  const time = date.toLocaleTimeString();
  const millisecond = date.getMilliseconds();
  return `${time}.${millisecond}`;
};

export const colorLog = (text: string, color: string = "white") => {
  console.log(`%c${text}: ${getTime()}`, `color: ${color}; font-weight: bold`);
  // בקונסול css מאפשר לתת ערכים של - %c
  return null;
};
