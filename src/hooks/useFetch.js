'use client'

import { useState, useEffect, useCallback } from 'react'
import axios from '@/lib/axios'

export const useFetch = (url, options = {}) => {
  const [data, setData] = useState(null)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)

  const fetchData = useCallback(async () => {
    try {
      setLoading(true)
      setError(null)
      const response = await axios.get(url, options)
      setData(response.data)
    } catch (err) {
      setError(err.message || 'An error occurred')
    } finally {
      setLoading(false)
    }
  }, [url])

  useEffect(() => {
    if (options.immediate !== false) {
      fetchData()
    }
  }, [fetchData])

  const refetch = () => fetchData()

  return { data, loading, error, refetch }
}