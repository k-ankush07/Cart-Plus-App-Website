import React from 'react'

const variants = {
  primary: 'bg-black text-white hover:bg-gray-800',
  secondary: 'bg-white text-black border border-gray-300 hover:bg-gray-100',
  ghost: 'bg-transparent text-black border hover:bg-gray-100',
}

const sizes = {
  sm: 'px-3 py-1.5 text-xs',
  md: 'px-[40px] py-[18px] max-[540px]:px-[20px] max-[540px]:py-[10px] text-sm',
  lg: 'px-6 py-3 text-base',
}

export default function Button({
  children,
  type = 'button',
  variant = 'secondary',
  size = 'md',
  className = '',
  icon,
  ...props
}) {
  const variantClass = variants[variant] ?? variants.primary
  const sizeClass = sizes[size] ?? sizes.md

  return (
    <button
      type={type}
      className={`group rounded-full font-bold transition-colors cursor-pointer text-[18px] max-[540px]:text-[16px] leading-[20px] inline-flex items-center gap-[15px] ${variantClass} ${sizeClass} ${className}`}
      {...props}
    >
      {children}
      {icon && (
        <img
          src={icon}
          alt=""
          className="h-[12px] w-[12px] max-[540px]:h-[10px] max-[540px]:w-[10px] object-contain transition-transform duration-300 group-hover:rotate-45" />
      )}
    </button>
  )
}