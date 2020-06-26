export default function titleCase(string) {
  const word = string.toLowerCase();
  return word.replace(/(?:^|\s)\S/g, function (a) {
    return a.toUpperCase();
  });
}
