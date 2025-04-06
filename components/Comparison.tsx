import { siteContent } from '@/data/content';

export default function Comparison() {
  const { title, headers, rows } = siteContent.comparison;
  
  return (
    <section id="comparison" className="section-padding bg-gray-50">
      <div className="container-custom">
        <div className="max-w-4xl mx-auto">
          <h2 className="heading-2 text-center mb-10">{title}</h2>
          
          <div className="overflow-x-auto">
            <table className="min-w-full bg-white rounded-lg overflow-hidden shadow-lg">
              <thead className="bg-primary text-white">
                <tr>
                  {headers.map((header, index) => (
                    <th key={index} className="px-6 py-4 text-left text-sm font-semibold uppercase tracking-wider">
                      {header}
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200">
                {rows.map((row, rowIndex) => (
                  <tr key={rowIndex} className={rowIndex % 2 === 0 ? 'bg-white' : 'bg-gray-50'}>
                    {row.map((cell, cellIndex) => (
                      <td key={cellIndex} className="px-6 py-4 text-sm text-gray-700">
                        {cell}
                      </td>
                    ))}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          
          <div className="mt-8 text-center text-gray-600">
            <p className="italic">
              Choose the model that best suits your needs and preferences.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
} 