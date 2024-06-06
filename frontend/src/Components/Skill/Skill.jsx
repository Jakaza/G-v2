import React from 'react'

const Skill = (props) => {
    const {name , icon} = props.skill
  return (
    <div className='skill'>
      <img width={65} src={`https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/${name}/${icon}.svg`} />  
        <h4 className='bioTitle'>{name}</h4>
    </div>
  )
}

export default Skill