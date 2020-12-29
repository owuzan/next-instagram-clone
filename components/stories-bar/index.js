import React from 'react'
import './style.scss'
import StoryItem from '../story-item'

export default function StoriesBar() {
    return (
        <div className="stories-bar">
            <div className="stories-inner">
                <ul className="stories">
                    <StoryItem />
                    <StoryItem username="suleyman" src="suleyman.jpg" />
                    <StoryItem username="musto" src="mustafa.jpg" />
                    <StoryItem username="erkanke" src="erkan.jpg" />
                    <StoryItem username="tahirbaba" src="serdar.jpg" />
                    <StoryItem username="gamzelii" src="ivana.jpg" />
                </ul>
            </div>
        </div>
    )
}
