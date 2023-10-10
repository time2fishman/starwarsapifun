import React from 'react'

const Search = ({ handleSubmit, setCharcterBio }) => {

  return (
    <section className='Search'>
      {/* Run handleSubmit function in App.js after form submission.
          This will make the API call and set the state with response data. */}
      <form method='get' onSubmit={handleSubmit}>
        <label>
          Enter a character name: <input type='text' placeholder='e.g. R2-D2' name='name' />
        </label>
        <button type='submit'>Search</button>
      </form>
    </section>
  )
}

export default Search