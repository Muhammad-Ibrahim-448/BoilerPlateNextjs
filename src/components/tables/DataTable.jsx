'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { ChevronUp, ChevronDown, Search, Filter } from 'lucide-react'
import { Input } from '@/components/common/Input'
import { Button } from '@/components/common/Button'
import { useTheme } from '@/context/ThemeContext'
import { cn } from '@/lib/helpers'

export const DataTable = ({
  columns,
  data,
  onRowClick,
  onEdit,
  onDelete,
  searchable = false,
  pagination = false,
  itemsPerPage = 10,
}) => {
  const { theme } = useTheme()
  const isDark = theme === 'dark'
  const [sortConfig, setSortConfig] = useState({ key: null, direction: 'asc' })
  const [searchQuery, setSearchQuery] = useState('')
  const [currentPage, setCurrentPage] = useState(1)
  const [hoveredRow, setHoveredRow] = useState(null)

  const handleSort = (key) => {
    let direction = 'asc'
    if (sortConfig.key === key && sortConfig.direction === 'asc') {
      direction = 'desc'
    }
    setSortConfig({ key, direction })
  }

  let processedData = [...data]

  if (searchable && searchQuery) {
    processedData = processedData.filter((row) =>
      Object.values(row).some((value) =>
        String(value).toLowerCase().includes(searchQuery.toLowerCase())
      )
    )
  }

  if (sortConfig.key) {
    processedData.sort((a, b) => {
      if (a[sortConfig.key] < b[sortConfig.key]) {
        return sortConfig.direction === 'asc' ? -1 : 1
      }
      if (a[sortConfig.key] > b[sortConfig.key]) {
        return sortConfig.direction === 'asc' ? 1 : -1
      }
      return 0
    })
  }

  const totalPages = Math.ceil(processedData.length / itemsPerPage)
  const paginatedData = pagination
    ? processedData.slice((currentPage - 1) * itemsPerPage, currentPage * itemsPerPage)
    : processedData

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className={cn(
        "rounded-2xl shadow-sm border overflow-hidden theme-transition",
        isDark 
          ? "bg-slate-900/50 border-slate-800/80 shadow-slate-950/50" 
          : "bg-slate-50/80 border-slate-200/80 shadow-slate-200/50"
      )}
    >
      {searchable && (
        <div className={cn(
          "p-4 border-b flex gap-4",
          isDark ? "border-slate-800" : "border-slate-200"
        )}>
          <div className="relative flex-1 max-w-sm">
            <Search className={cn(
              "absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5",
              isDark ? "text-slate-500" : "text-slate-400"
            )} />
            <Input
              type="search"
              placeholder="Search..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="pl-10"
            />
          </div>
          <Button variant="secondary" size="sm">
            <Filter className="h-4 w-4 mr-2" />
            Filter
          </Button>
        </div>
      )}

      <div className="overflow-x-auto">
        <table className="min-w-full divide-y divide-slate-200 dark:divide-slate-800">
          <thead className={cn(
            isDark ? "bg-slate-800/50" : "bg-slate-100/50"
          )}>
            <tr>
              {columns.map((column) => (
                <th
                  key={column.key}
                  onClick={() => column.sortable && handleSort(column.key)}
                  className={cn(
                    "px-6 py-4 text-left text-xs font-semibold uppercase tracking-wider",
                    isDark ? "text-slate-400" : "text-slate-500",
                    column.sortable ? "cursor-pointer hover:bg-slate-200/50 dark:hover:bg-slate-700/50 transition-colors" : ""
                  )}
                >
                  <div className="flex items-center gap-1">
                    {column.label}
                    {column.sortable && sortConfig.key === column.key && (
                      <motion.span
                        initial={{ opacity: 0, scale: 0 }}
                        animate={{ opacity: 1, scale: 1 }}
                      >
                        {sortConfig.direction === 'asc' ? <ChevronUp className="h-4 w-4" /> : <ChevronDown className="h-4 w-4" />}
                      </motion.span>
                    )}
                  </div>
                </th>
              ))}
              {(onEdit || onDelete) && <th className="px-6 py-4 text-right">Actions</th>}
            </tr>
          </thead>
          <tbody className={cn(
            "divide-y",
            isDark ? "divide-slate-800" : "divide-slate-200"
          )}>
            <AnimatePresence>
              {paginatedData.map((row, index) => (
                <motion.tr
                  key={row.id || index}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: 20 }}
                  transition={{ delay: index * 0.05 }}
                  onMouseEnter={() => setHoveredRow(index)}
                  onMouseLeave={() => setHoveredRow(null)}
                  onClick={() => onRowClick?.(row)}
                  className={cn(
                    onRowClick ? 'cursor-pointer' : '',
                    hoveredRow === index 
                      ? isDark ? 'bg-blue-900/20' : 'bg-blue-50/50'
                      : '',
                    'transition-colors duration-200'
                  )}
                >
                  {columns.map((column) => (
                    <td key={column.key} className="px-6 py-4 whitespace-nowrap">
                      {column.render ? (
                        column.render(row[column.key], row)
                      ) : (
                        <span className={cn(
                          "text-sm",
                          isDark ? "text-slate-100" : "text-slate-900"
                        )}>
                          {row[column.key]}
                        </span>
                      )}
                    </td>
                  ))}
                  {(onEdit || onDelete) && (
                    <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                      <div className="flex justify-end gap-2">
                        {onEdit && (
                          <motion.button
                            whileHover={{ scale: 1.1 }}
                            whileTap={{ scale: 0.9 }}
                            onClick={(e) => { e.stopPropagation(); onEdit(row); }}
                            className={cn(
                              "transition-colors",
                              isDark ? "text-blue-400 hover:text-blue-300" : "text-blue-600 hover:text-blue-900"
                            )}
                          >
                            Edit
                          </motion.button>
                        )}
                        {onDelete && (
                          <motion.button
                            whileHover={{ scale: 1.1 }}
                            whileTap={{ scale: 0.9 }}
                            onClick={(e) => { e.stopPropagation(); onDelete(row); }}
                            className={cn(
                              "transition-colors",
                              isDark ? "text-red-400 hover:text-red-300" : "text-red-600 hover:text-red-900"
                            )}
                          >
                            Delete
                          </motion.button>
                        )}
                      </div>
                    </td>
                  )}
                </motion.tr>
              ))}
            </AnimatePresence>
          </tbody>
        </table>
      </div>

      {pagination && totalPages > 1 && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className={cn(
            "px-6 py-4 border-t flex items-center justify-between",
            isDark ? "border-slate-800" : "border-slate-200"
          )}
        >
          <span className={cn(
            "text-sm",
            isDark ? "text-slate-400" : "text-slate-600"
          )}>
            Showing {(currentPage - 1) * itemsPerPage + 1} to{' '}
            {Math.min(currentPage * itemsPerPage, processedData.length)} of {processedData.length} results
          </span>
          <div className="flex gap-2">
            <Button
              variant="secondary"
              size="sm"
              onClick={() => setCurrentPage((p) => Math.max(1, p - 1))}
              disabled={currentPage === 1}
            >
              Previous
            </Button>
            <div className="flex gap-1">
              {[...Array(totalPages)].map((_, i) => (
                <motion.button
                  key={i}
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                  onClick={() => setCurrentPage(i + 1)}
                  className={cn(
                    "w-8 h-8 rounded-lg text-sm font-medium transition-colors",
                    currentPage === i + 1
                      ? "bg-blue-600 text-white"
                      : isDark 
                        ? "bg-slate-800 text-slate-300 hover:bg-slate-700" 
                        : "bg-slate-100 text-slate-700 hover:bg-slate-200"
                  )}
                >
                  {i + 1}
                </motion.button>
              ))}
            </div>
            <Button
              variant="secondary"
              size="sm"
              onClick={() => setCurrentPage((p) => Math.min(totalPages, p + 1))}
              disabled={currentPage === totalPages}
            >
              Next
            </Button>
          </div>
        </motion.div>
      )}
    </motion.div>
  )
}