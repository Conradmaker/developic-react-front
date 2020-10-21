import React from "react";
import {IoIosArrowBack} from "react-icons/io";
import Layout from "../../components/common/Layout";
import Title from "../../components/common/Title";
import InformationForm from "../../components/edit/InformationForm";
import UploadForm from "../../components/edit/UploadForm";
import {AboutContainer} from "../main/AboutPage";
import {PageTitle} from "../photo/DetailPage";

export default function EditPage() {
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
