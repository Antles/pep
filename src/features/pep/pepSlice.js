import { createSlice } from "@reduxjs/toolkit";

// We will initialize the 4 parts that make up a pep!
// should be in an api someday???
const initialState = {
  pepMessage: "Let's put a pep in your step!",
  copyButton: "Copy!",
  firstPart: [
    "Champ, ",
    "Fact: ",
    "Everybody says ",
    "Dang... ",
    "Check it: ",
    "Just saying... ",
    "Superstar, ",
    "Tiger, ",
    "Self, ",
    "Know this: ",
    "News alert: ",
    "Girl, ",
    "Ace, ",
    "Excuse me but ",
    "Experts agree: ",
    "In my opinion, ",
    "Hear ye, hear ye: ",
    "Okay, listen up: ",
  ],
  secondPart: [
    "the mere idea of you ",
    "your soul ",
    "your hair today ",
    "everything you do ",
    "your personal style ",
    "every thought you have ",
    "that sparkle in your eye ",
    "your presence here ",
    "what you got going on ",
    "the essential you ",
    "your life's journey ",
    "that saucy personality ",
    "your DNA ",
    "that brain of yours ",
    "your choice of attire ",
    "the way you roll ",
    "whatever your secret is, ",
    "all of y'all ",
  ],
  thirdPart: [
    "has serious game ",
    "rains magic, ",
    "deserves the Nobel Prize, ",
    "raises the roof, ",
    "breeds miracles, ",
    "is paying off big time, ",
    "shows mad skills, ",
    "just shimmers, ",
    "is a national treasure, ",
    "gets the party hopping, ",
    "is the next big thing, ",
    "roars like a lion, ",
    "is a rainbow factory, ",
    "is made of diamonds, ",
    "makes birds sing, ",
    "should be taught in school, ",
    "makes my world go 'round, ",
    "is 100% legit, ",
  ],
  fourthPart: [
    "24/7.",
    "can I get an amen?",
    "and that's a fact.",
    "so treat yourself.",
    "you feel me?",
    "that's just science.",
    "would I lie?",
    "for reals.",
    "mic drop.",
    "you hidden gem.",
    "snuggle bear.",
    "period.",
    "can I get an amen?",
    "now let's dance.",
    "high five.",
    "say it again!",
    "according to CNN.",
    "so get used to it.",
  ],
};

export const pepSlice = createSlice({
  name: "pep",
  initialState,
  reducers: {
    getPep: (state) => {
      // Generate the random values for each part of the pep message
      const firstRan = Math.floor(Math.random() * 18);
      const secondRan = Math.floor(Math.random() * 18);
      const thirdRan = Math.floor(Math.random() * 18);
      const fourthRan = Math.floor(Math.random() * 18);

      // set pepMessage to the generated message
      state.pepMessage = `${state.firstPart[firstRan]}${state.secondPart[secondRan]}${state.thirdPart[thirdRan]}${state.fourthPart[fourthRan]}`;
    },
    setCopy: (state) => {
      state.copyButton = "Copied";
    },
  },
});

export const { getPep } = pepSlice.actions;
export default pepSlice.reducer;
