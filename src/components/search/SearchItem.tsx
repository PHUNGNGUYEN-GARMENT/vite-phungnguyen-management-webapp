import React from 'react'

interface SearchItemProps extends React.HTMLAttributes<HTMLElement> {
  title: string
}

/* eslint-disable no-empty-pattern */
function SearchItem({ title }: SearchItemProps) {
  return <div>{title}</div>
}

export default SearchItem
