import React from 'react'
import { prefetchPlayer, studioProvider } from '@livepeer/react';
import { Livepeer } from './Livepeer';

const playbackId =
  'bafybeieoova5cenwcyvwpnqdi537dcdimjhsvsmy7etw27fymxqe2b4pgu';

export const getStaticProps = async () => {
    const dehydratedState = await prefetchPlayer(
        { 
            playbackId,
            clearClient: true,
        
        },
        { provider: studioProvider({ apiKey: process.env.LIVEPEER_API_KEY }) },
    );
 
    return {
        props: {
        dehydratedState,
        },
        revalidate: 600,
    };
}

export function Card() {
  return (
    <div className="card grid md:grid-cols-2 lg:card-side bg-base-100 shadow-xl">
        <figure>
            <Livepeer />
        </figure>
        <div className="card-body">
            <h2 className="card-title">New NFT Sneakers released!</h2>
                <div className='md:grid-cols-2'>
                    <p>We&apos;re thrilled to announce our newest product collaboration with Converse. Which is the first-ever footwear to be tokenized on the Ethereum blockchain. (NFT) With endless potential for customization, you can now have a pair of sneakers that are truly unique to you and authenticate your individuality. For more information on how we made this happen, watch this video.</p>
                    <div className="stats stats-vertical md:stats-horizontal shadow">
                        <div className="stat">
                            <div className="stat-title">Views</div>
                            <div className="stat-value">31K</div>
                            <div className="stat-desc">↗︎ 400 (22%)</div>
                        </div>
                        <div className="stat">
                            <div className="stat-title">Stream Rate</div>
                            <div className="stat-value">0.1770 MATIC</div>
                            <div className="stat-actions">
                                <button className="btn btn-sm">Watch Stream</button> 
                            </div>
                        </div>
                    </div>
                </div>
            <div className="card-actions justify-end">
                <button className="btn btn-primary">Collect Video</button>
            </div>
        </div>
    </div>
  )
}
