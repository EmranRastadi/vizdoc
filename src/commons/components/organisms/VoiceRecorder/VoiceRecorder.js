import { ReactMic } from 'react-mic';
import React, { useState } from 'react';
import { AiOutlineClose, AiOutlineSend } from 'react-icons/ai';
import { FiTrash2 } from 'react-icons/fi';
import { BsFillStopFill } from 'react-icons/bs';
import { Container, ButtonContainer } from './style';
import { Howl, Howler } from 'howler';
import { Player, RecordButton, VoiceActionButton } from '../../atoms';
import ReactPlayer from 'react-player';
import { AudioPlayer } from '../../molecules';
export default function VoiceRecorder(props) {
  const { recorder, setRecorder } = props;
  const [isPlaying, setIsPlaying] = useState(false);
  const [state, setState] = useState({
    record: false,
  });

  const [voice, setVoice] = useState(null);
  const [doAction, setDoAction] = useState(false);

  const startRecording = () => {
    setState({ record: true });
    doAction(false);
  };

  const stopRecording = () => {
    setState({ record: false });
  };

  function onData(recordedBlob) {
    setVoice(recordedBlob);
  }

  function onStop(recordedBlob) {
    setVoice(recordedBlob);
  }

  function onClose() {
    setRecorder(false);
    setVoice(null);
    setState({ record: false });
  }

  let BASE64_MARKER = ';base64,';

  function convertDataURIToBinary(dataURI) {
    let base64Index = dataURI.indexOf(BASE64_MARKER) + BASE64_MARKER.length;
    let base64 = dataURI.substring(base64Index);
    let raw = window.atob(base64);
    let rawLength = raw.length;
    let array = new Uint8Array(new ArrayBuffer(rawLength));

    let i;
    for (i = 0; i < rawLength; i++) {
      array[i] = raw.charCodeAt(i);
    }
    return array;
  }

  function playSound() {
    // setIsPlaying(!isPlaying);
    let binary = convertDataURIToBinary(voice);
    let blob = new Blob([binary], { type: 'audio/ogg' });
    var blobUrl = URL.createObjectURL(blob);

    return blobUrl;
    // console.log(333333, blobUrl);
    // let song = new Audio(blobUrl);

    // if (isPlaying === true) {
    //   song.play();
    // } else {
    //   song.pause();
    // }
  }

  console.log(voice);
  return (
    <Container className={recorder ? 'active' : 'false'}>
      {/* {voice && doAction === true ? (
        <audio src={URL.createObjectURL(voice)} controls />
      ) : null} */}

      {state.record === false && voice ? (
        <AudioPlayer controls="controls" src={voice?.blobURL} type="audio/mp3" />
      ) : null}

      <ReactMic
        record={state.record}
        className={
          voice && doAction === true ? 'sound-wave deactivate' : 'sound-wave'
        }
        onStop={onStop}
        onData={onData}
        strokeColor="#ffffff"
        backgroundColor="#27a7d1"
        visualSetting="sinewave" // defaults -> "sinewave".  Other option is "frequencyBars"
        mimeType="audio/mp3" // defaults -> "audio/webm".  Set to "audio/wav" for WAV or "audio/mp3" for MP3 audio format (available in React-Mic-Gold)
        bitRate={256000} // defaults -> 128000 (128kbps).  React-Mic-Gold only.
        sampleRate={96000} // defaults -> 44100 (44.1 kHz).  It accepts values only in range: 22050 to 96000 (available in React-Mic-Gold)
        timeSlice={3000}
      />
      {/* )} */}

      <ButtonContainer className={voice && doAction === true ? 'active' : ''}>
        {state.record === true ? (
          <VoiceActionButton
            className="active"
            onClick={() => {
              setDoAction(true);
              stopRecording();
            }}
          >
            <BsFillStopFill />
          </VoiceActionButton>
        ) : (
          <RecordButton
            onClick={() => {
              setDoAction(false);
              startRecording();
            }}
          />
        )}
        {voice && doAction === true ? (
          <>
            <VoiceActionButton className="active">
              <AiOutlineSend />
            </VoiceActionButton>

            <VoiceActionButton
              className="active"
              onClick={() => {
                setVoice(null);
                setDoAction(false);
                setState({ record: false });
              }}
            >
              <FiTrash2 />
            </VoiceActionButton>

            {/* <Player className="active" onClick={() => playSound()} /> */}

            {/* <VoiceActionButton className="active" onClick={() => onClose()}>
              <AiOutlineClose />
            </VoiceActionButton> */}
          </>
        ) : (
          <>
            <VoiceActionButton>
              <AiOutlineSend />
            </VoiceActionButton>

            <VoiceActionButton onClick={() => onClose()} className="active">
              <AiOutlineClose />
            </VoiceActionButton>
          </>
        )}
      </ButtonContainer>
    </Container>
  );
}
