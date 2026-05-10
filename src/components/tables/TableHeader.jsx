export const TableHeader = ({ column, sortConfig, onSort }) => {
  const isSorted = sortConfig.key === column.key
  
  return (
    <th
      className={`
        px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider
        ${column.sortable ? 'cursor-pointer hover:bg-gray-100 dark:hover:bg-gray-600' : ''}
      `}
      onClick={() => column.sortable && onSort(column.key)}
    >
      <div className="flex items-center space-x-1">
        <span>{column.label}</span>
        {column.sortable && (
          <span className="inline-flex flex-col">
            <svg
              className={`h-3 w-3 ${isSorted && sortConfig.direction === 'asc' ? 'text-blue-600' : 'text-gray-400'}`}
              fill="currentColor"
              viewBox="0 0 20 20"
            >
              <path fillRule="evenodd" d="M5.293 7.707a1 1 0 010-1.414l4-4a1 1 0 011.414 0l4 4a1 1 0 01-1.414 1.414L11 5.414V17a1 1 0 11-2 0V5.414L6.707 7.707a1 1 0 01-1.414 0z" clipRule="evenodd" />
            </svg>
            <svg
              className={`h-3 w-3 ${isSorted && sortConfig.direction === 'desc' ? 'text-blue-600' : 'text-gray-400'}`}
              fill="currentColor"
              viewBox="0 0 20 20"
            >
              <path fillRule="evenodd" d="M14.707 12.293a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 111.414-1.414L9 14.586V3a1 1 0 012 0v11.586l2.293-2.293a1 1 0 011.414 0z" clipRule="evenodd" />
            </svg>
          </span>
        )}
      </div>
    </th>
  )
}