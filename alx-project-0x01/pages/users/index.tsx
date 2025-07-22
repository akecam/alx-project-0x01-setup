import Header from "@/components/layout/Header";
import UserCard from "@/components/common/UserCard";
import { UserProps } from "@/interfaces";
import posts from "../posts";

const Users: React.FC<UserProps[]> = ({ posts }) => {
  return (
    <div>
      <Header />

      {posts.map(
        ({
          id,
          name,
          username,
          email,
          address,
          phone,
          website,
          company,
        }: UserProps) => (
          <UserCard
            name={name}
            key={id}
            id={id}
            username={username}
            email={email}
            address={address}
            phone={phone}
            website={website}
            company={company}
          />
        )
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
