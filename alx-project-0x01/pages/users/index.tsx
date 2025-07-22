import Header from "@/components/layout/Header";
import UserCard from "@/components/common/UserCard";
import { UserProps } from "@/interfaces";

const Users: React.FC<UserProps[]> = ({ users }) => {
  return (
    <div>
      <Header />

      {users?.map(
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
  const users = await response.json();

  return {
    props: {
      users,
    },
  };
}

export default Users;
