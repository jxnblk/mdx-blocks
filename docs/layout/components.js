import React from 'react'

export const Layout = props => {
  const children = React.Children.toArray(props.children)
  const [ header ] = children.filter(el => el.type.isHeader)
  const [ footer ] = children.filter(el => el.type.isFooter)
  const components = [ header, footer ]
  const rest = children.filter(el => !components.includes(el))

  return (
    <>
      <header style={{ backgroundColor: 'tomato' }}>
        {header}
      </header>
      {rest}
      <footer style={{ backgroundColor: 'tomato' }}>
        {footer}
      </footer>
    </>
  )
}

export const Header = props => {
  return <>{props.children}</>
  return false
}
Header.isHeader = true

export const Footer = props => {
  return <>{props.children}</>
  return false
}
Footer.isFooter = true

export default () => false
