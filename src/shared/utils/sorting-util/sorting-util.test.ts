import { SortingUtil } from './sorting.util';
import { IPlugin } from '../../interfaces/models/IPlugin';

describe('sorting-util', () => {
  type PartialPlugin = Pick<IPlugin, 'name' | 'id' | 'date'>;
  const plugins: PartialPlugin[] = [
    { name: 'Aplugin', id: '3', date: new Date(2020, 20, 1).toString() },
    { name: 'Bplugin', id: '1', date: new Date(2020, 20, 3).toString() },
    { name: 'Cplugin', id: '2', date: new Date(2020, 20, 2).toString() }
  ];

  it('should array by selected field', () => {
    expect(SortingUtil.sortArrayBy<PartialPlugin>(plugins, 'name', false)).toEqual([
      { name: 'Cplugin', id: '2', date: new Date(2020, 20, 2).toString() },
      { name: 'Bplugin', id: '1', date: new Date(2020, 20, 3).toString() },
      { name: 'Aplugin', id: '3', date: new Date(2020, 20, 1).toString() }
    ]);

    expect(SortingUtil.sortArrayBy<PartialPlugin>(plugins, 'id', false)).toEqual([
      { name: 'Aplugin', id: '3', date: new Date(2020, 20, 1).toString() },
      { name: 'Cplugin', id: '2', date: new Date(2020, 20, 2).toString() },
      { name: 'Bplugin', id: '1', date: new Date(2020, 20, 3).toString() }
    ]);

    expect(SortingUtil.sortArrayBy<PartialPlugin>(plugins, 'date', false)).toEqual([
      { name: 'Aplugin', id: '3', date: new Date(2020, 20, 1).toString() },
      { name: 'Cplugin', id: '2', date: new Date(2020, 20, 2).toString() },
      { name: 'Bplugin', id: '1', date: new Date(2020, 20, 3).toString() }
    ]);
  });
});
