import { RoomPosition } from "types/RoomType";

export const findPosition = (array?: RoomPosition[], id?: number) => {
  const matched = array.find((item) => {
    return item.id === id;
  });
  if (matched) {
    return matched.tinhThanh;
  }

  return;
};
