'use client'

import { useState } from 'react'
import { DataTable } from '@/components/tables/DataTable'
import { Button } from '@/components/common/Button'
import { Modal } from '@/components/common/Modal'
import { Input } from '@/components/common/Input'
import { Badge } from '@/components/common/Badge'
import { motion } from 'framer-motion'
import { useTheme } from '@/context/ThemeContext'
import { cn } from '@/lib/helpers'

const initialUsers = [
  { id: 1, name: 'John Doe', email: 'john@example.com', role: 'admin', status: 'active', joinDate: '2024-01-15' },
  { id: 2, name: 'Jane Smith', email: 'jane@example.com', role: 'user', status: 'active', joinDate: '2024-02-01' },
  { id: 3, name: 'Bob Johnson', email: 'bob@example.com', role: 'user', status: 'inactive', joinDate: '2024-01-20' },
  { id: 4, name: 'Alice Williams', email: 'alice@example.com', role: 'manager', status: 'active', joinDate: '2023-12-10' },
  { id: 5, name: 'Charlie Brown', email: 'charlie@example.com', role: 'user', status: 'active', joinDate: '2024-03-05' },
]

const columns = [
  { key: 'name', label: 'Name', sortable: true },
  { key: 'email', label: 'Email', sortable: true },
  { key: 'role', label: 'Role', sortable: true },
  { 
    key: 'status', 
    label: 'Status', 
    sortable: true,
    render: (value) => <Badge variant={value === 'active' ? 'success' : 'warning'}>{value}</Badge>
  },
  { key: 'joinDate', label: 'Join Date', sortable: true },
]

export const UserManagement = () => {
  const { theme } = useTheme()
  const isDark = theme === 'dark'
  const [users, setUsers] = useState(initialUsers)
  const [isModalOpen, setIsModalOpen] = useState(false)
  const [editingUser, setEditingUser] = useState(null)

  const handleEdit = (user) => {
    setEditingUser(user)
    setIsModalOpen(true)
  }

  const handleDelete = (user) => {
    if (confirm(`Are you sure you want to delete ${user.name}?`)) {
      setUsers(users.filter(u => u.id !== user.id))
    }
  }

  const handleSave = (e) => {
    e.preventDefault()
    if (editingUser) {
      setUsers(users.map(u => u.id === editingUser.id ? editingUser : u))
    }
    setIsModalOpen(false)
    setEditingUser(null)
  }

  return (
    <div>
      <div className="flex justify-between items-center mb-6">
        <h2 className={cn(
          "text-2xl font-bold",
          isDark ? "text-white" : "text-slate-900"
        )}>
          Users
        </h2>
        <Button onClick={() => setIsModalOpen(true)}>Add User</Button>
      </div>
      
      <DataTable
        columns={columns}
        data={users}
        onEdit={handleEdit}
        onDelete={handleDelete}
        searchable
        pagination
      />

      <Modal
        isOpen={isModalOpen}
        onClose={() => { setIsModalOpen(false); setEditingUser(null); }}
        title={editingUser ? 'Edit User' : 'Add User'}
        footer={
          <>
            <Button variant="secondary" onClick={() => { setIsModalOpen(false); setEditingUser(null); }}>
              Cancel
            </Button>
            <Button onClick={handleSave}>
              Save
            </Button>
          </>
        }
      >
        <form className="space-y-4">
          <Input
            label="Name"
            value={editingUser?.name || ''}
            onChange={(e) => setEditingUser({...editingUser, name: e.target.value})}
          />
          <Input
            label="Email"
            type="email"
            value={editingUser?.email || ''}
            onChange={(e) => setEditingUser({...editingUser, email: e.target.value})}
          />
          <div>
            <label className={cn(
              "block text-sm font-medium mb-1",
              isDark ? "text-slate-300" : "text-slate-700"
            )}>
              Role
            </label>
            <select
              value={editingUser?.role || 'user'}
              onChange={(e) => setEditingUser({...editingUser, role: e.target.value})}
              className={cn(
                "w-full px-4 py-2 border-2 rounded-xl focus:outline-none focus:border-blue-500 transition-colors",
                isDark 
                  ? "bg-slate-900/50 border-slate-700 text-slate-100 focus:ring-4 focus:ring-blue-500/20" 
                  : "bg-white border-slate-200 text-slate-900 focus:ring-4 focus:ring-blue-500/10"
              )}
            >
              <option value="user">User</option>
              <option value="manager">Manager</option>
              <option value="admin">Admin</option>
            </select>
          </div>
        </form>
      </Modal>
    </div>
  )
}