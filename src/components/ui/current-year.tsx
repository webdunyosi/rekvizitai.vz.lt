"use client"

export const CurrentYear = () => {
  const currentYear = new Date().getFullYear();
  return <p>{currentYear}</p>
}
