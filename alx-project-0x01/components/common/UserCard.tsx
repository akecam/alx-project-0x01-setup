import { UserProps } from "@/interfaces";
import Image from "next/image";
import profile_avatar from "@/public/assets/images/profile_avatar.svg";

const UserCard: React.FC<UserProps> = ({
  id,
  name,
  username,
  email,
  address,
  phone,
  website,
  company,
}) => {
  return (
    <section className="max-w-md mx-auto my-6 p-6 bg-white rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300 flex flex-col justify-center items-center hover:border-x-amber-200">
      <div className="rounded-full bg-amber-100">
        <Image src={profile_avatar} alt="avatar" width={150} height={150} />
      </div>

      <div>
        <p>
          <b>ID:</b> {id}
        </p>
        <p>
          <b>Name:</b> {name}
        </p>
        <p>
          <b>Username:</b> {username}
        </p>
        <p>
          <b>Email:</b> {email}
        </p>

        <div>
          <p>
            <b>Address:</b>
          </p>
          <p>
            <b>Street:</b> {address?.street}
          </p>
          <p>
            <b>Suite:</b> {address?.suite}
          </p>
          <p>
            <b>City:</b> {address?.city}
          </p>
          <p>
            <b>Zipcode:</b> {address?.zipcode}
          </p>
          <p>
            <b>Geo:</b>
          </p>
          <p>
            <b>Latitude:</b> {address?.geo?.lat}
          </p>
          <p>
            <b>Longitude:</b> {address?.geo?.lng}
          </p>
        </div>

        <p>
          <b>Phone:</b> {phone}
        </p>
        <p>
          <b>Website:</b> {website}
        </p>

        <div>
          <p>
            <b>Company:</b>
          </p>
          <p>
            <b>Company Name:</b> {company?.name}
          </p>
          <p>
            <b>CatchPhrase:</b> {company?.catchPhrase}
          </p>
          <p>
            <b>BS:</b> {company?.bs}
          </p>
        </div>
      </div>
    </section>
  );
};

export default UserCard;
