"use client";

import { BedDouble } from "lucide-react";

const bedTypes = [
  { key: "single", label: "Single Bed" },
  { key: "double", label: "Double Bed" },
  { key: "queen", label: "Queen Bed" },
  { key: "king", label: "King Bed" },
];

export default function StepRooms({ formData, setFormData }: any) {
  const bedrooms =
    formData.bed_config?.bedrooms || [
      {
        name: "Bedroom 1",
        beds: { single: 0, double: 0, queen: 0, king: 0 },
      },
    ];

  const updateBedrooms = (updated: any) => {
    setFormData({
      ...formData,
      bed_config: { bedrooms: updated },
    });
  };

  const updateBedCount = (
    roomIndex: number,
    bedKey: string,
    value: number
  ) => {
    const updated = [...bedrooms];
    updated[roomIndex].beds[bedKey] = Math.max(0, value);
    updateBedrooms(updated);
  };

  const addBedroom = () => {
    updateBedrooms([
      ...bedrooms,
      {
        name: `Bedroom ${bedrooms.length + 1}`,
        beds: { single: 0, double: 0, queen: 0, king: 0 },
      },
    ]);
  };

  const removeBedroom = (index: number) => {
    if (bedrooms.length === 1) return;
    const updated = bedrooms.filter((_: any, i: number) => i !== index);
    updateBedrooms(updated);
  };

  const totalBeds = bedrooms.reduce((total: number, room: any) => {
    return (
      total +
      Object.values(room.beds).reduce(
        (sum: number, count: any) => sum + count,
        0
      )
    );
  }, 0);

  return (
    <div className="max-w-3xl">

      <h1 className="text-4xl font-display font-semibold text-gray-900 mb-4">
        Rooms & Beds
      </h1>

      <p className="text-gray-600 mb-10 text-lg">
        Tell guests where they’ll sleep.
      </p>

      <div className="space-y-8">

        {bedrooms.map((room: any, roomIndex: number) => (
          <div
            key={roomIndex}
            className="bg-white border border-gray-200 rounded-2xl p-8 shadow-sm"
          >
            <div className="flex justify-between items-center mb-6">
              <h3 className="text-xl font-semibold text-gray-900 flex items-center gap-2">
                <BedDouble size={20} />
                {room.name}
              </h3>

              {bedrooms.length > 1 && (
                <button
                  onClick={() => removeBedroom(roomIndex)}
                  className="text-sm text-red-500 hover:underline"
                >
                  Remove
                </button>
              )}
            </div>

            <div className="space-y-5">
              {bedTypes.map((bed) => (
                <div
                  key={bed.key}
                  className="flex items-center justify-between"
                >
                  <span className="text-gray-700 font-medium">
                    {bed.label}
                  </span>

                  <div className="flex items-center gap-4">

                    <button
                      onClick={() =>
                        updateBedCount(
                          roomIndex,
                          bed.key,
                          room.beds[bed.key] - 1
                        )
                      }
                      className="h-9 w-9 rounded-full border border-gray-300 hover:border-black flex items-center justify-center transition color-gray-700 text-black"
                    >
                      -
                    </button>

                    <span className="w-6 text-center font-medium">
                      {room.beds[bed.key]}
                    </span>

                    <button
                      onClick={() =>
                        updateBedCount(
                          roomIndex,
                          bed.key,
                          room.beds[bed.key] + 1
                        )
                      }
                      className="h-9 w-9 rounded-full border border-gray-300 hover:border-black flex items-center justify-center transition color-gray-700 text-black"
                    >
                      +
                    </button>

                  </div>
                </div>
              ))}
            </div>
          </div>
        ))}

        {/* Add Bedroom */}
        <button
          onClick={addBedroom}
          className="w-full border border-dashed border-gray-300 rounded-2xl py-5 text-gray-600 hover:border-black hover:text-black transition text-black color-gray-700"
        >
          + Add Another Bedroom
        </button>

        {/* Total Beds Preview */}
        <div className="bg-gray-100 rounded-xl p-6 text-gray-800 font-medium">
          Total Sleeping Capacity: {totalBeds}
        </div>

      </div>
    </div>
  );
}