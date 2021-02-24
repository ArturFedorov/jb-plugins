import React, { FunctionComponent } from 'react';
import styles from './plugin-form.module.scss';
import { Input } from '../../common/input/Input';
import { Button } from '../../common/button/Button';
import { ButtonType } from '../../common/button/ButtonType';

export const PluginForm: FunctionComponent = () => {
  const onChange = (val: string) => console.log(val);
  return (
    <form className={styles.pluginForm}>
      <div>
        <label>Name</label>
        <Input withBorder={true} onChange={onChange} />
      </div>
      <div>
        <label>Author name</label>
        <Input withBorder={true} onChange={onChange} />
      </div>
      <div>
        <label>Icon URL</label>
        <Input withBorder={true} onChange={onChange} />
      </div>
      <div>
        <Button type={ButtonType.ACTION}>Add plugin</Button>
        <Button type={ButtonType.DEFAULT}>Cancel</Button>
      </div>
    </form>
  );
};
