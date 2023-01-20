import React, { useCallback, useState } from 'react'

import { Button } from 'primereact/button'
import { InputText } from 'primereact/inputtext'

interface SearchProps {
  onSubmit: (query: string) => void
}

export const Search: React.FC<SearchProps> = ({ onSubmit }) => {
  const [query, setQuery] = useState<string>('')

  const handleQuery = useCallback((event: React.ChangeEvent<HTMLInputElement>) => {
    setQuery(event.target.value)
  }, [])

  const handleSubmit = useCallback(() => {
    onSubmit(query)
  }, [query])

  return (
    <>
      <InputText id="email" value={query} onChange={handleQuery} />
      <Button onClick={() => handleSubmit}> Search </Button>
    </>
  )
}
