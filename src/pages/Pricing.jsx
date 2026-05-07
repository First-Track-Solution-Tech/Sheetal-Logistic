import React, { useState } from "react";
import { X, Plus, BarChart2 } from "lucide-react";
import { assets } from '../assets/assets'

const Pricing = () => {
  const [boxes, setBoxes] = useState([
    { weight: "0", unit: "g", l: "0", b: "0", h: "0", count: "1" },
  ]);

  const addBox = () => {
    setBoxes([...boxes, { weight: "0", unit: "g", l: "0", b: "0", h: "0", count: "1" }]);
  };

  const removeBox = (index) => {
    setBoxes(boxes.filter((_, i) => i !== index));
  };

  const handleBoxChange = (index, field, value) => {
    const updated = [...boxes];
    updated[index][field] = value;
    setBoxes(updated);
  };

  return (
    <section className="min-h-screen bg-gray-50 py-14 px-4">

      {/* Header */}
      <div className="text-center mb-10">
        <h1 className="text-3xl md:text-4xl font-bold text-gray-800">
          Calculate Your{" "}
          <span className="text-emerald-500">Shipping Price</span>
        </h1>
        <p className="text-gray-500 mt-3 text-sm max-w-md mx-auto">
          Enter your shipment details and compare prices from various carriers to find
          the best option for your logistics needs.
        </p>
      </div>

      {/* Form Card */}
      <div className="max-w-2xl mx-auto bg-white rounded-2xl shadow-md p-6 md:p-8 space-y-8">

        {/* Shipment Details */}
        <div>
          <h2 className="text-base font-semibold text-gray-700 mb-4 pb-2 border-b border-gray-200">
            Shipment Details
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="flex flex-col gap-1">
              <label className="text-xs text-gray-500 font-medium">Shipping Method</label>
              <select className="input">
                <option>Surface</option>
                <option>Air</option>
              </select>
            </div>
            <div className="flex flex-col gap-1">
              <label className="text-xs text-gray-500 font-medium">Status</label>
              <select className="input">
                <option>Forward</option>
                <option>Reverse</option>
              </select>
            </div>
            <div className="flex flex-col gap-1">
              <label className="text-xs text-gray-500 font-medium">Origin Pincode</label>
              <input className="input" placeholder="Ex. 813210" />
            </div>
            <div className="flex flex-col gap-1">
              <label className="text-xs text-gray-500 font-medium">Destination Pincode</label>
              <input className="input" placeholder="Ex. 845401" />
            </div>
          </div>
        </div>

        {/* Payment & Type */}
        <div>
          <h2 className="text-base font-semibold text-gray-700 mb-4 pb-2 border-b border-gray-200">
            Payment & Type
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="flex flex-col gap-1">
              <label className="text-xs text-gray-500 font-medium">Payment Mode</label>
              <select className="input">
                <option>COD</option>
                <option>Prepaid</option>
              </select>
            </div>
            <div className="flex flex-col gap-1">
              <label className="text-xs text-gray-500 font-medium">COD Amount</label>
              <input className="input" placeholder="0" type="number" />
            </div>
            <div className="flex flex-col gap-1">
              <label className="text-xs text-gray-500 font-medium">Shipment Type</label>
              <select className="input">
                <option>B2C</option>
                <option>B2B</option>
              </select>
            </div>
            <div className="flex flex-col gap-1">
              <label className="text-xs text-gray-500 font-medium">Invoice Amount</label>
              <input className="input" placeholder="0" type="number" />
            </div>
          </div>
        </div>

        {/* Package Details */}
        <div>
          <h2 className="text-base font-semibold text-gray-700 mb-4 pb-2 border-b border-gray-200">
            Package Details
          </h2>

          <div className="space-y-4">
            {boxes.map((box, index) => (
              <div key={index} className="border border-gray-200 rounded-xl p-4 relative bg-gray-50">
                <p className="text-xs font-semibold text-gray-500 mb-3">Box {index + 1}</p>

                {index > 0 && (
                  <button
                    onClick={() => removeBox(index)}
                    className="absolute top-3 right-3 text-red-400 hover:text-red-600 hover:scale-110 transition"
                  >
                    <X size={16} />
                  </button>
                )}

                <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
                  <div className="flex flex-col gap-1">
                    <label className="text-xs text-gray-500">Weight</label>
                    <input
                      className="input"
                      placeholder="0"
                      type="number"
                      value={box.weight}
                      onChange={(e) => handleBoxChange(index, "weight", e.target.value)}
                    />
                  </div>

                  <div className="flex flex-col gap-1">
                    <label className="text-xs text-gray-500">Weight Unit</label>
                    <select
                      className="input"
                      value={box.unit}
                      onChange={(e) => handleBoxChange(index, "unit", e.target.value)}
                    >
                      <option>g</option>
                      <option>kg</option>
                    </select>
                  </div>

                  <div className="flex flex-col gap-1">
                    <label className="text-xs text-gray-500">Length (cm)</label>
                    <input
                      className="input"
                      placeholder="0"
                      type="number"
                      value={box.l}
                      onChange={(e) => handleBoxChange(index, "l", e.target.value)}
                    />
                  </div>

                  <div className="flex flex-col gap-1">
                    <label className="text-xs text-gray-500">Breadth (cm)</label>
                    <input
                      className="input"
                      placeholder="0"
                      type="number"
                      value={box.b}
                      onChange={(e) => handleBoxChange(index, "b", e.target.value)}
                    />
                  </div>

                  <div className="flex flex-col gap-1">
                    <label className="text-xs text-gray-500">Height (cm)</label>
                    <input
                      className="input"
                      placeholder="0"
                      type="number"
                      value={box.h}
                      onChange={(e) => handleBoxChange(index, "h", e.target.value)}
                    />
                  </div>

                  <div className="flex flex-col gap-1">
                    <label className="text-xs text-gray-500">Quantity</label>
                    <input
                      className="input"
                      placeholder="1"
                      type="number"
                      value={box.count}
                      onChange={(e) => handleBoxChange(index, "count", e.target.value)}
                    />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Action Buttons */}
        <div className="flex flex-wrap gap-3 pt-2">
          <button
            onClick={addBox}
            className="flex items-center gap-2 px-5 py-2.5 rounded-full border border-emerald-500 text-emerald-600 text-sm font-medium hover:bg-emerald-50 transition"
          >
            <Plus size={16} /> Add More Boxes
          </button>

          <button className="flex items-center gap-2 px-6 py-2.5 rounded-full bg-emerald-500 text-white text-sm font-medium hover:bg-emerald-600 transition">
            <BarChart2 size={16} /> Submit and Compare
          </button>
        </div>

      </div>
    </section>
  );
};

export default Pricing;