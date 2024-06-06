import React from 'react'
import Skill from './Skill'
import './SkillSet.css'

const SkillSet = () => {

    const skills = [
        {
            name: "java",
            icon: "java-original",
            level: 70,
        },
        {
            name: "javascript",
            icon: "javascript-original",
            level: 98,
        },
        {
            name: "nodejs",
            icon: "nodejs-original-wordmark",
            level: 98,
        },
        {
            name: "mysql",
            icon: "mysql-original-wordmark",
            level: 98,
        },
        {
            name: "linux",
            icon: "linux-original",
            level: 98,
        },
    ]
  return (
    <div className='skillSet'>
    <div className="inner">
     <div className="heading">
        <h1>My Skills</h1>
        <p>Here you will find more information about me, what I do, and my current skills mostly in terms of programming and technology</p>
     </div>

     <div className="mainSkillsContainer">
     <ul className='skills'>
        {
        skills.map((skill, index) => (
            <li key={index}>
                <Skill skill={skill} />
            </li>
            ))
     }
</ul>

<div className="skills__word-clouds">
<div className="parallax-inner">
        <p className='s1'>HTML5</p>
    <p className='s2'>HTML5</p>
        <p className='s3'>WebGL</p>
        <p className='s4'>CSS3</p>
        <p className='s5'>figma</p>
        <p className='s6'>antd</p>
        <p className='s7'>MongoDB</p>
        <p className='s8'>Gatsby</p>
        <p className='s9'>ES6</p>
        <p style="top:120px;left:22%;font-size:12px">blender</p>


</div>
</div>

     </div>



    
    </div>
</div>
  )
}

export default SkillSet