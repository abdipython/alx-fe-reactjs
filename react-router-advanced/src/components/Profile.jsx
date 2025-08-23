// src/components/Profile.jsx
import { Routes, Route, Link } from "react-router-dom";

// Sub-components
function ProfileDetails() {
  return (
    <div>
      <h2 className="text-xl font-semibold">Profile Details</h2>
      <p className="mt-2 text-gray-700">Here are your personal details.</p>
    </div>
  );
}

function ProfileSettings() {
  return (
    <div>
      <h2 className="text-xl font-semibold">Profile Settings</h2>
      <p className="mt-2 text-gray-700">Here you can adjust your settings.</p>
    </div>
  );
}

// Main Profile component with nested routes
export default function Profile() {
  return (
    <div>
      <h1 className="text-2xl font-bold mb-4">Profile</h1>

      {/* Profile Nav */}
      <nav className="mb-4 space-x-4">
        <Link to="details" className="text-blue-600 hover:underline">
          Details
        </Link>
        <Link to="settings" className="text-blue-600 hover:underline">
          Settings
        </Link>
      </nav>

      {/* Nested Routes */}
      <Routes>
        <Route path="details" element={<ProfileDetails />} />
        <Route path="settings" element={<ProfileSettings />} />
      </Routes>
    </div>
  );
}
