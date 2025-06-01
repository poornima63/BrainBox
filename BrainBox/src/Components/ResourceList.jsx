import React from "react";

function ResourceList({ resources }) {
  if (resources.length === 0) {
    return <p className="text-gray-600 text-center">No resources added yet.</p>;
  }

  return (
    <div className="space-y-4">
      <h2 className="text-xl font-semibold mb-2">Your Resources</h2>
      {resources.map((res) => (
        <div key={res.id} className="bg-white p-4 rounded shadow border">
          <h3 className="text-lg font-bold">{res.title}</h3>
          <p className="text-sm text-gray-500 mb-1">Category: {res.category}</p>
          <a
            href={res.link}
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-600 hover:underline"
          >
            Visit Resource ↗
          </a>
        </div>
      ))}
    </div>
  );
}

export default ResourceList;
