import React from 'react';
import Tweet from '../Tweet'

export default class extends React.Component {
  getTweetsDOM() {
    const tweets = this.props.tweets;
    return tweets.map((tweet) => {
      <Tweet
        screenName={tweet.user.screen_name}
        text={tweet.text}
      />
    });
  }

  render() {
    return (
      <div className="tweetList">
        {this.getTweetsDOM()}
      </div>
    );
  }
}
