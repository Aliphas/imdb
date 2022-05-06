import classes from './Search.module.css'
import * as React from 'react';
import { useState, useEffect } from 'react'
import { ReactComponent as SearchIcon } from '../../../images/search_icon.svg';

const Search = () => {
  const [selectWidth, setSelectWidth] = useState('')

  useEffect(() => {
    setSelectWidth(document.getElementById(classes.categorySelect).value.length * 10 + 20 + 'px')
  }, [selectWidth])

  return (
    <div id={classes.search}>
      <select
        name="select"
        style={{ 'width': selectWidth }}
        onChange={setSelectWidth}
        id={classes.categorySelect}
        defaultValue='All'>
        <option>All</option>
        <option>Titles</option>
        <option>TV Episodes</option>
        <option>Celebs</option>
        <option>Companies</option>
        <option>Keywords</option>
        {/* <div className={classes.separator}></div> */}
        <option>Advanced search</option>
      </select>

      <input
        id={classes.searchInput}
        type="search"
        placeholder='Search IMDb'
      />
      <SearchIcon className={classes.searchIcon} />
    </div>
  )
}
export default Search