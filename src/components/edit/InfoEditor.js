import React, {useState} from "react";
import {EditorState, convertToRaw} from "draft-js";
import {Editor} from "react-draft-wysiwyg";
import draftToHtml from "draftjs-to-html";
import styled from "styled-components";

const EditorBox = styled.div`
  width: 100%;
  height: 300px;
  display: flex;
  margin-top: 10px;
  border: 1px solid gray;
  padding-bottom: 100px;
`;
export default function InfoEditor({setAbout}) {
  const [editorState, setEditorState] = useState(EditorState.createEmpty());
  const onEditorStateChange = (e) => {
    setEditorState(e);
    setAbout(draftToHtml(convertToRaw(editorState.getCurrentContent())));
  };
  return (
    <EditorBox>
      <Editor
        editorState={editorState}
        toolbarClassName="toolbarClassName"
        wrapperClassName="wrapperClassName"
        editorClassName="editorClassName"
        onEditorStateChange={onEditorStateChange}
        toolbar={{
          inline: {inDropdown: true},
          list: {inDropdown: true},
          textAlign: {inDropdown: true},
          link: {inDropdown: true},
          history: {inDropdown: true},
        }}
      />
      <textarea
        style={{width: "70%", height: "395px"}}
        disabled
        value={draftToHtml(convertToRaw(editorState.getCurrentContent()))}
      />
    </EditorBox>
  );
}
