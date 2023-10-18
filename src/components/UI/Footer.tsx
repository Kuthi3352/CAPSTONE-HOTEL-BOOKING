export const Footer = () => {
  return (
    <div className="border-t mt-5 pt-[3px] bg-gray-100">
      <div className="container grid grid-cols-2 mx-auto gap-x-3 gap-y-8 sm:grid-cols-3 md:grid-cols-4 px-10 pb-10 mb-5">
        <div className="flex flex-col space-y-4">
          <h2 className="font-semibold mb-16 !text-[18px]">Hỗ trợ</h2>
          <div className="flex flex-col space-y-2 text-sm dark:text-gray-400">
            <a href="" className="nav-link hover:underline active">
              {" "}
              <span>Trung tâm trợ giúp</span>
            </a>
            <a href="" className="nav-link hover:underline active">
              {" "}
              <span>AirCover</span>
            </a>
            <a href="" className="nav-link hover:underline active">
              {" "}
              <span>Thông tin an toàn</span>
            </a>
            <a href="" className="nav-link hover:underline active">
              {" "}
              <span>Hỗ trợ người khuyết tật</span>
            </a>
            <a href="" className="nav-link hover:underline active">
              {" "}
              <span>Các tùy chọn hủy</span>
            </a>
            <a href="" className="nav-link hover:underline active">
              {" "}
              <span>Biện pháp ứng phó với đại dịch COVID-19 của chúng tôi</span>
            </a>
            <a href="" className="nav-link hover:underline active">
              {" "}
              <span>Báo cáo lo ngại của hàng xóm</span>
            </a>
          </div>
        </div>
        <div className="flex flex-col space-y-4">
          <h2 className="font-semibold mb-16 !text-[18px]">Cộng đồng</h2>
          <div className="flex flex-col space-y-2 text-sm dark:text-gray-400">
            <a href="" className="nav-link hover:underline active">
              {" "}
              <span>Airbnb.org: nhà ở cứu trợ</span>
            </a>
            <a href="" className="nav-link hover:underline active">
              {" "}
              <span>Hỗ trợ dân tị nạn </span>
            </a>
            <a href="" className="nav-link hover:underline active">
              {" "}
              <span>Chống phân biệt đối xử</span>
            </a>
          </div>
        </div>
        <div className="flex flex-col space-y-4">
          <h2 className="font-semibold mb-16 !text-[18px]">Đón tiếp khách</h2>
          <div className="flex flex-col space-y-2 text-sm dark:text-gray-400">
            <a href="" className="nav-link hover:underline active">
              {" "}
              <span>AirCover cho Chủ nhà</span>
            </a>
            <a href="" className="nav-link hover:underline active">
              {" "}
              <span>Xem tài nguyên đón tiếp khách</span>
            </a>
            <a href="" className="nav-link hover:underline active">
              {" "}
              <span>Truy cập diễn đàn cộng đồng</span>
            </a>
            <a href="" className="nav-link hover:underline active">
              {" "}
              <span>Đón tiếp khách có trách nhiệm</span>
            </a>
          </div>
        </div>
        <div className="flex flex-col space-y-4">
          <h2 className="font-semibold mb-16 !text-[18px]">Airbnb</h2>
          <div className="flex flex-col space-y-2 text-sm dark:text-gray-400">
            <a href="" className="nav-link hover:underline active">
              {" "}
              <span>Trang tin tức</span>
            </a>
            <a href="" className="nav-link hover:underline active">
              {" "}
              <span>Tìm hiểu các tính năng mới</span>
            </a>
            <a href="" className="nav-link hover:underline active">
              {" "}
              <span>Thử ngỏ từ các nhà sáng lập</span>
            </a>
            <a href="" className="nav-link hover:underline active">
              {" "}
              <span>Cơ hội nghề nghiệp</span>
            </a>
            <a href="" className="nav-link hover:underline active">
              {" "}
              <span>Nhà đầu tư</span>
            </a>
          </div>
        </div>
      </div>
      <div className="bg-gray-50 border-t bottom-0 w-full z-10  py-3 hidden md:block">
        <div className="container mx-auto px-10 flex justify-between items-center text-gray-500 ">
          <div>
            <span>© 2022 Airbnb, Inc.</span>
            <span className="px-3 hover:underline cursor-pointer">
              Quyền riêng tư
            </span>
            <span className="px-3 hover:underline cursor-pointer">
              Điều khoản
            </span>
            <span className="px-3 hover:underline cursor-pointer">
              Sơ đồ trang web
            </span>
          </div>
          <div className="text-gray-700">
            <span>
              <i className="fa-solid fa-globe"></i>
            </span>
            <span className="hover:underline cursor-pointer px-3 font-medium">
              Tiếng Việt(VN)
            </span>
            <span>
              <i className="fa-solid fa-dollar-sign"></i>
            </span>
            <span className="hover:underline cursor-pointer px-2 font-medium">
              USD
            </span>
            <span className="px-[3px]">
              <i className="fa-brands fa-facebook"></i>
            </span>
            <span className="px-[3px]">
              <i className="fa-brands fa-twitter"></i>
            </span>
            <span className="px-[3px]">
              <i className="fa-brands fa-instagram"></i>
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};
