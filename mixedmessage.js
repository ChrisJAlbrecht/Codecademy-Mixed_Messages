const message = [ "Living the dream — yours seems smaller though.", "Better now that you’ve graced me with that groundbreaking question.", "Thriving, but don’t worry, you’ll catch up someday.", "Fantastic. I know, shocking considering who I’m talking to.", "Surviving — unlike your conversation skills.", "Great! But let’s focus on you, since you clearly want attention.", "Amazing. I’d explain, but I don’t want to overwhelm you.", "Doing well, thanks. I assume you asked by accident.", "Perfectly fine — though your timing could use work.", "Wonderful. But enough about me, how’s your talent for small talk?" ];

mixedMessage = () => {
  const randomIndex = Math.floor(Math.random() * 10);
  return randomIndex;
}

console.log("Hey, how are you");
console.log(message[mixedMessage()]);