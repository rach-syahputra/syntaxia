'use client'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons'
import { usePost } from '@/context/post-context'

export default function SearchBar() {
  const { setSearchQuery } = usePost()

  const handleSearchChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    event.preventDefault()

    setTimeout(() => {
      setSearchQuery(event.target.value)
    }, 500)
  }

  return (
    <div className='flex max-w-[425px] items-center gap-2 rounded-md border px-3 py-2'>
      <FontAwesomeIcon icon={faMagnifyingGlass} className='h-4 w-4 text-gray' />

      <div className='flex flex-col gap-2'>
        <label htmlFor='search' className='sr-only'>
          Search
        </label>
        <input
          type='text'
          placeholder='Search for blogs...'
          onChange={(event) => handleSearchChange(event)}
          className='appearance-none focus:outline-none'
        />
      </div>
    </div>
  )
}
