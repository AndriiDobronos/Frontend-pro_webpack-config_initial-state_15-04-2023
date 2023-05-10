import React, {useEffect,useState} from 'react'

export default ({className,headerText}) => {
    const [isMenuOpen,setIsMenuOpen] = useState(false)
    const toggleBurger = () => {

    }

    useEffect(() => {
        const onPageClick = e => {
            const parent = e.target.closest('.menu')
            if (!parent) {
                setIsMenuOpen(false)
            }
        }
        window.addEventListener('click',onPageClick)
        return () => {
            window.removeEventListener('click',onPageClick)
        }
    },[])



    return <h1 className={className || 'simple-header'}>{headerText}
    <svg className={'simple-header__logo logo'}>
        <path className ="logo__path logo"/>
    </svg>
        <input type="checkbox" id={"burger-toggler"} onChange={toggleBurger}/>
        <label htmlFor= "burger-toggler" className={'burger-icon'} ></label>
        <sidebar></sidebar>
        <nav></nav>
        <span>text</span>
    </h1>
}