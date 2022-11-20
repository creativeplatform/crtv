import { Player } from '@livepeer/react';
import Image from 'next/image';
import * as React from 'react';
 
import scaryGaryPoster from '../../../public/images/scarygaryshoe.png';
 
const PosterImage = () => {
  return (
    <Image
      src={scaryGaryPoster}
      alt="Creative Logo"
      layout="fill"
      objectFit="cover"
      priority
      placeholder="blur"
    />
  );
};
 
const playbackId =
  'bafybeieoova5cenwcyvwpnqdi537dcdimjhsvsmy7etw27fymxqe2b4pgu';
 
export function Livepeer() {
  return (
    <Player
      title="Scary Garys & Converse Unboxing"
      playbackId={playbackId}
      loop
      showTitle={true}
      showLoadingSpinner={true}
      muted
      poster={<PosterImage />}
      showPipButton
    />
  );
}