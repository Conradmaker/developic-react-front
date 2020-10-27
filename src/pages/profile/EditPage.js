import React from "react";
import {useEffect} from "react";
import {IoIosArrowBack} from "react-icons/io";
import {useSelector} from "react-redux";
import Layout from "../../components/common/Layout";
import Title from "../../components/common/Title";
import InformationForm from "../../components/edit/InformationForm";
import UploadForm from "../../components/edit/UploadForm";
import {AboutContainer} from "../main/AboutPage";
import {PageTitle} from "../photo/DetailPage";

export default function EditPage({history}) {
  const {addPhotoSuccess} = useSelector((state) => state.photo);
  const {me} = useSelector((state) => state.user);
  useEffect(() => {
    if (addPhotoSuccess) {
      alert(addPhotoSuccess);
      return history.replace(`/profile/${me.id}`);
    }
  }, [history, addPhotoSuccess, me]);
  return (
    <Layout>
      <AboutContainer>
        <PageTitle>
          <Title>EDIT</Title>
          <span>
            <IoIosArrowBack />
            BACK
          </span>
        </PageTitle>
        <UploadForm />
        <InformationForm />
      </AboutContainer>
    </Layout>
  );
}
