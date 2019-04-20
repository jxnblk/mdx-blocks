import React, {
  useReducer,
  useContext,
  createContext,
} from 'react'
import { mdx } from '@mdx-js/react'
import merge from 'lodash.merge'
import omit from 'lodash.omit'

import Header from '../header.mdx'
import Banner from '../banner.mdx'
import Intro from '../intro.mdx'
import Features from '../features.mdx'
import Cards from '../cards.mdx'

import {
  BlocksProvider,
  Box,
  EditContext
} from '../../index'
import { funk as theme } from '../../themes'

// const Context = createContext()

const reducer = (state, next) => merge({}, state, next)

const reducer2 = (state, action) => {
  switch (action.type) {
    case 'register':
      return {
        ...state,
        blocks: {
          ...state.blocks,
          ...action.payload,
        }
      }
    case 'edit':
      return {
        ...state,
        editing: action.payload
      }
    default:
      console.error('unknown action', action.type)
      return state
  }
}

const Provider = props => {
  const [ state, dispatch ] = useReducer(reducer2, {
    editing: null,
    blocks: {}
  })

  const context = {
    state,
    dispatch,
  }

  return (
    <EditContext.Provider value={context}>
      {props.children}
    </EditContext.Provider>
  )
}

const omitProps = [
  'children',
  'className',
  'onClick',
  'data-block',
  'data-bar',
  'data-banner',
  'data-cards',
  'data-center',
  'data-tiles',
  '_frontmatter'
]
const Editor = () => {
  const { state } = useContext(EditContext)
  const props = omit(state.editing && state.editing.props, omitProps)
  console.log(props)
  return (
    <>
      <pre>todo: editor {!!state.editing ? 'editing' : 'disabled'}</pre>
      <Box as='ul'
        css={{
          listStyle: 'none',
          display: 'flex',
          flexWrap: 'wrap',
        }}>
        {Object.keys(props).map(key => (
          <li key={key}>
            <pre>{key}: {JSON.stringify(props[key])}</pre>
          </li>
        ))}
      </Box>
    </>
  )
}

/*
// pragma
export const jsxEdit = (type, props, ...children) => {
  console.log('edit pragma', type, props)
  return React.createElement(React.Fragment, null,
    React.createElement(Editor, { type, props, children }),
    mdx(type, props, ...children)
  )
}
*/

export default props => {
  return (
    <Provider>
      <BlocksProvider theme={theme}>
        <pre>editable prototype</pre>
        <Editor />
        <Header />
        <Banner />
        <Intro />
        <Features />
        <Cards />
      </BlocksProvider>
    </Provider>
  )
}
