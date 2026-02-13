import React from 'react'
import img1 from '../image/img1.jpg'
import img2 from '../image/img2.jpg'
import img3 from '../image/img3.jpg'
import img4 from '../image/img4.jpg'
import img5 from '../image/img5.jpg'
import img6 from '../image/img6.jpg'
import { FaUsers } from "react-icons/fa";
import { GoClock } from "react-icons/go";

const Courses = () => {

  const courses = [
  {
    id: 4,
    image: img4,
    price: 900,
    category: "Design",
    title: "UI/UX Fundamentals",
    level: "Beginner",
    description: "Understand design principles & user experience.",
    duration: "4hr 20min",
    students: 60,
    username: "Neha",
    date: "12/01/2026"
  },
  {
    id: 5,
    image: img5,
    price: 1100,
    category: "Programming",
    title: "Python Bootcamp",
    level: "Beginner",
    description: "Complete Python guide for beginners.",
    duration: "8hr 00min",
    students: 150,
    username: "Arjun",
    date: "15/01/2026"
  },
  {
    id: 6,
    image: img6,
    price: 500,
    category: "Web Development",
    title: "HTML Fundamentals",
    level: "Beginner",
    description: "Learn the building blocks of the web with HTML.",
    duration: "3hr 40min",
    students: 200,
    username: "Sandip",
    date: "20/01/2026"
  },
  {
    id: 1,
    image: img1,
    price: 1000,
    category: "Web Development",
    title: "React for Beginners",
    level: "Beginner",
    description: "Learn React from scratch with hands-on projects.",
    duration: "5hr 30min",
    students: 120,
    username: "Sandip",
    date: "01/01/2026"
  },
  {
    id: 2,
    image: img2,
    price: 800,
    category: "Programming",
    title: "Modern JavaScript",
    level: "Intermediate",
    description: "Master ES6+, async JS, and real-world concepts.",
    duration: "6hr 10min",
    students: 95,
    username: "Rahul",
    date: "05/01/2026"
  },
  {
    id: 3,
    image: img3,
    price: 1200,
    category: "Backend Development",
    title: "Node.js & Express",
    level: "Intermediate",
    description: "Build scalable backend APIs using Node.js.",
    duration: "7hr 45min",
    students: 80,
    username: "Amit",
    date: "10/01/2026"
  },
];


  return (
    <div className='mt-10'>
      <h1
        style={{ fontFamily: 'Poppins, sans-serif, Rubik' }}
        className='text-3xl text-center font-semibold'
      >
        Our Popular Courses
      </h1>

      <p className='text-lg text-center mt-3'>
        Discover our most sought-after courses carefully created to meet the
        demands of today learners <br />
        Dive into engaging content crafted for success in every step of your
        educational journey
      </p>

      {/* Cards */}
      <div className="grid md:grid-cols-3 gap-10 mt-10 ml-40 mr-40 ">
        {courses.map((course) => (
          <div
            key={course.id}
            className="bg-white rounded-2xl shadow-md hover:shadow-xl hover:scale-105 transition-all duration-300 overflow-hidden flex flex-col relative border border-gray-300"
          >
            {/* Image */}
            <div className="relative">
              <img
                src={course.image}
                alt={course.title}
                className="h-45 w-full object-cover"
              />

              {/* Price */}
              <span className="absolute top-3 right-3 font-semibold text-green-800 text-sm shadow bg-white px-2 py-1 rounded">
                ₹{course.price}
              </span>

              {/* Category */}
              <span className="absolute top-3 left-3 font-semibold text-white text-sm shadow bg-gray-600 px-2 py-1 rounded">
                {course.category}
              </span>
            </div>

            {/* Content */}
            <div className="flex-1 flex flex-col px-4 pt-3 pb-4">
              <h3 className="font-semibold text-[20px] text-gray-800">
                {course.title}
                <span className="text-sm text-gray-500">
                  {" "}({course.level})
                </span>
              </h3>

              <p className="text-sm text-gray-600 mb-2">
                {course.description}
              </p>

              {/* Duration + Students */}
              <div className="flex items-center justify-between text-sm text-gray-500 mb-4">
                <div className="flex items-center gap-1">
                  <GoClock />
                  5hr 30min
                </div>

                <div className="flex items-center gap-1">
                  <FaUsers />
                  20 students
                </div>
              </div>

              {/* Button */}
              <button className="border rounded py-2 mb-3 text-sm text-white font-medium bg-indigo-600 hover:bg-indigo-700">
                Enroll Now
              </button>

              <hr />

              {/* Author */}
              <div className="flex justify-between text-sm text-gray-500 mt-2">
                <span className="font-semibold text-gray-700">
                  {course.username}
                </span>
                <span>{course.date}</span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Courses
