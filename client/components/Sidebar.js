export default function Sidebar() {
  return (
    <aside className="w-64 p-4 bg-gray-100 dark:bg-gray-800">
      <div className="mb-4">
        <label className="block mb-1 font-semibold">Select Region</label>
        <input type="text" placeholder="City, State" className="w-full px-2 py-1 rounded" />
      </div>
      <div className="mb-4">
        <label className="block mb-1 font-semibold">Artist</label>
        <input type="text" placeholder="Artist name" className="w-full px-2 py-1 rounded" />
      </div>
      <div className="mb-4">
        <label className="block mb-1 font-semibold">Sabha</label>
        <input type="text" placeholder="Sabha name" className="w-full px-2 py-1 rounded" />
      </div>
      <button className="mt-4 w-full bg-blue-600 text-white py-2 px-4 rounded hover:bg-blue-700">
        Upload PDF / Image
      </button>
    </aside>
  );
}