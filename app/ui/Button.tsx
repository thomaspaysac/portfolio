'use client';

export default function TestButton (data: any) {
  return (
    <button className="bg-red" onClick={() => console.log(data)}>Test</button>
  )
}