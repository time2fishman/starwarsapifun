import React from 'react';

const Results = ({ characterBio }) => {
  // if chacterBio state is undefined, do nothing
  if (!characterBio) {
    return
  }
  // when characterBio state has data, render JSX
  try {
    return (
      <section className='Results'>
        <p><span className='bold'>Name: </span>{characterBio.results[0].name}</p>
        <p><span className='bold'>Gender: </span>{characterBio.results[0].gender}</p>
        <p><span className='bold'>Birth Year: </span>{characterBio.results[0].birth_year}</p>
        <p><span className='bold'>Height: </span>{characterBio.results[0].height}</p>
        <p><span className='bold'>Mass: </span>{characterBio.results[0].mass}</p>
        <p><span className='bold'>Skin Color: </span>{characterBio.results[0].skin_color}</p>
        <p><span className='bold'>Hair Color: </span>{characterBio.results[0].hair_color}</p>
        <p><span className='bold'>Eye Color: </span>{characterBio.results[0].eye_color}</p>
      </section>
    )
  } catch {
    return (
      <section className='Results'>
        <h2>Hmmm... We didn't receive a match. <br /> Check your spelling and try again.</h2>
      </section>
    )
  }
};

export default Results;