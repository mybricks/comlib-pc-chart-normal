import { Data, SubTypeEnum } from '../constants';
import BaseEditor from './baseEditor';
import { getLegendEditor } from '../../utils/editor';

export default {
  '@init'({ style }: EditorResult<Data>) {
    style.height = 400;
    style.width = '100%';
  },
  '@resize': {
    options: ['height', 'width']
  },
  ':root': ({}: EditorResult<Data>, cate0: any) => {
    cate0.title = '常规';
    cate0.items = [
      ...BaseEditor,
      {
        ...getLegendEditor(),
        ifVisible: ({ data }: EditorResult<Data>) => {
          return data.subType !== SubTypeEnum.Default;
        }
      }
    ];

    return { title: '雷达图' };
  }
};
