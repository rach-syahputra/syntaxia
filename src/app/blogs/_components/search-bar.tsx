import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons'

export default function SearchBar() {
  return (
    <div className='flex items-center gap-2 rounded-md border px-3 py-1'>
      <FontAwesomeIcon icon={faMagnifyingGlass} className='h-4 w-4 text-gray' />

      <div className='flex flex-col gap-2'>
        <label htmlFor='search' className='sr-only'>
          Search
        </label>
        <input
          type='text'
          placeholder='Search for blogs...'
          className='appearance-none focus:outline-none'
        />
      </div>
    </div>
  )
}
