import React from 'react'
import './Bio.css'

const Bio = () => {
  return (
    <div className='bio'>
        <h3 className="bioTitle">
          Get to know me!
        </h3>
        <div className="bioParagraphs">
            <p>
              As a computer science intern, I have developed a strong foundation in various
              programming languages such as Java, Javascript, and NodeJS,
              as well as a solid understanding of algorithms and data structures.
              Through my coursework and personal projects,
              I have gained experience in software development, database management, and web
              development.I am passionate about utilizing my skills to create innovative solutions to real-world
                            problems.
            </p>
            <p>
              In addition to my technical expertise, I have also developed strong problem-solving and
              analytical skills.
              I am comfortable working both independently and as part of a team,
              and I enjoy collaborating with others to find creative solutions to complex problems.
              I am also a quick learner and am always eager to expand my knowledge and skill set.
            </p>
            <p>
              Overall, as a computer science student, I am excited to apply my knowledge and skills to
              make a positive impact in the world of technology.
              I'm open to <strong>Job</strong> opportunities where I can
              contribute, learn and grow. If you have a good opportunity that
              matches my skills then don't hesitate to
              <a href="#mail_form"> <strong>contact me.</strong> </a>
            </p>
        </div>
    </div>
  )
}

export default Bio