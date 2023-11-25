import { useQuery } from "@tanstack/react-query";
import { FaUsers } from "react-icons/fa";
import { RiDeleteBin5Line } from "react-icons/ri";
import Swal from "sweetalert2";
import toast from "react-hot-toast";
import useAxiosSecure from "../../../Hooks/useAxiosSecure";
import AOS from "aos";
AOS.init();

const AllUsers = () => {
  const axiosSecure = useAxiosSecure();

  const { data: users = [], refetch } = useQuery({
    queryKey: ["users"],
    queryFn: async () => {
      const res = await axiosSecure.get("/users");
      return res.data;
    },
  });

  const handleMakeAdmin = (user) => {
    axiosSecure.patch(`/users/admin/${user._id}`).then((res) => {
      if (res.data.modifiedCount > 0) {
        refetch();
        toast.success(`${user.name} is admin now !`, { duration: 3000 });
      }
      console.log(res.data);
    });
  };

  const handleDeleteUser = (user) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        axiosSecure.delete(`/users/${user._id}`).then((res) => {
          if (res.data.deletedCount > 0) {
            refetch();
            toast.success("Successfully Deleted!", { duration: 3000 });
          }
        });
      }
    });
  };

  return (
    <div data-aos="zoom-in-up">
      <div  className="text-center">
        <p className="text-[#D99904] font-inter text-[20px] font-normal italic my-5">
          {" "}
          ---How many??---
        </p>
        <h3 className="font-inter text-[#151515] text-[40px] font-nomal">
          MANAGE ALL USERS
        </h3>
      </div>
      <div>
        <h3 className="font-cinzel text-[#151515] text-[32px] font-bold">
          Total users: {users.length}
        </h3>
      </div>
      <div className="overflow-x-auto">
        <table className="table table-zebra">
          <thead
            className=" bg-orange-500 text-white mb-4 rounded-lg"
            style={{ borderRadius: "15px 15px 0px 0px" }}
          >
            <tr>
              <th></th>
              <th>Name</th>
              <th>Email</th>
              <th>Role</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {users.map((user, index) => (
              <tr key={user._id}>
                <th>{index + 1}</th>
                <td>{user.name}</td>
                <td>{user.email}</td>

                <td>
                  {user.role === "admin" ? (
                    "admin"
                  ) : (
                    <button
                      onClick={() => handleMakeAdmin(user)}
                      className=" mt-4 p-2 flex items-center justify-center rounded-md bg-[#D1A054] text-[25px] text-white"
                    >
                      <FaUsers></FaUsers>
                    </button>
                  )}
                </td>
                <td>
                  <button
                    onClick={() => handleDeleteUser(user)}
                    className=" mt-4 p-2 flex items-center justify-center rounded-md bg-[#B91C1C] text-[25px] text-white"
                  >
                    <RiDeleteBin5Line />
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default AllUsers;
