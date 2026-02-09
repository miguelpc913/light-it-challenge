export default function isNotUndefined<T>(object: T | undefined): object is T {
  return typeof object !== "undefined";
}
