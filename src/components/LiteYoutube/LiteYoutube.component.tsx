import React from 'react';
import LiteYouTubeEmbed from 'react-lite-youtube-embed';
import 'react-lite-youtube-embed/dist/LiteYouTubeEmbed.css';
import { YoutubeEmbed } from './LiteYoutube.styles';

type Props = {
  id: string;
  title: string;
};

const LiteYoutube = (props: Props) => {
  const { id, title } = props;
  return (
    <YoutubeEmbed>
      <LiteYouTubeEmbed id={id} title={title} />
    </YoutubeEmbed>
  );
};

export default LiteYoutube;
