import { Button, Input } from "components";
import { useForm, SubmitHandler } from "react-hook-form";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
// import { openModal } from "./CardListUser";
import {
  DeleteUserThunk,
  EditUserThunk,
  ListUserActions,
  ListUserThunk,
  UpdateUserThunk,
} from "store/DanhSachThanhVien";
import { RootState, useAppDispatch } from "store";
import { AccountSchema, AccountSchemaType } from "schemas";
import { zodResolver } from "@hookform/resolvers/zod";
import styled from "styled-components";
import { ListUserType } from "types/ListUserType";

export const ListUser = () => {
  const dispatch = useAppDispatch();
  const [nameValue, setnameValue] = useState<string>("");
  const { listUser, EditUser, searchUser } = useSelector(
    (state: RootState) => state.ListReducer
  );
  const {
    reset,
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<AccountSchemaType>({
    resolver: zodResolver(AccountSchema),
    mode: "onChange",
  });

  const onSubmit: SubmitHandler<ListUserType> = (value) => {
    dispatch(
      UpdateUserThunk({
        id: EditUser.id,
        payload: value,
      })
    );
    console.log(
      dispatch(
        UpdateUserThunk({
          id: EditUser.id,
          payload: value,
        })
      )
    );

    // const payload: updatePayload={
    //     path: EditUser
    // data = value
    // }

    console.log(value);
  };

  useEffect(() => {
    dispatch(ListUserThunk());
    reset(EditUser);
  }, [dispatch, reset, EditUser]);
  return (
    <ListUsers>
      <form onSubmit={handleSubmit(onSubmit)}>
        <h1 className="text-3xl text-center mb-20 font-bold">
          Quản lý Thông Tin Người Dùng
        </h1>
        <div className="flex !justify-end mb-2">
          <Input
            className=""
            placeholder="Tìm kiếm tên người dùng"
            value={nameValue || ""}
            onChange={(ev) => {
              const value = ev.target.value;
              setnameValue(value);
            }}
          />

          <Button
            htmlType="submit"
            className=" mt-[8px] !border-red-500 !bg-red-500 !rounded-none !px-[10px] !h-[38px]"
            onClick={() => {
              if (nameValue !== "") {
                const searchName = listUser?.filter((item) =>
                  item.name.includes(nameValue)
                );
                dispatch(ListUserActions.searchName(searchName));
              } else {
                dispatch(ListUserActions.searchName(undefined));
              }
            }}
          >
            <i className="fa-solid fa-magnifying-glass text-white"></i>
          </Button>
        </div>

        <table className="w-full ml-auto">
          <thead>
            <tr className="bg-red-500 text-white">
              <th className="!p-[15px] border-[1px]">Mã người dùng</th>
              <th className="border-[1px]">Tên người dùng</th>
              <th className="border-[1px]">Email</th>
              <th className="border-[1px]">Role</th>
              <th className="!p-[15px] border-[1px]">Action</th>
            </tr>
          </thead>
          <tbody>
            {(searchUser ? searchUser : listUser)?.map((user, index) => {
              return (
                <tr key={index}>
                  <td className="text-center border-[1px] py-16">{user.id}</td>
                  <td className="text-center border-[1px]">{user.name}</td>
                  <td className="text-center border-[1px]">{user.email}</td>
                  <td className="text-center border-[1px]">{user.role}</td>
                  <td className="text-center border-[1px]">
                    <Button
                      className="mr-[15px] !bg-yellow-400 !text-white !font-500 "
                      data-bs-toggle="modal"
                      data-bs-target="#exampleModal"
                      onClick={() => {
                        dispatch(EditUserThunk(user?.id));
                      }}
                    >
                      Edit
                    </Button>
                    <div
                      className="modal fade"
                      id="exampleModal"
                      tabIndex={-1}
                      aria-labelledby="exampleModalLabel"
                      aria-hidden="true"
                    >
                      <div className="modal-dialog modal-lg">
                        <div className="modal-content">
                          <div className="modal-header block">
                            <h1
                              className="modal-title !text-center"
                              id="exampleModalLabel"
                            >
                              Thông tin khách hàng
                            </h1>
                            <button
                              type="button"
                              className="btn-close"
                              data-bs-dismiss="modal"
                              aria-label="Close"
                            />
                          </div>

                          <div className="modal-body">
                            <p className="font-bold text-orange-500 flex justify-start">
                              Mã khách hàng
                            </p>
                            <Input
                              id="id"
                              name="id"
                              error={errors?.id?.message}
                              register={register}
                            />

                            <p className="font-bold text-orange-500  flex justify-start">
                              Tên Người Dùng
                            </p>
                            <Input
                              id="name"
                              name="name"
                              error={errors?.name?.message}
                              register={register}
                            />
                            <p className="font-bold text-orange-500  flex justify-start">
                              Email
                            </p>
                            <Input
                              id="email"
                              name="email"
                              error={errors?.email?.message}
                              register={register}
                            />
                            <p className="font-bold text-orange-500  flex justify-start">
                              Role
                            </p>
                            <Input
                              id="role"
                              name="role"
                              error={errors?.role?.message}
                              register={register}
                            />
                          </div>
                          <div className="modal-footer">
                            <Button
                              className="!bg-fuchsia-500 !text-white !font-500"
                              data-bs-dismiss="modal"
                            >
                              Đóng
                            </Button>
                            <Button
                              className="!bg-red-500 !text-white !font-500"
                              htmlType="submit"
                              onClick={(value) => {
                                console.log(
                                  "test",
                                  dispatch(
                                    UpdateUserThunk({
                                      id: EditUser.id,
                                      payload: value,
                                    })
                                  )
                                );
                              }}
                            >
                              Cập Nhật
                            </Button>
                          </div>
                        </div>
                      </div>
                    </div>

                    <Button
                      className="mr-[15px] !bg-sky-600 !text-white !font-500 "
                      onClick={() => {
                        dispatch(DeleteUserThunk(user.id));
                        //   openModal("success");
                      }}
                    >
                      Delete
                    </Button>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </form>
    </ListUsers>
  );
};
const ListUsers = styled.div`
  width: 80%;
  border-radius: 6px;
  margin-bottom: 6px;
  margin: 0 auto;
  Input {
    padding: 7px;
    background-color: white;
    border: 1px solid red;
    border-radius: 0px;
  }
  Buton:focus-visible {
    border: none !important;
  }
`;
