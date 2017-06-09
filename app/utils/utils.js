// @flow

export const isImage = (type: string) : boolean => {
  return (type.match(/jpg/) !== null ||
      type.match(/jpeg/) !== null ||
      type.match(/png/) !== null ||
      type.match(/gif/) !== null);
}