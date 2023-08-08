import React, { useEffect, useState } from "react";
import styles from "../../styles/testimonialswitch.module.css";

const testimonials = [
  {
    name: "Miyah Myles",
    position: "Marketing",
    photo:
      "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-0.3.5&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=200&fit=max&s=707b9c33066bf8808c934c8ab394dff6",
    text: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Minima eos quia mollitia hic non minus ab, excepturi quas illo alias? Minus fugit unde a. Omnis illum et voluptatem id nisi perferendis nobis magnam similique odio consequuntur expedita enim repellat aperiam animi laboriosam ipsa placeat, aut delectus modi quos ipsam. Vitae officiis voluptate distinctio possimus veniam deserunt quae doloribus, illo ducimus expedita, maxime magnam, fugiat aut corporis. Odit commodi ab error.",
  },
  {
    name: "June Cha",
    position: "Software Engineer",
    photo: "https://randomuser.me/api/portraits/women/44.jpg",
    text: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Minima eos quia mollitia hic non minus ab, excepturi quas illo alias? Minus fugit unde a. Omnis illum et voluptatem id nisi perferendis nobis magnam similique odio consequuntur expedita enim repellat aperiam animi laboriosam ipsa placeat, aut delectus modi quos ipsam. Vitae officiis voluptate distinctio possimus veniam deserunt quae doloribus, illo ducimus expedita, maxime magnam, fugiat aut corporis. Odit commodi ab error.",
  },
  {
    name: "Iida Niskanen",
    position: "Data Entry",
    photo: "https://randomuser.me/api/portraits/women/68.jpg",
    text: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Minima eos quia mollitia hic non minus ab, excepturi quas illo alias? Minus fugit unde a. Omnis illum et voluptatem id nisi perferendis nobis magnam similique odio consequuntur expedita enim repellat aperiam animi laboriosam ipsa placeat, aut delectus modi quos ipsam. Vitae officiis voluptate distinctio possimus veniam deserunt quae doloribus, illo ducimus expedita, maxime magnam, fugiat aut corporis. Odit commodi ab error.",
  },
  {
    name: "Renee Sims",
    position: "Receptionist",
    photo: "https://randomuser.me/api/portraits/women/65.jpg",
    text: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Minima eos quia mollitia hic non minus ab, excepturi quas illo alias? Minus fugit unde a. Omnis illum et voluptatem id nisi perferendis nobis magnam similique odio consequuntur expedita enim repellat aperiam animi laboriosam ipsa placeat, aut delectus modi quos ipsam. Vitae officiis voluptate distinctio possimus veniam deserunt quae doloribus, illo ducimus expedita, maxime magnam, fugiat aut corporis. Odit commodi ab error.",
  },
  {
    name: "Jonathan Nunfiez",
    position: "Graphic Designer",
    photo: "https://randomuser.me/api/portraits/men/43.jpg",
    text: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Minima eos quia mollitia hic non minus ab, excepturi quas illo alias? Minus fugit unde a. Omnis illum et voluptatem id nisi perferendis nobis magnam similique odio consequuntur expedita enim repellat aperiam animi laboriosam ipsa placeat, aut delectus modi quos ipsam. Vitae officiis voluptate distinctio possimus veniam deserunt quae doloribus, illo ducimus expedita, maxime magnam, fugiat aut corporis. Odit commodi ab error.",
  },
  {
    name: "Sasha Ho",
    position: "Accountant",
    photo:
      "https://images.pexels.com/photos/415829/pexels-photo-415829.jpeg?h=350&auto=compress&cs=tinysrgb",
    text: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Minima eos quia mollitia hic non minus ab, excepturi quas illo alias? Minus fugit unde a. Omnis illum et voluptatem id nisi perferendis nobis magnam similique odio consequuntur expedita enim repellat aperiam animi laboriosam ipsa placeat, aut delectus modi quos ipsam. Vitae officiis voluptate distinctio possimus veniam deserunt quae doloribus, illo ducimus expedita, maxime magnam, fugiat aut corporis. Odit commodi ab error.",
  },
  {
    name: "Veeti Seppanen",
    position: "Director",
    photo: "https://randomuser.me/api/portraits/men/97.jpg",
    text: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Minima eos quia mollitia hic non minus ab, excepturi quas illo alias? Minus fugit unde a. Omnis illum et voluptatem id nisi perferendis nobis magnam similique odio consequuntur expedita enim repellat aperiam animi laboriosam ipsa placeat, aut delectus modi quos ipsam. Vitae officiis voluptate distinctio possimus veniam deserunt quae doloribus, illo ducimus expedita, maxime magnam, fugiat aut corporis. Odit commodi ab error.",
  },
];

const TestimonialSwitch = () => {
  const [testimonialIdx, setTestimonialIdx] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setTestimonialIdx((prevIdx) => (prevIdx + 1) % testimonials.length);
    }, 10000);

    return () => clearInterval(interval);
  }, []);

  const { name, position, photo, text } = testimonials[testimonialIdx];

  return (
    <div className={styles.testimonialContainer}>
      {/* <div className={`${styles.quoteIcon} ${styles.quoteRight}`}>
				<i className="fas fa-quote-right"></i>
                </div>
                <div className={`${styles.quoteIcon} ${styles.quoteLeft}`}>
				<i className="fas fa-quote-left"></i>
			</div> */}
      <p className={styles.testimonial}>{text}</p>
      <div className={styles.user}>
        <img src={photo} alt="user" className={styles.userImage} />
        <div className={styles.userDetails}>
          <h4 className={styles.username}>{name}</h4>
          <p className={styles.role}>{position}</p>
        </div>
      </div>
      <div className={styles.progressBar}></div>
    </div>
  );
};

export default TestimonialSwitch;
