// =======================================================
//  SITLA WEDDING TREASURE HUNT - GAME DATA
//  This is the only file you need to edit!
// =======================================================

// --- 1. Team Codes & Names ---
// Maps the short, easy-to-type code to the full team name.
const teamCodeMap = {
  'tmm': 'team mustard missile',
  'raw': 'team rawmance',
  'zio': 'team zoom-in zoom-out',
  'wwt': 'team what was that?',
  'tfc': 'team tax-free cricket'
};

// --- 2. Clue Routes & Data ---
// This is the "brain" of the game. Each team has a unique, shuffled path.
// - 'location': The simple ID for the physical spot where the QR code is.
// - 'clue': The riddle for that scene.
// - 'letter': The letter for the final secret word (SNOOZE).
// - 'next': The full name of the next physical location to guide the players.
// - 'photo': Use 1 or 2 to trigger a photo task.

const teamRoutes = {
  
  'team mustard missile': [
    { location: 'lounge',  clue: 'I’m a tale of rebirth, where a 70s star and his love meet a fiery end. My title is a prayer for tranquility, said not once, but twice.', letter: 'O', next: 'Big Tree / Breakfast Area' },
    { location: 'tree',    clue: 'A girl in white, a mandolin tune, a stern father who makes her swoon. She runs through fields of yellow flowers to catch a train in the final hours.', letter: 'S', next: 'Estate Suite' },
    { location: 'suite',   clue: 'In ‘73, a chain of light put a brooding cop into the spotlight. He was an angry young man in khaki, defining a superstar’s legacy.', letter: 'Z', next: 'Dining Area', photo: 2 },
    { location: 'dining',  clue: 'A journalist becomes a leader for just one day, to clean up the system and show the way. With a mustache and a mission, he took a stand against all corruption.', letter: 'N', next: 'Entrance Gate' },
    { location: 'gate',    clue: 'My stories are about families, feuds, and fate. I’m known for dramatic zooms and the love of a single letter, starting with K.', letter: 'E', next: 'Orchard' },
    { location: 'orchard', clue: 'A tragic hero, a stolen bride, in a rustic world where loyalties divide. This film is Shakespeare’s Othello retold, a gritty story, brave and bold.', letter: 'O', next: 'Finish Line (Game Master)', photo: 1 }
  ],

  'team rawmance': [
    { location: 'dining',  clue: 'A journalist becomes a leader for just one day, to clean up the system and show the way. With a mustache and a mission, he took a stand against all corruption.', letter: 'N', next: 'Entrance Gate' },
    { location: 'gate',    clue: 'My stories are about families, feuds, and fate. I’m known for dramatic zooms and the love of a single letter, starting with K.', letter: 'E', next: 'Orchard' },
    { location: 'orchard', clue: 'A tragic hero, a stolen bride, in a rustic world where loyalties divide. This film is Shakespeare’s Othello retold, a gritty story, brave and bold.', letter: 'O', next: 'Lounge / Fire Pit', photo: 1 },
    { location: 'lounge',  clue: 'In ‘73, a chain of light put a brooding cop into the spotlight. He was an angry young man in khaki, defining a superstar’s legacy.', letter: 'Z', next: 'Library', photo: 2 },
    { location: 'library', clue: 'A girl in white, a mandolin tune, a stern father who makes her swoon. She runs through fields of yellow flowers to catch a train in the final hours.', letter: 'S', next: 'Estate Suite' },
    { location: 'suite',   clue: 'I’m a tale of rebirth, where a 70s star and his love meet a fiery end. My title is a prayer for tranquility, said not once, but twice.', letter: 'O', next: 'Finish Line (Game Master)' }
  ],

  'team zoom-in zoom-out': [
    { location: 'gate',    clue: 'In ‘73, a chain of light put a brooding cop into the spotlight. He was an angry young man in khaki, defining a superstar’s legacy.', letter: 'Z', next: 'Lounge / Fire Pit', photo: 2 },
    { location: 'lounge',  clue: 'A tragic hero, a stolen bride, in a rustic world where loyalties divide. This film is Shakespeare’s Othello retold, a gritty story, brave and bold.', letter: 'O', next: 'Dining Area', photo: 1 },
    { location: 'dining',  clue: 'A girl in white, a mandolin tune, a stern father who makes her swoon. She runs through fields of yellow flowers to catch a train in the final hours.', letter: 'S', next: 'Library' },
    { location: 'library', clue: 'My stories are about families, feuds, and fate. I’m known for dramatic zooms and the love of a single letter, starting with K.', letter: 'E', next: 'Estate Suite' },
    { location: 'suite',   clue: 'I’m a tale of rebirth, where a 70s star and his love meet a fiery end. My title is a prayer for tranquility, said not once, but twice.', letter: 'O', next: 'Big Tree / Breakfast Area' },
    { location: 'tree',    clue: 'A journalist becomes a leader for just one day, to clean up the system and show the way. With a mustache and a mission, he took a stand against all corruption.', letter: 'N', next: 'Finish Line (Game Master)' }
  ],

  'team what was that?': [
    { location: 'library', clue: 'A tragic hero, a stolen bride, in a rustic world where loyalties divide. This film is Shakespeare’s Othello retold, a gritty story, brave and bold.', letter: 'O', next: 'Estate Suite', photo: 1 },
    { location: 'suite',   clue: 'I’m a tale of rebirth, where a 70s star and his love meet a fiery end. My title is a prayer for tranquility, said not once, but twice.', letter: 'O', next: 'Lounge / Fire Pit' },
    { location: 'lounge',  clue: 'A journalist becomes a leader for just one day, to clean up the system and show the way. With a mustache and a mission, he took a stand against all corruption.', letter: 'N', next: 'Dining Area' },
    { location: 'dining',  clue: 'A girl in white, a mandolin tune, a stern father who makes her swoon. She runs through fields of yellow flowers to catch a train in the final hours.', letter: 'S', next: 'Big Tree / Breakfast Area' },
    { location: 'tree',    clue: 'My stories are about families, feuds, and fate. I’m known for dramatic zooms and the love of a single letter, starting with K.', letter: 'E', next: 'Orchard' },
    { location: 'orchard', clue: 'In ‘73, a chain of light put a brooding cop into the spotlight. He was an angry young man in khaki, defining a superstar’s legacy.', letter: 'Z', next: 'Finish Line (Game Master)', photo: 2 }
  ],

  'team tax-free cricket': [
    { location: 'suite',   clue: 'My stories are about families, feuds, and fate. I’m known for dramatic zooms and the love of a single letter, starting with K.', letter: 'E', next: 'Library' },
    { location: 'library', clue: 'A journalist becomes a leader for just one day, to clean up the system and show the way. With a mustache and a mission, he took a stand against all corruption.', letter: 'N', next: 'Entrance Gate' },
    { location: 'gate',    clue: 'I’m a tale of rebirth, where a 70s star and his love meet a fiery end. My title is a prayer for tranquility, said not once, but twice.', letter: 'O', next: 'Big Tree / Breakfast Area' },
    { location: 'tree',    clue: 'A tragic hero, a stolen bride, in a rustic world where loyalties divide. This film is Shakespeare’s Othello retold, a gritty story, brave and bold.', letter: 'O', next: 'Orchard', photo: 1 },
    { location: 'orchard', clue: 'In ‘73, a chain of light put a brooding cop into the spotlight. He was an angry young man in khaki, defining a superstar’s legacy.', letter: 'Z', next: 'Dining Area', photo: 2 },
    { location: 'dining',  clue: 'A girl in white, a mandolin tune, a stern father who makes her swoon. She runs through fields of yellow flowers to catch a train in the final hours.', letter: 'S', next: 'Finish Line (Game Master)' }
  ]
};
