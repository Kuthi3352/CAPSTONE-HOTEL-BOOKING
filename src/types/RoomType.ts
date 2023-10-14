export type RoomType = {
  id?: number;
  tenPhong?: string;
  khach?: number;
  phongNgu?: number;
  giuong?: number;
  phongTam?: number;
  moTa?: string;
  giaTien?: number;
  mayGiat?: boolean;
  banLa?: boolean;
  tivi?: boolean;
  dieuHoa?: boolean;
  wifi?: boolean;
  bep?: boolean;
  doXe?: boolean;
  hoBoi?: boolean;
  banUi?: boolean;
  maViTri?: number;
  hinhAnh?: string;
};

export type RoomPosition = {
  id?: number;
  tenViTri?: string;
  tinhThanh?: string;
  quocGia?: string;
  hinhAnh?: string;
};