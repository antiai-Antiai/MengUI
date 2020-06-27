import React, { FC, useState, ChangeEvent, KeyboardEvent, ReactElement, useEffect, useRef } from 'react'
import classNames from 'classnames'
import Input, { InputProps } from '../Input/input'
import Icon from '../Icon/icon'
import useDebounce from '../../hooks/useDebounce'
import useClickOutside from '../../hooks/useClickOutside'
interface DataSourceObject {
  value: string;
}
export type DataSourceType<T = {}> = T & DataSourceObject
export interface AutoCompleteProps extends Omit<InputProps, 'onSelect'> {
  /**数据过滤函数,用户可定义要显示的下拉条目数据 */
  fetchSuggestions: (str: string) => DataSourceType[] | Promise<DataSourceType[]>;
  /**选定条目后触发函数，用户选定条目，按下回车键之后触发的数据*/
  onSelect?: (item: DataSourceType) => void;
  /**自定义模版。用户可以自定义下拉框的模版*/
  renderOption?: (item: DataSourceType) => ReactElement;
}

/**
 * autoComplete 自动不全组件，可用于同步或异步数据不全功能。
 * 
 * ~~~js
 * // 这样引用
 * import { autoComplete } from 'mengqu-ui'
 * ~~~
 * 支持 HTMLInput 的所有基本属性 
 * ~~~js
 * <AutoComplete 
      fetchSuggestions={handleFetch}
      onSelect={action('selected')}
      //renderOption={renderOption}
    />

  const lakers = ['bradley', 'pope', 'caruso', 'cook', 'cousins',
  'james', 'AD', 'green', 'howard', 'kuzma', 'McGee', 'rando']

  const handleFetch = (query: string) => {
    return lakers.filter(name => name.includes(query)).map(name => ({value: name}))
  }
 * ~~~
 */
export const AutoComplete: FC<AutoCompleteProps> = (props) => {
  const {
    fetchSuggestions,
    onSelect,
    value,
    renderOption,
    ...restProps
  } = props

  const [ inputValue, setInputValue ] = useState(value as string)
  const [ suggestions, setSugestions ] = useState<DataSourceType[]>([])
  const [ loading, setLoading ] = useState(false)
  const [ showDropdown, setShowDropdown] = useState(false)
  const [ highlightIndex, setHighlightIndex] = useState(-1)
  const triggerSearch = useRef(false)
  const componentRef = useRef<HTMLDivElement>(null)
  const debouncedValue = useDebounce(inputValue, 300)
  useClickOutside(componentRef, () => { setSugestions([])})
  useEffect(() => {
    if (debouncedValue && triggerSearch.current) {
      setSugestions([])
      const results = fetchSuggestions(debouncedValue)
      if (results instanceof Promise) {
        setLoading(true)
        results.then(data => {
          setLoading(false)
          setSugestions(data)
          if (data.length > 0) {
            setShowDropdown(true)
          }
        })
      } else {
        setSugestions(results)
        setShowDropdown(true)
        if (results.length > 0) {
          setShowDropdown(true)
        } 
      }
    } else {
      setShowDropdown(false)
    }
    setHighlightIndex(-1)
  }, [debouncedValue, fetchSuggestions])
  const highlight = (index: number) => {
    if (index < 0) index = 0
    if (index >= suggestions.length) {
      index = suggestions.length - 1
    }
    setHighlightIndex(index)
  }
  const handleKeyDown = (e: KeyboardEvent<HTMLInputElement>) => {
    switch(e.keyCode) {
      case 13:
        if (suggestions[highlightIndex]) {
          handleSelect(suggestions[highlightIndex])
        }
        break
      case 38:
        highlight(highlightIndex - 1)
        break
      case 40:
        highlight(highlightIndex + 1)
        break
      case 27:
        setShowDropdown(false)
        break
      default:
        break
    }
  }
  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value.trim()
    setInputValue(value)
    triggerSearch.current = true
  }
  const handleSelect = (item: DataSourceType) => {
    setInputValue(item.value)
    setShowDropdown(false)
    if (onSelect) {
      onSelect(item)
    }
    triggerSearch.current = false
  }
  const renderTemplate = (item: DataSourceType) => {
    return renderOption ? renderOption(item) : item.value
  }
  const generateDropdown = () => {
    return (
        <ul className="meng-suggestion-list">
          { loading &&
            <div className="suggstions-loading-icon">
              <Icon icon="spinner" spin/>
            </div>
          }
          {suggestions.map((item, index) => {
            const cnames = classNames('suggestion-item', {
              'is-active': index === highlightIndex
            })
            return (
              <li key={index} className={cnames} onClick={() => handleSelect(item)}>
                {renderTemplate(item)}
              </li>
            )
          })}
        </ul>
    )
  }
  return (
    <div className="meng-auto-complete" ref={componentRef}>
      <Input
        value={inputValue}
        onChange={handleChange}
        onKeyDown={handleKeyDown}
        {...restProps}
      />
      {generateDropdown()}
    </div>
  )
}

export default AutoComplete;

