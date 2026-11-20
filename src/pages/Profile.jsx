import { useAuth } from "../context/AuthContext";

const Profile = () => {
  const { currentUser, logout } = useAuth() || {};

  return (
    <div className="max-w-2xl mx-auto py-8">
      <div className="bg-white rounded-2xl p-8 shadow-sm border border-gray-100 space-y-6">
        <div className="flex items-center gap-4 border-b pb-6">
          <div className="w-16 h-16 bg-emerald-100 text-emerald-800 text-3xl font-extrabold rounded-full flex items-center justify-center">
            👤
          </div>
          <div>
            <h1 className="text-2xl font-extrabold text-gray-900">User Profile</h1>
            <p className="text-sm text-gray-500">{currentUser ? currentUser.email : "Guest User"}</p>
          </div>
        </div>

        <div className="space-y-4">
          <div>
            <label className="text-xs font-bold text-gray-400 uppercase tracking-wider block">Email Address</label>
            <p className="font-semibold text-gray-900 mt-1">{currentUser ? currentUser.email : "Not logged in"}</p>
          </div>

          <div>
            <label className="text-xs font-bold text-gray-400 uppercase tracking-wider block">Account Role</label>
            <span className="inline-block bg-emerald-100 text-emerald-800 text-xs font-bold px-3 py-1 rounded-full mt-1">
              Registered Member
            </span>
          </div>
        </div>

        {currentUser && (
          <button
            onClick={logout}
            className="w-full bg-red-50 hover:bg-red-100 text-red-600 font-bold py-3 rounded-xl transition border border-red-200 mt-4"
          >
            Logout
          </button>
        )}
      </div>
    </div>
  );
};

export default Profile;
