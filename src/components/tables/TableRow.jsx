import { Badge } from '@/components/common/Badge'
import { Button } from '@/components/common/Button'

export const TableRow = ({ row, columns, onClick, onEdit, onDelete }) => {
  return (
    <tr 
      className={`
        ${onClick ? 'cursor-pointer hover:bg-gray-50 dark:hover:bg-gray-700' : ''}
        transition-colors
      `}
      onClick={() => onClick?.(row)}
    >
      {columns.map((column) => (
        <td key={column.key} className="px-6 py-4 whitespace-nowrap">
          {column.render ? (
            column.render(row[column.key], row)
          ) : column.type === 'badge' ? (
            <Badge variant={row[column.badgeKey] || 'default'}>
              {row[column.key]}
            </Badge>
          ) : (
            <div className="text-sm text-gray-900 dark:text-gray-100">
              {row[column.key]}
            </div>
          )}
        </td>
      ))}
      {(onEdit || onDelete) && (
        <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
          {onEdit && (
            <Button variant="ghost" size="sm" onClick={(e) => { e.stopPropagation(); onEdit(); }}>
              Edit
            </Button>
          )}
          {onDelete && (
            <Button variant="ghost" size="sm" className="text-red-600 hover:text-red-700" onClick={(e) => { e.stopPropagation(); onDelete(); }}>
              Delete
            </Button>
          )}
        </td>
      )}
    </tr>
  )
}