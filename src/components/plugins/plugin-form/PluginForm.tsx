import React, { FunctionComponent, useEffect } from 'react';
import classNames from 'classnames';
import { connect } from 'react-redux';
import { ActionCreatorWithPayload } from '@reduxjs/toolkit';
import styles from './plugin-form.module.scss';
import input from '../../../styles/components/input.module.scss';
import textarea from '../../../styles/components/textarea.module.scss';
import { Input } from '../../common/input/Input';
import { Button } from '../../common/button/Button';
import { ButtonType } from '../../common/button/ButtonType';
import { setPlugin } from '../../../store/features/plugins';
import { INewPlugin, IPlugin } from '../../../shared/interfaces/models/IPlugin';
import { DefaultsUtil } from '../../../shared/utils/defaults.util';
import { addPlugin } from '../../../store/features/plugins/thunkActions';

const PluginForm: FunctionComponent<{
  addPluginConnect: (newPlugin: INewPlugin) => void;
  setPluginConnect: ActionCreatorWithPayload<IPlugin, string>;
}> = ({ addPluginConnect, setPluginConnect }) => {
  const plugin = DefaultsUtil.defaultPlugin;

  useEffect(() => {
    return () => {
      setPluginConnect(DefaultsUtil.defaultPlugin);
    };
  }, [setPluginConnect]);

  const onChange = (key: string, value: string) => {
    plugin[key] = value;
    setPluginConnect(plugin);
  };

  const submitPluginForm = (event: Event) => {
    event.preventDefault();
    addPluginConnect(plugin);
  };

  return (
    <form className={styles.pluginForm}>
      <div className={styles.pluginFormSection}>
        <label className={styles.pluginFormLabel}>Name</label>
        <Input
          required={true}
          maxLength={32}
          placeholder="Plugin name"
          onChange={(value) => onChange('name', value)}
        />
      </div>
      <div className={styles.pluginFormSection}>
        <label className={styles.pluginFormLabel}>Author name</label>
        <Input placeholder="Author name" onChange={(value) => onChange('author', value)} />
      </div>
      <div className={styles.pluginFormSection}>
        <label className={styles.pluginFormLabel}>Icon</label>
        <Input
          type="url"
          placeholder="URL to an Icon"
          onChange={(value) => onChange('icon', value)}
        />
      </div>
      <div className={styles.pluginFormSection}>
        <label className={styles.pluginFormLabel}>Description</label>
        <div className={input.inputWrapper}>
          <textarea
            placeholder="Optional"
            className={classNames(input.input, textarea.textarea)}
            onChange={(event) => onChange('description', event.target.value)}
          />
        </div>
      </div>
      <div>
        <Button type={ButtonType.ACTION} onClick={submitPluginForm}>
          Add plugin
        </Button>
        <Button type={ButtonType.DEFAULT}>Cancel</Button>
      </div>
    </form>
  );
};

const mapDispatchToProps = {
  addPluginConnect: addPlugin,
  setPluginConnect: setPlugin
};

export default connect(undefined, mapDispatchToProps)(PluginForm);
