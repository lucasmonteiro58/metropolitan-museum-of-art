export function removeEmptyProperties(obj: Record<string, any>) {
  return Object.fromEntries(Object.entries(obj).filter(([, v]) => v != null || v !== ''))
}
