type Messages = Record<string, string>;

export function createT(messages: Messages) {
  return function t(key: string) {
    return messages[key] ?? key;
  };
}