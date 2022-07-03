import React from 'react'
import { PRODUCTS, RESOURCES, COMPANY, SUPPORT } from "./Menus";
const Footer = () => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-3 lg:grid-cols-4 gap-6 sm:px-8 px-5 py-16">
      <footer Links={PRODUCTS} title="PRODUCTS" />
      <footer Links={RESOURCES} title="RESOURCES" />
      <footer Links={COMPANY} title="COMPANY" />
      <footer Links={SUPPORT} title="SUPPORT" />
    </div>
  )
}

export default Footer