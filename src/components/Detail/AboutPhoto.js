import React from "react";
import styled from "styled-components";

const InfoBox = styled.article`
  padding-bottom: 80px;
  margin-bottom: 40px;
  border-bottom: 3px solid gray;
  span {
    text-align: justify;
    text-indent: 10px;
    display: inline;
    line-height: 1.5;
  }
`;
export default function AboutPhoto() {
  return (
    <InfoBox>
      <span>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec suscipit
        massa a dolor commodo, ut ultricies enim placerat. Praesent suscipit
        urna id odio tincidunt convallis. Nunc viverra volutpat magna a gravida.
        Suspendisse tincidunt auctor quam eu sodales. Duis consectetur laoreet
        odio in malesuada. Nullam sollicitudin ligula lectus, nec tincidunt elit
        bibendum ornare. Nunc pharetra, nunc fringilla pharetra semper, tellus
        mi imperdiet arcu, a porta risus nulla vitae mi. Vestibulum at varius
        lacus. Nunc ante lectus, eleifend sit amet ultrices vel, viverra ac
        justo. Vivamus pulvinar dolor elementum enim vulputate, at egestas risus
        fringilla. Class aptent taciti sociosqu ad litora torquent per conubia
        nostra, per inceptos himenaeos. In non lacus ultrices, egestas nulla
        quis, dignissim augue. Pellentesque vitae scelerisque eros. Suspendisse
        nunc ligula, convallis at enim sed, placerat euismod justo. Pellentesque
        egestas tincidunt ex, sit amet facilisis magna tristique at.
        <br /> Morbi lacinia lectus lorem, sed accumsan risus malesuada eu.
        Donec sed condimentum risus. In vel pulvinar magna. Vestibulum non
        ultricies tortor, quis imperdiet tellus. Nullam eu bibendum metus. Morbi
        commodo eget nulla at sollicitudin. Etiam placerat libero quis odio
        pulvinar accumsan. Curabitur scelerisque sapien vel felis viverra
        pretium. Phasellus nec mi diam. In erat quam, porttitor ac augue vitae,
        congue interdum eros. Ut neque lacus, dictum a magna vitae,
        <br /> dignissim gravida eros. Mauris aliquet tempor eros sed ultrices.
        <br /> Ut commodo vel lectus vel dignissim. Aliquam feugiat felis sed
        dui laoreet, sit amet eleifend arcu faucibus. Fusce pulvinar, ipsum sit
        amet luctus volutpat, mi nunc lacinia lectus, interdum efficitur nisi
        sapien eget elit. Maecenas molestie sapien id ipsum dictum, et imperdiet
        diam pulvinar. Proin massa urna, egestas in orci vel, pulvinar iaculis
        magna. Nunc a libero ullamcorper leo mollis facilisis ac in dui.
        <br /> Quisque lobortis nec augue eget dignissim. Sed mollis risus nec
        ultricies porttitor. Duis vulputate at eros fringilla sollicitudin. Duis
        gravida, est quis gravida suscipit, lacus purus dictum est, quis
        vestibulum leo neque a massa. Curabitur placerat, ligula ut posuere
        sagittis, lacus orci dapibus turpis,
        <br /> a finibus metus ex vitae augue. Duis nec sodales erat. Etiam ac
        tortor pretium, fringilla ante eu, eleifend enim. Curabitur nec eleifend
        quam. Cras mollis dapibus magna, <br />
        vitae aliquam nibh consectetur sit amet. Vestibulum eget nisl ipsum.
        Morbi sollicitudin ex sollicitudin mi aliquet vehicula. Praesent maximus
        lorem arcu, vitae molestie eros feugiat nec. Etiam consequat felis non
        lectus venenatis mattis. In vitae bibendum justo. <br />
        Aenean porttitor ipsum vel nisi aliquam, a efficitur orci vehicula.{" "}
        <br />
        Aenean cursus nisi quis justo gravida, eu fermentum ipsum varius.
        Integer volutpat neque vitae lectus condimentum,
        <br /> vel maximus risus consectetur. Pellentesque ut aliquet sem, vel
        venenatis quam. Vestibulum eros orci, posuere ut sollicitudin at, <br />
        pulvinar eu eros. Cras egestas ex nec fringilla euismod. Sed mollis
        lorem eu massa commodo, sit amet laoreet ante scelerisque.
      </span>
    </InfoBox>
  );
}
