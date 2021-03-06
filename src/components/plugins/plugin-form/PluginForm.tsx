import React, { FunctionComponent, useEffect } from 'react';
import { Controller, useForm } from 'react-hook-form';
import classNames from 'classnames';
import { connect } from 'react-redux';
import { ActionCreatorWithPayload } from '@reduxjs/toolkit';
import { useHistory } from 'react-router-dom';
import styles from './plugin-form.module.scss';
import input from '../../../styles/components/input.module.scss';
import textarea from '../../../styles/components/textarea.module.scss';
import { Input } from '../../common/input/Input';
import { Button } from '../../common/button/Button';
import { setPlugin } from '../../../store/features/plugins';
import { INewPlugin, IPlugin } from '../../../shared/interfaces/models/IPlugin';
import { DefaultsUtil } from '../../../shared/utils/defaults.util';
import { addPlugin } from '../../../store/features/plugins/thunkActions';
import { validURIRegExp } from '../../../shared/utils/format-util/format.util';

const PluginForm: FunctionComponent<{
  addPluginConnect: (newPlugin: INewPlugin) => void;
  setPluginConnect: ActionCreatorWithPayload<IPlugin, string>;
}> = ({ addPluginConnect, setPluginConnect }) => {
  const { control, handleSubmit, errors } = useForm();
  const plugin = { ...DefaultsUtil.defaultPlugin };
  const history = useHistory();

  useEffect(() => {
    return () => {
      setPluginConnect(DefaultsUtil.defaultPlugin);
    };
  }, [setPluginConnect]);

  const submitPluginForm = () => {
    addPluginConnect(plugin);
  };

  const goToMain = () => history.push('/');

  const onValueChange = (value: string, key: string) => {
    plugin[key] = value;
    setPluginConnect(plugin);
  };

  return (
    <form className={styles.pluginForm} onSubmit={handleSubmit(submitPluginForm)}>
      <div className={styles.pluginFormSection}>
        <label className={styles.pluginFormLabel}>Name</label>
        <Controller
          name="name"
          control={control}
          defaultValue={''}
          rules={{ required: true, maxLength: 32 }}
          render={({ onChange, value }) => (
            <Input
              name="name"
              value={value}
              placeholder="Plugin name"
              onChange={(event) => {
                onChange(event);
                onValueChange(event, 'name');
              }}
              withError={errors.name}
            />
          )}
        />
        {errors.name && errors.name.type === 'required' && (
          <p className="is-caption is-error-text">Name is required</p>
        )}

        {errors.name && errors.name.type === 'maxLength' && (
          <p className="is-caption is-error-text">Name is maximum 32 characters</p>
        )}
      </div>
      <div className={styles.pluginFormSection}>
        <label className={styles.pluginFormLabel}>Author name</label>
        <Controller
          name="author"
          control={control}
          defaultValue={''}
          rules={{ required: true }}
          render={({ onChange, value }) => (
            <Input
              name="author"
              value={value}
              placeholder="Author name"
              onChange={(event) => {
                onChange(event);
                onValueChange(event, 'author');
              }}
              withError={errors.author}
            />
          )}
        />

        {errors.author && <p className="is-caption is-error-text">Author is required</p>}
      </div>
      <div className={styles.pluginFormSection}>
        <label className={styles.pluginFormLabel}>Icon</label>
        <Controller
          name="icon"
          control={control}
          defaultValue={''}
          rules={{ required: true, pattern: validURIRegExp }}
          render={({ onChange, value }) => (
            <Input
              type="url"
              name="icon"
              value={value}
              placeholder="URL to an Icon"
              onChange={(event) => {
                onChange(event);
                onValueChange(event, 'icon');
              }}
              withError={errors.icon}
            />
          )}
        />

        {errors.icon && errors.icon.type === 'required' && (
          <p className="is-caption is-error-text">Icon url is required</p>
        )}

        {errors.icon && errors.icon.type === 'pattern' && (
          <p className="is-caption is-error-text">Url must be valid</p>
        )}
      </div>
      <div className={styles.pluginFormSection}>
        <label className={styles.pluginFormLabel}>Description</label>
        <Controller
          name="description"
          control={control}
          defaultValue={''}
          render={({ onChange, value }) => (
            <div className={input.inputWrapper}>
              <textarea
                value={value}
                placeholder="Optional"
                className={classNames(input.input, textarea.textarea)}
                onChange={(event) => {
                  onChange(event.target.value);
                  onValueChange(event.target.value, 'description');
                }}
              />
            </div>
          )}
        />
      </div>
      <div>
        <Button action onClick={handleSubmit(submitPluginForm)}>
          Add plugin
        </Button>
        <Button onClick={goToMain}>Cancel</Button>
      </div>
    </form>
  );
};

const mapDispatchToProps = {
  addPluginConnect: addPlugin,
  setPluginConnect: setPlugin
};

export default connect(undefined, mapDispatchToProps)(PluginForm);
