import React from "react";
import * as S from "./style";
import ThumbnailImg from "../../assets/image/community/exthumbnail.png";

const Hotissue = () => {
  return (
    <>
      <S.CardWrapper>
        <S.Thumbnail>
          {/* <img src={ThumbnailImg} alt="Thumbnail" /> */}
        </S.Thumbnail>
        <S.Title>
          커뮤니티에 글 처음써봐요 <br></br> 인사오지게 박습니다~
        </S.Title>
        <S.Contents>
          글을 이렇게 쓰면 되는건지 알고싶어요. 왜냐하면 저는 커뮤니티에 글을
          처음 써보기 때문이죠. 그런데 여기 불만이 있으시다면, 저한테 직접
          말씀을 해주세요. 01062842992 전화해서 만나요. 사실 다 농담입니다. 모두
          행복한 하루보내세요~~
        </S.Contents>
      </S.CardWrapper>
    </>
  );
};

export default Hotissue;
