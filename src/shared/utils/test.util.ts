import { IPlugin } from '../interfaces/models/IPlugin';

export class TestUtil {
  static mockPlugin(i: number): IPlugin {
    return {
      id: `${i}---${new Date().getSeconds()}`,
      name: `Component ${i}`,
      downloads: 10121 + i,
      date: new Date().toString(),
      author: `Author Name ${i}`,
      rating: (i % 5) + 0.3,
      description: 'Long description random text',
      icon: 'icon',
      fullDescription:
        'Long description random text Long description random text Long description random text'
    };
  }

  static mockPlugins(numberOfPlugins: number) {
    const plugins = [];
    for (let i = 0; i < numberOfPlugins; i++) {
      plugins.push(this.mockPlugin(i));
    }

    return plugins;
  }
}
