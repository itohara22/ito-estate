import { Link } from "react-router-dom";

export const UserListings = ({
  userListings,
  handleListingDelete,
  setShowListingsError
}) => {
  return (
    <div
      onClick={() => setShowListingsError(true)}
      className="absolute inset-0 grid place-items-center z-30 backdrop-blur-xl"
    >
      <div className="absolute inset-0 z-20 bg-black opacity-60"></div>
      <div
        onClick={(e) => e.stopPropagation()}
        className="z-50 flex flex-col gap-4 bg-gray-200 p-6 rounded-lg"
      >
        <h1 className="text-center mt-7 text-2xl font-semibold">
          Your Listings
        </h1>
        {userListings.map((listing) => (
          <div
            key={listing._id}
            className="border rounded-lg p-3 flex justify-between items-center gap-4"
          >
            <Link to={`/listing/${listing._id}`}>
              <img
                src={listing.imageUrls[0]}
                alt="listing cover"
                className="h-16 w-16 object-contain"
              />
            </Link>
            <Link
              className="text-slate-700 font-semibold  hover:underline truncate flex-1"
              to={`/listing/${listing._id}`}
            >
              <p>{listing.name}</p>
            </Link>

            <div className="flex flex-col item-center">
              <button
                onClick={() => handleListingDelete(listing._id)}
                className="text-red-700 uppercase"
              >
                Delete
              </button>
              <Link to={`/update-listing/${listing._id}`}>
                <button className="text-green-700 uppercase">Edit</button>
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
