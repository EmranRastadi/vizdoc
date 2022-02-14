import { ReactMic } from 'react-mic';
import React, { useState } from 'react';
import { AiOutlineClose, AiOutlineSend } from 'react-icons/ai';
import { FiTrash2 } from 'react-icons/fi';
import { BsFillStopFill } from 'react-icons/bs';
import { Container, ButtonContainer } from './style';

import { RecordButton, VoiceActionButton } from '../../atoms';
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
    console.log(7777777, recordedBlob.blobURL);

    setVoice(recordedBlob);
  }

  function onClose() {
    setRecorder(false);
    setVoice(null);
    setState({ record: false });
  }

  function sendSound() {
    props.selectedFile(voice);
  }

  return (
    <Container className={recorder ? 'active' : 'false'}>
      {voice && doAction === true ? (
        <audio src={voice?.blobURL} controls="controls" type="audio/mp3" />
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
              <AiOutlineSend onClick={() => sendSound()} />
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
