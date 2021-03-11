import React, { FunctionComponent } from 'react';
import classNames from 'classnames';
import {
  FacebookIcon,
  FacebookShareButton,
  LinkedinShareButton,
  LinkedinIcon,
  TwitterShareButton,
  TwitterIcon,
  TelegramShareButton,
  TelegramIcon
} from 'react-share';
import { CircledCross } from '../../common/icons/CircledCross';
import styles from './plugin-share.module.scss';
import { IPlugin } from '../../../shared/interfaces/models/IPlugin';

export interface IPluginShareProps {
  plugin: IPlugin;
  hidePanel: boolean;
  onClose: () => void;
}

export const PluginShare: FunctionComponent<IPluginShareProps> = ({
  plugin,
  hidePanel = true,
  onClose
}) => {
  return (
    <div className={classNames(styles.pluginShare, { [styles.pluginShareHidden]: hidePanel })}>
      <div className="container">
        <div className={styles.pluginShareList}>
          <LinkedinShareButton
            url={window.location.href}
            title={plugin.name}
            summary={plugin.description}
            source="jb-plugins"
          >
            <LinkedinIcon className={styles.pluginShareIcon} />
          </LinkedinShareButton>
          <TwitterShareButton
            url={window.location.href}
            title={plugin.name}
            via={plugin.description}
            hashtags={['jbplugins', 'jbmarketplace']}
            related={['jet brains']}
          >
            <TwitterIcon className={styles.pluginShareIcon} />
          </TwitterShareButton>
          <FacebookShareButton
            url={window.location.href}
            quote={plugin.name}
            hashtag="jbmarketplace"
          >
            <FacebookIcon className={styles.pluginShareIcon} />
          </FacebookShareButton>
          <TelegramShareButton url={window.location.href} title={plugin.name}>
            <TelegramIcon className={styles.pluginShareIcon} />
          </TelegramShareButton>
          <div className={styles.pluginShareClose} onClick={onClose}>
            <CircledCross width={48} height={48} viewBox="0 0 18 18" fill="#CDCDCD" />
          </div>
        </div>
      </div>
    </div>
  );
};
