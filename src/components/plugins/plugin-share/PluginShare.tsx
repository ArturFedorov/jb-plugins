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

export const PluginShare: FunctionComponent<{ hidePanel: boolean; onClose: () => void }> = ({
  hidePanel = true,
  onClose
}) => {
  return (
    <div className={classNames(styles.pluginShare, { [styles.pluginShareHidden]: hidePanel })}>
      <div className="container">
        <div className={styles.pluginShareList}>
          <LinkedinShareButton
            url="http://localhost:3000/plugins/60"
            title="123"
            summary="asas"
            source="asas"
          >
            <LinkedinIcon className={styles.pluginShareIcon} />
          </LinkedinShareButton>
          <TwitterShareButton
            url="http://localhost:3000/plugins/60"
            title="123"
            via="123"
            hashtags={['asas']}
            related={['asas']}
          >
            <TwitterIcon className={styles.pluginShareIcon} />
          </TwitterShareButton>
          <FacebookShareButton url="http://localhost:3000/plugins/60" quote="123" hashtag="asas">
            <FacebookIcon className={styles.pluginShareIcon} />
          </FacebookShareButton>
          <TelegramShareButton url="http://localhost:3000/plugins/60" title="123">
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
