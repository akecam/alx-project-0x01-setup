import {
  UserModalProps,
  UserData,
  Geo,
  AddressData,
  Company,
} from "@/interfaces";
import React, { useState } from "react";

const UserModel: React.FC = ({ onClose, onSubmit }) => {
  const [personalInfo, setPersonalInfo] = useState<UserData>({
    id: 1,
    name: "",
    username: "",
    email: "",
    phone: "",
    website: "",
  });

  const [address, setAddress] = useState<AddressData>({
    street: "",
    suite: "",
    city: "",
    zipcode: "",
  });

  const [geo, setGeo] = useState<Geo>({
    lat: "",
    lng: "",
  });

  const [company, setCompany] = useState<Company>({
    name: "",
    catchPhrase: "",
    bs: "",
  });

  const handleChangePersonalInfo = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;

    setPersonalInfo((prevInput) => ({ ...prevInput, [name]: value }));
  };

  const handleChangeAddress = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;

    setAddress((prevInput) => ({ ...prevInput, [name]: value }));
  };

  const handleChangeGeo = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;

    setGeo((prevInput) => ({ ...prevInput, [name]: value }));
  };

  const handleChangeCompany = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;

    setCompany((prevInput) => ({ ...prevInput, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSubmit({
      ...personalInfo,
      address: { ...address, geo: { ...geo } },
      company: { ...company },
    });
    onClose();
  };

  return (
    <div className="fixed inset-0 bg-gray-900 bg:opacity-50 flex justify-center items-center">
      <div className="bg-white rounded-lg p-8 shadow-lg w-full max-w-full">
        <h2 className="text-2xl font-bold mb-4 text-gray-800">Add New User</h2>

        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label
              htmlFor="id"
              className="block text-gray-700 font-medium mb-2"
            >
              User ID
            </label>
            <input
              type="number"
              id="id"
              name="id"
              value={personalInfo.id}
              onChange={handleChangePersonalInfo}
              className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          <div className="mb-4">
            <label
              htmlFor="name"
              className="block text-gray-700 font-medium mb-2"
            >
              Name
            </label>
            <input
              type="text"
              id="name"
              name="name"
              value={personalInfo.name}
              onChange={handleChangePersonalInfo}
              className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          <div className="mb-4">
            <label
              htmlFor="username"
              className="block text-gray-700 font-medium mb-2"
            >
              Username
            </label>
            <input
              type="text"
              id="username"
              name="username"
              value={personalInfo.username}
              onChange={handleChangePersonalInfo}
              className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          <div className="mb-4">
            <label
              htmlFor="email"
              className="block text-gray-700 font-medium mb-2"
            >
              Email
            </label>
            <input
              type="text"
              id="email"
              name="email"
              value={personalInfo.email}
              onChange={handleChangePersonalInfo}
              className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          <div className="mb-4">
            <label
              htmlFor="street"
              className="block text-gray-700 font-medium mb-2"
            >
              Street
            </label>
            <input
              type="text"
              id="street"
              name="street"
              value={address.street}
              onChange={handleChangeAddress}
              className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          <div className="mb-4">
            <label
              htmlFor="suite"
              className="block text-gray-700 font-medium mb-2"
            >
              Suite
            </label>
            <input
              type="text"
              id="suite"
              name="suite"
              value={address.suite}
              onChange={handleChangeAddress}
              className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          <div className="mb-4">
            <label
              htmlFor="city"
              className="block text-gray-700 font-medium mb-2"
            >
              City
            </label>
            <input
              type="text"
              id="city"
              name="city"
              value={address.city}
              onChange={handleChangeAddress}
              className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          <div className="mb-4">
            <label
              htmlFor="zipcode"
              className="block text-gray-700 font-medium mb-2"
            >
              Zipcode
            </label>
            <input
              type="text"
              id="zipcode"
              name="zipcode"
              value={address.zipcode}
              onChange={handleChangeAddress}
              className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          <div className="mb-4">
            <label
              htmlFor="lat"
              className="block text-gray-700 font-medium mb-2"
            >
              Latitude
            </label>
            <input
              type="text"
              id="lat"
              name="lat"
              value={geo.lat}
              onChange={handleChangeGeo}
              className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          <div className="mb-4">
            <label
              htmlFor="lng"
              className="block text-gray-700 font-medium mb-2"
            >
              Longitude
            </label>
            <input
              type="text"
              id="lng"
              name="lng"
              value={geo.lng}
              onChange={handleChangeGeo}
              className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          <div className="mb-4">
            <label
              htmlFor="phone"
              className="block text-gray-700 font-medium mb-2"
            >
              Phone
            </label>
            <input
              type="text"
              id="phone"
              name="phone"
              value={personalInfo.phone}
              onChange={handleChangePersonalInfo}
              className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          <div className="mb-4">
            <label
              htmlFor="website"
              className="block text-gray-700 font-medium mb-2"
            >
              Website
            </label>
            <input
              type="text"
              id="website"
              name="website"
              value={personalInfo.website}
              onChange={handleChangePersonalInfo}
              className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          <div className="mb-4">
            <label
              htmlFor="name"
              className="block text-gray-700 font-medium mb-2"
            >
              Company Name
            </label>
            <input
              type="text"
              id="name"
              name="name"
              value={company.name}
              onChange={handleChangeCompany}
              className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          <div className="mb-4">
            <label
              htmlFor="catchPhrase"
              className="block text-gray-700 font-medium mb-2"
            >
              Catch Phrase
            </label>
            <input
              type="text"
              id="catchPhrase"
              name="catchPhrase"
              value={company.catchPhrase}
              onChange={handleChangeCompany}
              className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          <div className="mb-4">
            <label
              htmlFor="bs"
              className="block text-gray-700 font-medium mb-2"
            >
              BS
            </label>
            <input
              type="text"
              id="bs"
              name="bs"
              value={company.bs}
              onChange={handleChangeCompany}
              className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          {/* Buttons Don't complet for now  */}
          <div className="flex justify-between items-center">
            <button
              type="button"
              onClick={onClose}
              className="px-4 py-2 text-gray-600 hover:text-gray-800 focus:outline-none"
            >
              Cancel
            </button>
            <button
              type="submit"
              className="px-6 py-2 bg-blue-500 text-white rounded-lg hovver:bh-blue-600 transition"
            >
              Add User
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default UserModel;
