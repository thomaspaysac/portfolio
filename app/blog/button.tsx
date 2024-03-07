'use client';

export default function Button (articles : any) {
  return (
    <button onClick={() => console.log(articles)}>Click me !</button>
  )
}