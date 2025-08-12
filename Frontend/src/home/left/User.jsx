import React from "react";

function User() {
  return (
    <div>
      <div className="flex space-x-4 px-6 py-7 hover:bg-slate-700 duration-300 cursor-pointer rounded-lg">
        <div className="avatar avatar-online">
          <div className="w-14 rounded-full">
            <img src="https://media.licdn.com/dms/image/v2/D4E03AQFZDY4v6IphEw/profile-displayphoto-scale_200_200/B4EZhC1biIGYAc-/0/1753467960860?e=2147483647&v=beta&t=z3OF-nkh_mXOv_AcbHIjSaQSEKX5AE6yzwjql4J64p0" />
          </div>
        </div>

        <div>
          <h1 className="font-bold"> Sudarshan P</h1>
          <span className="text-gray-400"> Hello there! </span>
        </div>
      </div>
    </div>
  );
}

export default User;
