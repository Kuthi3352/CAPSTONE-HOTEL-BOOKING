export type RoomType = {
  id?: string;
  tenPhong?: string;
  khach?: string;
  phongNgu?: number;
  giuong?: number;
  phongTam?: number;
  moTa?: string;
  giaTien?: string;
  mayGiat?: boolean;
  banLa?: boolean;
  tivi?: boolean;
  dieuHoa?: boolean;
  wifi?: boolean;
  bep?: boolean;
  doXe?: boolean;
  hoBoi?: boolean;
  banUi?: boolean;
  maViTri?: string;
  hinhAnh?: string;
};

export type RoomPosition = {
  id?: string;
  tenViTri?: string;
  tinhThanh?: string;
  quocGia?: string;
  hinhAnh?: string;
};

export type BookingRoom = {
  id?: number;
  maPhong?: number;
  ngayDen?: string;
  ngayDi?: string;
  soLuongKhach?: number;
  maNguoiDung?: number;
};
export type RoomDSType = {
  key?: string;
  tenPhong?: string;
  khach?: string;
  phongNgu?: number;
  giuong?: number;
  phongTam?: number;
  moTa?: string;
  giaTien?: string;
  mayGiat?: boolean;
  banLa?: boolean;
  tivi?: boolean;
  dieuHoa?: boolean;
  wifi?: boolean;
  bep?: boolean;
  doXe?: boolean;
  hoBoi?: boolean;
  banUi?: boolean;
  maViTri?: string;
  hinhAnh?: string;
};
