import { RoomPosition } from "types/RoomType";

export const findPosition = (array?: RoomPosition[], id?: string) => {
  const matched = array.find((item) => {
    return item.id === id;
  });
  if (matched) {
    return matched.tinhThanh;
  }

  return;
};
