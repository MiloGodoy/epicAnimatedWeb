import React from 'react'

interface ButtonProps {
    id:string,
    title: string,
    righIcon: string,
    leftIcon: string,
    containerClass: string
}

function Button({ title, id, righIcon, leftIcon, containerClass }: ButtonProps) {
  return (
    <button id={id} className={`group relative z-10 w.fit cursor-pointer overflow-hidden rounded-full bg-violet-50 px-7 py-3 text-black ${containerClass}`}>
        {leftIcon}

        <span className='relative inline-flex overflow-hidden font-general text-xs uppercase'>
            <div>
                {title}
            </div>
        </span>
        {
            righIcon
        }
    </button>
  )
}

export default Button