import React from 'react';

const sampleData = [
  { product: 'Product A', price: '$120.00', change: '+1.2%', updated: '2025-04-27 10:15' },
  { product: 'Product B', price: '$98.50', change: '-0.8%', updated: '2025-04-27 10:17' },
  { product: 'Product C', price: '$150.25', change: '+0.5%', updated: '2025-04-27 10:20' },
  { product: 'Product D', price: '$75.10', change: '+0.3%', updated: '2025-04-27 10:22' },
  { product: 'Product E', price: '$210.00', change: '-1.1%', updated: '2025-04-27 10:24' },
  { product: 'Product F', price: '$45.75', change: '+2.0%', updated: '2025-04-27 10:26' },
  { product: 'Product G', price: '$134.60', change: '-0.4%', updated: '2025-04-27 10:28' },
  { product: 'Product H', price: '$98.30', change: '+1.5%', updated: '2025-04-27 10:30' },
  { product: 'Product I', price: '$160.00', change: '-0.9%', updated: '2025-04-27 10:32' },
  { product: 'Product J', price: '$220.45', change: '+0.7%', updated: '2025-04-27 10:34' },
  { product: 'Product K', price: '$88.20', change: '+1.8%', updated: '2025-04-27 10:36' },
  { product: 'Product L', price: '$305.10', change: '-2.2%', updated: '2025-04-27 10:38' },
  { product: 'Product M', price: '$42.00', change: '+0.9%', updated: '2025-04-27 10:40' },
  { product: 'Product N', price: '$149.99', change: '-0.1%', updated: '2025-04-27 10:42' },
  { product: 'Product O', price: '$58.75', change: '+2.5%', updated: '2025-04-27 10:44' },

];

export default function PriceTable({ data = sampleData }) {
  return (
    <div className="[@media(max-width:65vw)]:mx-1 mx-2 md:mx-16 lg:mx-32 xl:mx-48 my-6 bg-white/5 backdrop-blur-lg border border-white rounded-[25px] p-6 shadow-lg overflow-x-auto">
      <table className="min-w-[1200px] w-full table-auto text-left">
        <thead className="sticky top-0 bg-white/20 backdrop-blur-md">
          <tr>
            <th className="px-6 py-3 uppercase text-sm font-semibold text-white/60">Product</th>
            <th className="px-6 py-3 uppercase text-sm font-semibold text-white/60">Price</th>
            <th className="px-6 py-3 uppercase text-sm font-semibold text-white/60">Change</th>
            <th className="px-6 py-3 uppercase text-sm font-semibold text-white/60">Last Updated</th>
          </tr>
        </thead>
        <tbody>
          {data.map((item, idx) => (
            <tr
              key={idx}
              className="even:bg-white/10 hover:bg-white/20 transition-colors duration-200"
            >
              <td className="px-6 py-4 text-white/60">{item.product}</td>
              <td className="px-6 py-4 text-white/60">{item.price}</td>
              <td
                className={
                  `px-6 py-4 font-semibold ` +
                  (item.change.startsWith('+') ? 'text-green-400/60' : 'text-red-400/60')
                }
              >
                {item.change}
              </td>
              <td className="px-6 py-4 text-white/60">{item.updated}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
