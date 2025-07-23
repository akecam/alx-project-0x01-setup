import Header from "@/components/layout/Header";
import UserCard from "@/components/common/UserCard";
import UserModel from "@/components/common/UserModal";
import { UserData, UserProps } from "@/interfaces";
import posts from "../posts";
import { useState } from "react";

const Users: React.FC<UserProps[]> = ({ posts }) => {
  const [isModalOpen, setModalOpen] = useState(false);
  const [user, setUser] = useState<UserProps | null>(null);

  const handleAddUser = (newUser: UserProps) => {
    setUser({ ...newUser, id: user?.id + 1 });
  };

  return (
    <div className="flex flex-col h-screen">
      <Header />

      <main className="p-4">
        <div className="flex justify-between">
          <h1 className="text-2xl font-semibold">Add User</h1>
          <button
            onClick={() => setModalOpen(true)}
            className="bg-blue-700 px-4 py-2 rounded-full text-white hover:bg-blue-500 transition"
          >
            Add User
          </button>
        </div>

        <div className="flex flex-cols gap-2">
          {posts.map((user: UserProps) => (
            <UserCard {...user} key={user.id} />
          ))}
        </div>
      </main>

      {isModalOpen && (
        <UserModel
          onClose={() => setModalOpen(false)}
          onSubmit={handleAddUser}
        />
      )}
    </div>
  );
};

export async function getStaticProps() {
  const response = await fetch("https://jsonplaceholder.typicode.com/users");
  const posts = await response.json();

  return {
    props: {
      posts,
    },
  };
}

export default Users;
