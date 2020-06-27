import { FC, ReactElement } from 'react';
import { InputProps } from '../Input/input';
interface DataSourceObject {
    value: string;
}
export declare type DataSourceType<T = {}> = T & DataSourceObject;
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
export declare const AutoComplete: FC<AutoCompleteProps>;
export default AutoComplete;
