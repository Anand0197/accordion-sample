import { useState } from 'react';

const faqs = [
  {
    title: 'Where are these chairs assembled?',
    text: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Accusantium, quaerat temporibus quas dolore provident nisi ut aliquid ratione beatae sequi aspernatur veniam repellendus.',
  },
  {
    title: 'How long do I have to return my chair?',
    text: 'Pariatur recusandae dignissimos fuga voluptas unde optio nesciunt commodi beatae, explicabo natus.',
  },
  {
    title: 'Do you ship to countries outside the EU?',
    text: 'Excepturi velit laborum, perspiciatis nemo perferendis reiciendis aliquam possimus dolor sed! Dolore laborum ducimus veritatis facere molestias!',
  },
];

export default function App() {
  return <Accordion />;
}

function Accordion() {
  const [token, setToken] = useState(null);
  function handleToggle(id) {
    token !== id ? setToken(id) : setToken(null);
  }

  return (
    <div className="accordion">
      {faqs.map((ques, i) => (
        <Card
          title={ques.title}
          ans={ques.text}
          key={i}
          id={i}
          token={token}
          onToggle={handleToggle}
        />
      ))}
    </div>
  );
}

function Card({ title, ans, ques, id, token, onToggle }) {
  // const [isOpen, setIsOpen] = useState(false);
  // function handleToggle() {
  //   setIsOpen(!isOpen);
  // }
  return (
    <div className="card" onClick={() => onToggle(id + 1)}>
      <p>{id <= 9 ? `0${id + 1}` : `${id + 1}`}</p>
      <p>{title}</p>
      <p>{token === id + 1 ? '-' : '+'}</p>
      {token === id + 1 ? <div className="content">{ans}</div> : ''}
    </div>
  );
}
