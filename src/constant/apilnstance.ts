import axios, { AxiosRequestHeaders, CreateAxiosDefaults } from "axios";
import { getAccessToken } from "utils";

const TokenCybersoft =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ0ZW5Mb3AiOiJCb290Y2FtcCA0NyIsIkhldEhhblN0cmluZyI6IjE1LzAyLzIwMjQiLCJIZXRIYW5UaW1lIjoiMTcwNzk1NTIwMDAwMCIsIm5iZiI6MTY3ODk4NjAwMCwiZXhwIjoxNzA4MTAyODAwfQ.YGLcwOu11pM9sD9C2a0dia7O_6vvsYwkCoo1sqcbCFM";
export const apiInstance = (config?: CreateAxiosDefaults) => {
  const api = axios.create(config);
  api.interceptors.request.use((config) => {
    return {
      ...config,
      headers: {
        TokenCybersoft,
        token: getAccessToken(),
        Authorization: "Bearer" + " " + getAccessToken() || "",
      } as unknown as AxiosRequestHeaders,
    };
  });

  return api;
};

// curl -X POST "https://airbnbnew.cybersoft.edu.vn/api/binh-luan"
// -H "accept: application/json"
// -H "token: eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9eyJpZCI6IjM4OTciLCJlbWFpbCI6ImxldGhhbmh0aGlAZ21haWwuY29tIiwicm9sZSI6IkFETUlOIiwibmJmIjoxNjk3NTUxMDExLCJleHAiOjE2OTgxNTU4MTF9.roQfqPpIeKLUY98ImsOzUmQ5BwBemq2gj5QXvzf60Gc"
// -H "tokenCybersoft: eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ0ZW5Mb3AiOiJCb290Y2FtcCA0NyIsIkhldEhhblN0cmluZyI6IjE1LzAyLzIwMjQiLCJIZXRIYW5UaW1lIjoiMTcwNzk1NTIwMDAwMCIsIm5iZiI6MTY3ODk4NjAwMCwiZXhwIjoxNzA4MTAyODAwfQ.YGLcwOu11pM9sD9C2a0dia7O_6vvsYwkCoo1sqcbCFM"
// -H "Content-Type: application/json-patch+json"
// -d "{ \"id\": 0, \"maPhong\": 2, \"maNguoiBinhLuan\": 3, \"ngayBinhLuan\": \"12/12/2021\", \"noiDung\": \"hay\", \"saoBinhLuan\": 2}"

// nay laf 1 cau call api
