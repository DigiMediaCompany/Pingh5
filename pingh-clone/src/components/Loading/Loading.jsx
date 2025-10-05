import React from 'react'

const Loading = ({ type = "cards", count = 5 }) => {
  if (type === "cards") {
    return (
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 auto-rows-fr">
        {Array.from({ length: count }).map((_, index) => (
          <div
            key={index}
            className={`animate-pulse ${index === 0 ? "col-span-2 row-span-2" : ""}`}
          >
            <div className="bg-gray-200 rounded-lg overflow-hidden">
              <div className={`bg-gray-300 ${index === 0 ? "h-96" : "h-48"}`} />
              <div className="p-4 space-y-2">
                <div className="h-4 bg-gray-300 rounded w-1/4" />
                <div className="h-5 bg-gray-300 rounded w-3/4" />
                <div className="h-3 bg-gray-300 rounded w-full" />
                <div className="h-3 bg-gray-300 rounded w-2/3" />
              </div>
            </div>
          </div>
        ))}
      </div>
    )
  }

  if (type === "hero") {
    return (
      <div className="animate-pulse">
        <div className="bg-gradient-to-r from-gray-300 to-gray-400 py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center space-y-6">
              <div className="h-12 bg-gray-400 rounded w-3/4 mx-auto" />
              <div className="h-6 bg-gray-400 rounded w-1/2 mx-auto" />
              <div className="flex space-x-4 justify-center">
                <div className="h-12 bg-gray-400 rounded w-32" />
                <div className="h-12 bg-gray-400 rounded w-32" />
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }

  return (
    <div className="animate-pulse">
      <div className="h-4 bg-gray-200 rounded w-3/4 mb-2" />
      <div className="h-4 bg-gray-200 rounded w-1/2" />
    </div>
  )
}

export default Loading