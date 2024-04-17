export function transformDate(date: string) {
  const [year, month, day] = date.split('-');
  const months = [
    'ene',
    'feb',
    'mar',
    'abr',
    'may',
    'jun',
    'jul',
    'ago',
    'sep',
    'oct',
    'nov',
    'dic',
  ];
  const monthName = months[Number(month) - 1];
  return `${day} ${monthName} ${year}`;
}
