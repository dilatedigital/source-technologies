import React from "react"

const SearchForm = ({ searchTerm, setSearchTerm }) => {
  return (
    <form
      method="post"
      className="search-form"
      onSubmit={e => e.preventDefault()}
    >
      <input
        type="text"
        value={searchTerm}
        onChange={e => setSearchTerm(e.target.value)}
        placeholder="Search projects"
      />
    </form>
  )
}

export default SearchForm
