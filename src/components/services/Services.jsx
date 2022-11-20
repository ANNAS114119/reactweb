import React from 'react'
import './services.css'
import{BiCheck} from 'react-icons/bi'

const Services = () => {
  return (

    <section id='services'>
      <h5>What I Offer</h5>
      <h2>Services</h2>
      <div className="container services__container">
        
        <article className="service">
          <div className="service__head">
            <h3>UI/UX Design</h3>
          </div>
          <ul className="service__list">
            <li>
            <BiCheck className='service__list-icons' />
            <p>xcepturi cumque hic numquam,Similique sint rerum vitae.</p>
            </li>
            <li>
            <BiCheck className='service__list-icons' />
            <p>xcepturi uis. Similique sint rerum vitae.</p>
            </li>
            <li>
            <BiCheck className='service__list-icons' />
            <p>xcepturi cumque hic n. Similique sint rerum vitae.</p>
            </li>
            <li>
            <BiCheck className='service__list-icons' />
            <p>xcepturi  quis. Similique sint rerum vitae.</p>
            </li>
            <li>
            <BiCheck className='service__list-icons' />
            <p> consequuntur quis. Similique sint rerum vitae.</p>
            </li>
            <li>
            <BiCheck className='service__list-icons' />
            <p>xcepturi  quis. Similique sint rerum vitae.</p>
            </li>
          </ul>
        </article>






        <article className="service">
          <div className="service__head">
            <h3>Web Development</h3>
          </div>
          <ul className="service__list">
            <li>
            <BiCheck className='service__list-icons' />
            <p>xcepturi cumque  Similique sint rerum vitae.</p>
            </li>
            <li>
            <BiCheck className='service__list-icons' />
            <p>xcepturi cumqueSimilique sint rerum vitae.</p>
            </li>
            <li>
            <BiCheck className='service__list-icons' />
            <p>xcepturi cumque quis. Similique sint rerum vitae.</p>
            </li>
            <li>
            <BiCheck className='service__list-icons' />
            <p>xcept Similique sint rerum vitae.</p>
            </li>
            <li>
            <BiCheck className='service__list-icons' />
            <p>xcep. Similique sint rerum vitae.</p>
            </li>
            <li>
            <BiCheck className='service__list-icons' />
            <p>xcepturi . Similique sint rerum vitae.</p>
            </li>
          </ul>
        </article>  



        <article className="service">
          <div className="service__head">
            <h3>Content Creation</h3>
          </div>
          <ul className="service__list">
            <li>
            <BiCheck className='service__list-icons' />
            <p>xcepturi cumque herum vitae.</p>
            </li>
            <li>
            <BiCheck className='service__list-icons' />
            <p>xcepturi  quis. Similique sint rerum vitae.</p>
            </li>
            <li>
            <BiCheck className='service__list-icons' />
            <p>xcepturi Similique sint rerum vitae.</p>
            </li>
            <li>
            <BiCheck className='service__list-icons' />
            <p>xcepturi cumque hic numqu vitae.</p>
            </li>
            <li>
            <BiCheck className='service__list-icons' />
            <p>xcepturi cumque hic numqu rerum vitae.</p>
            </li>
            <li>
            <BiCheck className='service__list-icons' />
            <p>umquam, rere neque consequSimilique sint rerum vitae.</p>
            </li>
          </ul>
        </article>  




      </div>
    </section>


    )
}

export default Services