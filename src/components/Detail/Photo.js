import React from "react";
import styled from "styled-components";
import {
  AiOutlineHeart,
  AiFillHeart,
  AiOutlineExclamationCircle,
} from "react-icons/ai";
import {useState} from "react";
import Declare from "../modal/Declare";
import {useDispatch, useSelector} from "react-redux";
import {useEffect} from "react";
import {
  LIKE_PHOTO_REQUEST,
  UNLIKE_PHOTO_REQUEST,
} from "../../reducer/photo/actions";

const ImageContainer = styled.div`
  width: 100%;
  height: 100%;
  position: relative;
  img {
    border-radius: 10px;
    max-width: 100%;
    max-height: 360px;
  }
`;
export const IconButton = styled.div`
  position: absolute;
  bottom: 10px;
  right: 0;
  display: flex;
  justify-content: flex-end;
  gap: 40px;
  article {
    cursor: pointer;
    font-size: 20px;
    display: flex;
    align-items: center;
    i {
      color: #ed8074;
    }
  }
`;

export default function Photo({img, userId}) {
  const dispatch = useDispatch();
  const {declarePhotoSuccess} = useSelector((state) => state.photo);
  const [open, setOpen] = useState(false);
  const onChangeOpen = () => {
    setOpen(false);
  };
  const onLike = (e) => {
    e === 0
      ? dispatch({type: UNLIKE_PHOTO_REQUEST, data: {photoId: img.id, userId}})
      : dispatch({type: LIKE_PHOTO_REQUEST, data: {photoId: img.id, userId}});
  };
  useEffect(() => {
    declarePhotoSuccess && alert(declarePhotoSuccess);
    onChangeOpen();
  }, [declarePhotoSuccess]);
  return (
    <ImageContainer>
      <img src={`http://localhost:3030/${img.image_src}`} alt={img.image_src} />
      <IconButton>
        <article>
          <i>
            {img.Likers && userId ? (
              img.Likers.find((v) => v.id === userId) ? (
                <AiFillHeart onClick={() => onLike(0)} />
              ) : (
                <AiOutlineHeart onClick={() => onLike(1)} />
              )
            ) : (
              <AiOutlineHeart />
            )}
          </i>
          <span>{img.Likers && img.Likers.length}</span>
        </article>

        {userId && (
          <article onClick={() => setOpen(true)}>
            <i>
              <AiOutlineExclamationCircle />
            </i>
            <span>신고</span>
          </article>
        )}
        {open && (
          <Declare
            alreadyDeclare={declarePhotoSuccess}
            open={open}
            close={onChangeOpen}
            photoId={img.id}
            header="p"
          />
        )}
      </IconButton>
    </ImageContainer>
  );
}
