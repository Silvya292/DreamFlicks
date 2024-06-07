export default function transformDate(date: string): string {
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

  if (!year || !month || !day) throw new Error('Invalid date format');

  return `${day} ${monthName} ${year}`;
}
