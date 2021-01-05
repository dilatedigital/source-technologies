import React from "react"
import { AiOutlineSearch } from "react-icons/ai"

const SearchForm = ({ searchTerm, handleSearchTermChange }) => {
  return (
    <form
      method="post"
      className="search-form max-w-815px mx-auto px-4 mt-8 xl:mt-100px lg:px-0 relative"
      onSubmit={e => e.preventDefault()}
    >
      <input
        type="text"
        value={searchTerm}
        onChange={e => handleSearchTermChange(e.target.value)}
        placeholder="Search projects"
        className="border border-border-grey border-opacity-20 w-full h-btn rounded-30px focus:outline-none focus:ring-2 focus:ring-primary shadow-lg pl-10 xl:pl-55px"
      />
      <AiOutlineSearch className="absolute ml-2 xl:ml-0" />
    </form>
  )
}

export default SearchForm
