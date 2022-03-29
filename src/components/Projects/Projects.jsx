import React from 'react'
import '../Projects/projects.css';
import {BiCheck} from 'react-icons/bi'
function Projects() {
  return (
    <section id="projects">
        <h5>My Projects</h5>
        <h2>Result of learning skills</h2>
        

    <div className="project_container container">
      <article className='projects'>
        <div className="project_head">
          <h3>Web Devlopment: E-commerce</h3>

        </div>
        <ul className='project_points'>
        <li>
            <BiCheck className='project_points_icon'/>
            <p>A E-commerce web app inspired from Flipkart </p>
          </li>
          <li>
            <BiCheck className='project_points_icon'/>
            <p>Frontend development: <strong>HTML, CSS, Bootstrap, Javascript</strong></p>
          </li> <li>
            <BiCheck className='project_points_icon'/>
            <p>Backend development: <strong>Laravel, Php</strong></p>
          </li> <li>
            <BiCheck className='project_points_icon'/>
            <p>Here I have used RDBMS <strong>MySQL</strong></p>
          </li> 
          <li>
            <BiCheck className='project_points_icon'/>
            <p>Using MySQL helps in <strong> session</strong>, <strong>token authenticating  </strong>and <strong> arranging direct links</strong></p>
          </li>
          <li>
            <BiCheck className='project_points_icon'/>
            <p>Only admin can use different API for <strong>creating new products</strong>, <strong>edit product details</strong>, <strong>delete a product</strong>,
            <strong>make specific pdoduct page</strong></p>
          </li>
        </ul>
      </article>
      <article className='projects'>
        <div className="project_head">
          <h3>Full Stack: AI based invoice management System</h3>

        </div>
        <ul className='project_points'>
        <li>
            <BiCheck className='project_points_icon'/>
            <p>It is a J2EE bases web App with AI</p>
          </li> 
          <li>
            <BiCheck className='project_points_icon'/>
            <p>It can be used to track the receivable payment</p>
          </li> 
          <li>
            <BiCheck className='project_points_icon'/>
            <p>Frontend development: <strong> HTML5, JavaScript, CSS3</strong></p>
          </li> 
          <li>
            <BiCheck className='project_points_icon'/>
            <p>Here I have used RDBMS <strong>MySQL</strong> </p>
          </li> 
          <li>
            <BiCheck className='project_points_icon'/>
            <p>Backend development: <strong>Java servlet, Jquery, POJO classes, json, Apache tomcat</strong> </p>
          </li> 
          <li>
            <BiCheck className='project_points_icon'/>
            <p>It is a web app that uses <strong>Regression Model</strong> to predict</p>
          </li>
          <li>
            <BiCheck className='project_points_icon'/>
            <p>Here Regression Model: <strong> random-forest</strong> to predict</p>
          </li>
          <li>
            <BiCheck className='project_points_icon'/>
            <p>I have included <strong>50,000 data sets</strong> and got result <strong>MSE ~10</strong></p>
          </li>
          <li>
            <BiCheck className='project_points_icon'/>
            <p>Different API for <strong>Edit</strong>, <strong>Add</strong>, <strong>Delete</strong>, <strong>Pagination / Display</strong></p>
          </li>
        </ul>
      </article>
      <article className='projects'>
        <div className="project_head">
          <h3>Full Stack: SocialNW</h3>

        </div>
        <ul className='project_points'>
          <li>
            <BiCheck className='project_points_icon'/>
            <p>A social media web app inspired from Instagram </p>
          </li>
          <li>
            <BiCheck className='project_points_icon'/>
            <p>Frontend development: <strong>React, CSS</strong></p>
          </li> <li>
            <BiCheck className='project_points_icon'/>
            <p>Backend development: <strong>node Js, Express</strong></p>
          </li> <li>
            <BiCheck className='project_points_icon'/>
            <p>I have used NoSQL database <strong>MongoDB</strong></p>
          </li> 
          <li>
            <BiCheck className='project_points_icon'/>
            <p>Using MongoDB helps in <strong> session</strong>, <strong>likes </strong>and <strong> comments traversing</strong></p>
          </li>
          <li>
            <BiCheck className='project_points_icon'/>
            <p>Different API for <strong>make post</strong>, <strong>delete post</strong>, <strong>like</strong>,<strong>unlike</strong>,
            <strong>specific profile page</strong>, <strong>follow </strong>and <strong>unfollow</strong></p>
          </li>
        </ul>
      </article>
    </div>
    <a href='https://github.com/starkofficial?tab=repositories' target="_blank" className='btn btn-primary all_projects'>View All Projects</a>

    
    </section>
  )
}

export default Projects