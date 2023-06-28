import React from "react";
import { v4 } from "uuid";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faVolumeUp } from "@fortawesome/free-solid-svg-icons";

const Definition = (props) => {
  const playAudio = (audioUrl) => {
    const audio = new Audio(audioUrl);
    audio.play();
  };

  return (
    <div className="flex flex-col items-center h-auto">
      {props.data && props.data[0]?.phonetics.length > 0 && (
        <div className="my-6">
          {props.data[0]?.phonetics.map((phonetic) => (
            <div key={v4()}>
              <span className="text-white font-serif">{phonetic.text}</span>
              {phonetic.audio && (
                <button
                  className="ml-2 text-white font-serif underline"
                  onClick={() => playAudio(phonetic.audio)}
                >
                  <FontAwesomeIcon icon={faVolumeUp} />
                </button>
              )}
            </div>
          ))}
        </div>
      )}

      {props.data && props.data[0]?.meanings.length > 0 ? (
        <div className="flex justify-center text-center text-lg text-white font-serif bg-orange-special p-3 rounded-lg w-2/3">
          <ol>
            {props.data[0]?.meanings.map((meaning) => (
              <li className="text-2xl" key={v4()}>
                {meaning.definitions[0]?.definition}
              </li>
            ))}
          </ol>
        </div>
      ) : (
        <div className="flex justify-center text-center text-lg text-white font-serif bg-orange-special p-3 rounded-lg w-2/3">
          Word is not recorded in our database
        </div>
      )}

      {props.data &&
      props.data[0]?.meanings.length > 0 &&
      props.data[0]?.meanings[0]?.definitions[0]?.example ? (
        <>
          <h2 className="underline text-center text-white font-bold text-lg my-3">
            Examples
          </h2>
          <div className="flex justify-center text-white text-2xl font-serif bg-orange-special p-3 rounded-lg w-2/3 mt-2">
            <ol>
              {props.data[0]?.meanings.map((meaning) => (
                <li className="mb-2 list-none" key={v4()}>
                  {meaning.definitions[0]?.example}
                </li>
              ))}
            </ol>
          </div>
        </>
      ) : null}

      {props.data &&
      props.data[0]?.meanings.length > 0 &&
      (props.data[0]?.meanings[0]?.definitions[0]?.synonyms.length > 0 ||
        props.data[0]?.meanings[0]?.definitions[0]?.antonyms.length > 0) ? (
        <div className="flex justify-center text-center text-lg text-white font-serif bg-orange-special p-3 rounded-xl w-2/3 my-6">
          <ol>
            {props.data[0]?.meanings.map((meaning) => (
              <li className="text-2xl" key={v4()}>
                {meaning.definitions[0]?.synonyms.length > 0 && (
                  <div>
                    <strong>Synonyms:</strong>{" "}
                    {meaning.definitions[0]?.synonyms.join(", ")}
                  </div>
                )}
                {meaning.definitions[0]?.antonyms.length > 0 && (
                  <div>
                    <strong>Antonyms:</strong>{" "}
                    {meaning.definitions[0]?.antonyms.join(", ")}
                  </div>
                )}
              </li>
            ))}
          </ol>
        </div>
      ) : null}
    </div>
  );
};

export default Definition;

// [
//   {
//     "word": "hello",
//     "phonetic": "həˈləʊ",
//     "phonetics": [
//       {
//         "text": "həˈləʊ",
//         "audio": "//ssl.gstatic.com/dictionary/static/sounds/20200429/hello--_gb_1.mp3"
//       },
//       {
//         "text": "hɛˈləʊ"
//       }
//     ],
//     "origin": "early 19th century: variant of earlier hollo ; related to holla.",
//     "meanings": [
//       {
//         "partOfSpeech": "exclamation",
//         "definitions": [
//           {
//             "definition": "used as a greeting or to begin a phone conversation.",
//             "example": "hello there, Katie!",
//             "synonyms": [],
//             "antonyms": []
//           }
//         ]
//       },
//       {
//         "partOfSpeech": "noun",
//         "definitions": [
//           {
//             "definition": "an utterance of ‘hello’; a greeting.",
//             "example": "she was getting polite nods and hellos from people",
//             "synonyms": [],
//             "antonyms": []
//           }
//         ]
//       },
//       {
//         "partOfSpeech": "verb",
//         "definitions": [
//           {
//             "definition": "say or shout ‘hello’.",
//             "example": "I pressed the phone button and helloed",
//             "synonyms": [],
//             "antonyms": []
//           }
//         ]
//       }
//     ]
//   }
// ]
