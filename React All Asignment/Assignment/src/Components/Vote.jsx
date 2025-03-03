import React, {useState} from 'react'

const Vote = () => {

  const [age, setAge] = useState('')

  const handleInputChange = (event) =>{
    setAge(event.target.value);
  };

  return (
    <div>

      <h2>Voting Eligibility Check</h2>
      <input type="number" value={age} onChange={handleInputChange} placeholder='Enter your age' />

      <p>
        {age !== '' && (parseInt(age)>=18
        ?'You are eligible for vote.'
        :'You are not eligible for vote')
        }
      </p>

    </div>
  );
};

export default Vote