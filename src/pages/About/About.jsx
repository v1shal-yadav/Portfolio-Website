/* eslint-disable react/no-unescaped-entities */

import { useEffect, useState } from "react"
import Testimonial from "./Testimonial";
import Service from "./Service";

const servicesData = [
  {
    icon: "/images/icon-design.svg",
    title: "Web design",
    description: "The most modern and high-quality design made at a professional level."
  },
  {
    icon: "/images/icon-dev.svg",
    title: "Web development",
    description: "High-quality development of sites at the professional level."
  },
  {
    icon: "/images/icon-app.svg",
    title: "Mobile apps",
    description: "Professional development of applications for iOS and Android."
  },
  {
    icon: "/images/icon-photo.svg",
    title: "Photography",
    description: "I make high-quality photos of any category at a professional level."
  }
];


const About = () => {
  const [testimonials , setTestimonials ] = useState([]);
  useEffect(()=> {
    fetch('testimonials.json').then(res => res.json()).then(data => {
      console.log(data)
      setTestimonials(data)
    });
  }, [])
  return (
    <article className="about  active" data-page="about">

    <header>
      <h2 className="h2 article-title">About me</h2>
    </header>

    <section className="about-text">
      <p>
      I am a final year student pursuing a Bachelor of Technology focused in Electronics and Communication Engineering from Bundelkhand Institute of Engineering and Technology, Jhansi(UP). I spent time building my skills in competitive programming, data structures and algorithms.Enthusiastic coder eager to contribute to team success through hard work, attention to detail, and excellent organizational skills. I thrive in environments where I am able to utilize my abilities in complex problem-solving to find solutions and achieve results.
      </p>

      <p>
        
      ✔️ My skills include:
      • Languages: C, C++, Python, JavaScript 
      • Frontend: HTML ,CSS , JavaScript, React ,Bootstrap
      • Backend: Nodejs,Express.js,Mongodb
      • Databases : SQL
      • Data structures and algorithms: Competitive programming, OOPS, Problem solving
      • Software Engineering tools: Git and GitHub .
      </p>
    </section>


    {/* <!--
      - service
    --> */}

    <section className="service">

      <h3 className="h3 service-title">What i'm doing</h3>

      <ul className="service-list">

      {servicesData.map((service, index) => (
            <Service
              key={index}
              icon={service.icon}
              title={service.title}
              description={service.description}
            />
          ))}

      </ul>

    </section>


    {/* <!--
      - testimonials
    --> */}

    <section className="testimonials">

      <h3 className="h3 testimonials-title">Testimonials</h3>

      <ul className="testimonials-list has-scrollbar">

      {testimonials.map((testimonial, index) => (
            <Testimonial
              key={index}
              name={testimonial.name}
              avatar={testimonial.avatar}
              testimonial={testimonial.testimonial}
            />
          ))}

      </ul>

    </section>


    {/* <!--
      - clients
    --> */}

    <section className="clients">

      <h3 className="h3 clients-title">Clients</h3>

      <ul className="clients-list has-scrollbar">

        <li className="clients-item">
          <a href="#">
            <img src="images/logo-1-color.png" alt="client logo"/>
          </a>
        </li>

        <li className="clients-item">
          <a href="#">
            <img src="images/logo-2-color.png" alt="client logo"/>
          </a>
        </li>

        <li className="clients-item">
          <a href="#">
            <img src="images/logo-3-color.png" alt="client logo"/>
          </a>
        </li>

        <li className="clients-item">
          <a href="#">
            <img src="images/logo-4-color.png" alt="client logo"/>
          </a>
        </li>

        <li className="clients-item">
          <a href="#">
            <img src="images/logo-5-color.png" alt="client logo"/>
          </a>
        </li>

        <li className="clients-item">
          <a href="#">
            <img src="images/logo-6-color.png"alt="client logo"/>
          </a>
        </li>

      </ul>

    </section>

  </article>
  )
}

export default About