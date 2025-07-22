import Header from "@/components/layout/Header";
import UserCard from "@/components/common/UserCard";
import { UserData, UserProps } from "@/interfaces";
import posts from "../posts";

const Users: React.FC<UserProps[]> = ({ posts }) => {
  return (
    <div>
      <Header />

      {posts.map((user: UserProps) => (
        <UserCard {...user} key={user.id} />
      ))}
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
